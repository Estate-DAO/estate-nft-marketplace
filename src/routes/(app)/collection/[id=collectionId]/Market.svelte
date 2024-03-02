<script lang="ts">
	import type { CollectionMetadata } from '$lib/declarations/estate_dao_nft_backend/estate_dao_nft_backend.did';

	export let metadata: CollectionMetadata;

	$: location = metadata.additional_metadata[0]?.market_details?.[0]?.country?.[0] || 'Not set';
	$: averageRent = metadata.additional_metadata[0]?.market_details?.[0]?.average_rent?.[0] || '--';
	$: annualPopulationGrowth =
		metadata.additional_metadata[0]?.market_details?.[0]?.annual_popullation_growth?.[0] || '--';
	$: medianHomeSalePrice =
		metadata.additional_metadata[0]?.market_details?.[0]?.median_home_sale_price?.[0] || '--';
	$: description =
		metadata.additional_metadata[0]?.market_details?.[0]?.description?.[0] || 'Not set';
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

	<div class="font-thin text-2xl">Location: {location}</div>

	<div class="flex items-center gap-2 pt-8">
		<div
			class="border border-black/20 flex-1 rounded-xl p-4 flex flex-col gap-1 text-black items-center"
		>
			<div class="font-bold text-nowrap">Median Home Sale Price</div>
			<div class="">$ {medianHomeSalePrice}</div>
		</div>
		<div
			class="border border-black/20 flex-1 rounded-xl p-4 flex flex-col gap-1 text-black items-center"
		>
			<div class="font-bold">Average Rent (3 Bed)</div>
			<div class="">$ {averageRent}</div>
		</div>
		<div
			class="border border-black/20 flex-1 rounded-xl p-4 flex flex-col gap-1 text-black items-center"
		>
			<div class="font-bold text-nowrap">Annual Population Growth</div>
			<div class="">$ {annualPopulationGrowth}</div>
		</div>
	</div>

	<div class="font-bold pt-4">Why Market?</div>
	<div>
		{description}
	</div>
</div>
