<div id="menu" class="bg-red-7 p-1rem w-[100%] m-0 text-white flex flex-row justify-between items-center">
	<div class="flex flex-row justify-center justify-start items-center gap-2"><a href="/" class="bg-[#0074f8] px-8px py-4px border-rd-8px">Home</a> 
	<a href="/minecraft" class="bg-[#0074f8] px-8px py-4px border-rd-8px">Minecraft</a>
	<a href="/discord" class="bg-[#0074f8] px-8px py-4px border-rd-8px">Discord</a></div>
	<div><a href="/login" class="bg-[#0074f8] px-8px py-4px border-rd-8px" on:click={() => fetch('/api/logout', { method: 'POST' }).then(() => window.location.reload())}
		>Logout</a></div>
</div>
<slot />