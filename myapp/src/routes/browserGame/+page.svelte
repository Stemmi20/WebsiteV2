<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let context: CanvasRenderingContext2D;

	interface Component {
		type: string;
		score: number;
		width: number;
		height: number;
		speedX: number;
		speedY: number;
		x: number;
		y: number;
		gravity: number;
		gravitySpeed: number;
		text?: string;
		update: () => void;
		newPos: () => void;
		hitBottom: () => void;
		crashWith: (otherobj: Component) => boolean;
	}

	interface TextComponent extends Component {
		text: string;
	}

	let myGamePiece: Component;
	let myObstacles: Component[] = [];
	let myScore: Component;
	let frameNo = 0;
	let interval: number;

	function component(
		width: number,
		height: number,
		color: string,
		x: number,
		y: number,
		type: string,
		text?: string
	): Component | TextComponent {
		const ctx = context;
		return {
			type,
			score: 0,
			width,
			height,
			speedX: 0,
			speedY: 0,
			x,
			y,
			gravity: 0,
			gravitySpeed: 0,
			update() {
				if (this.type === 'text') {
					ctx.font = `${this.width}px Consolas`;
					ctx.fillStyle = color;
					ctx.fillText(this.text as string, this.x, this.y);
				} else {
					ctx.fillStyle = color;
					ctx.fillRect(this.x, this.y, this.width, this.height);
				}
			},
			newPos() {
				this.gravitySpeed += this.gravity;
				this.x += this.speedX;
				this.y += this.speedY + this.gravitySpeed;
				this.hitBottom();
			},
			hitBottom() {
				const rockbottom = canvas.height - this.height;
				if (this.y > rockbottom) {
					this.y = rockbottom;
					this.gravitySpeed = 0;
				}
			},
			crashWith(otherobj) {
				const myleft = this.x;
				const myright = this.x + this.width;
				const mytop = this.y;
				const mybottom = this.y + this.height;
				const otherleft = otherobj.x;
				const otherright = otherobj.x + otherobj.width;
				const othertop = otherobj.y;
				const otherbottom = otherobj.y + otherobj.height;
				return !(
					mybottom < othertop ||
					mytop > otherbottom ||
					myright < otherleft ||
					myleft > otherright
				);
			}
		};
	}

	function startGame() {
		myGamePiece = component(30, 30, 'red', 10, 120, '', '');
		myGamePiece.gravity = 0.05;
		myScore = component(30, 30, 'black', 280, 40, 'text', 'SCORE: 0');
		myGameArea.start();
	}

	const myGameArea = {
		canvas: null as HTMLCanvasElement | null,
		start() {
			this.canvas = document.createElement('canvas');
			this.canvas.width = 480;
			this.canvas.height = 270;
			context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
			document.body.insertBefore(this.canvas, document.body.childNodes[0]);
			frameNo = 0;
			interval = setInterval(updateGameArea, 20);
		},
		clear() {
			if (context) {
				context.clearRect(0, 0, this.canvas.width, this.canvas.height);
			} else {
				console.error('Canvas context is null');
			}
		}
	};

	function updateGameArea() {
		for (let i = 0; i < myObstacles.length; i += 1) {
			if (myGamePiece.crashWith(myObstacles[i])) {
				return;
			}
		}
	}

	function everyinterval(n: number) {
		return (frameNo / n) % 1 === 0;
	}

	function accelerate(n: number) {
		myGamePiece.gravity = n;
	}

	onMount(() => {
		startGame();
	});
</script>

<canvas bind:this={canvas}></canvas>
