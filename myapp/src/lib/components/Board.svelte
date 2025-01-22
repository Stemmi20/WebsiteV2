<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Cell from './Cell.svelte';

	export let board: number[][];
	export let currentPlayer: 1 | 2;

	const dispatch = createEventDispatcher();

	const handleCellClick = (x: number, y: number): void => {
		dispatch('move', { x, y });
	};
</script>

<div class="board">
	{#each board as row, rowIndex}
		<div class="row">
			{#each row as cell, colIndex}
				<Cell value={cell} {rowIndex} {colIndex} on:click={() => handleCellClick(rowIndex, colIndex)} />
			{/each}
		</div>
	{/each}
</div>

<style>
	.row {
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		gap: 2px;
	}

	.board {
		width: 1px;
		height: 1px;
	}
</style>
