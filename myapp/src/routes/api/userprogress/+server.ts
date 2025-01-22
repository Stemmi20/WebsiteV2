import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import DataBase from '$lib/server/database.js';

export const GET: RequestHandler = async (req) => {
	const progress = await DataBase.progress.findUnique({
		where: { id: Number(req.cookies.get('userid')!) },
	});

	return json(progress ?? { id: req.cookies.get('userid'), currentprogress: 0, level: 1 });
};

export const PATCH: RequestHandler = async (req) => {
	const json = await req.request.json();

	await DataBase.progress.upsert({
		where: { id: Number(req.cookies.get('userid')!) },
		create: { ...json, id: Number(req.cookies.get('userid')!) },
		update: json,
	});

	return new Response(null, { status: 202 });
};
