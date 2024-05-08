import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async (event) => {
    if (event.url.href.includes("login")) return{}
	const token = event.cookies.get('token');
	if (!token) return redirect(307, '/login');

	return {};
};