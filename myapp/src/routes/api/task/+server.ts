import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import DataBase from '$lib/server/database.js';

export const GET: RequestHandler = async (req) => {
	const tasks = await DataBase.task.findMany( { where: { userid:  Number(req.cookies.get('userid')!)}});
	return json(tasks);
};

export const POST: RequestHandler = async (req) => {
	const json = await req.request.json();

	await DataBase.task.create({ data: {...json, userid:  Number(req.cookies.get('userid')!)}});

	return json({ success: true });
};

export const DELETE: RequestHandler = async (req) => {
	const json = await req.request.json();

	DataBase.task.delete({ where: { id: json.taskid } }).then();
	DataBase.users
		.update({
			where: { id: Number(req.cookies.get('userid')!) },
			data: { taskscompleted: { increment: 1 } },
		})
		.then();
	return new Response(null, {status: 202});
};