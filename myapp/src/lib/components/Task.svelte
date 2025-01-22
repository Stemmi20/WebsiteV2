<script lang="ts">
	export let fn: Function;
	export let taskName: string;
	export let xpAmount: number;
</script>

<div>
	<div class="flex justify-left items-center text-left mr-0">
		<div class="h-full flex flex-wrap justify-center items-center p-5 gap-5"></div>
		<div class="progress-container" aria-label="Progress bar">
			<div
				on:click={() => fn()}
				class="color-black felx justify-center items-center text-center bg-lime"
			>
				{taskName}
				{xpAmount}xp
			</div>
		</div>
	</div>
</div>

<style>
	.progress-container {
		width: 10%;
		background-color: #e0e0e0;
		border-radius: 10px;
		overflow: hidden;
		box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
	}
</style>
