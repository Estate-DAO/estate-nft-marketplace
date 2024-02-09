<script lang="ts" context="module">
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
	import { nftMinterCanister } from '$lib/backend';
	import Input from '$lib/components/input/Input.svelte';
	import Textarea from '$lib/components/textarea/Textarea.svelte';
	import { getCollectionId } from '../collectionId.context';
	import type { MarketDetails } from '$lib/declarations/estate_dao_nft_backend/estate_dao_nft_backend.did';

	export let loading = true;
	export let marketDetails: MarketDetails | undefined = undefined;

	let {
		annualPopulationGrowth,
		averageRent,
		medianHomeSalePrice,
		city,
		state,
		country,
		description,
		coordinates
	} = init(marketDetails);

	const { minterCanId } = getCollectionId();

	export const saveData = async () => {
		loading = true;
		try {
			const actor = nftMinterCanister(minterCanId);
			const res = await actor.update_market_details({
				annual_popullation_growth: [Number(annualPopulationGrowth)],
				average_rent: [Number(averageRent)],
				median_home_sale_price: [Number(medianHomeSalePrice)],
				country: [country],
				city: [city],
				state: [state],
				description: [description],
				coordinates: [coordinates]
			});
			console.log('updated', { res });
		} catch (e) {
			console.error('Error update_market_details', e);
		} finally {
			loading = false;
		}
	};
</script>

<div class="flex flex-col gap-4">
	<Input label="Median Home Sale Price" type="number" bind:value={medianHomeSalePrice} />
	<Input label="Average rent" type="number" bind:value={averageRent} />
	<Input label="Annual Population Growth" type="number" bind:value={annualPopulationGrowth} />
	<Input label="Country" type="text" bind:value={country} />
	<Input label="State" type="text" bind:value={state} />
	<Input label="City" type="text" bind:value={city} />
	<Input label="Coordinates" type="text" bind:value={coordinates} />
	<Textarea label="Area/Market description" rows={5} bind:value={description} />
</div>
