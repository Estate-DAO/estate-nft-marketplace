<script lang="ts">
	import type { CollectionMetadata } from '$lib/types/nftCanister';

	export let metadata: CollectionMetadata;

	const renVal = (n: number | string, pre = '€') =>
		n === '--' ? '--' : `${pre ? pre + ' ' : ''} ${n}`;

	$: lastRenovated = metadata?.last_renovated || 'N/A';
	$: beds = metadata?.beds || 'N/A';
	$: crimeScore = metadata?.crime_score || 'N/A';
	$: yearBuilt = metadata?.year_built || 'N/A';
	$: occupied = metadata?.occupied ? 'Yes' : 'No';
	$: schoolScore = metadata?.school_score || 'N/A';
	$: squareFootage = metadata?.square_footage || 'N/A';
	$: baths = metadata?.baths || 'N/A';
	$: affordability = metadata?.affordability || 'N/A';
	$: floodZone = metadata?.flood_zone ? 'Yes' : 'No';
	$: monthlyRent = metadata?.monthly_rent || 'N/A';
	$: pricePerSqFoot = metadata?.price_per_sq_foot || 'N/A';
	$: description = metadata?.description || '';
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
			<div>{squareFootage.toLocaleString()} sq ft.</div>
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
			<div>{renVal(monthlyRent.toLocaleString())}</div>
		</div>
		<div class="flex flex-col">
			<div class="font-bold">Price Per Sq. Foot</div>
			<div>{renVal(pricePerSqFoot.toLocaleString())}</div>
		</div>
	</div>

	<div class="flex flex-col">
		<div class="font-bold">Description</div>
		<div>{description}</div>
	</div>
</div>
