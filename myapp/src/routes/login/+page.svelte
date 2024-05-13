<script lang="ts">
	let form: HTMLFormElement;

	let error: string;
	$: error = '';

	const submit = async (e: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement }) => {
		e.preventDefault();

		const formData = new FormData(form, e.submitter);
		const formJSON: { [key: string]: string } = {};
		formData.forEach((val, k) => (formJSON[k] = val.toString().trim()));

  const method = (e.submitter as HTMLInputElement).value as 'Log-In' | 'Register';

		const res = await fetch(`/api/${method === 'Log-In' ? 'login' : 'register'}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formJSON),
		});

		if (!res.ok) {
			error = await res.json().then((e) => e.message);
			return;
		}

		window.location.href = '/';
	};
</script>

<div class="pt-20">
	{#if error.length}
		<div class="border-1px border-red p-2 border-solid w-fit m-auto mb-4">
			{error}
		</div>
	{/if}

	<form
		class="flex flex-col justify-center items-center text-center gap-2"
		on:submit={submit}
		bind:this={form}
	>
		<input type="text" name="name" placeholder="Name" class="text-center font-size-xl" autocomplete="username" />
		<input
			type="password"
			name="password"
			placeholder="Password"
			class="text-center font-size-xl"
			autocomplete="current-password"
		/>

		<div class="flex flex-row justify-evenly items-center gap-5 ">
			<input type="submit" value="Log-In" class="hover:scale-105 font-size-xl" style="background: -webkit-linear-gradient(rgb(0, 110, 255), rgb(22, 212, 16))" />
			<input type="submit" value="Register" class="hover:scale-105 font-size-xl" style="background: -webkit-linear-gradient(rgb(0, 110, 255), rgb(22, 212, 16))" />
		</div>
	</form>
</div>
