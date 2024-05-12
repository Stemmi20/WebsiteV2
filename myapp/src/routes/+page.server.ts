import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async (event) => {
	const token = event.cookies.get('token');
	if (!token) return redirect(307, '/login');

	return {};
};