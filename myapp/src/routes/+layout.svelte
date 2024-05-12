<div id="menu" class="bg-red-7 p-1rem w-[100%] m-0 text-white flex flex-row justify-between items-center">
	<div class="flex flex-row justify-center justify-start items-center gap-3"><a href="/" class="bg-[#0074f8] px-8px py-4px border-rd-8px enlarge">Home</a> 
	<a href="/minecraft" class="bg-[#0074f8] px-8px py-4px border-rd-8px enlarge">Minecraft</a>
	<a href="/discord" class="bg-[#0074f8] px-8px py-4px border-rd-8px enlarge">Discord</a></div>
	<div><a href="/login" class="bg-[#0074f8] px-8px py-4px border-rd-8px enlarge" on:click={() => fetch('/api/logout', { method: 'POST' }).then(() => window.location.reload())}
		>Logout</a></div>
</div>
<slot />
<script>
	$:x=0
	$:y=0
</script>
<svelte:window
    on:mousemove={(e) => {
        x = e.clientX;
        y = e.clientY;
		console.log(e.clientX)
		console.log(e.clientY)
    }}
/>
<div class="mousfollow" id="mousfollow"></div>