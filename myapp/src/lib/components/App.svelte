<script lang="ts">
	import Board from './Board.svelte';
	import { createBoard, isValidMove, makeMove } from '$lib/utils/gameLogic';

	let board = createBoard();
	let currentPlayer: 1 | 2 = 1;

	const handleMove = (event: CustomEvent<{ x: number; y: number }>): void => {
		const { x, y } = event.detail;
		if (isValidMove(board, x, y, currentPlayer)) {
			board = makeMove(board, x, y, currentPlayer);
			currentPlayer = currentPlayer === 1 ? 2 : 1;
		} else {
			alert('Invalid move!');
		}
	};
</script>

<main>
	<h1 class="color-white">Othello</h1>
	<a
		class="mb-10 font-size-xl font-bold bg-gradient-to-r from-[#006EFF] via-[#16d410] to-[#006EFF] bg-[length:200%] p-2 px-6 rounded-xl transition-all bg-[position:0%_center] hover:bg-[position:100%_center] font-bold text-shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
		on:click={ () =>window.location.reload()}>New Game</a
	>
	<div class="mt-10">
		<Board {board} {currentPlayer} on:move={handleMove} />
	</div>
</main>