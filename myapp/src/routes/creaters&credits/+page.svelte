<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="text-center text-white flex flex-col">
	<div class="font-size-8 mb-3 mt-3 flex flex-col justify-center items-center gap-10">
		{#each data.datausers as u}
			<div class="flex flex-col items-center gap-2">
				{u.global_name}
				<img alt=""
					src="https://cdn.discordapp.com/avatars/{u.id}/{u.avatar}.webp"
					class="w-40 rounded-full"
				/>

				<div class="mt-2 gap-2 flex flex-row">
					{#each (data.datasocials.filter((s) => s.userid === u.id).map((s) => s.socials).flat()) ?? [] as s}
						<a target="_blank" href={s.value}>
							{s.type}
						</a>
					{/each}
					{#each (data.datasocials.filter((s) => s.userid === u.id).map((s) => s.support).flat()) ?? [] as s}
						
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>