<script lang="ts" context="module">
	export type FinancialInfoData = ReturnType<typeof initFinancialInfo>;

	export const initFinancialInfo = (data?: CollectionMetadata) => ({
		total_monthly_cost: data?.total_monthly_cost || 0,
		monthly_cash_flow: data?.monthly_cash_flow || 0,
		property_insurance: data?.property_insurance || 0,
		initial_maintenance_reserve: data?.initial_maintenance_reserve || 0,
		underlying_asset_price: data?.underlying_asset_price || 0,
		platform_closing_fee: data?.platform_closing_fee || 0,
		min_investment: Number(data?.min_investment) || 0,
		expense_to_income_ratio: data?.expense_to_income_ratio || 0,
		llc_monthly_franchise_tax: data?.llc_monthly_franchise_tax || 0,
		vacancy_rate: data?.vacancy_rate || 0,
		property_taxes: data?.property_taxes || 0,
		property_management_fee: data?.property_management_fee || 0,
		projected_rent: data?.projected_rent || 0,
		monthly_utilities: data?.monthly_utilities || 0,
		average_5_year_roi: data?.average_5_year_roi || 0,
		yields: data?.yields || 0,
		total_5_year_irr: data?.total_5_year_irr || 0,
		projected_appreciation: data?.projected_appreciation || 0,
		cap_rate: data?.cap_rate || 0,
	});
</script>

<script lang="ts">
	import Input from '$lib/components/input/Input.svelte';
	import Textarea from '$lib/components/textarea/Textarea.svelte';
	import Select from '$lib/components/select/Select.svelte';
	import type { CollectionMetadata } from '$lib/types/nftCanister';
	import { isPrincipal } from '$lib/utils/isPrincipal';

	export let loading = true;
	export let data: FinancialInfoData = initFinancialInfo();
</script>

<div class="flex flex-col gap-4">
	<Input
		disabled={loading}
		label="EstateDAO closing fees"
		type="number"
		bind:value={data.platform_closing_fee}
	/>
	<Input
		label="Initial maintenance reserve"
		type="number"
		bind:value={data.initial_maintenance_reserve}
	/>
	<Input
		label="Underlying asset price"
		type="number"
		bind:value={data.underlying_asset_price}
	/>
	<Input
		label="Minimum investment required"
		type="number"
		bind:value={data.min_investment}
	/>

	<Input label="Average 5 Years ROI" type="number" bind:value={data.average_5_year_roi} />
	<Input label="Total yields" type="number" bind:value={data.yields} />
	<Input label="5 Years IRR" type="number" bind:value={data.total_5_year_irr} />
	<Input
		label="Projected appreciation"
		type="number"
		bind:value={data.projected_appreciation}
	/>
	<Input label="Cap rate" type="number" bind:value={data.cap_rate} />

	<Input label="Projected rent" type="number" bind:value={data.projected_rent} />
	<Input
		label="Monthly franchise tax"
		type="number"
		bind:value={data.llc_monthly_franchise_tax}
	/>
	<Input label="Vacancy rate" type="number" bind:value={data.vacancy_rate} />
	<Input label="Property taxes" type="number" bind:value={data.property_taxes} />
	<Input
		label="Property management fee"
		type="number"
		bind:value={data.property_management_fee}
	/>
	<Input label="Monthly utilities" type="number" bind:value={data.monthly_utilities} />

	<Input label="Property insurance" type="number" bind:value={data.property_insurance} />
	<Input label="Monthly cash flow" type="number" bind:value={data.monthly_cash_flow} />
	<Input
		label="Expense to income ratio"
		type="number"
		bind:value={data.expense_to_income_ratio}
	/>
	<Input label="Total monthly costs" type="number" bind:value={data.total_monthly_cost} />
</div>
