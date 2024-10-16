// import DataBase from '$lib/server/database';
// import type { LayoutServerLoad } from './$types';
// import { redirect } from '@sveltejs/kit';

// export const load: LayoutServerLoad = async (event) => {
//     if (event.url.href.includes("login")) return{}
// 	if(event.url.href.includes ( 'register' )) return {}

// 	const token = event.cookies.get('token');
// 	if (!token) return redirect(307, '/login');

// 		const user = await DataBase.users.findUnique({ where: { id: Number(event.cookies.get('userid') ?? 0) } })
// 		if (!user?.firstname || !user?.lastname) return redirect(307, '/register');


// 	return {};
// };