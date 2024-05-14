<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import FormHeader, { type SelectedTab } from './FormHeader.svelte';
	import BasicInfo, { type BasicInfoData } from './BasicInfo.svelte';
	import PropertyInfo, { type PropertyInfoData } from './PropertyInfo.svelte';
	import MarketInfo, { type MarketInfoData } from './MarketInfo.svelte';
	import FinancialInfo, { type FinancialInfoData } from './FinancialInfo.svelte';
	import { provisionCanister, provisionCanisterV2 } from '$lib/backend';
	import { slide } from 'svelte/transition';
	import { authState } from '$lib/stores/auth';
	import { replacer } from '$lib/utils/json';
	import ImagesInfo from './ImagesInfo.svelte';
	import { getFormData } from './submitForm';

	let selectedTab: SelectedTab = 'basic';
	let loading = false;
	let res: any;

	let basicInfoData: BasicInfoData;
	let propertyInfoData: PropertyInfoData;
	let financialInfoData: FinancialInfoData;
	let marketInfoData: MarketInfoData;
	let propertyImages: string[] = [];

	async function submitForm() {
		if (loading) return;
		try {
			loading = true;
			const actor = provisionCanisterV2();
			res = await actor.add_property_request(
				getFormData(
					basicInfoData,
					propertyInfoData,
					financialInfoData,
					marketInfoData,
					propertyImages,
					$authState.idString
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
			bind:selected={selectedTab}
			on:cancel={() => history.back()}
			on:save={() => submitForm()}
			{loading}
		>
			<svelte:fragment>
				{#if selectedTab === 'basic'}
					<BasicInfo {loading} bind:data={basicInfoData} />
				{:else if selectedTab === 'property'}
					<PropertyInfo {loading} bind:data={propertyInfoData} />
				{:else if selectedTab === 'financial'}
					<FinancialInfo {loading} bind:data={financialInfoData} />
				{:else if selectedTab === 'market'}
					<MarketInfo bind:data={marketInfoData} {loading} />
				{:else if selectedTab === 'images'}
					<ImagesInfo bind:images={propertyImages} />
				{/if}
			</svelte:fragment>
		</FormHeader>
	{/if}
</div>
