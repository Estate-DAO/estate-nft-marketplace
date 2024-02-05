<script lang="ts">
	import { provisionCanister } from '$lib/backend';
	import Button from '$lib/components/button/Button.svelte';
	import Input from '$lib/components/input/Input.svelte';
	import Textarea from '$lib/components/textarea/Textarea.svelte';
	import { slide } from 'svelte/transition';

	let name = '';
	let location = '';

	let res: any;

	async function createCollection() {
		const actor = provisionCanister({ canisterId: 'be2us-64aaa-aaaaa-qaabq-cai' });
		res = await actor.all_canister_create(name, location);
	}
</script>

{#if res}
	<pre transition:slide class="text-sm p-4 bg-gray-100 rounded-xl">
    {JSON.stringify(res, null, 4)}
  </pre>
{/if}

<div class="flex flex-col gap-12">
	<div class="relative border-b border-gray-200 pb-5 sm:pb-0">
		<div class="flex items-end justify-between py-4">
			<div class="text-4xl">Create new Collection</div>
			<div class="mt-3 flex gap-3">
				<Button on:click={() => history.back()} secondary>Cancel</Button>
				<Button on:click={() => createCollection()}>Create</Button>
			</div>
		</div>
	</div>
	<div class="flex flex-col gap-4">
		<Input bind:value={name} label="Title" placeholder="Enter a title" />
		<Input bind:value={location} label="Location" placeholder="Enter the property location" />
	</div>
</div>
