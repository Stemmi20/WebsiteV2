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
	<div class="ml-5">
		<h2 class="color-white">Othello</h2>
		<div class="flex flex-row items-center">
			<a
				class="font-size-xl font-bold bg-gradient-to-r from-[#006EFF] via-[#16d410] to-[#006EFF] bg-[length:200%] p-2 px-4 rounded-xl transition-all bg-[position:0%_center] hover:bg-[position:100%_center] font-bold text-shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
				on:click={() => window.location.reload()}>New Game</a
			>
			<div class="color-white font-size-xl ml-5">
				{currentPlayer === 1 ? 'Black' : 'Grey'}'s turn
			</div>
		</div>
		<div class="mt-5">
			<Board {board} {currentPlayer} on:move={handleMove} />
		</div>
	</div>
</main>
