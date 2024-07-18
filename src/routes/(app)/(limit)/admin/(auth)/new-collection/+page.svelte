<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import FormHeader, { type SelectedTab } from '$lib/components/data-forms/FormHeader.svelte';
	import BasicInfo, {
		initBasicInfo,
		type BasicInfoData
	} from '$lib/components/data-forms/BasicInfo.svelte';
	import { ASSET_CANISTER_ID, ASSET_PROXY_CANISTER_ID, provisionCanister } from '$lib/backend';
	import { slide } from 'svelte/transition';
	import { replacer } from '$lib/utils/json';
	import ImagesInfo, {
		initImagesInfo,
		type ImagesInfoData
	} from '$lib/components/data-forms/ImagesInfo.svelte';
	import { getNewCollectionFormData } from '$lib/components/data-forms/form.utils';
	import type { PropertyInfoData } from '$lib/components/data-forms/PropertyInfo.svelte';
	import PropertyInfo, {
		initPropertyInfo
	} from '$lib/components/data-forms/PropertyInfo.svelte';
	import type { FinancialInfoData } from '$lib/components/data-forms/FinancialInfo.svelte';
	import FinancialInfo, {
		initFinancialInfo
	} from '$lib/components/data-forms/FinancialInfo.svelte';
	import type { MarketInfoData } from '$lib/components/data-forms/MarketInfo.svelte';
	import MarketInfo, {
		initMarketInfo
	} from '$lib/components/data-forms/MarketInfo.svelte';
	import DocumentsInfo from '$lib/components/data-forms/DocumentsInfo.svelte';
	import type { CollectionMetadata } from '$lib/types/nftCanister';

	let selectedTab: SelectedTab = 'basic';
	let loading = false;
	let res: any;

	let basicInfoData: BasicInfoData = initBasicInfo();
	let propertyInfoData: PropertyInfoData = initPropertyInfo();
	let financialInfoData: FinancialInfoData = initFinancialInfo();
	let marketInfoData: MarketInfoData = initMarketInfo();
	let imagesInfoData: ImagesInfoData = initImagesInfo();
	let documents: CollectionMetadata['documents'] = [];

	let assetCanisterId = ASSET_CANISTER_ID!;
	let proxyCanisterId = ASSET_PROXY_CANISTER_ID!;

	async function submitForm() {
		if (loading) return;
		try {
			loading = true;
			const actor = provisionCanister();
			res = await actor.add_property_request(
				getNewCollectionFormData(
					basicInfoData,
					propertyInfoData,
					financialInfoData,
					marketInfoData,
					imagesInfoData,
					documents
				)
			);
		} finally {
			loading = false;
		}
	}
</script>

<div class="flex flex-col gap-12 pb-16">
	{#if res}
		<pre transition:slide class="text-sm p-4 mt-8 bg-gray-100 rounded-xl">{JSON.stringify(
				res,
				replacer,
				4
			)}</pre>

		<Button href="/admin/manage/list">Approve/Deny on admin panel</Button>
	{:else}
		<FormHeader
			title="New Collection"
			bind:selected={selectedTab}
			on:cancel={() => history.back()}
			on:save={() => submitForm()}
			{loading}
		>
			<svelte:fragment slot="subtitle">
				<div class="text-sm text-gray-500">Submit data to create a new collection.</div>
				<div class="text-sm text-gray-400">
					Submitted form will be approved by an admin for listing.
				</div>
			</svelte:fragment>
			<svelte:fragment>
				{#if selectedTab === 'basic'}
					<BasicInfo {loading} bind:data={basicInfoData} />
				{:else if selectedTab === 'property'}
					<PropertyInfo {loading} bind:data={propertyInfoData} />
				{:else if selectedTab === 'financial'}
					<FinancialInfo {loading} bind:data={financialInfoData} />
				{:else if selectedTab === 'market'}
					<MarketInfo {loading} bind:data={marketInfoData} />
				{:else if selectedTab === 'images'}
					<ImagesInfo
						{loading}
						assetCanisterId={ASSET_CANISTER_ID}
						uploadCanisterId={ASSET_PROXY_CANISTER_ID}
						bind:data={imagesInfoData}
					/>
				{:else if selectedTab === 'documents'}
					<DocumentsInfo
						{loading}
						assetCanisterId={assetCanisterId}
						uploadCanisterId={proxyCanisterId}
						bind:documents
					/>
				{/if}
			</svelte:fragment>
		</FormHeader>
	{/if}
</div>
