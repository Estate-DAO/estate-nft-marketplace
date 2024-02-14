<script lang="ts" context="module">
	export type PropertyInfoData = ReturnType<typeof init>;

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
	import Input from '$lib/components/input/Input.svelte';
	import type { PropertyDetails } from '$lib/declarations/estate_dao_nft_backend/estate_dao_nft_backend.did';
	import Select from '$lib/components/select/Select.svelte';

	export let loading = true;
	export let data: PropertyInfoData = init();
</script>

<div class="flex flex-col gap-4">
	<Input disabled={loading} label="Number of Bedrooms" type="number" bind:value={data.beds} />
	<Input label="Number of Bathrooms" type="number" bind:value={data.baths} />
	<Input label="Area (in square ft.)" type="number" bind:value={data.areaSqFoot} />
	<Input label="Price per square feet" type="number" bind:value={data.priceSqFt} />
	<Input label="Monthly rent" type="number" bind:value={data.monthlyRent} />
	<Input label="Affordibility score" type="number" bind:value={data.affordability} />
	<Select
		label="Occupied"
		on:change={({ detail }) => (data.occupied = detail === 'yes')}
		value={data.occupied ? 'yes' : 'no'}
		options={[
			{ value: 'yes', label: 'Yes' },
			{ value: 'no', label: 'No' }
		]}
	/>
	<Input label="Year Built" type="number" bind:value={data.yearBuilt} />
	<Input label="Last renovated" type="number" bind:value={data.lastRenovated} />
	<Select
		label="Flood zone"
		on:change={({ detail }) => (data.floodZone = detail === 'yes')}
		value={data.floodZone ? 'yes' : 'no'}
		options={[
			{ value: 'yes', label: 'Yes' },
			{ value: 'no', label: 'No' }
		]}
	/>
	<Input label="School score" type="number" bind:value={data.schoolScore} />
	<Input label="Crime score" type="number" bind:value={data.crimeScore} />
</div>
