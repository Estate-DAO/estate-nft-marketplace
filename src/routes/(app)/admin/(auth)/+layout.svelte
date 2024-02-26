<script lang="ts">
	import { adminStore } from '$lib/stores/admin';
	import PlusIcon from '$lib/components/icons/PlusIcon.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { provisionCanister } from '$lib/backend';
	import Button from '$lib/components/button/Button.svelte';

	let loading = true;
	let error = '';

	async function checkPassword() {
		error = '';
		if (!$adminStore.isLoggedIn) gotoAuthPage();
		try {
			const actor = provisionCanister();

			const res = await actor.verify_key($adminStore.key);
			if (res) {
				loading = false;
			} else {
				$adminStore.isLoggedIn = false;
				gotoAuthPage();
			}
		} catch (e) {
			console.error(e);
			error = 'Something went wrong!';
		}
	}

	function gotoAuthPage() {
		goto('/admin/auth');
	}

	onMount(checkPassword);
</script>

{#if error}
	<div class="text-sm font-medium">{error}</div>
	<Button on:click={checkPassword}>Try again</Button>
{:else if loading}
	<PlusIcon class="w-5 h-5 animate-spin" />
{:else}
	<slot />
{/if}
