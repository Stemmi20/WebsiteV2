<script lang="ts">
	import Buttons from './Buttons.svelte';
	import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	let sidebar: HTMLElement;
	$: width = 0;
	$: opened = false;

	const open = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });

		document.documentElement.style.overflowY = 'hidden';

		opened = true;

		sidebar?.animate([{ left: `-${sidebar.offsetWidth}px` }, { left: '0' }], {
			duration: 300,
			easing: 'ease-in-out',
			fill: 'forwards'
		});
	};

	const close = () => {
		opened = false;

		document.documentElement.style.overflowY = 'scroll';

		sidebar?.animate([{ left: '0' }, { left: `-${sidebar.offsetWidth}px` }], {
			duration: 300,
			easing: 'ease-in-out',
			fill: 'forwards'
		});
	};
</script>

<button
	class="bg-white color-[#fe3521] rounded-full top-4 left-4 absolute z-9999 p-3 w-12 h-12 transition ease-in-out aspect-square flex justify-center items-center
            hover:bg-[#fe3521] hover:color-white"
	id="kpkl,lp,lp,o"
	on:click={() => open()}
>
	<Fa icon={faBars} size="1.5x" />
</button>

<nav
	bind:this={sidebar}
	class="z-10000 h-full w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-neutral-900 fixed -left-100% box-shadow-main transition ease-in-out flex flex-col scroll-auto overflow-hidden"
>
	{#if width < 700}
		<div class="mt-5 ml-4">
            <button
			class="bg-white color-[#fe3521] rounded-full z-9999 w-12 h-12 p-3 aspect-square transition ease-in-out flex justify-center items-center
hover:bg-[#fe3521] hover:color-white"
			on:click={() => close()}
			name="Close Sidebar"
		>
			<Fa icon={faX} size="1.5x" />
		</button>
        </div>
		<div class="px-4 flex flex-col"><Buttons /></div>
	{/if}
</nav>

<svelte:window bind:outerWidth={width} />
