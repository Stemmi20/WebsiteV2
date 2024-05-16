import { json, error } from '@sveltejs/kit';
import DataBase from '$lib/server/database.js';
import type { RequestHandler } from './$types';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { SECRET } from '$env/static/private';

export const POST: RequestHandler = async (req) => {
	const j = await req.request.json().catch(() => ({}));

	const { password, name } = j;
	if (!password || !name) return error(400, 'No password or username provided');

	const user = await DataBase.users.findFirst({
		where: { name },
		select: { password: true, id: true },
	});
	if (!user) return error(400, 'User does not exist');

	const match = await bcrypt.compare(password, user.password);
	if (!match) return error(400, 'Incorrect Password');

	const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: '1d' });
	req.cookies.set('token', token, {
		path: '/',
		sameSite: true,
		httpOnly: true,
		secure: false,
		expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
	});
	req.cookies.set('userid', String(user.id) , {
		path: '/',
		sameSite: true,
		httpOnly: true,
		secure: false,
		expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
	});


	return json({ success: true });
};
