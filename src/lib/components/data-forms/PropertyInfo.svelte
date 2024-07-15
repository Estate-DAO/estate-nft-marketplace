<script lang="ts" context="module">
	export type PropertyInfoData = ReturnType<typeof initPropertyInfo>;

	export const initPropertyInfo = (data?: CollectionMetadata) => ({
		year_built: data?.year_built || 0,
        occupied: data?.occupied || false,
        crime_score: data?.crime_score || 0,
        monthly_rent: data?.monthly_rent || 0,
        beds: data?.beds || 0,
        affordability: data?.affordability || 0,
        square_footage: data?.square_footage || 0,
        flood_zone: data?.flood_zone || false,
        price_per_sq_foot: data?.price_per_sq_foot || 0,
        baths: data?.baths || 0,
        school_score: data?.school_score || 0,
        last_renovated: data?.last_renovated || 0,
	});
</script>

<script lang="ts">
	import Input from '$lib/components/input/Input.svelte';
	import Textarea from '$lib/components/textarea/Textarea.svelte';
	import Select from '$lib/components/select/Select.svelte';
	import type { CollectionMetadata } from '$lib/types/nftCanister';
	import { isPrincipal } from '$lib/utils/isPrincipal';

	export let loading = true;
	export let data: PropertyInfoData = initPropertyInfo();
</script>

<div class="flex flex-col gap-4">
	<Input disabled={loading} label="Number of Bedrooms" type="number" bind:value={data.beds} />
	<Input label="Number of Bathrooms" type="number" bind:value={data.baths} />
	<Input label="Area (in square ft.)" type="number" bind:value={data.square_footage} />
	<Input label="Price per square feet" type="number" bind:value={data.price_per_sq_foot} />
	<Input label="Monthly rent" type="number" bind:value={data.monthly_rent} />
	<Input label="Affordability score" type="number" bind:value={data.affordability} />
	<Select
		label="Occupied"
		on:change={({ detail }) => (data.occupied = detail === 'yes')}
		value={data.occupied ? 'yes' : 'no'}
		options={[
			{ value: 'yes', label: 'Yes' },
			{ value: 'no', label: 'No' }
		]}
	/>
	<Input label="Year Built" type="number" bind:value={data.year_built} />
	<Input label="Last renovated" type="number" bind:value={data.last_renovated} />
	<Select
		label="Flood zone"
		on:change={({ detail }) => (data.flood_zone = detail === 'yes')}
		value={data.flood_zone ? 'yes' : 'no'}
		options={[
			{ value: 'yes', label: 'Yes' },
			{ value: 'no', label: 'No' }
		]}
	/>
	<Input label="School score" type="number" bind:value={data.school_score} />
	<Input label="Crime score" type="number" bind:value={data.crime_score} />
</div>
