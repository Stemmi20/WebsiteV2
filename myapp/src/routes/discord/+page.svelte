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
	<br />
</div>

<div class="text-center text text-white m-auto w-50">
	<div class="mb-10 font-size-5">
		Members on Server: {data.data.approximate_member_count} <br />
		🟢 Members Online: {data.data.approximate_presence_count}
	</div>
	<div>
		We are a small Discord server where you can join us to play games and make new friends. We play
		a variety of games such as Minecraft, Overwatch, Valorant, and many more. Join us to experience
		a friendly and open community. Of course, having fun is our main goal. If you have any issues,
		please contact sTemm1 on the server. They will work with you to resolve the problem. We hope you
		have a great time on our server!
	</div>
</div>
