import DataBase from '$lib/server/database';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async (event) => {
	const token = event.cookies.get('token');
	if (!token) return redirect(307, '/login');
	const username = await DataBase.users.findUnique({
		where: { id: Number(event.cookies.get('userid')) },
		select: { username: true },
	});
	const firstname = await DataBase.users.findUnique({
		where: { id: Number(event.cookies.get('userid')) },
		select: { firstname: true },
	});
	const lastname = await DataBase.users.findUnique({
		where: { id: Number(event.cookies.get('userid')) },
		select: { lastname: true },
	});
	return { username, firstname, lastname };
};
