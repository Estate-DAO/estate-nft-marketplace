<script lang="ts">
	import type { CollectionMetadata } from '$lib/declarations/estate_dao_nft_backend/estate_dao_nft_backend.did';

	export let metadata: CollectionMetadata;

	$: location = metadata.additional_metadata[0]?.market_details?.[0]?.country || 'Not set';
	$: averageRent = metadata.additional_metadata[0]?.market_details?.[0]?.average_rent || '--';
	$: annualPopulationGrowth =
		metadata.additional_metadata[0]?.market_details?.[0]?.annual_popullation_growth || '--';
	$: medianHomeSalePrice =
		metadata.additional_metadata[0]?.market_details?.[0]?.median_home_sale_price || '--';
	$: description = metadata.additional_metadata[0]?.market_details?.[0]?.description || 'Not set';
</script>

<div class="flex flex-col gap-4 py-4">
	<iframe
		title="location"
		class="w-full rounded-xl overflow-hidden"
		height="420"
		src="https://www.openstreetmap.org/export/embed.html?bbox=-98.11958312988283%2C30.115730650183107%2C-97.44667053222656%2C30.49660948755449&amp;layer=mapnik"
	></iframe><br /><small
		><a href="https://www.openstreetmap.org/#map=12/30.3064/-97.7831">View Larger Map</a></small
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
