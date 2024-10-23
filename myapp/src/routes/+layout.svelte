<script lang="ts">
	import { page } from '$app/stores';
	import Buttons from '$lib/components/Buttons.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';

	const excludeOn = ['/minecraft'];
	$: show = !excludeOn.includes($page.url.pathname);

	let blobSlow: HTMLDivElement;
	let blobFast: HTMLDivElement;

	$: x = 0;
	$: y = 0;
	let lastUpdate = Date.now();

	$: {
		[blobSlow, blobFast].forEach((b) => {
			b?.animate([{ opacity: `0%` }, { opacity: `50%` }], {
				duration: 3000,
				delay: 1000,
				fill: 'forwards',
			});
		});
	}

	$: width = 0;
</script>

{#if width > 700}
	<Buttons close={() => {}} />
{/if}
{#if width < 700}
	<Sidebar />
{/if}

<slot />
<svelte:window
	on:mousemove={(e) => {
		if (lastUpdate + 10 < Date.now()) {
			lastUpdate = Date.now();
			x = e.clientX;
			y = e.clientY;
		}
	}}
	bind:outerWidth={width}
/>

{#if show}
	<div
		class="pointer-events-none fixed -z-100 min-w-100 min-h-100 op-0 -ml-50 -mt-50 blur-100 bg-gradient-to-r from-[rgb(243,69,214)] to-[rgb(33,102,187)] rounded-full"
		style="left: {x}px; top: {y}px;"
		id="rotate"
		bind:this={blobSlow}
	></div>
	<div
		class="pointer-events-none fixed -z-100 min-w-100 min-h-100 op-0 -ml-50 -mt-50 blur-100 bg-gradient-to-r from-[rgb(243,69,214)] to-[rgb(33,102,187)] rounded-full"
		style="left: {x}px; top: {y}px;"
		id="rotateFaster"
		bind:this={blobFast}
	></div>
{/if}

<style scoped>
	#rotate {
		animation: spin 10s infinite;
	}

	#rotateFaster {
		animation: spinFaster 5s infinite;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}

		50% {
			scale: 1 1.5;
		}

		to {
			transform: rotate(360deg);
		}
	}

	@keyframes spinFaster {
		from {
			transform: rotate(0deg);
			scale: 1 1.7;
		}

		50% {
			scale: 1.7 1;
		}

		to {
			transform: rotate(-360deg);
			scale: 1 1.7;
		}
	}
</style>
