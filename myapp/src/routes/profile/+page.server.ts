import DataBase from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
   const username = await DataBase.users.findUnique({ where: { id: Number(event.cookies.get('userid')) }, select: { username: true } })
   const firstname = await DataBase.users.findUnique({where: { id: Number(event.cookies.get('userid'))}, select: { firstname : true}})
   const lastname = await DataBase.users.findUnique({where: { id: Number(event.cookies.get('userid'))}, select: { lastname: true }})
    return { username, firstname, lastname };
};