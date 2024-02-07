<script lang="ts">
	import { nftMinterCanister } from '$lib/backend';
	import Input from '$lib/components/input/Input.svelte';
	import { page } from '$app/stores';

	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import Select from '$lib/components/select/Select.svelte';

	export let loading = true;

	export const saveData = async () => {
		loading = true;
		try {
			const actor = nftMinterCanister($page.params.id);
			const res = await actor.update_additional_details({
				year_built: [yearBuilt],
				occupied: [occupied],
				crime_score: [crimeScore],
				monthly_rent: [monthlyRent],
				beds: [beds],
				affordability: [affordability],
				last_renovation: [lastRenovated],
				square_footage: [squareFootage],
				flood_zone: [floodZone],
				price_per_sq_foot: [priceSqFt],
				baths: [baths],
				school_score: [schoolScore]
			});
		} catch (_) {
			console.error('Error fetching get_collection_metadata data');
		} finally {
			loading = false;
		}
	};

	let yearBuilt: number;
	let beds: number;
	let baths: number;
	let schoolScore: number;
	let crimeScore: number;
	let monthlyRent: number;
	let affordability: number;
	let squareFootage: number;
	let priceSqFt: number;
	let lastRenovated: string;
	let occupied: string;
	let floodZone: string;

	let allData: any;

	async function fetchDetails() {
		loading = true;
		try {
			const actor = nftMinterCanister($page.params.id);

			const res = await actor.get_collection_metadata();
			allData = res;
			if ('Ok' in res) {
				if (res.Ok.additional_metadata[0] && res.Ok.additional_metadata[0].additional_details[0]) {
					const details = res.Ok.additional_metadata[0].additional_details[0];
					details.year_built[0] && (yearBuilt = details.year_built[0]);
					details.occupied[0] && (occupied = details.occupied[0]);
					details.crime_score[0] && (crimeScore = details.crime_score[0]);
					details.monthly_rent[0] && (monthlyRent = details.monthly_rent[0]);
					details.beds[0] && (beds = details.beds[0]);
					details.affordability[0] && (affordability = details.affordability[0]);
					details.last_renovation[0] && (lastRenovated = details.last_renovation[0]);
					details.square_footage[0] && (squareFootage = details.square_footage[0]);
					details.flood_zone[0] && (floodZone = details.flood_zone[0]);
					details.price_per_sq_foot[0] && (priceSqFt = details.price_per_sq_foot[0]);
					details.baths[0] && (baths = details.baths[0]);
					details.school_score[0] && (schoolScore = details.school_score[0]);
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
	<Input label="Number of Bedrooms" type="number" bind:value={beds} />
	<Input label="Number of Bathrooms" type="number" bind:value={baths} />
	<Input label="Square footage" type="number" bind:value={squareFootage} />
	<Input label="Price per square feet" type="number" bind:value={priceSqFt} />
	<Input label="Monthly rent" type="number" bind:value={monthlyRent} />
	<Input label="Affordibility score" type="number" bind:value={affordability} />
	<Select
		label="Occupied"
		bind:value={occupied}
		options={[
			{ value: 'yes', label: 'Yes' },
			{ value: 'no', label: 'No' }
		]}
	/>
	<Input label="Year Built" type="number" bind:value={yearBuilt} />
	<Input label="Last renovated" type="text" bind:value={lastRenovated} />
	<Select
		label="Flood zone"
		bind:value={floodZone}
		options={[
			{ value: 'yes', label: 'Yes' },
			{ value: 'no', label: 'No' }
		]}
	/>
	<Input label="School score" type="number" bind:value={schoolScore} />
	<Input label="Crime score" type="number" bind:value={crimeScore} />
</div>

{#if allData}
	<pre transition:slide class="text-sm p-4 bg-gray-100 rounded-xl">
    {JSON.stringify(allData, null, 4)}
  </pre>
{/if}
