<script lang="ts" context="module">
	export type MarketInfoData = ReturnType<typeof initMarketInfo>;

	export const initMarketInfo = (data?: CollectionMetadata) => ({
        country: data?.country || '',
        city: data?.city || '',
        market_description: data?.market_description || '',
        state: data?.state || '',
        average_rent: data?.average_rent || 0,
        median_home_sale_price: data?.median_home_sale_price || 0,
        coordinates: data?.coordinates || '',
        annual_population_growth: data?.annual_population_growth || 0,
	});
</script>

<script lang="ts">
	import Input from '$lib/components/input/Input.svelte';
	import Textarea from '$lib/components/textarea/Textarea.svelte';
	import Select from '$lib/components/select/Select.svelte';
	import type { CollectionMetadata } from '$lib/types/nftCanister';
	import { isPrincipal } from '$lib/utils/isPrincipal';

	export let loading = true;
	export let data: MarketInfoData = initMarketInfo();
</script>

<div class="flex flex-col gap-4">
	<Input
		disabled={loading}
		label="Median Home Sale Price"
		type="number"
		bind:value={data.median_home_sale_price}
	/>
	<Input label="Average rent" type="number" bind:value={data.average_rent} />
	<Input label="Annual Population Growth" type="number" bind:value={data.annual_population_growth} />
	<Input label="Country" type="text" bind:value={data.country} />
	<Input label="State" type="text" bind:value={data.state} />
	<Input label="City" type="text" bind:value={data.city} />
	<Input label="Coordinates" type="text" bind:value={data.coordinates} />
	<Textarea label="Area/Market description" rows={5} bind:value={data.market_description} />
</div>
