import { json } from '@sveltejs/kit';
import DataBase from '$lib/server/database.js';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (req) => {
	const users = await DataBase.contributers.findMany({
		include: {socials:true,support:true}
	}); 
	return json(
		users
	);
};

export type Returned = {
	userid: string;
	roles: string[];
	username?: string;
	avatar?: string;
	socials: { type: string; url: string }[];
}[];