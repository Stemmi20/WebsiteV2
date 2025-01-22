<script lang="ts">
	import Task from '$lib/components/Task.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { onMount } from 'svelte';

	let bindName: string | null = null;
	let bindXP: number | null = null;

	let showModal = false;
	$: showModal = false;

	let task: { name: string; xp: number }[] = [];
	$: task = [];

	onMount(async () => {
		const res = await fetch('/api/task');
		const json = await res.json();
		task = json;
	});

	function addTask(name: string, xp: number) {
		task = [...task, { name, xp }];

		fetch('/api/task', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name, xp }),
		});
	}
</script>

<div class="flex items-center justify-center flex-col mb-5" id="myBtn">
	<div class="color-white mt-5 ml-3">Aufgabe hinzufügen</div>
	<div
		class="dot mt-5 ml-5 flex items-center justify-center text-center text-1cm align-middle pt-0.5"
		onclick={() => (showModal = true)}
	>
		+
	</div>
</div>

<div>
	{#each task as t, i}
		{#if i === 0}
			<div class="color-white mt-10 ml-15">Aufgaben:</div>
		{/if}
		<Task fn={() => {}} taskName={t.name} xpAmount={t.xp} />
	{/each}
</div>

<Modal bind:showModal fn={addTask} name={bindName!} xp={bindXP!}>
	<div class="color-white">
		<div class="flex flex-col justify-center items-center text-center gap-2">
			<input
				type="text"
				name="Aufgabe"
				placeholder="Aufgabe"
				class="text-center font-size-xl"
				bind:value={bindName}
			/>

			<input
				type="number"
				name="xpAmount"
				placeholder="XP"
				class="text-center font-size-xl"
				bind:value={bindXP}
			/>
		</div>
	</div>
</Modal>

<style>
	.dot {
		height: 50px;
		width: 50px;
		background-color: #4caf50;
		border-radius: 50%;
		display: inline-block;
		content: '';
	}
</style>
