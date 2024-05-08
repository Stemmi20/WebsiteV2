import { json, error } from '@sveltejs/kit';
import DataBase from '$lib/server/database.js';
import type { RequestHandler } from './$types';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { SECRET } from '$env/static/private';

const saltRounds = 2; // insecure, increase to 12 or more when NOT HOSTING ON A RASPBERRY PI

export const POST: RequestHandler = async (req) => {
	const j = await req.request.json().catch(() => ({}));

	const { password, name } = j;
	if (!password || !name) return error(400, 'No password or username provided');

	const exists = await DataBase.users.findFirst({ where: { name }, select: { name: true } });
	if (exists) return error(400, 'Username Taken');

	const hashed = await bcrypt.hash(password, saltRounds);
	const user = await DataBase.users.create({
		data: { name, password: hashed },
		select: { id: true },
	});

	const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: '30m' });
	req.cookies.set('token', token, {
		path: '/',
		sameSite: true,
		httpOnly: true,
		secure: false,
		expires: new Date(Date.now() + 1000 * 60 * 30),
	});

	return json({ success: true });
};
