<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="text-center flex justify-center mt-10">
	<button id="joindiscord" class="rounded bg-[rgb(114,137,218)] enlarge"
		><img
			class="max-w-200px max-h-250px"
			src="/Join_the_Discord_smal.jpg"
			alt="discord-logo"
		/></button
	>
	<script>
		document.getElementById('joindiscord').onclick = function () {
			var url = 'https://discord.gg/evadWedvUx';
			var win = window.open(url, '_blank');
			win.focus();
		};
	</script>
    <br>
   
</div>

<div class="text-center text text-white m-auto w-50">
    <p class="mb-10">
        Members on Server: {data.data.approximate_member_count} <br>
        🟢 Members Online on Server: {data.data.approximate_presence_count}
    </p>
	<p>
		We are a small Discord Server. You can join our Server for Playing Games and makeing new
		Friends. We are playing a lot of diffrent Games Around here. Like Minecraft, Overwatch, Valorant
		and much more. Join us and Experience a friendly and open Discord Server. Of corse you should
		have fun. If you have any reports to do Please contact sTemm1 on the Server. He will solve the
		Problem with you and we hope you have a great time on the Server.
	</p>
</div>
