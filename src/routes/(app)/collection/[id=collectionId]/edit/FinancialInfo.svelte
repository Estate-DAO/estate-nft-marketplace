<script lang="ts">
	import { nftMinterCanister } from '$lib/backend';
	import Input from '$lib/components/input/Input.svelte';
	import { page } from '$app/stores';

	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	export let loading = true;

	async function fetchDetails() {
		loading = true;
		try {
			const actor = nftMinterCanister($page.params.id);

			const res = await actor.get_collection_metadata();
			allData = res;
			if ('Ok' in res) {
				if (res.Ok.additional_metadata[0] && res.Ok.additional_metadata[0].financial_details[0]) {
					const details = res.Ok.additional_metadata[0].financial_details[0];
					if (details.total_investement_value[0]) {
						total_investement_value = {
							homebase_closing_fee:
								details.total_investement_value[0].homebase_closing_fee[0] || '',
							initial_mainatance_reserve:
								details.total_investement_value[0].initial_mainatance_reserve[0] || 0,
							underlying_asset_price:
								details.total_investement_value[0].underlying_asset_price[0] || 0
						};
					}

					if (details.monthly_gross_rents[0]) {
						monthly_gross_rents = {
							total_monthly_cost: details.monthly_gross_rents[0].total_monthly_cost[0] || 0,
							llc_monthly_franchise_tax:
								details.monthly_gross_rents[0].llc_monthly_franchise_tax[0] || 0,
							monthly_cash_flow: details.monthly_gross_rents[0].monthly_cash_flow[0] || 0,
							property_insurance: details.monthly_gross_rents[0].property_insurance[0] || 0,
							expense_to_income_ratio:
								details.monthly_gross_rents[0].expense_to_income_ratio[0] || 0,
							vacancy_rate: details.monthly_gross_rents[0].vacancy_rate[0] || 0,
							property_taxes: details.monthly_gross_rents[0].property_taxes[0] || 0,
							property_managment_fee: details.monthly_gross_rents[0].property_managment_fee[0] || 0,
							monthly_utiliiies: details.monthly_gross_rents[0].monthly_utiliiies[0] || 0
						};
					}

					if (details.total_returns[0]) {
						total_returns = {
							average_5_year_roi: details.total_returns[0].average_5_year_roi[0] || 0,
							projected_appreciation: details.total_returns[0].projected_appreciation[0] || 0,
							cap_rate: details.total_returns[0].cap_rate[0] || 0
						};
					}
				}
			}
		} catch (_) {
			console.error('Error fetching get_collection_metadata data');
		} finally {
			loading = false;
		}
	}

	export const saveData = async () => {
		loading = true;
		try {
			const actor = nftMinterCanister($page.params.id);
			const res = await actor.update_financial_details({
				total_investement_value: [
					{
						homebase_closing_fee: [total_investement_value.homebase_closing_fee],
						initial_mainatance_reserve: [total_investement_value.initial_mainatance_reserve],
						underlying_asset_price: [total_investement_value.underlying_asset_price]
					}
				],
				total_returns: [
					{
						average_5_year_roi: [total_returns.average_5_year_roi],
						projected_appreciation: [total_returns.projected_appreciation],
						cap_rate: [total_returns.cap_rate]
					}
				],
				monthly_gross_rents: [
					{
						total_monthly_cost: [monthly_gross_rents.total_monthly_cost],
						llc_monthly_franchise_tax: [monthly_gross_rents.llc_monthly_franchise_tax],
						monthly_cash_flow: [monthly_gross_rents.monthly_cash_flow],
						property_insurance: [monthly_gross_rents.property_insurance],
						expense_to_income_ratio: [monthly_gross_rents.expense_to_income_ratio],
						vacancy_rate: [monthly_gross_rents.vacancy_rate],
						property_taxes: [monthly_gross_rents.property_taxes],
						property_managment_fee: [monthly_gross_rents.property_managment_fee],
						monthly_utiliiies: [monthly_gross_rents.monthly_utiliiies]
					}
				]
			});
		} catch (_) {
			console.error('Error fetching get_collection_metadata data');
		} finally {
			loading = false;
		}
	};

	let total_investement_value: {
		homebase_closing_fee: string;
		initial_mainatance_reserve: number;
		underlying_asset_price: number;
	} = {
		homebase_closing_fee: '',
		initial_mainatance_reserve: 0,
		underlying_asset_price: 0
	};

	let total_returns: {
		average_5_year_roi: number;
		projected_appreciation: number;
		cap_rate: number;
	} = {
		average_5_year_roi: 0,
		projected_appreciation: 0,
		cap_rate: 0
	};

	let monthly_gross_rents: {
		total_monthly_cost: number;
		llc_monthly_franchise_tax: number;
		monthly_cash_flow: number;
		property_insurance: number;
		expense_to_income_ratio: number;
		vacancy_rate: number;
		property_taxes: number;
		property_managment_fee: number;
		monthly_utiliiies: number;
	} = {
		total_monthly_cost: 0,
		llc_monthly_franchise_tax: 0,
		monthly_cash_flow: 0,
		property_insurance: 0,
		expense_to_income_ratio: 0,
		vacancy_rate: 0,
		property_taxes: 0,
		property_managment_fee: 0,
		monthly_utiliiies: 0
	};

	let allData: any;

	onMount(fetchDetails);
</script>

<div class="flex flex-col gap-4">
	<Input
		label="EstateDAO closing fees"
		type="text"
		bind:value={total_investement_value.homebase_closing_fee}
	/>
	<Input
		label="Initial maintenance reserve"
		type="number"
		bind:value={total_investement_value.initial_mainatance_reserve}
	/>
	<Input
		label="Underlying asset price"
		type="number"
		bind:value={total_investement_value.underlying_asset_price}
	/>

	<Input label="Average 5 Years ROI" type="number" bind:value={total_returns.average_5_year_roi} />
	<Input
		label="Projected appreciation"
		type="number"
		bind:value={total_returns.projected_appreciation}
	/>
	<Input label="Cap rate" type="number" bind:value={total_returns.cap_rate} />

	<Input
		label="Total monthly costs"
		type="number"
		bind:value={monthly_gross_rents.total_monthly_cost}
	/>
	<Input
		label="LLC monthly franchise tax"
		type="number"
		bind:value={monthly_gross_rents.llc_monthly_franchise_tax}
	/>
	<Input
		label="Monthly cash flow"
		type="number"
		bind:value={monthly_gross_rents.monthly_cash_flow}
	/>
	<Input
		label="Property Insurance"
		type="number"
		bind:value={monthly_gross_rents.property_insurance}
	/>
	<Input
		label="Expense to income ratio"
		type="number"
		bind:value={monthly_gross_rents.expense_to_income_ratio}
	/>
	<Input label="Vacancy rate" type="number" bind:value={monthly_gross_rents.vacancy_rate} />
	<Input label="Property Taxes" type="number" bind:value={monthly_gross_rents.property_taxes} />
	<Input
		label="Property management Fee"
		type="number"
		bind:value={monthly_gross_rents.property_managment_fee}
	/>
	<Input
		label="Monthly utilities"
		type="number"
		bind:value={monthly_gross_rents.monthly_utiliiies}
	/>
</div>

{#if allData}
	<pre transition:slide class="text-sm p-4 bg-gray-100 rounded-xl">
    {JSON.stringify(allData, null, 4)}
  </pre>
{/if}
