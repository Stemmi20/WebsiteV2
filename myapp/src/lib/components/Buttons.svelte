<script lang="ts">
	import Cookies from 'js-cookie';
	import { onMount } from 'svelte';
	$: width = 0;

	export let close: Function;
	let login = 'Login';

	onMount(() => {
		if (Cookies.get('userid')) login = 'Logout';
		console.log(Cookies.get('userid'));
	});
</script>

<div
	id="menu"
	class=" {width > 700 ? 'bg-red-7' : ''} p-1rem w-[100%] m-0 text-white flex {width > 700
		? 'flex-row'
		: 'flex-col'} justify-between items-center"
>
	<div
		class="flex {width > 700
			? 'flex-row'
			: 'flex-col'} justify-center justify-start items-center gap-4 text-white"
	>
		<a href="/" class="bg-[#0074f8] px-8px py-4px border-rd-8px enlarge" on:click={() => close()}
			>Home</a
		>
		<a
			href="/minecraft"
			class="bg-[#0074f8] px-8px py-4px border-rd-8px enlarge"
			on:click={() => close()}>Minecraft</a
		>
		<a
			href="/discord"
			class="bg-[#0074f8] px-8px py-4px border-rd-8px enlarge"
			on:click={() => close()}>Discord</a
		>
		<a
			href="/plugin"
			class="bg-[#0074f8] px-8px py-4px border-rd-8px enlarge"
			on:click={() => close()}>Plugin</a
		>
		<!-- <a
			href="/systemdashboard"
			class="bg-[#0074f8] px-8px py-4px border-rd-8px enlarge"
			on:click={() => close()}>System Dashboard</a
		> -->
		<a
			href="/browserGame"
			class="bg-[#0074f8] px-8px py-4px border-rd-8px enlarge"
			on:click={() => close()}>Game</a
		>
		<a href="/task" class="bg-[#0074f8] px-8px py-4px border-rd-8px enlarge" on:click={() => close()}
			>Task</a
		>
		<a
			on:click={() => window.open('https://discord.gg/aV2RGPg7Yk')}
			class="bg-[#0074f8] px-8px py-4px border-rd-8px enlarge"
			on:click={() => close()}>Support</a
		>
	</div>
	<div class="flex {width > 700 ? 'flex-row' : 'flex-col mt-10 items-center'} gap-4">
		<a
			href="/profile"
			class="bg-[#0074f8] px-8px py-4px border-rd-8px enlarge"
			on:click={() => close()}>Profile</a
		>
		<a
			href="/login"
			class="bg-[#0074f8] px-8px py-4px border-rd-8px enlarge"
			on:click={() => fetch('/api/logout', { method: 'POST' }).then(() => window.location.reload())}
			on:click={() => close()}>{login}</a
		>
		<a
			href="/creaters&credits"
			class="bg-[#0074f8] px-8px py-4px border-rd-8px enlarge"
			on:click={() => close()}>Creaters & Credits</a
		>
	</div>
</div>
<svelte:window bind:outerWidth={width} />
