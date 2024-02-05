<script lang="ts">
	import { nftMinterCanister } from '$lib/backend';
	import Input from '$lib/components/input/Input.svelte';
	import Select from '$lib/components/select/Select.svelte';

	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	let data: any;

	async function fetchCollectionDetails() {
		const actor = nftMinterCanister({
			canisterId: 'c5kvi-uuaaa-aaaaa-qaaia-cai'
		});

		data = await actor
			.get_market_details()
			.then((d) => (data = d))
			.catch((e) => console.error('Error fetching get_market_details data', e));
	}

	onMount(fetchCollectionDetails);
</script>

{#if data}
	<pre transition:slide class="text-sm p-4 bg-gray-100 rounded-xl">
    {JSON.stringify(data, null, 4)}
  </pre>
{/if}

<div class="flex flex-col gap-4">
	<Input label="Number of Bedrooms" type="number" value="3" />
	<Input label="Number of Bathrooms" type="number" value="4" />
	<Input label="Square footage" type="number" value="5000" />
	<Input label="Price per square feet" type="number" value="1250" />
	<Input label="Monthly rent" type="number" value="8000" />
	<Input label="Affordibility score" type="number" value="8" />
	<Select
		label="Occupied"
		value="yes"
		options={[
			{ value: 'Yes', label: 'Yes' },
			{ value: 'no', label: 'No' }
		]}
	/>
	<Input label="Year Built" type="number" value="2008" />
	<Input label="Last renovated" type="number" value="2018" />
	<Select
		label="Flood zone"
		value="no"
		options={[
			{ value: 'Yes', label: 'Yes' },
			{ value: 'no', label: 'No' }
		]}
	/>
	<Input label="School score" type="number" value="8" />
	<Input label="Crime score" type="number" value="2" />
</div>
