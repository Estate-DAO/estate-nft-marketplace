<script lang="ts">
	import { page } from '$app/stores';
	import { nftMinterCanister } from '$lib/backend';
	import Input from '$lib/components/input/Input.svelte';
	import Select from '$lib/components/select/Select.svelte';
	import Textarea from '$lib/components/textarea/Textarea.svelte';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	let data: any;

	async function fetchCollectionDetails() {
		const actor = nftMinterCanister($page.params.id);

		await actor
			.get_collection_metadata()
			.then((d) => (data = d))
			.catch((e) => console.error('Error fetching get_collection_metadata data', e));
	}

	onMount(fetchCollectionDetails);
</script>

{#if data}
	<pre transition:slide class="text-sm p-4 bg-gray-100 rounded-xl">
    {JSON.stringify(data, null, 4)}
  </pre>
{/if}

<div class="flex flex-col gap-4">
	<Input label="Title" placeholder="Enter a title" />
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
	<Textarea label="Description" placeholder="Enter a description" rows={10} />
</div>
