<script lang="ts">
	import { nftMinterCanister } from '$lib/backend';
	import Input from '$lib/components/input/Input.svelte';
	import Select from '$lib/components/select/Select.svelte';
	import { page } from '$app/stores';

	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	let data: any;

	async function fetchCollectionDetails() {
		const actor = nftMinterCanister($page.params.id);

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
	<Input label="Total Investment Value" type="number" value="400000" />
	<Input label="Underlyning Asset Price" type="number" value="200000" />
	<Input label="Home Closing Fee" type="number" value="4" />
	<Input label="Initial Maintenance Reserve" type="number" value="2000" />
	<Input label="Projected Appreciation" type="number" value="5.13" />
	<Input label="Average 5 Year ROI" type="number" value="5.35" />
</div>
