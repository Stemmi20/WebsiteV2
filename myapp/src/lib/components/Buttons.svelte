<script lang="ts">
	$: width = 0;
</script>
<div
	id="menu"
	class=" {width > 700 ? 'bg-red-7' : ''} p-1rem w-[100%] m-0 text-white flex {width > 700 ? 'flex-row' : 'flex-col'} justify-between items-center"
>
	<div class="flex {width > 700 ? 'flex-row' : 'flex-col'} justify-center justify-start items-center gap-3 text-white">
		<a href="/" class="bg-[#0074f8] px-8px py-4px border-rd-8px enlarge">Home</a>
		<a href="/minecraft" class="bg-[#0074f8] px-8px py-4px border-rd-8px enlarge">Minecraft</a>
		<a href="/discord" class="bg-[#0074f8] px-8px py-4px border-rd-8px enlarge">Discord</a>
		<a href="/plugin" class="bg-[#0074f8] px-8px py-4px border-rd-8px enlarge">Plugin</a>
		<a
			on:click={() => window.open('https://discord.gg/aV2RGPg7Yk')}
			class="bg-[#0074f8] px-8px py-4px border-rd-8px enlarge">Support</a
		>
	</div>
	<div class="flex {width > 700 ? 'flex-row' : 'flex-col'} gap-3 mt-10 items-center">
		<a href="/profile" class="bg-[#0074f8] px-8px py-4px border-rd-8px enlarge">Profile</a>
		<a
			href="/login"
			class="bg-[#0074f8] px-8px py-4px border-rd-8px enlarge"
			on:click={() => fetch('/api/logout', { method: 'POST' }).then(() => window.location.reload())}
			>Logout</a
		>
		<a href="/creaters&credits" class="bg-[#0074f8] px-8px py-4px border-rd-8px enlarge"
			>Creaters & Credits</a
		>
	</div>
</div>
<svelte:window bind:outerWidth={width} />