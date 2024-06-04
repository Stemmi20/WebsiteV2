<script lang="ts">
	import Layout from "../+layout.svelte";
        fetchDCMembers();

        async function fetchDCMembers() {
        const url = 'https://discord.com/api/v10/invites/SR75j8RB3u?with_counts=true';

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error fetching WRC quote: ${response.statusText}`);
                }
                const data: { approximate_member_count: number, approximate_presence_count: number } = await response.json();

                console.log(data.approximate_member_count, data.approximate_presence_count);

                } catch (error) {
                console.error("Error:", error);
            }
        }

        async function displayDCMembers() {
            try {
                const data = await fetchDCMembers();
                const template = document.getElementById('data-container').innerHTML;
                const rendered = Mustache.render(template, { items: data });
                document.getElementById('data-container').innerHTML = rendered;
            } catch (error) {
                console.error('Error fetching or displaying data:', error);
            }
        }


        fetchDCMembers();
        displayDCMembers();

</script>
<div class="text-center flex justify-center m-10">
    <button id="joindiscord" class="rounded bg-[rgb(114,137,218)] enlarge"><img class="max-w-200px max-h-250px"
            src="/Join_the_Discord_smal.jpg" alt="discord-logo"></button>
    <script>
        document.getElementById('joindiscord').onclick = function () {
            var url = 'https://discord.gg/evadWedvUx';
            var win = window.open(url, '_blank');
            win.focus();
        };
    </script>
</div>
<div class="text-center text text-white m-auto W50" id="DcMembers">
    <h2>List of Items</h2>
    <ul>
      {{#items}}
        <li>{{ name }} - {{ description }}</li>
      {{/items}}
    </ul>
</div>
<div class="text-center text text-white m-auto w-50">
    <p>
        We are a small Discord Server. You can join our Server for Playing Games and makeing new Friends. We are playing a lot of diffrent Games Around here. Like Minecraft, Overwatch, Valorant and much more. Join us and Experience a friendly and open Discord Server. Of corse you should have fun. If you have any reports to do Please contact sTemm1 on the Server. He will solve the Problem with you and we hope you have a great time on the Server. 
    </p>
</div>