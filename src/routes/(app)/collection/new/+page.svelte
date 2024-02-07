<script lang="ts">
	import { provisionCanister } from '$lib/backend';
	import Button from '$lib/components/button/Button.svelte';
	import Input from '$lib/components/input/Input.svelte';
	import { authState } from '$lib/stores/auth';
	import { Principal } from '@dfinity/principal';
	import { slide } from 'svelte/transition';

	let name = '';
	let location = '';
	let loading = false;
	let error = '';

	let data: any;

	async function createCollection() {
		try {
			if (loading) return;
			loading = true;
			const actor = provisionCanister();
			const res = await actor.all_canister_create(name, location);
			data = { created: res };
			if ('Ok' in res) {
				if ($authState.isLoggedIn) {
					data.authorized = await actor.grant_commit_permission(
						res.Ok.asset_canister,
						Principal.from($authState.idString)
					);
				} else console.error('Not logged in');
			}
		} catch (e) {
			console.error(e);
			error = 'Something went wrong. Please try again later.';
		} finally {
			loading = false;
		}
	}
</script>

{#if data}
	<pre transition:slide class="text-sm p-4 bg-gray-100 rounded-xl">
    {JSON.stringify(data, null, 4)}
  </pre>
{/if}

<div class="flex flex-col gap-12">
	<div class="relative border-b border-gray-200 pb-5 sm:pb-0">
		<div class="flex items-end justify-between py-4">
			<div class="text-4xl">Create new collection</div>
			<div class="mt-3 flex gap-3">
				<Button disabled={loading} on:click={() => history.back()} secondary>Cancel</Button>
				<Button {loading} disabled={loading} on:click={() => createCollection()}>Create</Button>
			</div>
		</div>
	</div>
	<div class="flex flex-col gap-4">
		<Input disabled={loading} bind:value={name} label="Title" placeholder="Enter a title" />
		<Input
			disabled={loading}
			bind:value={location}
			label="Location"
			placeholder="Enter the property location"
		/>
		{#if error}
			<span class="text-red-500 text-xs font-medium">Error: {error}</span>
		{/if}
	</div>
</div>
