<script lang="ts">
	import type { CollectionMetadata } from '$lib/declarations/estate_dao_nft_backend/estate_dao_nft_backend.did';

	export let metadata: CollectionMetadata;

	$: lastRenovated =
		metadata.additional_metadata[0]?.property_details?.[0]?.last_renovated || 'N/A';
	$: beds = metadata.additional_metadata[0]?.property_details?.[0]?.beds || 'N/A';
	$: crimeScore = metadata.additional_metadata[0]?.property_details?.[0]?.crime_score || 'N/A';
	$: yearBuilt = metadata.additional_metadata[0]?.property_details?.[0]?.year_built || 'N/A';
	$: occupied = metadata.additional_metadata[0]?.property_details?.[0]?.occupied || 'N/A';
	$: schoolScore = metadata.additional_metadata[0]?.property_details?.[0]?.school_score || 'N/A';
	$: squareFootage =
		metadata.additional_metadata[0]?.property_details?.[0]?.square_footage || 'N/A';
	$: baths = metadata.additional_metadata[0]?.property_details?.[0]?.baths || 'N/A';
	$: affordability = metadata.additional_metadata[0]?.property_details?.[0]?.affordability || 'N/A';
	$: floodZone = metadata.additional_metadata[0]?.property_details?.[0]?.flood_zone || 'N/A';
	$: monthlyRent = metadata.additional_metadata[0]?.property_details?.[0]?.monthly_rent || 'N/A';
	$: pricePerSqFoot =
		metadata.additional_metadata[0]?.property_details?.[0]?.price_per_sq_foot || 'N/A';
	$: description = metadata.desc || '';
</script>

<div class="flex flex-col gap-8 py-4">
	<div class="grid grid-cols-3 gap-4">
		<div class="flex flex-col">
			<div class="font-bold">Last Renovation</div>
			<div>{lastRenovated}</div>
		</div>
		<div class="flex flex-col">
			<div class="font-bold">Beds</div>
			<div>{beds}</div>
		</div>
		<div class="flex flex-col">
			<div class="font-bold">Crime Score</div>
			<div>{crimeScore}</div>
		</div>
		<div class="flex flex-col">
			<div class="font-bold">Year Built</div>
			<div>{yearBuilt}</div>
		</div>
		<div class="flex flex-col">
			<div class="font-bold">Occupied</div>
			<div>{occupied}</div>
		</div>
		<div class="flex flex-col">
			<div class="font-bold">School Score</div>
			<div>{schoolScore}</div>
		</div>
		<div class="flex flex-col">
			<div class="font-bold">Square Footage</div>
			<div>{squareFootage}</div>
		</div>
		<div class="flex flex-col">
			<div class="font-bold">Baths</div>
			<div>{baths}</div>
		</div>
		<div class="flex flex-col">
			<div class="font-bold">Affordability</div>
			<div>{affordability}</div>
		</div>
		<div class="flex flex-col">
			<div class="font-bold">Flood Zone</div>
			<div>{floodZone}</div>
		</div>
		<div class="flex flex-col">
			<div class="font-bold">Monthly Rent</div>
			<div>{monthlyRent}</div>
		</div>
		<div class="flex flex-col">
			<div class="font-bold">Price Per Sq. Foot</div>
			<div>{pricePerSqFoot}</div>
		</div>
	</div>

	<div>
		{description}
	</div>
</div>
