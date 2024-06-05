<script lang="ts">
	import type { PageServerData } from "./$types";

	export let data:PageServerData;
	console.log(data)
</script>
<div style="color: white;" class="contrast-NaN link_color">
	<h1 class="text-center" style="margin: 0;">Minecraft</h1>
	<br />
	<h4 class="text-center">You want to Play Minecraft?</h4>
	<h5 class="text-center">Then Join our Discord and endjoy playing Minecraft with us</h5>
	<br />
	<div class="text-center flex justify-center">
		<button
			id="joindiscordminecraft"
			on:click={() => window.open('https://discord.gg/evadWedvUx')}
			class="rounded text-center text-large bg-green enlarge">Join Server</button
		>
		<script>
			document.getElementById('joindiscordminecraft').onclick = function () {
				var url = 'https://discord.gg/evadWedvUx';
				var win = window.open(url, '_blank');
				win.focus;
			};
		</script>
	</div>
	<br />

	<h5 class="text-center">
		We are currently playing on the newest version. You can Build whatever whereever you want to
		Build.
	</h5>
	<h5 class="text-center">
		We have some <a class="text-red" href="/minecraft/rules">Rules</a> that you have to follow.
	</h5>
	<div class="text-center">
		🟢 Members Online on Server: {data.data.now}
	</div>
	<h5 class="text-center">Here you can see the map of our minecraft world.</h5>
	<br />
	<div class="text-center flex flex-col justify-center gap-4">
		<div class="enlarge">
			<button
				class="rounded text-center text-large bg-green"
				on:click={() =>
					window.open('https://map.stemm1.org/#world:0:0:0:1500:0:0:0:0:perspective')}
				>Minecraft Overworld</button
			>
		</div>
		<div class="m-4">
			<iframe
				src="https://map.stemm1.org/#world:0:0:0:1500:0:0:0:0:perspective"
				title="World"
				class="enlargemc m-auto z-1000"
				style="zoom: 500%"
			></iframe>
		</div>
		<div class="enlarge">
			<button
				class="rounded text-center text-large bg-green"
				on:click={() =>
					window.open('https://map.stemm1.org/#world_nether:0:0:0:1500:0:0:0:0:perspective')}
				>Minecraft Nether</button
			>
		</div>
		<div class="m-4">
			<iframe
				src="https://map.stemm1.org/#world_nether:0:0:0:1500:0:0:0:0:perspective"
				title="Nether"
				class="enlargemc m-auto z-1000"
				style="zoom: 500%"
			></iframe>
		</div>
		<div class="enlarge">
			<button
				class="rounded text-center text-large bg-green"
				on:click={() =>
					window.open('https://map.stemm1.org/#world_the_end:0:0:0:1500:0:0:0:0:perspective')}
				>Minecraft End</button
			>
		</div>
		<div class="m-4">
			<iframe
				src="https://map.stemm1.org/#world_the_end:0:0:0:1500:0:0:0:0:perspective"
				title="End"
				class="enlargemc m-auto z-1000"
				style="zoom: 500%"
			></iframe>
		</div>
	</div>
</div>
