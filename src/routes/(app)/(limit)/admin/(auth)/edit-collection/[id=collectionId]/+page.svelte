<script lang="ts">
	import FormHeader, { type SelectedTab } from '$lib/components/data-forms/FormHeader.svelte';
	import BasicInfo, { type BasicInfoData } from '$lib/components/data-forms/BasicInfo.svelte';
	import PropertyInfo, {
		type PropertyInfoData
	} from '$lib/components/data-forms/PropertyInfo.svelte';
	import MarketInfo, { type MarketInfoData } from '$lib/components/data-forms/MarketInfo.svelte';
	import FinancialInfo, {
		type FinancialInfoData
	} from '$lib/components/data-forms/FinancialInfo.svelte';
	import { setCollectionId } from './collectionId.context';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import type { PageData } from './$types';
	import { replacer } from '$lib/utils/json';
	import type { CollectionMetadata } from '$lib/types/nftCanister';
	import { nftCanister } from '$lib/backend';
	import ImagesInfo from '$lib/components/data-forms/ImagesInfo.svelte';
	import {
		getUpdatePropertyFormData,
		initUpdateFormData
	} from '$lib/components/data-forms/form.utils';
	import { Principal } from '@dfinity/principal';

	export let data: PageData;

	const { minterCanId, assetCanId } = data;
	$: setCollectionId(minterCanId, assetCanId);

	let selectedTab: SelectedTab = 'basic';
	let loading = false;
	let collectionMetadata: CollectionMetadata;

	let basicInfoData: BasicInfoData;
	let propertyInfoData: PropertyInfoData;
	let financialInfoData: FinancialInfoData;
	let marketInfoData: MarketInfoData;
	let propertyImages: string[] = [];
	// let documentsInfo: DocumentsInfo;

	async function editData() {
		if (loading) return;
		try {
			loading = true;
			const actor = nftCanister(minterCanId);
			await actor.update_metadata(
				getUpdatePropertyFormData(
					basicInfoData,
					propertyInfoData,
					financialInfoData,
					marketInfoData,
					Principal.from(assetCanId),
					collectionMetadata
				)[0]
			);
		} finally {
			loading = false;
		}
	}

	async function fetchDetails() {
		loading = true;
		try {
			const actor = nftCanister(minterCanId);
			collectionMetadata = await actor.get_property_metadata();
			const data = initUpdateFormData(collectionMetadata);
			basicInfoData = data.basicInfoData;
			propertyInfoData = data.propertyInfoData;
			financialInfoData = data.financialInfoData;
			marketInfoData = data.marketInfoData;
		} catch (_) {
			console.error('Error updating metadata');
		} finally {
			loading = false;
		}
	}

	onMount(fetchDetails);
</script>

<div class="flex flex-col gap-12">
	<FormHeader
		title="Edit collection"
		bind:loading
		on:cancel={() => history.back()}
		on:save={() => editData()}
		bind:selected={selectedTab}
	>
		<svelte:fragment>
			{#if collectionMetadata}
				{#if selectedTab === 'basic'}
					<BasicInfo {loading} bind:data={basicInfoData} />
				{:else if selectedTab === 'property'}
					<PropertyInfo {loading} bind:data={propertyInfoData} />
				{:else if selectedTab === 'financial'}
					<FinancialInfo {loading} bind:data={financialInfoData} />
				{:else if selectedTab === 'market'}
					<MarketInfo bind:data={marketInfoData} {loading} />
					<!-- {:else if selectedTab === 'documents'}
					<DocumentsInfo bind:data={collectionMetadata} {loading} /> -->
				{:else if selectedTab === 'images'}
					<ImagesInfo bind:images={propertyImages} />
				{/if}
			{/if}
		</svelte:fragment>
	</FormHeader>
</div>

{#if collectionMetadata}
	<pre transition:slide class="text-sm p-4 mt-8 bg-gray-100 rounded-xl">
    {JSON.stringify(collectionMetadata, replacer, 4)}
  </pre>
{/if}
