import {json, error } from '@sveltejs/kit';
import type { RequestHandler } from '../api/login/$types';
import DataBase from '$lib/server/database.js';



export const POST: RequestHandler = async (req) =>  {
	const j = await req.request.json().catch(() => ({}));

	const { firstname, lastname } = j;
	if (!firstname || !lastname) return error(400, 'No First Name or Last Name provided');

    const user = await DataBase.users.update({
        where: { id: Number(req.cookies.get('userid')) },
        data: { lastname, firstname },
    });

    console.log(user)
    console.log(req.cookies.get('userid'))
    console.log(firstname)
    console.log(lastname)

    if (!lastname || !firstname) return json({href:"/registerpage"});
        else return json({href:"/"})
};