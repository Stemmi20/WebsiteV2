import { json, error } from '@sveltejs/kit';
import DataBase from '$lib/server/database.js';
import type { RequestHandler } from './$types';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { SECRET } from '$env/static/private';

const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;

function checkPassword(pass:string) {
    return regex.test(pass);
}


const saltRounds = 12;

export const POST: RequestHandler = async (req) => {
	const j = await req.request.json().catch(() => ({}));

	const { password, username } = j;
	if (!password || !username) return error(400, 'No password or username provided');

	if(!checkPassword(password)) return error(400, 'Password is insecure');

	const exists = await DataBase.users.findFirst({ where: { username }, select: { username: true } });
	if (exists) return error(400, 'Username Taken');

	const hashed = await bcrypt.hash(password, saltRounds);
	const user = await DataBase.users.create({
		data: { username, password: hashed },
		select: { id: true },
	});

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
