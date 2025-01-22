export type Board = number[][];
export type Player = 1 | 2;

// createBoard Funktion
// Erstellen von spielfeld mit 2d Array
export const createBoard = (): number[][] => {
	const board = Array(8)
		.fill(0)
		.map(() => Array(8).fill(0));
	board[3][3] = 2;
	board[3][4] = 1;
	board[4][3] = 1;
	board[4][4] = 2;

	return board;
};

// isValidMove Funktion
// überpfüfung von der move richtig ist
export const isValidMove = (board: Board, x: number, y: number, player: Player): boolean => {
	if (board[x][y] !== 0) return false;

	const opponent = player === 1 ? 2 : 1;
	const directions = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
		[-1, -1],
		[-1, 1],
		[1, -1],
		[1, 1],
	];

	for (const [dx, dy] of directions) {
		let nx = x + dx;
		let ny = y + dy;
		let hasOpponent = false;

		while (nx >= 0 && nx < 8 && ny >= 0 && ny < 8) {
			if (board[nx][ny] === opponent) {
				hasOpponent = true;
			} else if (board[nx][ny] === player) {
				if (hasOpponent) return true;
				else break;
			} else {
				break;
			}
			nx += dx;
			ny += dy;
		}
	}

	return false;
};

// makeMove Funktion
export const makeMove = (board: Board, x: number, y: number, player: Player): Board => {
	if (!isValidMove(board, x, y, player)) {
		throw new Error('Invalid move!');
	}

	const newBoard: Board = board.map((row) => [...row]);

	newBoard[x][y] = player;

	const opponent = player === 1 ? 2 : 1;
	const directions = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
		[-1, -1],
		[-1, 1],
		[1, -1],
		[1, 1],
	];

	for (const [dx, dy] of directions) {
		const toFlip: [number, number][] = [];
		let nx = x + dx;
		let ny = y + dy;

		while (nx >= 0 && nx < 8 && ny >= 0 && ny < 8 && board[nx][ny] === opponent) {
			toFlip.push([nx, ny]);
			nx += dx;
			ny += dy;
		}

		if (nx >= 0 && nx < 8 && ny >= 0 && ny < 8 && board[nx][ny] === player) {
			for (const [fx, fy] of toFlip) {
				newBoard[fx][fy] = player;
			}
		}
	}

	return newBoard;
};
