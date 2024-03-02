<script lang="ts">
	import type { CollectionMetadata } from '$lib/declarations/estate_dao_nft_backend/estate_dao_nft_backend.did';

	export let metadata: CollectionMetadata;

	$: purchasePrice =
		metadata.additional_metadata[0]?.financial_details?.[0]?.investment?.[0]
			?.underlying_asset_price?.[0] || '--';
	$: yields =
		metadata.additional_metadata[0]?.financial_details?.[0]?.returns?.[0]?.yields?.[0] || '--';
	$: projectedRent =
		metadata.additional_metadata[0]?.financial_details?.[0]?.rents?.[0]?.projected_rent?.[0] ||
		'--';
	$: minInvestment =
		metadata.additional_metadata[0]?.financial_details?.[0]?.investment?.[0]?.min_investment?.[0] ||
		'--';
	$: yearBuilt = metadata.additional_metadata[0]?.property_details?.[0]?.year_built?.[0] || '--';

	$: console.log({ yields });
</script>

<div class="grid col-auto lg:flex items-center gap-2 pt-8">
	<div
		class="border border-black/20 flex-1 rounded-xl p-4 flex flex-col gap-1 text-black items-center"
	>
		<div class="font-bold text-nowrap">Purchase price</div>
		<div class="">€{purchasePrice}</div>
	</div>
	{#if yields !== '--'}
		<div
			class="border border-black/20 flex-1 rounded-xl p-4 flex flex-col gap-1 text-black items-center"
		>
			<div class="font-bold">Yield</div>
			<div class="">{yields}%</div>
		</div>
	{/if}
	{#if projectedRent !== '--'}
		<div
			class="border border-black/20 flex-1 rounded-xl p-4 flex flex-col gap-1 text-black items-center"
		>
			<div class="font-bold text-nowrap">Projected Rent</div>
			<div class="">€{projectedRent}</div>
		</div>
	{/if}
	{#if minInvestment !== '--'}
		<div
			class="border border-black/20 flex-1 rounded-xl p-4 flex flex-col gap-1 text-black items-center"
		>
			<div class="font-bold text-nowrap">Min. Investment</div>
			<div class="">€{minInvestment}</div>
		</div>
	{/if}
	<div
		class="border border-black/20 flex-1 rounded-xl p-4 flex flex-col gap-1 text-black items-center"
	>
		<div class="font-bold text-nowrap">Year Built</div>
		<div class="">{yearBuilt}</div>
	</div>
</div>
