<script lang="ts">
	import InfoTitle from './InfoTitle.svelte';
	import type { CollectionMetadata } from '$lib/declarations/estate_dao_nft_backend/estate_dao_nft_backend.did';

	export let metadata: CollectionMetadata;

	$: assetPrice =
		metadata.additional_metadata[0]?.financial_details?.[0]?.investment?.[0]
			?.underlying_asset_price || '--';
	$: platformFee =
		metadata.additional_metadata[0]?.financial_details?.[0]?.investment?.[0]
			?.platform_closing_fee || 'WAVED';
	$: maintenanceReserve =
		metadata.additional_metadata[0]?.financial_details?.[0]?.investment?.[0]
			?.initial_maintenance_reserve || '--';

	$: fiveYearIRR =
		metadata.additional_metadata[0]?.financial_details?.[0]?.returns?.[0]?.total_5_year_irr || '--';
	$: projectedAppreciation =
		metadata.additional_metadata[0]?.financial_details?.[0]?.returns?.[0]?.projected_appreciation ||
		'--';
	$: average5YearROI =
		metadata.additional_metadata[0]?.financial_details?.[0]?.returns?.[0]?.average_5_year_roi ||
		'--';
	$: capRate =
		metadata.additional_metadata[0]?.financial_details?.[0]?.returns?.[0]?.cap_rate || '--';

	$: vacancyRate =
		metadata.additional_metadata[0]?.financial_details?.[0]?.rents?.[0]?.vacancy_rate || '--';

	$: monthlyUtiliiies =
		metadata.additional_metadata[0]?.financial_details?.[0]?.rents?.[0]?.monthly_utiliiies || '--';

	$: propertyManagementFee =
		metadata.additional_metadata[0]?.financial_details?.[0]?.rents?.[0]?.property_managment_fee ||
		'--';

	$: llcMonthlyFranchiseTax =
		metadata.additional_metadata[0]?.financial_details?.[0]?.rents?.[0]
			?.llc_monthly_franchise_tax || '--';

	$: propertyTaxes =
		metadata.additional_metadata[0]?.financial_details?.[0]?.rents?.[0]?.property_taxes || '--';

	$: expenseToIncomeRatio =
		metadata.additional_metadata[0]?.financial_details?.[0]?.expense_to_income_ratio || '--';

	$: monthlyCashFlow =
		metadata.additional_metadata[0]?.financial_details?.[0]?.monthly_cash_flow || '--';

	$: propertyInsurance =
		metadata.additional_metadata[0]?.financial_details?.[0]?.property_insurance || '--';

	$: monthlyCosts =
		metadata.additional_metadata[0]?.financial_details?.[0]?.total_monthly_cost || '--';
</script>

<div class="flex flex-col gap-8 py-4">
	<div class="rounded-2xl shadow-lg py-4 flex flex-col gap-5">
		<div class="flex items-center justify-between px-6 pb-4 border-black/10 border-b-[1px]">
			<InfoTitle classes="font-bold" title="Total Investment Value" />
			<div class="font-bold text-lg">$ {assetPrice}</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle title="Underlyning Asset Price" />
			<div class="text-lg">$ {assetPrice}</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle title="Platform fee (4%)" />
			<div class="text-lg">{platformFee}</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle title="Initial Maintenance Reserve (5%)" />
			<div class="text-lg">$ {maintenanceReserve}</div>
		</div>
	</div>

	<div class="rounded-2xl shadow-lg py-4 flex flex-col gap-5">
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
	</div>

	<div class="rounded-2xl shadow-lg py-4 flex flex-col gap-5">
		<div class="flex items-center justify-between px-6 pb-4 border-black/10 border-b-[1px]">
			<InfoTitle classes="font-bold" title="Monthly Gross Rents" />
			<div class="font-bold text-lg">$1,900.00</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle title="Vacancy Rate (5%)" />
			<div class="text-lg">$ {vacancyRate}</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle title="Monthly Utilities" />
			<div class="text-lg">$ {monthlyUtiliiies}</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle title="Property Management Fee" />
			<div class="text-lg">$ {propertyManagementFee}</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle title="LLC Monthly Franchise Tax" />
			<div class="text-lg">$ {llcMonthlyFranchiseTax}</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle title="Property Taxes" />
			<div class="text-lg">$ {propertyTaxes}</div>
		</div>
	</div>

	<div class="rounded-2xl shadow-lg py-4 flex flex-col gap-5">
		<div class="flex items-center justify-between px-6 pb-4 border-black/10 border-b-[1px]">
			<InfoTitle classes="font-bold" title="Property Insurance" />
			<div class="font-bold text-lg">$ {propertyInsurance}</div>
		</div>
		<div class="flex items-center justify-between px-6 pb-4 border-black/10 border-b-[1px]">
			<InfoTitle classes="font-bold" title="Expense to income Ratio" />
			<div class="text-lg">{expenseToIncomeRatio}</div>
		</div>
		<div class="flex items-center justify-between px-6 pb-4 border-black/10 border-b-[1px]">
			<InfoTitle classes="font-bold" title="Total Monthly Costs" />
			<div class="text-lg">$ {monthlyCosts}</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle classes="font-bold" title="Monthly Cash Flow" />
			<div class="text-lg">${monthlyCashFlow}</div>
		</div>
	</div>
</div>
