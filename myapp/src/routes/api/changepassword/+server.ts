import type { RequestHandler } from './$types';
import DataBase from '$lib/server/database.js';
import bcrypt from 'bcrypt';
import { error, json } from '@sveltejs/kit';

const saltRounds = 12;

export const POST: RequestHandler = async (req) => {


    const j = await req.request.json().catch(() => ({}));

    const { password, newpassword, confirmpassword } = j;

    const user = await DataBase.users.findFirst({
        where: { id: Number(req.cookies.get('userid') ?? 0) },
		select: { password: true, id: true },
	});

	if (!user) return error(400, 'User does not exist');

    const match = await bcrypt.compare(password, user.password);
	if (!match) return error(400, 'Incorrect Password');

    if (newpassword !== confirmpassword) return error(400, 'Passwords do not match');

    const hashed = await bcrypt.hash(newpassword, saltRounds);

    await DataBase.users.update({where:{id:user.id}, data:{password:hashed}})
    

	return json({ success: true });
}