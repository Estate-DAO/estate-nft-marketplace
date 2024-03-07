<script lang="ts" context="module">
	function renVal(val: string | number, prepend = '€') {
		return val === '--' ? '--' : `${prepend ? prepend + ' ' : ''} ${Number(val).toLocaleString()}`;
	}
</script>

<script lang="ts">
	import InfoTitle from './InfoTitle.svelte';
	import type { CollectionMetadata } from '$lib/declarations/estate_dao_nft_backend/estate_dao_nft_backend.did';

	export let metadata: CollectionMetadata;

	$: assetPrice =
		metadata.additional_metadata[0]?.financial_details?.[0]?.investment?.[0]
			?.underlying_asset_price?.[0] || '--';
	$: platformFee =
		metadata.additional_metadata[0]?.financial_details?.[0]?.investment?.[0]
			?.platform_closing_fee?.[0] || 'Waived';
	$: maintenanceReserve =
		metadata.additional_metadata[0]?.financial_details?.[0]?.investment?.[0]
			?.initial_maintenance_reserve?.[0] || '--';

	$: fiveYearIRR =
		metadata.additional_metadata[0]?.financial_details?.[0]?.returns?.[0]?.total_5_year_irr?.[0] ||
		'--';
	$: projectedAppreciation =
		metadata.additional_metadata[0]?.financial_details?.[0]?.returns?.[0]
			?.projected_appreciation?.[0] || '--';
	$: average5YearROI =
		metadata.additional_metadata[0]?.financial_details?.[0]?.returns?.[0]
			?.average_5_year_roi?.[0] || '--';
	$: capRate =
		metadata.additional_metadata[0]?.financial_details?.[0]?.returns?.[0]?.cap_rate?.[0] || '--';

	$: vacancyRate =
		metadata.additional_metadata[0]?.financial_details?.[0]?.rents?.[0]?.vacancy_rate?.[0] || '--';

	$: monthlyUtiliiies =
		metadata.additional_metadata[0]?.financial_details?.[0]?.rents?.[0]?.monthly_utiliiies?.[0] ||
		'--';
	$: projectedRent =
		metadata.additional_metadata[0]?.financial_details?.[0]?.rents?.[0]?.projected_rent?.[0] ||
		'--';

	$: propertyManagementFee =
		metadata.additional_metadata[0]?.financial_details?.[0]?.rents?.[0]
			?.property_managment_fee?.[0] || '--';

	$: llcMonthlyFranchiseTax =
		metadata.additional_metadata[0]?.financial_details?.[0]?.rents?.[0]
			?.llc_monthly_franchise_tax?.[0] || '--';

	$: propertyTaxes =
		metadata.additional_metadata[0]?.financial_details?.[0]?.rents?.[0]?.property_taxes?.[0] ||
		'--';

	$: expenseToIncomeRatio =
		metadata.additional_metadata[0]?.financial_details?.[0]?.expense_to_income_ratio?.[0] || '--';

	$: monthlyCashFlow =
		metadata.additional_metadata[0]?.financial_details?.[0]?.monthly_cash_flow?.[0] || '--';

	$: propertyInsurance =
		metadata.additional_metadata[0]?.financial_details?.[0]?.property_insurance?.[0] || '--';

	$: monthlyCosts =
		metadata.additional_metadata[0]?.financial_details?.[0]?.total_monthly_cost?.[0] || '--';
</script>

<div class="flex flex-col gap-8 py-4">
	<div class="rounded-2xl shadow-lg py-4 flex flex-col gap-5">
		<div
			class="flex items-center flex-nowrap gap-4 justify-between px-6 pb-4 border-black/10 border-b-[1px]"
		>
			<div class="text-lg font-bold">Total Investment Value</div>
			<div class="font-bold text-lg whitespace-nowrap">{renVal(52000)}</div>
		</div>
		<div class="flex items-center gap-4 justify-between px-6">
			<div>Underlying Asset Price</div>
			<div class="text-lg whitespace-nowrap">{renVal(assetPrice)}</div>
		</div>
		<div class="flex items-center gap-4 justify-between px-6">
			<div>Platform fee</div>
			<div class="text-lg whitespace-nowrap">{platformFee}</div>
		</div>
		<div class="flex items-center gap-4 justify-between px-6">
			<div>Initial Maintenance Reserve</div>
			<div class="text-lg whitespace-nowrap">{renVal(maintenanceReserve)}</div>
		</div>
	</div>

	<!-- <div class="rounded-2xl shadow-lg py-4 flex flex-col gap-5">
		<div class="flex items-center justify-between px-6 pb-4 border-black/10 border-b-[1px]">
			<InfoTitle classes="font-bold" title="Total Returns (5 Year IRR)" />
			<div class="font-bold text-lg">{fiveYearIRR} %</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle title="Projected Appreciation" />
			<div class="text-lg">{projectedAppreciation} %</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle title="Average 5 Year ROI" />
			<div class="text-lg">{average5YearROI} %</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle title="Cap Rate" />
			<div class="text-lg">{capRate} %</div>
		</div>
	</div> -->

	<div class="rounded-2xl shadow-lg py-4 flex flex-col gap-5">
		<div class="flex items-center justify-between px-6 pb-4 border-black/10 border-b-[1px]">
			<InfoTitle classes="font-bold" title="Monthly Gross Rents" />
			<div class="font-bold text-lg">{renVal(projectedRent)}</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle title="Vacancy Rate" />
			<div class="text-lg">{renVal(vacancyRate)}</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle title="Monthly Utilities" />
			<div class="text-lg">{renVal(monthlyUtiliiies)}</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle title="Property Management Fee" />
			<div class="text-lg">{renVal(propertyManagementFee)}</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle title="LLC Monthly Franchise Tax" />
			<div class="text-lg">{renVal(llcMonthlyFranchiseTax)}</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle title="Property Taxes" />
			<div class="text-lg">{renVal(propertyTaxes)}</div>
		</div>
	</div>

	<!--
	<div class="rounded-2xl shadow-lg py-4 flex flex-col gap-5">
		<div class="flex items-center justify-between px-6 pb-4 border-black/10 border-b-[1px]">
			<InfoTitle classes="font-bold" title="Property Insurance" />
			<div class="font-bold text-lg">{renVal(propertyInsurance)}</div>
		</div>
		<div class="flex items-center justify-between px-6 pb-4 border-black/10 border-b-[1px]">
			<InfoTitle classes="font-bold" title="Expense to income Ratio" />
			<div class="text-lg">{renVal(expenseToIncomeRatio, '')}</div>
		</div>
		<div class="flex items-center justify-between px-6 pb-4 border-black/10 border-b-[1px]">
			<InfoTitle classes="font-bold" title="Total Monthly Costs" />
			<div class="text-lg">{renVal(monthlyCosts)}</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle classes="font-bold" title="Monthly Cash Flow" />
			<div class="text-lg">${monthlyCashFlow}</div>
		</div>
	</div> -->
</div>
