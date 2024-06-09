import { json } from '@sveltejs/kit';
import DataBase from '$lib/server/database.js';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (req) => {
	const contribs = await DataBase.contributers.findMany();
	const users = await DataBase.contributers.findMany({
		where: { userid: { in: contribs.map((c) => c.userid) } },
		select: {
			username: true,
			avatar: true,
			socials: true,
			socialstype: true,
			userid: true,
		},
	});

	return json(
		contribs.map((c) => {
			const user = contribs.find((u) => u.username === c.username);

			return{
				...c,
				username: user?.username,
				avatar: user?.avatar,
				socials: user?.socials.map((s, i) => ({
					type.user?.socialstype[i],
					url: s,
				})),
			};
		})
	);
};

export type Returned = {
	userid: string;
	roles: string[];
	username?: string;
	avatar?: string;
	socials: { type: string; url: string }[];
}[];