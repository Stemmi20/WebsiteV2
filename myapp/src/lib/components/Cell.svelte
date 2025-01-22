<script lang="ts">
	export let value: number;
	export let rowIndex: number;
	export let colIndex: number;

	const colors: { [key: number]: string } = {
		0: 'white',
		1: 'black',
		2: 'gray',
	};
</script>

<div class="cell" style="background-color: {colors[value]};" on:click></div>

<style>
	.cell {
		width: 90px;
		height: 90px;
		border: 2px solid #000;
		column-gap: 0;
		row-gap: 0;
		grid-row: auto;
		grid-column: auto;
	}
</style>
