<script lang="ts" context="module">
	import type { _SERVICE } from '$lib/declarations/estate_dao_nft/estate_dao_nft.did';

	export type FinancialInfoData = ReturnType<typeof init>;

	const init = (data?: CollectionMetadata) => ({
		overall: {
			totalMonthlyCost: data?.total_monthly_cost || 0,
			monthlyCashFlow: data?.monthly_cash_flow || 0,
			propertyInsurance: data?.property_insurance || 0,
			expenseToIncomeRatio: data?.expense_to_income_ratio || 0
		},
		investment: {
			initialMaintenanceReserve: data?.initial_maintenance_reserve || 0,
			underlyingAssetPrice: data?.underlying_asset_price || 0,
			platformClosingFee: data?.platform_closing_fee || 0,
			minimumInvestment: Number(data?.min_investment) || 0
		},
		returns: {
			average5YearROI: data?.average_5_year_roi || 0,
			projectedAppreciation: data?.projected_appreciation || 0,
			capRate: data?.cap_rate || 0,
			total5YearsIrr: data?.total_5_year_irr || 0,
			yields: data?.yields || 0
		},
		rents: {
			vacancyRate: data?.vacancy_rate || 0,
			propertyTaxes: data?.property_taxes || 0,
			propertyManagementFee: data?.property_management_fee || 0,
			monthlyUtilities: data?.monthly_utilities || 0,
			llcMonthlyFranchiseTax: data?.llc_monthly_franchise_tax || 0,
			projectedRent: data?.projected_rent || 0
		}
	});
</script>

<script lang="ts">
	import Input from '$lib/components/input/Input.svelte';
	import type { CollectionMetadata } from '$lib/types/nftCanister';

	export let loading = true;
	export let data: FinancialInfoData = init();
</script>

<div class="flex flex-col gap-4">
	<Input
		disabled={loading}
		label="EstateDAO closing fees"
		type="number"
		bind:value={data.investment.platformClosingFee}
	/>
	<Input
		label="Initial maintenance reserve"
		type="number"
		bind:value={data.investment.initialMaintenanceReserve}
	/>
	<Input
		label="Underlying asset price"
		type="number"
		bind:value={data.investment.underlyingAssetPrice}
	/>
	<Input
		label="Minimum investment required"
		type="number"
		bind:value={data.investment.minimumInvestment}
	/>

	<Input label="Average 5 Years ROI" type="number" bind:value={data.returns.average5YearROI} />
	<Input label="Total yields" type="number" bind:value={data.returns.yields} />
	<Input label="5 Years IRR" type="number" bind:value={data.returns.total5YearsIrr} />
	<Input
		label="Projected appreciation"
		type="number"
		bind:value={data.returns.projectedAppreciation}
	/>
	<Input label="Cap rate" type="number" bind:value={data.returns.capRate} />

	<Input label="Projected rent" type="number" bind:value={data.rents.projectedRent} />
	<Input
		label="Monthly franchise tax"
		type="number"
		bind:value={data.rents.llcMonthlyFranchiseTax}
	/>
	<Input label="Vacancy rate" type="number" bind:value={data.rents.vacancyRate} />
	<Input label="Property taxes" type="number" bind:value={data.rents.propertyTaxes} />
	<Input
		label="Property management fee"
		type="number"
		bind:value={data.rents.propertyManagementFee}
	/>
	<Input label="Monthly utilities" type="number" bind:value={data.rents.monthlyUtilities} />

	<Input label="Property insurance" type="number" bind:value={data.overall.propertyInsurance} />
	<Input label="Monthly cash flow" type="number" bind:value={data.overall.monthlyCashFlow} />
	<Input
		label="Expense to income ratio"
		type="number"
		bind:value={data.overall.expenseToIncomeRatio}
	/>
	<Input label="Total monthly costs" type="number" bind:value={data.overall.totalMonthlyCost} />
</div>
