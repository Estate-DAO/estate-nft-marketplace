<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import { authState } from '$lib/stores/auth';
	import type { CollectionMetadata } from '$lib/types/nftCanister';
	import Actions from './Actions.svelte';
	import CollectionInfoCards from './CollectionInfoCards.svelte';
	import Details from './Details.svelte';
	import Documents from './Documents.svelte';
	import Financials from './Financials.svelte';
	import Market from './Market.svelte';
	import Tabs from './Tabs.svelte';
	import { getCollectionId } from './collectionId.context';

	export let metadata: CollectionMetadata;
	export let status: 'Live' | 'Rejected' | 'Accepted';

	const tabs = ['details', 'financials', 'the market', 'documents'] as TABTYPE[];
	type TABTYPE = 'details' | 'financials' | 'the market' | 'documents';
	let selected: TABTYPE = 'details';

	const { id } = getCollectionId();

	$: country = metadata?.country || 'Not set';
	$: beds = metadata?.beds || '-';
	$: baths = metadata?.baths || '-';
	$: squareFootage = metadata?.square_footage || '-';
</script>

<div class="flex flex-col grow gap-4">
	<div class="flex flex-col sm:flex-row gap-4 lg:justify-between lg:items-center">
		<div class="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
			<div class="text-2xl lg:text-5xl font-bold">{metadata.name}</div>
			<div
				class="py-2 px-4 text-xs bg-black rounded-full text-white font-light flex h-min items-center justify-center"
			>
				{status === 'Live' ? 'Open' : 'Closed'}
			</div>
		</div>
		{#if $authState.isLoggedIn && metadata.property_owner.toText() === $authState.idString}
			<Button secondary href="/admin/edit-collection/{id}">Edit</Button>
		{:else}
			<Actions title={metadata.name} />
		{/if}
	</div>
	<div class="font-light text-2xl">
		Location: {country}
	</div>
	<div class="font-light text-2xl">{beds} Beds | {baths} Baths | {squareFootage} sq. ft.</div>
	<CollectionInfoCards {metadata} />
	<Tabs {tabs} bind:selected />
	{#if selected === 'details'}
		<Details {metadata} />
	{:else if selected === 'financials'}
		<Financials {metadata} />
	{:else if selected === 'the market'}
		<Market {metadata} />
	{:else if selected === 'documents'}
		<Documents {metadata} />
	{/if}
</div>
