<script lang="ts">
	import { goto } from '$app/navigation';
	import { adminStore } from '$lib/stores/admin';
	import { provisionCanister } from '$lib/backend';
	import Button from '$lib/components/button/Button.svelte';
	import Input from '$lib/components/input/Input.svelte';

	$: if ($adminStore.isLoggedIn) {
		goto('/admin');
	}

	let value = '';
	let loading = false;
	let error = '';

	async function checkPassword() {
		if (!value) return;
		error = '';
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
	}
</script>

<div class="flex flex-col items-center justify-center gap-4">
	<div class="font-bold text-xl">Admin</div>

	<div>You're need password to continue</div>
	<Button href="/marketplace">Go back</Button>

	<div>or</div>
	<Input disabled={loading} label="Password" type="text" bind:value placeholder="Enter password" />
	{#if error}
		<div class="text-sm text-red-500">{error}</div>
	{/if}
	<Button {loading} secondary on:click={checkPassword}>Submit</Button>
</div>
