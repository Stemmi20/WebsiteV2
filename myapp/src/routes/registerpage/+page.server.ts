import DataBase from '$lib/server/database';
import type { PageServerLoad } from '../$types.js';

export const load: PageServerLoad = async (event) => {
   const user = await DataBase.users.findUnique({ where: { id: Number(event.cookies.get('userid')) }, select: { username: true } })
    return { user };
};