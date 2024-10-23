<script lang="ts">
	let firstname: HTMLFormElement;
	let lastname: HTMLFormElement;
	let form: HTMLFormElement;

	import type { PageServerData } from './$types';

	export let data: PageServerData;

	$: error = '';

	const submitpasswordchange = async (
		e: SubmitEvent & { currentTarget: Event & HTMLFormElement }
	) => {
		const formData = new FormData(form, e.submitter);
		const formJSON: { [key: string]: string } = {};
		formData.forEach((val, k) => (formJSON[k] = val.toString().trim()));

		const res = await fetch(`/api/${'changepassword'}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formJSON)
		});
		if (!res.ok) {
			error = await res.json().then((r) => r.message);
			return;
		} else error = 'Password Changed Successfully'
	};
</script>

		{#if error.length}
		<div class="border-1px border-red p-2 border-solid w-fit m-auto mb-4 color-white">
			{error}
		</div>
		{/if}
<form
	class="flex flex-col justify-center items-center text-center gap-2"
	on:submit={submitpasswordchange}
	bind:this={form}
>
	<div class="flex flex-row ">
		<div class="m-5">
			<div class="m-3">
				<input
					type="text"
					name="username"
					placeholder="User Name: {data.username?.username}"
					class="text-center font-size-xl"
					autocomplete="username"
					readonly
				/>
			</div>
			<div class="m-3">
				<input
					type="text"
					name="firstname"
					placeholder="First Name: {data.firstname?.firstname}"
					class="text-center font-size-xl"
					autocomplete="username"
					readonly
				/>
			</div>
			<div class="m-3">
				<input
					type="text"
					name="lastname"
					placeholder="Last Name: {data.lastname?.lastname}"
					class="text-center font-size-xl"
					autocomplete="username"
					readonly
				/>
			</div>
		</div>

		<div class="m5">
			<div class="m-3">
				<input
					type="password"
					name="password"
					placeholder="Old Password"
					class="text-center font-size-xl"
					autocomplete="current-password"
				/>
			</div>
			<div class="m-3">
				<input
					type="password"
					name="newpassword"
					placeholder="New Password"
					class="text-center font-size-xl"
					autocomplete="new-password"
				/>
			</div>
			<div class="m-3">
				<input
					type="password"
					name="confirmpassword"
					placeholder="Confirm Password"
					class="text-center font-size-xl"
					autocomplete="new-password"
				/>
			</div>
			<div class="flex flex-row justify-center items-center w-full m-auto">
				<input
					type="submit"
					value="Change Password"
					class="hover:scale-105 font-size-xl font-bold bg-gradient-to-r from-[#006EFF] via-[#16d410] m-auto to-[#006EFF] bg-[length:200%] p-2 px-6 max-w-min rounded-xl transition-all bg-[position:0%_center] hover:bg-[position:100%_center] font-bold text-shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
				/>
			</div>
		</div>
	</div>
</form>
