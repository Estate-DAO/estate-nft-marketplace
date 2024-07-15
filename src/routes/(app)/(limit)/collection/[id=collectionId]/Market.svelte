<script lang="ts">
	import type { CollectionMetadata } from '$lib/types/nftCanister';

	export let metadata: CollectionMetadata;

	$: location = metadata?.country || 'Not set';
	$: averageRent = metadata?.average_rent || '--';
	$: annualPopulationGrowth = metadata?.annual_population_growth || '--';
	$: medianHomeSalePrice = metadata?.median_home_sale_price || '--';
	$: description = metadata?.market_description || '';
</script>

<div class="flex flex-col gap-4 py-4">
	<iframe
		title="location"
		class="w-full rounded-xl overflow-hidden"
		height="420"
		src="https://www.openstreetmap.org/export/embed.html?bbox=-5.346908569335938%2C36.25424062786422%2C-5.2686309814453125%2C36.30986881308669&amp;layer=mapnik"
	></iframe><br /><small
		><a href="https://www.openstreetmap.org/#map=14/36.2821/-5.3078">View Larger Map</a></small
	>

	<div class="font-light text-2xl">Location: {location}</div>

	{#if false}
		<div class="lg:flex grid col-auto lg:flex-row items-center gap-2 pt-8">
			<div
				class="border border-black/20 flex-1 rounded-xl p-4 flex flex-col gap-1 text-black items-center"
			>
				<div class="font-bold text-nowrap">Median Home Sale Price</div>
				<div class="">$ {medianHomeSalePrice}</div>
			</div>
			<div
				class="border border-black/20 flex-1 rounded-xl p-4 flex flex-col gap-1 text-black items-center"
			>
				<div class="font-bold whitespace-nowrap">Average Rent (3 Bed)</div>
				<div class="">$ {averageRent}</div>
			</div>
			<div
				class="border border-black/20 flex-1 rounded-xl p-4 flex flex-col gap-1 text-black items-center"
			>
				<div class="font-bold text-nowrap">Annual Population Growth</div>
				<div class="">$ {annualPopulationGrowth}</div>
			</div>
		</div>
	{/if}

	{#if description}
		<div class="font-bold pt-4">Why Market?</div>
		<div>
			{description}
		</div>
	{/if}
</div>
