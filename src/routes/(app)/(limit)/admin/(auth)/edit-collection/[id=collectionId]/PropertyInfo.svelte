<script lang="ts" context="module">
	const init = (propertyDetails?: PropertyDetails) => ({
		areaSqFoot: propertyDetails?.square_footage?.[0] || 0,
		beds: propertyDetails?.beds?.[0] || 0,
		baths: propertyDetails?.baths?.[0] || 0,
		yearBuilt: propertyDetails?.year_built?.[0] || 0,
		occupied: propertyDetails?.occupied?.[0] || false,
		crimeScore: propertyDetails?.crime_score?.[0] || 0,
		monthlyRent: propertyDetails?.monthly_rent?.[0] || 0,
		affordability: propertyDetails?.affordability?.[0] || 0,
		lastRenovated: propertyDetails?.last_renovated?.[0] || 0,
		floodZone: propertyDetails?.flood_zone?.[0] || false,
		priceSqFt: propertyDetails?.price_per_sq_foot?.[0] || 0,
		schoolScore: propertyDetails?.school_score?.[0] || 0
	});
</script>

<script lang="ts">
	import { nftMinterCanister } from '$lib/backend';
	import Input from '$lib/components/input/Input.svelte';
	import { getCollectionId } from './collectionId.context';
	import type { PropertyDetails } from '$lib/declarations/estate_dao_nft_backend/estate_dao_nft_backend.did';
	import Select from '$lib/components/select/Select.svelte';

	export let loading = true;
	export let propertyDetails: PropertyDetails | undefined = undefined;

	const { minterCanId } = getCollectionId();

	let {
		areaSqFoot,
		beds,
		baths,
		yearBuilt,
		occupied,
		crimeScore,
		monthlyRent,
		affordability,
		lastRenovated,
		floodZone,
		priceSqFt,
		schoolScore
	} = init(propertyDetails);

	export const saveData = async () => {
		loading = true;
		try {
			const actor = nftMinterCanister(minterCanId);
			const res = await actor.update_property_details({
				year_built: [Number(yearBuilt)],
				occupied: [occupied],
				crime_score: [Number(crimeScore)],
				monthly_rent: [Number(monthlyRent)],
				beds: [Number(beds)],
				affordability: [Number(affordability)],
				last_renovated: [Number(lastRenovated)],
				square_footage: [Number(areaSqFoot)],
				flood_zone: [floodZone],
				price_per_sq_foot: [Number(priceSqFt)],
				baths: [Number(baths)],
				school_score: [Number(schoolScore)]
			});
			console.log('updated', { res });
		} catch (e) {
			console.error('Error update_property_details', e);
		} finally {
			loading = false;
		}
	};
</script>

<div class="flex flex-col gap-4">
	<Input label="Number of Bedrooms" type="number" bind:value={beds} />
	<Input label="Number of Bathrooms" type="number" bind:value={baths} />
	<Input label="Area (in square ft.)" type="number" bind:value={areaSqFoot} />
	<Input label="Price per square feet" type="number" bind:value={priceSqFt} />
	<Input label="Monthly rent" type="number" bind:value={monthlyRent} />
	<Input label="Affordibility score" type="number" bind:value={affordability} />
	<Select
		label="Occupied"
		on:change={({ detail }) => (occupied = detail === 'yes')}
		value={occupied ? 'yes' : 'no'}
		options={[
			{ value: 'yes', label: 'Yes' },
			{ value: 'no', label: 'No' }
		]}
	/>
	<Input label="Year Built" type="number" bind:value={yearBuilt} />
	<Input label="Last renovated" type="number" bind:value={lastRenovated} />
	<Select
		label="Flood zone"
		on:change={({ detail }) => (floodZone = detail === 'yes')}
		value={floodZone ? 'yes' : 'no'}
		options={[
			{ value: 'yes', label: 'Yes' },
			{ value: 'no', label: 'No' }
		]}
	/>
	<Input label="School score" type="number" bind:value={schoolScore} />
	<Input label="Crime score" type="number" bind:value={crimeScore} />
</div>
