<script lang="ts">
	let firstname: HTMLFormElement;
	let lastname: HTMLFormElement;
	
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="flex flex-row">
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
				name="password"
				placeholder="New Password"
				class="text-center font-size-xl"
				autocomplete="current-password"
			/>
		</div>
		<div class="m-3">
			<input
				type="password"
				name="password"
				placeholder="Confirm Password"
				class="text-center font-size-xl"
				autocomplete="current-password"
			/>
		</div>
	</div>

	<div class="m-5">
		<div class="m-3">
			<input
				type="text"
				name="username"
				placeholder="User Name"
				class="text-center font-size-xl"
				autocomplete="username"
			/>
		</div>
		<div class="m-3">
			<input
				bind:value={firstname}
				type="text"
				name="name"
				placeholder="First Name: "
				class="text-center font-size-xl"
				autocomplete="username"
			/>
		</div>
		<div class="m-3">
			<input
				bind:value={lastname}
				type="text"
				name="name"
				placeholder="Last Name: "
				class="text-center font-size-xl"
				autocomplete="username"
			/>
		</div>
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
				name="password"
				placeholder="New Password"
				class="text-center font-size-xl"
				autocomplete="current-password"
			/>
		</div>
		<div class="m-3">
			<input
				type="password"
				name="password"
				placeholder="Confirm Password"
				class="text-center font-size-xl"
				autocomplete="current-password"
			/>
		</div>
        <div class="flex flex-row justify-evenly items-center gap-5">
			<input
				type="submit"
				value="Submit"
				class="hover:scale-105 font-size-xl font-bold bg-gradient-to-r from-[#006EFF] via-[#16d410] to-[#006EFF] bg-[length:200%] p-2 px-6 rounded-xl transition-all bg-[position:0%_center] hover:bg-[position:100%_center] font-bold text-shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
			/>
		</div>
	</div>
</div>