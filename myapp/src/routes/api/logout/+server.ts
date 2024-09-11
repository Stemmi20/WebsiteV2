import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async (req) => {
	req.cookies.delete('token', {
		path: '/',
		sameSite: true,
		httpOnly: true,
		secure: false,
	});
	req.cookies.delete('userid', {
		path: '/',
		sameSite: true,
		httpOnly: true,
		secure: false,
	});

	return json({ success: true });
};
