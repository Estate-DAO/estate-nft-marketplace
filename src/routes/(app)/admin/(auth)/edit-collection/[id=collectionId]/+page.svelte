<script lang="ts">
	import EditHeader, { type SelectedEditTab } from './EditHeader.svelte';
	import BasicInfo from './BasicInfo.svelte';
	import PropertyInfo from './PropertyInfo.svelte';
	import DocumentsInfo from './DocumentsInfo.svelte';
	import MarketInfo from './MarketInfo.svelte';
	import FinancialInfo from './FinancialInfo.svelte';
	import { nftMinterCanister } from '$lib/backend';
	import { getCollectionId, setCollectionId } from './collectionId.context';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import type { CollectionMetadata } from '$lib/declarations/estate_dao_nft_backend/estate_dao_nft_backend.did';
	import type { PageData } from './$types';

	export let data: PageData;

	const { minterCanId, assetCanId } = data;

	$: setCollectionId(minterCanId, assetCanId);

	let selectedTab: SelectedEditTab = 'basic';
	let loading = false;
	let collectionMetadata: CollectionMetadata;

	let basicInfo: BasicInfo;
	let propertyInfo: PropertyInfo;
	let documentsInfo: DocumentsInfo;
	let marketInfo: MarketInfo;
	let financialInfo: FinancialInfo;

	async function editData() {
		switch (selectedTab) {
			case 'basic':
				await basicInfo.saveData();
				break;
			case 'property':
				await propertyInfo.saveData();
				break;
			case 'market':
				await marketInfo.saveData();
				break;
			case 'financials':
				await financialInfo.saveData();
				break;
		}
		await fetchDetails();
	}

	async function fetchDetails() {
		loading = true;
		try {
			const actor = nftMinterCanister(minterCanId);

			const res = await actor.get_collection_metadata();
			if ('Ok' in res) {
				collectionMetadata = res.Ok;
			}
		} catch (_) {
			console.error('Error fetching get_collection_metadata data');
		} finally {
			loading = false;
		}
	}

	onMount(fetchDetails);
</script>

<div class="flex flex-col gap-12">
	<EditHeader
		bind:loading
		on:cancel={() => history.back()}
		on:save={() => editData()}
		bind:selected={selectedTab}
	>
		<svelte:fragment>
			{#if collectionMetadata}
				{#if selectedTab === 'basic'}
					<BasicInfo {collectionMetadata} bind:loading bind:this={basicInfo} />
				{:else if selectedTab === 'property'}
					<PropertyInfo
						propertyDetails={collectionMetadata?.additional_metadata?.[0]?.property_details?.[0]}
						bind:loading
						bind:this={propertyInfo}
					/>
				{:else if selectedTab === 'financials'}
					<FinancialInfo
						financialDetails={collectionMetadata?.additional_metadata?.[0]?.financial_details?.[0]}
						bind:loading
						bind:this={financialInfo}
					/>
				{:else if selectedTab === 'market'}
					<MarketInfo
						marketDetails={collectionMetadata?.additional_metadata?.[0]?.market_details?.[0]}
						bind:loading
						bind:this={marketInfo}
					/>
				{:else if selectedTab === 'documents'}
					<DocumentsInfo
						documents={collectionMetadata?.additional_metadata?.[0]?.documents}
						bind:loading
						bind:this={documentsInfo}
					/>
				{/if}
			{/if}
		</svelte:fragment>
	</EditHeader>
</div>

{#if collectionMetadata}
	<pre transition:slide class="text-sm p-4 mt-8 bg-gray-100 rounded-xl">
    {JSON.stringify(collectionMetadata, null, 4)}
  </pre>
{/if}
