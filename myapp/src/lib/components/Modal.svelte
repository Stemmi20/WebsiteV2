<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		showModal = $bindable(),
		header,
		children,
        fn,
        name,
        xp
	}: { showModal: boolean; header?: Snippet; children?: Snippet; fn: Function; name: string; xp: number} = $props();

	let dialog: HTMLDialogElement | null = $state(null);

	$effect(() => {
		if (showModal) dialog?.showModal();
	});
</script>

<dialog
	bind:this={dialog}
	onclose={() => (showModal = false)}
	onclick={(e) => {
		if (e.target === dialog) dialog?.close();
	}}
>
	<div class="bg-gray-6">
		{@render header?.()}
		{@render children?.()}
		<hr />
		<div
			class="flex flex-row justify-evenly items-center gap-5 bg-gray-6"
			onclick={() => dialog?.close()}
		>
			<button onclick={() => fn(name, xp)}
				class="hover:scale-105 font-size-xl font-bold bg-gradient-to-r from-[#006EFF] via-[#16d410] to-[#006EFF] bg-[length:200%] p-2 px-6 rounded-xl transition-all bg-[position:0%_center] hover:bg-[position:100%_center] font-bold text-shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
			>Aufgabe hinzufügen</button>
		</div>
	</div>
</dialog>

<style>
	dialog {
		max-width: 32em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.5);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
</style>
