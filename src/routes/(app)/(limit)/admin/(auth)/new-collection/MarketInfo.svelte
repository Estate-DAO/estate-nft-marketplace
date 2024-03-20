<script lang="ts" context="module">
	export type MarketInfoData = ReturnType<typeof init>;

	const init = (marketDetails?: MarketDetails) => ({
		annualPopulationGrowth: marketDetails?.annual_popullation_growth?.[0] || 0,
		averageRent: marketDetails?.average_rent?.[0] || 0,
		medianHomeSalePrice: marketDetails?.median_home_sale_price?.[0] || 0,
		country: marketDetails?.country?.[0] || '',
		city: marketDetails?.city?.[0] || '',
		state: marketDetails?.state?.[0] || '',
		description: marketDetails?.description?.[0] || '',
		coordinates: marketDetails?.coordinates?.[0] || ''
	});
</script>

<script lang="ts">
	import Input from '$lib/components/input/Input.svelte';
	import Textarea from '$lib/components/textarea/Textarea.svelte';
	import type { MarketDetails } from '$lib/declarations/estate_dao_nft_backend/estate_dao_nft_backend.did';

	export let loading = true;
	export let data: MarketInfoData = init();
</script>

<div class="flex flex-col gap-4">
	<Input
		disabled={loading}
		label="Median Home Sale Price"
		type="number"
		bind:value={data.medianHomeSalePrice}
	/>
	<Input label="Average rent" type="number" bind:value={data.averageRent} />
	<Input label="Annual Population Growth" type="number" bind:value={data.annualPopulationGrowth} />
	<Input label="Country" type="text" bind:value={data.country} />
	<Input label="State" type="text" bind:value={data.state} />
	<Input label="City" type="text" bind:value={data.city} />
	<Input label="Coordinates" type="text" bind:value={data.coordinates} />
	<Textarea label="Area/Market description" rows={5} bind:value={data.description} />
</div>
