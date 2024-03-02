<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import type { CollectionMetadata } from '$lib/declarations/estate_dao_nft_backend/estate_dao_nft_backend.did';
	import { adminStore } from '$lib/stores/admin';
	import Actions from './Actions.svelte';
	import Details from './Details.svelte';
	import Documents from './Documents.svelte';
	import Financials from './Financials.svelte';
	import Market from './Market.svelte';
	import PropertyInfoCards from './PropertyInfoCards.svelte';
	import Tabs from './Tabs.svelte';
	import { getCollectionId } from './collectionId.context';

	export let metadata: CollectionMetadata;

	const tabs = ['details', 'financials', 'the market'] as TABTYPE[];
	type TABTYPE = 'details' | 'financials' | 'the market';
	let selected: TABTYPE = 'details';

	const { id } = getCollectionId();

	$: country = metadata.additional_metadata[0]?.market_details?.[0]?.country?.[0] || 'Not set';
	$: beds = metadata.additional_metadata[0]?.property_details?.[0]?.beds?.[0] || '-';
	$: baths = metadata.additional_metadata[0]?.property_details?.[0]?.baths?.[0] || '-';
	$: squareFootage =
		metadata.additional_metadata[0]?.property_details?.[0]?.square_footage?.[0] || '-';
</script>

<div class="flex flex-col grow gap-4">
	<div class="flex justify-between">
		<div class="flex gap-8 items-center">
			<div class="text-5xl font-bold">{metadata.name}</div>
			<div
				class="py-2 px-4 text-xs translate-y-1 bg-black rounded-full text-white font-thin flex h-min items-center justify-center"
			>
				Upcoming
			</div>
		</div>
		{#if $adminStore.isLoggedIn}
			<Button secondary href="/auth/edit-collection/{id}">Edit</Button>
		{:else}
			<Actions title={metadata.name} />
		{/if}
	</div>
	<div class="font-thin text-2xl">
		Location: {country}
	</div>
	<div class="font-light text-2xl">{beds} Beds | {baths} Baths | {squareFootage} sq. ft.</div>
	<PropertyInfoCards {metadata} />
	<Tabs {tabs} bind:selected />
	{#if selected === 'details'}
		<Details {metadata} />
	{:else if selected === 'financials'}
		<Financials {metadata} />
	{:else if selected === 'the market'}
		<Market {metadata} />
	{/if}
</div>
