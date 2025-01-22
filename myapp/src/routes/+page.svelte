<script lang="ts">
	$: width = 0;

	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="flex justify-center items-center text-left">
	<div class="h-full flex flex-wrap justify-center items-center p-10 gap-15">
		<a href="minecraft"
			><img
				class="of-hidden enlarge max-w-450px max-h-250px"
				src="/join_minecraft_serverjpg.jpg"
				alt="Play Minecraft with us"
			/></a
		>

		<a href="browserGame">
			<img class="of-hidden enlarge max-w-450px max-h-250px" src="/othello.png" alt="Othello Logo" />
		</a>

		<a on:click={() => (location.href = 'discord')}
			><img
				class="enlarge max-w-400 max-h-168px of-hidden m-10"
				src="/discord-logo_smal.jpg"
				alt="Discord Logo"
			/></a
		>
		<div class="flex flex-col items-end color-white">
			<div class="mb-10 font-size-5">
				Members on Server: {data.data.approximate_member_count} <br />
				🟢 Members Online: {data.data.approximate_presence_count}
			</div>
		</div>
	</div>
</div>
