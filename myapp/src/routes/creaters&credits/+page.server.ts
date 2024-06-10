import type { PageServerLoad, RouteParams } from './$types.js';
import { TOKEN } from '$env/static/private';
import type { ServerLoadEvent } from '@sveltejs/kit';
import type { socials } from '@prisma/client';

const token = TOKEN
const ids: string[] = ['860442201262915594', '318453143476371456'];

const tempDatausers: {lastFetch: number, data: {id: string, global_name: string, avatar: string}[]} = {lastFetch: 0, data: []};
const tempDatasocials: {lastFetch: number, data: {userid: string, socials: socials[]}[]} = {lastFetch: 0, data: []};

export const load: PageServerLoad = async (event) => {
    const isTooOld = tempDatausers.lastFetch < Date.now() - 600000;
    if (isTooOld) {
        tempDatausers.data = await Promise.all(ids.map((id ) => discordUserfetch(event, id) as any));
        tempDatausers.lastFetch = Date.now();
    }
    if (isTooOld) {
        tempDatasocials.data = await discordUserSocialsfetch(event) as any;
        tempDatasocials.lastFetch = Date.now();
    }

    return {datausers: tempDatausers.data, datasocials: tempDatasocials.data};
};

async function discordUserfetch(event: ServerLoadEvent<RouteParams, {}, "/creaters&credits">, id: string) {
    const url = `https://discord.com/api/v9/users/${id}`;
    try {
        const response = await event.fetch(url, {headers: {
            Authorization: `Bot ${token}`
        }});
        if (!response.ok) {
            throw new Error(`Error fetching WRC quote: ${response.statusText}`);
        }
        const data: { id: number; avatar: string } = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}
async function discordUserSocialsfetch(event: ServerLoadEvent<RouteParams, {}, "/creaters&credits">) {
    const url = '/api/contributors'
    try {
        const response = await event.fetch(url , { headers: {
            Authorization: `Bot ${token}`
        }});
        if (!response.ok) {
            throw new Error(`Error frtching WRC quote: ${response.statusText}`);
        }
        const data: { id: number; socials: string }[] = await response.json();
        console.log( data)
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}