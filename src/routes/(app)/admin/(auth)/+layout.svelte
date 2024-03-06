<script lang="ts">
	import { adminStore } from '$lib/stores/admin';
	import PlusIcon from '$lib/components/icons/PlusIcon.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { provisionCanister } from '$lib/backend';
	import Button from '$lib/components/button/Button.svelte';
	import { authState } from '$lib/stores/auth';

	let loading = true;
	let error = '';

	$: if (!$adminStore.isLoggedIn || !$authState.isLoggedIn) {
		gotoAuthPage();
	}

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
	<div class="flex w-full flex-col items-center justify-center pt-8">
		<div class="text-sm font-medium">{error}</div>
		<Button on:click={checkPassword}>Try again</Button>
	</div>
{:else if loading}
	<div class="flex w-full items-center justify-center pt-8">
		<PlusIcon class="w-5 h-5 animate-spin" />
	</div>
{:else}
	<slot />
{/if}
