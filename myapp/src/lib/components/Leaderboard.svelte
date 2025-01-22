<script lang="ts">
	export let username: string;
	export let level: number;
	export let currentprogress: number;
</script>

<div class="box">{username}</div>
<div class="box">{level}</div>
<div class="box">{currentprogress}</div>

<style>
	.box {
		background: #444;
		border: 1px solid #000000;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
	}
</style>
