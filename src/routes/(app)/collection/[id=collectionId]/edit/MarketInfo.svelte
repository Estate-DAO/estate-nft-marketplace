<script lang="ts">
	import { nftMinterCanister } from '$lib/backend';
	import Input from '$lib/components/input/Input.svelte';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { getCollectionId } from '../collectionId.context';

	export let loading = true;

	const { minterCanId } = getCollectionId();

	export const saveData = async () => {
		loading = true;
		try {
			const actor = nftMinterCanister(minterCanId);
			const res = await actor.update_market_details({
				annual_popullation_growth: [annualPopulationGrowth],
				average_rent: [averageRent],
				location: [proplocation],
				median_home_sale_price: [medianHomeSalePrice]
			});
		} catch (_) {
			console.error('Error fetching get_collection_metadata data');
		} finally {
			loading = false;
		}
	};

	let annualPopulationGrowth: number;
	let averageRent: number;
	let medianHomeSalePrice: number;
	let proplocation: string;

	let allData: any;

	async function fetchDetails() {
		loading = true;
		try {
			const actor = nftMinterCanister(minterCanId);

			const res = await actor.get_collection_metadata();
			allData = res;
			if ('Ok' in res) {
				if (res.Ok.additional_metadata[0] && res.Ok.additional_metadata[0].market_details[0]) {
					const details = res.Ok.additional_metadata[0].market_details[0];

					details.annual_popullation_growth[0] &&
						(annualPopulationGrowth = details.annual_popullation_growth[0]);
					details.average_rent[0] && (averageRent = details.average_rent[0]);
					details.location[0] && (proplocation = details.location[0]);
					details.median_home_sale_price[0] &&
						(medianHomeSalePrice = details.median_home_sale_price[0]);
				}
			}
		} catch (_) {
			console.error('Error fetching get_collection_metadata data');
		} finally {
			loading = false;
		}
	}

	onMount(fetchDetails);
</script>

<div class="flex flex-col gap-4">
	<Input label="Median Home Sale Price" type="number" bind:value={medianHomeSalePrice} />
	<Input label="Average rent" type="number" bind:value={averageRent} />
	<Input label="Annual Population Growth" type="number" bind:value={annualPopulationGrowth} />
	<Input label="proplocation" type="text" bind:value={proplocation} />
</div>

{#if allData}
	<pre transition:slide class="text-sm p-4 bg-gray-100 rounded-xl">
    {JSON.stringify(allData, null, 4)}
  </pre>
{/if}
