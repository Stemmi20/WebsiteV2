<script lang="ts">
	import { onMount } from 'svelte';

	let blobSlow: HTMLDivElement;
	let blobFast: HTMLDivElement;

	$: x = 0;
	$: y = 0;
	let lastUpdate = Date.now();

	onMount(() => {
		[blobSlow, blobFast].forEach((b) => {
			b?.animate([{ opacity: `0%` }, { opacity: `50%` }], {
				duration: 3000,
				delay: 2000,
				fill: 'forwards'
			});
		});
	});
</script>

<div
	id="menu"
	class="bg-red-7 p-1rem w-[100%] m-0 text-white flex flex-row justify-between items-center"
>
	<div class="flex flex-row justify-center justify-start items-center gap-3 text-white">
		<a href="/" class="bg-[#0074f8] px-8px py-4px border-rd-8px enlarge">Home</a>
		<a href="/minecraft" class="bg-[#0074f8] px-8px py-4px border-rd-8px enlarge">Minecraft</a>
		<a href="/discord" class="bg-[#0074f8] px-8px py-4px border-rd-8px enlarge">Discord</a>
	</div>
	<div>
		<a
			href="/login"
			class="bg-[#0074f8] px-8px py-4px border-rd-8px enlarge"
			on:click={() => fetch('/api/logout', { method: 'POST' }).then(() => window.location.reload())}
			>Logout</a
		>
	</div>
</div>
<slot />
<svelte:window
	on:mousemove={(e) => {
		if (lastUpdate + 10 < Date.now()) {
			lastUpdate = Date.now();
			x = e.clientX;
			y = e.clientY;
		}
	}}
/>
<div
	class="mousfollow absolute -z-100 min-w-100 min-h-100 op-0 -ml-50 -mt-50 blur-100"
	style="left: {x}px; top: {y}px;"
	id="rotate"
	bind:this={blobSlow}
></div>
<div
	class="mousfollow absolute -z-100 min-w-100 min-h-100 op-0 -ml-50 -mt-50 blur-100"
	style="left: {x}px; top: {y}px;"
	id="rotateFaster"
	bind:this={blobFast}
></div>

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

	.mousfollow {
		position: absolute;
		width: 20px;
		height: 20px;
		background: -webkit-linear-gradient(rgb(243, 69, 214), rgb(33, 102, 187));
		border-radius: 50%;
		transform: translateX(-50%) translateY(-50%);
		pointer-events: none;
		transition: all 300ms ease-out;
		z-index: 10000;
	}
</style>
