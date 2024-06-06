import type { PageServerLoad } from './$types.js';
import { TOKEN } from '$env/static/private';

const token = TOKEN
const id = '860442201262915594'
//318453143476371456
const tempData: {lastFetch: number, data: {id: number, global_name: string, avatar: string}} = {lastFetch: 0, data: {id: 0, global_name: '', avatar: ''}};

export const load: PageServerLoad = async (event) => {
    const isTooOld = tempData.lastFetch < Date.now() - 600000;
    if (isTooOld) {
        tempData.data = await discordUserfetch() as any;
        tempData.lastFetch = Date.now();
    }
    return {data: tempData.data};
};	

async function discordUserfetch() {
    const url = `https://discord.com/api/v9/users/${id}`;
    try {
        const response = await fetch(url, {headers: {
            Authorization: `Bot ${token}`
        }});
        if (!response.ok) {
            throw new Error(`Error fetching WRC quote: ${response.statusText}`);
        }
        const data: { id: number; avatar: string } =
        await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}