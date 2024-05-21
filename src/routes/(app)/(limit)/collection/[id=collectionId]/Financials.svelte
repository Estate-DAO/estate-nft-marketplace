<script lang="ts" context="module">
	function renVal(val: string | number, prepend = '€') {
		return val === '--' ? '--' : `${prepend ? prepend + ' ' : ''} ${Number(val).toLocaleString()}`;
	}
</script>

<script lang="ts">
	import type { CollectionMetadata } from '$lib/types/nftCanister';

	import InfoTitle from './InfoTitle.svelte';

	export let metadata: CollectionMetadata;

	$: assetPrice = metadata.underlying_asset_price || '--';
	$: platformFee = metadata.platform_closing_fee || 'Waived';
	$: maintenanceReserve = metadata.initial_maintenance_reserve || '--';
	$: fiveYearIRR = metadata.total_5_year_irr || '--';
	$: projectedAppreciation = metadata.projected_appreciation || '--';
	$: average5YearROI = metadata.average_5_year_roi || '--';
	$: capRate = metadata.cap_rate || '--';
	$: vacancyRate = metadata.vacancy_rate || '--';
	$: monthlyUtilities = metadata.monthly_utilities || '--';
	$: projectedRent = metadata.projected_rent || '--';
	$: propertyManagementFee = metadata.property_management_fee || '--';
	$: llcMonthlyFranchiseTax = metadata.llc_monthly_franchise_tax || '--';
	$: propertyTaxes = metadata.property_taxes || '--';
	$: expenseToIncomeRatio = metadata.expense_to_income_ratio || '--';
	$: monthlyCashFlow = metadata.monthly_cash_flow || '--';
	$: propertyInsurance = metadata.property_insurance || '--';
	$: monthlyCosts = metadata.total_monthly_cost || '--';
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
		<div class="flex items-center justify-between px-6 border-black/10">
			<InfoTitle classes="font-bold" title="Monthly Gross Rents" />
			<div class="font-bold text-lg">{renVal(projectedRent)}</div>
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
