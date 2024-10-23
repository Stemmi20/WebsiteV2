import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import DataBase from '$lib/server/database';

export const load: PageServerLoad = async (event) => {
	const token = event.cookies.get('token');
	if (!token) return redirect(307, '/login');

	const serverLoad = await DataBase.serverLoad.findMany({
		where: { timestamp: { gt: Date.now() - 900000 } },
	});

	return { serverLoad: serverLoad.map((s) => ({ ...s, timestamp: Number(s.timestamp) })) };
};
