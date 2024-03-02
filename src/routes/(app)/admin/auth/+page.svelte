<script lang="ts">
	import { goto } from '$app/navigation';
	import { adminStore } from '$lib/stores/admin';
	import { provisionCanister } from '$lib/backend';
	import Button from '$lib/components/button/Button.svelte';
	import Input from '$lib/components/input/Input.svelte';
	import { authState } from '$lib/stores/auth';

	$: if ($adminStore.isLoggedIn) {
		goto('/admin');
	}

	let value = '';
	let loading = false;
	let error = '';

	async function checkPassword() {
		if (!value) return;
		loading = true;
		error = '';
		try {
			const actor = provisionCanister();
			const res = await actor.verify_key(value);
			if (res) {
				adminStore.set({
					isLoggedIn: true,
					key: value
				});
			} else {
				error = 'Invalid password!';
			}
		} finally {
			loading = false;
		}
	}
</script>

<div class="flex flex-col items-center justify-center gap-4">
	<div class="font-bold text-xl">Admin</div>

	<div>You're need password to continue</div>
	<Button href="/market">Go back</Button>

	<div>or</div>

	{#if $authState.isLoggedIn}
		<form class="flex flex-col gap-4 items-center">
			<Input
				disabled={loading}
				label="Password"
				type="password"
				bind:value
				placeholder="Enter password"
			/>
			{#if error}
				<div class="text-sm text-red-500">{error}</div>
			{/if}
			<Button {loading} submit secondary on:click={checkPassword}>Submit</Button>
		</form>
	{:else}
		<div>You need to first login using Internet Identity</div>
		<Button href="/login">Login</Button>
	{/if}
</div>
