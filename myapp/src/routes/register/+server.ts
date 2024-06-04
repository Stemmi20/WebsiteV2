import {json, error } from '@sveltejs/kit';
import type { RequestHandler } from '../api/login/$types';
import DataBase from '$lib/server/database.js';


const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;

function checkPassword(pass:string) {
    return regex.test(pass);
}

export const POST: RequestHandler = async (req) =>  {
	const j = await req.request.json().catch(() => ({}));

	const { password, firstname, lastname } = j;
	if(!checkPassword(password)) return error(400, 'Password is insecure');
	if (!firstname || !lastname) return error(400, 'No First Name or Last Name provided');



    const user = await DataBase.users.update({
        where: { id: Number(req.cookies.get('userid')) },
        data: { lastname, firstname },
    });

    console.log(user)
    console.log(req.cookies.get('userid'))
    console.log(firstname)
    console.log(lastname)

    if (!lastname || !firstname) return json({href:"/register"});
        else return json({href:"/"})
};