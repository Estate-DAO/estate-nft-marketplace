<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import FormHeader, { type SelectedTab } from './FormHeader.svelte';
	import BasicInfo, { type BasicInfoData } from './BasicInfo.svelte';
	import PropertyInfo, { type PropertyInfoData } from './PropertyInfo.svelte';
	import DocumentsInfo from './DocumentsInfo.svelte';
	import MarketInfo, { type MarketInfoData } from './MarketInfo.svelte';
	import FinancialInfo, { type FinancialInfoData } from './FinancialInfo.svelte';
	import { provisionCanister } from '$lib/backend';
	import { slide } from 'svelte/transition';
	import { authState } from '$lib/stores/auth';
	import { toE8s } from '$lib/utils/icp';
	import { replacer } from '$lib/utils/json';

	let selectedTab: SelectedTab = 'basic';
	let loading = false;
	let res: any;

	let basicInfoData: BasicInfoData;
	let propertyInfoData: PropertyInfoData;
	let financialInfoData: FinancialInfoData;
	let marketInfoData: MarketInfoData;

	function optional<T>(val: T | undefined | null): [] | [T] {
		return val ? [val] : [];
	}

	async function submitForm() {
		if (loading) return;
		loading = true;
		const actor = provisionCanister();
		res = await actor.init_form_metadata({
			name: basicInfoData.name,
			desc: basicInfoData.description,
			owner: $authState.idString || 'owner',
			property_images: [],
			supply_cap: BigInt(basicInfoData.supplyCap),
			image_uri: basicInfoData.coverImage,
			price: BigInt(toE8s(basicInfoData.price)),
			additional_metadata: [
				{
					documents: [],
					market_details: [
						{
							annual_popullation_growth: optional(marketInfoData?.annualPopulationGrowth),
							average_rent: optional(marketInfoData?.averageRent),
							median_home_sale_price: optional(marketInfoData?.medianHomeSalePrice),
							country: optional(marketInfoData?.country),
							city: optional(marketInfoData?.city),
							state: optional(marketInfoData?.state),
							description: optional(marketInfoData?.description),
							coordinates: optional(marketInfoData?.coordinates)
						}
					],
					property_details: [
						{
							affordability: optional(propertyInfoData?.affordability),
							baths: optional(propertyInfoData?.baths),
							beds: optional(propertyInfoData?.beds),
							crime_score: optional(propertyInfoData?.crimeScore),
							flood_zone: optional(propertyInfoData?.floodZone),
							last_renovated: optional(propertyInfoData?.lastRenovated),
							monthly_rent: optional(propertyInfoData?.monthlyRent),
							occupied: optional(propertyInfoData?.occupied),
							price_per_sq_foot: optional(propertyInfoData?.priceSqFt),
							school_score: optional(propertyInfoData?.schoolScore),
							square_footage: optional(propertyInfoData?.areaSqFoot),
							year_built: optional(propertyInfoData?.yearBuilt)
						}
					],
					financial_details: [
						{
							expense_to_income_ratio: optional(financialInfoData?.overall.expenseToIncomeRatio),
							total_monthly_cost: optional(financialInfoData?.overall.totalMonthlyCost),
							investment: [
								{
									platform_closing_fee: optional(financialInfoData?.investment.platformClosingFee),
									initial_maintenance_reserve: optional(
										financialInfoData?.investment.initialMaintenanceReserve
									),
									underlying_asset_price: optional(
										financialInfoData?.investment.underlyingAssetPrice
									),
									min_investment: optional(
										BigInt(financialInfoData?.investment.mininumInvestment ?? 0)
									)
								}
							],
							monthly_cash_flow: optional(financialInfoData?.overall.montlyCashFlow),
							property_insurance: optional(financialInfoData?.overall.propertyInsurance),
							rents: [
								{
									llc_monthly_franchise_tax: optional(
										financialInfoData?.rents.llcMonthlyFranchiseTax
									),
									monthly_utiliiies: optional(financialInfoData?.rents.monthlyUtilities),
									projected_rent: optional(financialInfoData?.rents.projectedRent),
									property_managment_fee: optional(financialInfoData?.rents.propertyManagementFee),
									property_taxes: optional(financialInfoData?.rents.propertyTaxes),
									vacancy_rate: optional(financialInfoData?.rents.vacancyRate)
								}
							],
							returns: [
								{
									average_5_year_roi: optional(financialInfoData?.returns.average5YearROI),
									cap_rate: optional(financialInfoData?.returns.capRate),
									projected_appreciation: optional(
										financialInfoData?.returns.projectedAppreciation
									),
									total_5_year_irr: optional(financialInfoData?.returns.total5YearsIrr),
									yields: optional(financialInfoData?.returns.yields)
								}
							]
						}
					]
				}
			]
		});
		loading = false;
	}
</script>

<div class="flex flex-col gap-12">
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
				{:else if selectedTab === 'financials'}
					<FinancialInfo {loading} bind:data={financialInfoData} />
				{:else if selectedTab === 'market'}
					<MarketInfo bind:data={marketInfoData} {loading} />
				{:else if selectedTab === 'documents'}
					<DocumentsInfo {loading} />
				{/if}
			</svelte:fragment>
		</FormHeader>
	{/if}
</div>
