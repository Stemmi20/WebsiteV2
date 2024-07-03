<script lang="ts">
	$: width = 0;
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

		<a on:click={() => (location.href = 'discord')}
			><img
				class="enlarge max-w-400 max-h-168px of-hidden m-10"
				src="/discord-logo_smal.jpg"
				alt=""
			/></a
		>
	</div>
</div>
