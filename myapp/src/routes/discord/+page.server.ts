import type { PageServerLoad } from '../$types.js';

const tempData: {lastFetch: number, data: {approximate_member_count: number, approximate_presence_count: number}} = {lastFetch: 0, data: {approximate_member_count: 0, approximate_presence_count: 0}};

export const load: PageServerLoad = async (event) => {
    const isTooOld = tempData.lastFetch < Date.now() - 1000;
    if (isTooOld) {
        tempData.data = await fetchDCMembers() as typeof tempData.data;
        tempData.lastFetch = Date.now();
    }
    return {data: tempData.data};
};	

async function fetchDCMembers() {
    const url = 'https://discord.com/api/v10/invites/SR75j8RB3u?with_counts=true';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching WRC quote: ${response.statusText}`);
        }
        const data: { approximate_member_count: number; approximate_presence_count: number } =
            await response.json();

        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}