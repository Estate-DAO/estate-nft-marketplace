<script lang="ts">
	import { onMount } from 'svelte';
	import { provisionCanister } from '$lib/backend';
	import type { FormMetadata } from '$lib/declarations/estate_dao_nft_backend/estate_dao_nft_backend.did';
	import PlusIcon from '$lib/components/icons/PlusIcon.svelte';
	import { page } from '$app/stores';
	import ItemInfo from './ItemInfo.svelte';
	import Attachments from './Attachments.svelte';
	import FormHeader from './FormHeader.svelte';
	import InfoSection from './InfoSection.svelte';
	import Button from '$lib/components/button/Button.svelte';
	import { fromE8s } from '$lib/utils/icp';

	let formData: FormMetadata;
	let pageLoading = true;
	let loading = false;
	let approved = false;
	let canId = {
		assetCanId: '',
		minterCanId: ''
	};

	$: id = $page.params.id;

	async function fetchForm() {
		pageLoading = true;
		const actor = provisionCanister();
		const res = await actor.get_form_metadata(Number(id));
		if ('Ok' in res) {
			formData = res.Ok;
		}
		pageLoading = false;
		console.log(formData);
	}

	async function approve(approve: boolean) {
		loading = true;
		try {
			const actor = provisionCanister();
			const res = await actor.approve_collection(Number(id), approve);
			if (!('Ok' in res)) throw 'Error';
			if (approve) {
				if ('CanisterId' in res.Ok) {
					canId = {
						assetCanId: res.Ok.CanisterId.asset_canister.toString(),
						minterCanId: res.Ok.CanisterId.minter_canister.toString()
					};
				}
				approved = true;
				// actor.grant_commit_permission($authState.isLoggedIn)
			} else {
				history.back();
			}
		} finally {
			loading = false;
		}
	}

	onMount(fetchForm);
</script>

{#if pageLoading}
	<div class="flex items-center justify-center py-8">
		<PlusIcon class="w-6 h-6 animate-spin" />
	</div>
{:else if formData}
	<div class="flex flex-col gap-8 divide-y divide-gray-300">
		<InfoSection>
			<FormHeader slot="header" title="Basic details" subtitle={`Form ID: ${id}`}>
				<div class="flex gap-2 items-center">
					<Button disabled={loading || approved} on:click={() => approve(false)} secondary>
						Decline
					</Button>
					<Button disabled={loading || approved} on:click={() => approve(true)}>Approve</Button>
				</div>
			</FormHeader>

			{#if approved}
				<div class="py-4">
					<div>Canister has been approved</div>
					<Button href={`/collection/${canId.minterCanId}@${canId.assetCanId}`}>
						View collection
					</Button>
				</div>
			{/if}

			<ItemInfo title="Collection name" value={formData.name} />
			<ItemInfo title="Description" value={formData.desc} />
			<ItemInfo
				title="Price"
				value={`${fromE8s(formData.price)} ICP (${formData.price.toLocaleString()})`}
			/>
			<ItemInfo title="Supply cap" value={formData.supply_cap} />
			<ItemInfo title="Submitted by" value={formData.owner} />
			<ItemInfo title="Images">
				<div
					class="h-[14rem] border rounded p-2 items-center w-full overflow-hidden overflow-x-auto flex gap-2"
				>
					{#each formData.property_images as src, i}
						<div class="p-1 shrink-0 border rounded-md w-52 h-52 relative">
							<img {src} class="h-full w-full rounded-md object-contain" alt={i + ' image'} />
						</div>
					{:else}
						<div class="flex flex-1 items-center justify-center">No images added</div>
					{/each}
				</div>
			</ItemInfo>
		</InfoSection>

		{#if !approved}
			<InfoSection>
				<FormHeader slot="header" title="Property details" />
				<ItemInfo
					title="Affordability"
					value={formData.additional_metadata[0]?.property_details[0]?.affordability[0]}
				/>
				<ItemInfo
					title="Bathrooms"
					value={formData.additional_metadata[0]?.property_details[0]?.baths[0]}
				/>
				<ItemInfo
					title="Bedrooms"
					value={formData.additional_metadata[0]?.property_details[0]?.beds[0]}
				/>
				<ItemInfo
					title="Crime score"
					value={formData.additional_metadata[0]?.property_details[0]?.crime_score[0]}
				/>
				<ItemInfo
					title="Flood zone"
					value={formData.additional_metadata[0]?.property_details[0]?.flood_zone[0] ? 'Yes' : 'No'}
				/>
				<ItemInfo
					title="Last renovated"
					value={formData.additional_metadata[0]?.property_details[0]?.last_renovated[0]}
				/>
				<ItemInfo
					title="Monthly rent"
					value={formData.additional_metadata[0]?.property_details[0]?.monthly_rent[0]}
				/>
				<ItemInfo
					title="Occupied"
					value={formData.additional_metadata[0]?.property_details[0]?.occupied[0] ? 'Yes' : 'No'}
				/>
				<ItemInfo
					title="Price per sq foot"
					value={formData.additional_metadata[0]?.property_details[0]?.price_per_sq_foot[0]}
				/>
				<ItemInfo
					title="School score"
					value={formData.additional_metadata[0]?.property_details[0]?.school_score[0]}
				/>
				<ItemInfo
					title="Total square footage"
					value={formData.additional_metadata[0]?.property_details[0]?.square_footage[0]}
				/>
				<ItemInfo
					title="Year built"
					value={formData.additional_metadata[0]?.property_details[0]?.year_built[0]}
				/>
			</InfoSection>
			<InfoSection>
				<FormHeader slot="header" title="Market details" />
				<ItemInfo
					title="Annual population growth"
					value={formData.additional_metadata[0]?.market_details[0]?.annual_popullation_growth[0]}
				/>
				<ItemInfo
					title="Average rent"
					value={formData.additional_metadata[0]?.market_details[0]?.average_rent[0]}
				/>
				<ItemInfo
					title="Median home sale price"
					value={formData.additional_metadata[0]?.market_details[0]?.median_home_sale_price[0]}
				/>
				<ItemInfo
					title="City"
					value={formData.additional_metadata[0]?.market_details[0]?.city[0]}
				/>
				<ItemInfo
					title="State"
					value={formData.additional_metadata[0]?.market_details[0]?.state[0]}
				/>
				<ItemInfo
					title="Country"
					value={formData.additional_metadata[0]?.market_details[0]?.country[0]}
				/>
				<ItemInfo
					title="Coordinates"
					value={formData.additional_metadata[0]?.market_details[0]?.coordinates[0]}
				/>
				<ItemInfo
					title="Market description"
					value={formData.additional_metadata[0]?.market_details[0]?.description[0]}
				/>
			</InfoSection>
			<InfoSection>
				<FormHeader slot="header" title="Financial details" subtitle="Overall" />
				<ItemInfo
					title="Expense to income ratio"
					value={formData.additional_metadata[0]?.financial_details[0]?.expense_to_income_ratio[0]}
				/>
				<ItemInfo
					title="Monthly cash flow"
					value={formData.additional_metadata[0]?.financial_details[0]?.monthly_cash_flow[0]}
				/>
				<ItemInfo
					title="Total monthly cost"
					value={formData.additional_metadata[0]?.financial_details[0]?.total_monthly_cost[0]}
				/>
				<ItemInfo
					title="Property insurance"
					value={formData.additional_metadata[0]?.financial_details[0]?.property_insurance[0]}
				/>
			</InfoSection>
			<InfoSection>
				<FormHeader slot="header" title="Financial details" subtitle="Rent" />
				<ItemInfo
					title="LLC monthly franchise tax"
					value={formData.additional_metadata[0]?.financial_details[0]?.rents[0]
						?.llc_monthly_franchise_tax[0]}
				/>

				<ItemInfo
					title="Monthly utilities"
					value={formData.additional_metadata[0]?.financial_details[0]?.rents[0]
						?.monthly_utiliiies[0]}
				/>

				<ItemInfo
					title="Projected rent"
					value={formData.additional_metadata[0]?.financial_details[0]?.rents[0]?.projected_rent[0]}
				/>

				<ItemInfo
					title="Property managment fee"
					value={formData.additional_metadata[0]?.financial_details[0]?.rents[0]
						?.property_managment_fee[0]}
				/>

				<ItemInfo
					title="Property taxes"
					value={formData.additional_metadata[0]?.financial_details[0]?.rents[0]?.property_taxes[0]}
				/>

				<ItemInfo
					title="Vacancy rate"
					value={formData.additional_metadata[0]?.financial_details[0]?.rents[0]?.vacancy_rate[0]}
				/>
			</InfoSection>
			<InfoSection>
				<FormHeader slot="header" title="Financial details" subtitle="Returns" />
				<ItemInfo
					title="Average 5 year ROI"
					value={formData.additional_metadata[0]?.financial_details[0]?.returns[0]
						?.average_5_year_roi[0]}
				/>
				<ItemInfo
					title="Cap rate"
					value={formData.additional_metadata[0]?.financial_details[0]?.returns[0]?.cap_rate[0]}
				/>
				<ItemInfo
					title="Projected appreciation"
					value={formData.additional_metadata[0]?.financial_details[0]?.returns[0]
						?.projected_appreciation[0]}
				/>
				<ItemInfo
					title="Total 5 year IRR"
					value={formData.additional_metadata[0]?.financial_details[0]?.returns[0]
						?.total_5_year_irr[0]}
				/>
				<ItemInfo
					title="Yields"
					value={formData.additional_metadata[0]?.financial_details[0]?.returns[0]?.yields[0]}
				/>
			</InfoSection>
			<InfoSection>
				<FormHeader slot="header" title="Financial details" subtitle="Investment" />
				<ItemInfo
					title="Initial maintenance reserve"
					value={formData.additional_metadata[0]?.financial_details[0]?.investment[0]
						?.initial_maintenance_reserve[0]}
				/>
				<ItemInfo
					title="Minimum investment"
					value={formData.additional_metadata[0]?.financial_details[0]?.investment[0]
						?.min_investment[0]}
				/>
				<ItemInfo
					title="Platform closing fee"
					value={formData.additional_metadata[0]?.financial_details[0]?.investment[0]
						?.platform_closing_fee[0]}
				/>
				<ItemInfo
					title="Underlying asset price"
					value={formData.additional_metadata[0]?.financial_details[0]?.investment[0]
						?.underlying_asset_price[0]}
				/>
			</InfoSection>
			<InfoSection>
				<FormHeader slot="header" title="Documents" />
				{#if formData.additional_metadata?.[0]?.documents?.[0]?.length}
					<Attachments docs={formData.additional_metadata[0].documents[0]} />
				{:else}
					<ItemInfo title="Attachments" value="No documents uploaded" />
				{/if}
			</InfoSection>
		{/if}
	</div>
{/if}
