<script lang="ts" context="module">
	export type PropertyInfoData = ReturnType<typeof init>;

	const init = (data?: CollectionMetadata) => ({
		areaSqFoot: data?.square_footage || 0,
		beds: data?.beds || 0,
		baths: data?.baths || 0,
		yearBuilt: data?.year_built || 0,
		occupied: data?.occupied || false,
		crimeScore: data?.crime_score || 0,
		monthlyRent: data?.monthly_rent || 0,
		affordability: data?.affordability || 0,
		lastRenovated: data?.last_renovated || 0,
		floodZone: data?.flood_zone || false,
		priceSqFt: data?.price_per_sq_foot || 0,
		schoolScore: data?.school_score || 0
	});
</script>

<script lang="ts">
	import Input from '$lib/components/input/Input.svelte';
	import Select from '$lib/components/select/Select.svelte';
	import type { CollectionMetadata } from '$lib/types/nftCanister';

	export let loading = true;
	export let data: PropertyInfoData = init();
</script>

<div class="flex flex-col gap-4">
	<Input disabled={loading} label="Number of Bedrooms" type="number" bind:value={data.beds} />
	<Input disabled={loading} label="Number of Bathrooms" type="number" bind:value={data.baths} />
	<Input
		disabled={loading}
		label="Area (in square ft.)"
		type="number"
		bind:value={data.areaSqFoot}
	/>
	<Input
		disabled={loading}
		label="Price per square feet"
		type="number"
		bind:value={data.priceSqFt}
	/>
	<Input disabled={loading} label="Monthly rent" type="number" bind:value={data.monthlyRent} />
	<Input
		disabled={loading}
		label="Affordability score"
		type="number"
		bind:value={data.affordability}
	/>
	<Select
		disabled={loading}
		label="Occupied"
		on:change={({ detail }) => (data.occupied = detail === 'yes')}
		value={data.occupied ? 'yes' : 'no'}
		options={[
			{ value: 'yes', label: 'Yes' },
			{ value: 'no', label: 'No' }
		]}
	/>
	<Input disabled={loading} label="Year Built" type="number" bind:value={data.yearBuilt} />
	<Input disabled={loading} label="Last renovated" type="number" bind:value={data.lastRenovated} />
	<Select
		disabled={loading}
		label="Flood zone"
		on:change={({ detail }) => (data.floodZone = detail === 'yes')}
		value={data.floodZone ? 'yes' : 'no'}
		options={[
			{ value: 'yes', label: 'Yes' },
			{ value: 'no', label: 'No' }
		]}
	/>
	<Input disabled={loading} label="School score" type="number" bind:value={data.schoolScore} />
	<Input disabled={loading} label="Crime score" type="number" bind:value={data.crimeScore} />
</div>
