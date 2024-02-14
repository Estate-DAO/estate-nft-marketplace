<script lang="ts">
	import EditHeader, { type SelectedEditTab } from './EditHeader.svelte';
	import BasicInfo, { type BasicInfoData } from './BasicInfo.svelte';
	import PropertyInfo, { type PropertyInfoData } from './PropertyInfo.svelte';
	import DocumentsInfo from './DocumentsInfo.svelte';
	import MarketInfo, { type MarketInfoData } from './MarketInfo.svelte';
	import FinancialInfo, { type FinancialInfoData } from './FinancialInfo.svelte';
	import { provisionCanister } from '$lib/backend';
	import { slide } from 'svelte/transition';

	let selectedTab: SelectedEditTab = 'basic';
	let loading = false;
	let res: any;

	let basicInfoData: BasicInfoData;
	let propertyInfoData: PropertyInfoData;
	let financialInfoData: FinancialInfoData;
	let marketInfoData: MarketInfoData;

	async function submitForm() {
		if (loading) return;
		loading = true;
		const actor = provisionCanister();
		res = await actor.init_form_metadata({
			name: basicInfoData.name,
			desc: basicInfoData.description,
			owner: 'owner',
			property_images: [],
			supply_cap: 5000,
			additional_metadata: [
				{
					documents: [],
					market_details: [
						{
							annual_popullation_growth: [marketInfoData.annualPopulationGrowth],
							average_rent: [marketInfoData.averageRent],
							median_home_sale_price: [marketInfoData.medianHomeSalePrice],
							country: [marketInfoData.country],
							city: [marketInfoData.city],
							state: [marketInfoData.state],
							description: [marketInfoData.description],
							coordinates: [marketInfoData.coordinates]
						}
					],
					property_details: [
						{
							affordability: [propertyInfoData.affordability],
							baths: [propertyInfoData.baths],
							beds: [propertyInfoData.beds],
							crime_score: [propertyInfoData.crimeScore],
							flood_zone: [propertyInfoData.floodZone],
							last_renovated: [propertyInfoData.lastRenovated],
							monthly_rent: [propertyInfoData.monthlyRent],
							occupied: [propertyInfoData.occupied],
							price_per_sq_foot: [propertyInfoData.priceSqFt],
							school_score: [propertyInfoData.schoolScore],
							square_footage: [propertyInfoData.areaSqFoot],
							year_built: [propertyInfoData.yearBuilt]
						}
					],
					financial_details: [
						{
							expense_to_income_ratio: [financialInfoData.overall.expenseToIncomeRatio],
							total_monthly_cost: [financialInfoData.overall.totalMonthlyCost],
							investment: [
								{
									platform_closing_fee: [financialInfoData.investment.platformClosingFee],
									initial_maintenance_reserve: [
										financialInfoData.investment.initialMaintenanceReserve
									],
									underlying_asset_price: [financialInfoData.investment.underlyingAssetPrice],
									min_investment: [BigInt(financialInfoData.investment.mininumInvestment)]
								}
							],
							monthly_cash_flow: [financialInfoData.overall.montlyCashFlow],
							property_insurance: [financialInfoData.overall.propertyInsurance],
							rents: [
								{
									llc_monthly_franchise_tax: [financialInfoData.rents.llcMonthlyFranchiseTax],
									monthly_utiliiies: [financialInfoData.rents.monthlyUtilities],
									projected_rent: [financialInfoData.rents.projectedRent],
									property_managment_fee: [financialInfoData.rents.propertyManagementFee],
									property_taxes: [financialInfoData.rents.propertyTaxes],
									vacancy_rate: [financialInfoData.rents.vacancyRate]
								}
							],
							returns: [
								{
									average_5_year_roi: [financialInfoData.returns.average5YearROI],
									cap_rate: [financialInfoData.returns.capRate],
									projected_appreciation: [financialInfoData.returns.projectedAppreciation],
									total_5_year_irr: [financialInfoData.returns.total5YearsIrr],
									yields: [financialInfoData.returns.yields]
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
	<EditHeader
		bind:selected={selectedTab}
		on:cancel={() => history.back()}
		on:save={() => submitForm()}
		{loading}
	>
		<svelte:fragment>
			{#if res}
				<pre transition:slide class="text-sm p-4 mt-8 bg-gray-100 rounded-xl">
    {JSON.stringify(res, null, 4)}
  </pre>
			{/if}

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
	</EditHeader>
</div>
