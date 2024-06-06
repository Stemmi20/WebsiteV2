<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	console.log(data.data);
</script>

<div class="text-center text-white">
	<p class="font-size-8 mb-3">
        {data.data.global_name}
    </p>
	<img src="https://cdn.discordapp.com/avatars/{data.data.id}/{data.data.avatar}.webp" />
    <p>
        
    </p>
</div>
