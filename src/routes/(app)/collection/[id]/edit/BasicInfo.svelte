<script lang="ts">
	import { page } from '$app/stores';
	import { nftMinterCanister } from '$lib/backend';
	import Input from '$lib/components/input/Input.svelte';
	import Select from '$lib/components/select/Select.svelte';
	import Textarea from '$lib/components/textarea/Textarea.svelte';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	export let loading = true;

	export const saveData = async () => {
		loading = true;
		try {
			const actor = nftMinterCanister($page.params.id);
			const res = await actor.update_name_desc([name], [description]);
		} catch (_) {
			console.error('Error fetching get_collection_metadata data');
		} finally {
			loading = false;
		}
	};

	let name: string = '';
	let description: string = '';
	let allData: any;

	async function fetchCollectionDetails() {
		loading = true;
		try {
			const actor = nftMinterCanister($page.params.id);

			const res = await actor.get_collection_metadata();
			allData = res;
			if ('Ok' in res) {
				name = res.Ok.name || '';
				description = res.Ok.desc || '';
			}
		} catch (_) {
			console.error('Error fetching get_collection_metadata data');
		} finally {
			loading = false;
		}
	}

	onMount(fetchCollectionDetails);
</script>

<div class="flex flex-col gap-4">
	<Input label="Title" bind:value={name} placeholder="Enter a title" />
	<Input label="Location" placeholder="Enter the property location" />
	<Input
		label="Total Supply Cap (in ICP)"
		type="number"
		value="1000"
		placeholder="Enter the total supply in ICP"
	/>
	<Select
		label="Set listing status"
		value="draft"
		options={[
			{ value: 'draft', label: 'Draft' },
			{ value: 'published', label: 'Published' }
		]}
	/>
	<Textarea
		bind:value={description}
		label="Description"
		placeholder="Enter a description"
		rows={10}
	/>
</div>

{#if allData}
	<pre transition:slide class="text-sm p-4 bg-gray-100 rounded-xl">
    {JSON.stringify(allData, null, 4)}
  </pre>
{/if}
