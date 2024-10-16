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
				alt=""
			/></a
		>
		<div class="flex flex-col items-start">
			<div class="m-4">
				<iframe
					src="https://map.stemm1.org/#world:0:0:0:1500:0:0:0:0:perspective"
					title="World"
					class="enlargemc m-auto z-1000"
					style="zoom: 200%"
					width="75%"
				></iframe>
			</div>
			<div class="m-4">
				<iframe
					src="https://map.stemm1.org/#world_nether:0:0:0:1500:0:0:0:0:perspective"
					title="World"
					class="enlargemc m-auto z-1000"
					style="zoom: 200%"
					width="75%"
				></iframe>
			</div>
		</div>

		<a on:click={() => (location.href = 'discord')}
			><img
				class="enlarge max-w-400 max-h-168px of-hidden m-10"
				src="/discord-logo_smal.jpg"
				alt=""
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
