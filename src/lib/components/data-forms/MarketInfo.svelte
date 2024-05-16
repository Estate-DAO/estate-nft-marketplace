<script lang="ts" context="module">
	export type MarketInfoData = ReturnType<typeof init>;

	const init = (data?: CollectionMetadata) => ({
		annualPopulationGrowth: data?.annual_population_growth || 0,
		averageRent: data?.average_rent || 0,
		medianHomeSalePrice: data?.median_home_sale_price || 0,
		country: data?.country || '',
		city: data?.city || '',
		state: data?.state || '',
		description: data?.description || '',
		coordinates: data?.coordinates || ''
	});
</script>

<script lang="ts">
	import Input from '$lib/components/input/Input.svelte';
	import Textarea from '$lib/components/textarea/Textarea.svelte';
	import type { CollectionMetadata } from '$lib/types/nftCanister';

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
	<Input disabled={loading} label="Average rent" type="number" bind:value={data.averageRent} />
	<Input
		disabled={loading}
		label="Annual Population Growth"
		type="number"
		bind:value={data.annualPopulationGrowth}
	/>
	<Input disabled={loading} label="Country" type="text" bind:value={data.country} />
	<Input disabled={loading} label="State" type="text" bind:value={data.state} />
	<Input disabled={loading} label="City" type="text" bind:value={data.city} />
	<Input disabled={loading} label="Coordinates" type="text" bind:value={data.coordinates} />
	<Textarea
		disabled={loading}
		label="Area/Market description"
		rows={5}
		bind:value={data.description}
	/>
</div>
