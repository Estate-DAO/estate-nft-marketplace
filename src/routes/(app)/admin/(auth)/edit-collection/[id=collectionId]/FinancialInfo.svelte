<script lang="ts" context="module">
	const init = (financialDetails?: FinancialDetails) => ({
		overall: {
			totalMonthlyCost: financialDetails?.total_monthly_cost?.[0] || 0,
			montlyCashFlow: financialDetails?.monthly_cash_flow?.[0] || 0,
			propertyInsurance: financialDetails?.property_insurance?.[0] || 0,
			expenseToIncomeRatio: financialDetails?.expense_to_income_ratio?.[0] || 0
		},
		investment: {
			initialMaintenanceReserve:
				financialDetails?.investment?.[0]?.initial_maintenance_reserve?.[0] || 0,
			underlyingAssetPrice: financialDetails?.investment?.[0]?.underlying_asset_price?.[0] || 0,
			platformClosingFee: financialDetails?.investment?.[0]?.platform_closing_fee?.[0] || 0,
			mininumInvestment: Number(financialDetails?.investment?.[0]?.min_investment?.[0]) || 0
		},
		returns: {
			average5YearROI: financialDetails?.returns?.[0]?.average_5_year_roi?.[0] || 0,
			projectedAppreciation: financialDetails?.returns?.[0]?.projected_appreciation?.[0] || 0,
			capRate: financialDetails?.returns?.[0]?.cap_rate?.[0] || 0,
			total5YearsIrr: financialDetails?.returns?.[0]?.total_5_year_irr?.[0] || 0,
			yields: financialDetails?.returns?.[0]?.yields?.[0] || 0
		},
		rents: {
			vacancyRate: financialDetails?.rents?.[0]?.vacancy_rate?.[0] || 0,
			propertyTaxes: financialDetails?.rents?.[0]?.property_taxes?.[0] || 0,
			propertyManagementFee: financialDetails?.rents?.[0]?.property_managment_fee?.[0] || 0,
			monthlyUtilities: financialDetails?.rents?.[0]?.monthly_utiliiies?.[0] || 0,
			llcMonthlyFranchiseTax: financialDetails?.rents?.[0]?.llc_monthly_franchise_tax?.[0] || 0,
			projectedRent: financialDetails?.rents?.[0]?.projected_rent?.[0] || 0
		}
	});
</script>

<script lang="ts">
	import { nftMinterCanister } from '$lib/backend';
	import Input from '$lib/components/input/Input.svelte';
	import { getCollectionId } from './collectionId.context';
	import type { FinancialDetails } from '$lib/declarations/estate_dao_nft_backend/estate_dao_nft_backend.did';

	export let loading = true;
	export let financialDetails: FinancialDetails | undefined = undefined;

	const { minterCanId } = getCollectionId();

	let { overall, investment, returns, rents } = init(financialDetails);

	export const saveData = async () => {
		loading = true;
		try {
			const actor = nftMinterCanister(minterCanId);
			const res = await actor.update_financial_details({
				expense_to_income_ratio: [Number(overall.expenseToIncomeRatio)],
				total_monthly_cost: [Number(overall.totalMonthlyCost)],
				monthly_cash_flow: [Number(overall.montlyCashFlow)],
				property_insurance: [Number(overall.propertyInsurance)],
				investment: [
					{
						platform_closing_fee: [Number(investment.platformClosingFee)],
						initial_maintenance_reserve: [Number(investment.initialMaintenanceReserve)],
						underlying_asset_price: [Number(investment.underlyingAssetPrice)],
						min_investment: [BigInt(investment.mininumInvestment)]
					}
				],
				rents: [
					{
						vacancy_rate: [Number(rents.vacancyRate)],
						property_taxes: [Number(rents.propertyTaxes)],
						property_managment_fee: [Number(rents.propertyManagementFee)],
						monthly_utiliiies: [Number(rents.monthlyUtilities)],
						llc_monthly_franchise_tax: [Number(rents.llcMonthlyFranchiseTax)],
						projected_rent: [Number(rents.projectedRent)]
					}
				],
				returns: [
					{
						average_5_year_roi: [Number(returns.average5YearROI)],
						projected_appreciation: [Number(returns.projectedAppreciation)],
						cap_rate: [Number(returns.capRate)],
						total_5_year_irr: [Number(returns.total5YearsIrr)],
						yields: [Number(returns.yields)]
					}
				]
			});
			console.log('updated', { res });
		} catch (e) {
			console.error('Error update_financial_details', e);
		} finally {
			loading = false;
		}
	};
</script>

<div class="flex flex-col gap-4">
	<Input label="EstateDAO closing fees" type="number" bind:value={investment.platformClosingFee} />
	<Input
		label="Initial maintenance reserve"
		type="number"
		bind:value={investment.initialMaintenanceReserve}
	/>
	<Input
		label="Underlying asset price"
		type="number"
		bind:value={investment.underlyingAssetPrice}
	/>
	<Input
		label="Minimum investment required"
		type="number"
		bind:value={investment.mininumInvestment}
	/>

	<Input label="Average 5 Years ROI" type="number" bind:value={returns.average5YearROI} />
	<Input label="Total yeilds" type="number" bind:value={returns.yields} />
	<Input label="5 Years IRR" type="number" bind:value={returns.total5YearsIrr} />
	<Input label="Projected appreciation" type="number" bind:value={returns.projectedAppreciation} />
	<Input label="Cap rate" type="number" bind:value={returns.capRate} />

	<Input label="Projected rent" type="number" bind:value={rents.projectedRent} />
	<Input label="Monthly franchise tax" type="number" bind:value={rents.llcMonthlyFranchiseTax} />
	<Input label="Vacancy rate" type="number" bind:value={rents.vacancyRate} />
	<Input label="Property taxes" type="number" bind:value={rents.propertyTaxes} />
	<Input label="Property management fee" type="number" bind:value={rents.propertyManagementFee} />
	<Input label="Monthly utilities" type="number" bind:value={rents.monthlyUtilities} />

	<Input label="Property insurance" type="number" bind:value={overall.propertyInsurance} />
	<Input label="Monthly cash flow" type="number" bind:value={overall.montlyCashFlow} />
	<Input label="Expense to income ratio" type="number" bind:value={overall.expenseToIncomeRatio} />
	<Input label="Total monthly costs" type="number" bind:value={overall.totalMonthlyCost} />
</div>
