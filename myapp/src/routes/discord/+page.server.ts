import type { PageServerLoad } from '../$types.js';

export const load: PageServerLoad = async (event) => {
    
    const data = await fetchDCMembers();
    return ({data});
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

        console.log(data.approximate_member_count, data.approximate_presence_count);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}