<script lang="ts">
	let firstname: HTMLFormElement;
	let lastname: HTMLFormElement;
	let form: HTMLFormElement;

	let error: string;
	$: error = '';

	import type { PageServerData } from './$types';

	export let data: PageServerData;

	const submitregister = async (e: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement }) => {
		e.preventDefault();

		const formData = new FormData(form, e.submitter);
		const formJSON: { [key: string]: string } = {};
		formData.forEach((val, k) => (formJSON[k] = val.toString().trim()));

		const res = await fetch(`/api/${'register'}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formJSON)
		});
		if (!res.ok) {
			error=await res.json().then((r)=>r.message);
			return;
		}

		window.location.href = '/';

	};
</script>

{#if error.length}
<div class="border-1px border-red p-2 border-solid w-fit m-auto mb-4 color-white">
	{error}
</div>
{/if}

<form
	class="flex flex-col justify-center items-center text-center gap-2"
	on:submit={submitregister}
	bind:this={form}
>
	<div class="flex flex-row">
		<div class="m-5">
			<div class="m-3">
				<input
					type="text"
					name="username"
					placeholder="User Name"
					class="text-center font-size-xl rounded-lg p-2"
					autocomplete="username"
				/>
			</div>
			<div class="m-3">
				<input
					type="password"
					name="password"
					placeholder="Password"
					class="text-center font-size-xl rounded-lg p-2"
					autocomplete="current-password"
				/>
			</div>
			<div class="m-3">
				<input
					bind:value={firstname}
					type="text"
					name="firstname"
					placeholder="First Name: "
					class="text-center font-size-xl rounded-lg p-2"
					autocomplete="username"
				/>
			</div>
			<div class="m-3">
				<input
					bind:value={lastname}
					type="text"
					name="lastname"
					placeholder="Last Name: "
					class="text-center font-size-xl rounded-lg p-2"
					autocomplete="username"
				/>
			</div>
			<div class="flex flex-row justify-evenly items-center gap-5">
				<input
					type="submit"
					value="Register"
					class="hover:scale-105 font-size-xl font-bold bg-gradient-to-r from-[#006EFF] via-[#16d410] to-[#006EFF] bg-[length:200%] p-2 px-6 rounded-xl transition-all bg-[position:0%_center] hover:bg-[position:100%_center] font-bold text-shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
				/>
			</div>
		</div>
	</div>
</form>
