<script lang="ts">
	import { onMount } from 'svelte';
	import { provisionCanisterV2 } from '$lib/backend';
	import PlusIcon from '$lib/components/icons/PlusIcon.svelte';
	import { page } from '$app/stores';
	import ItemInfo from './ItemInfo.svelte';
	import Attachments from './Attachments.svelte';
	import FormHeader from './FormHeader.svelte';
	import InfoSection from './InfoSection.svelte';
	import Button from '$lib/components/button/Button.svelte';
	import { fromE8s } from '$lib/utils/icp';
	import type { _SERVICE } from '$lib/declarations/provision/provision.did';

	let formData: Awaited<ReturnType<_SERVICE['get_request_info']>>[0];
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
		const actor = provisionCanisterV2();
		const res = await actor.get_request_info(BigInt(Number(id)));
		if (res[0]) {
			formData = res[0];
		}
		pageLoading = false;
		console.log(formData);
	}

	async function approve(approve: boolean) {
		loading = true;
		try {
			const actor = provisionCanisterV2();
			if (approve) {
				const res = await actor.approve_request(BigInt(id));
				if (!('Ok' in res)) throw 'Error';
				// if ('CanisterId' in res.Ok) {
				// 	canId = {
				// 		assetCanId: res.Ok.CanisterId.asset_canister.toString(),
				// 		minterCanId: res.Ok.CanisterId.minter_canister.toString()
				// 	};
				// }
				approved = true;
				// actor.grant_commit_permission($authState.isLoggedIn)
			} else {
				const res = await actor.reject_request(BigInt(id));
				if (!('Ok' in res)) throw 'Error';
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

			<ItemInfo title="Collection name" value={formData.metadata?.[0]?.name} />
			<ItemInfo title="Description" value={formData.metadata?.[0]?.description} />
			<ItemInfo
				title="Price"
				value={`${fromE8s(formData.metadata?.[0]?.price)} ICP (${formData.metadata?.[0]?.price || 0})`}
			/>
			<ItemInfo title="Supply cap" value={formData.metadata?.[0]?.supply_cap} />
			<ItemInfo title="Submitted by" value={formData.property_owner.toString()} />
			<ItemInfo title="Images">
				<div
					class="h-[14rem] border rounded p-2 items-center w-full overflow-hidden overflow-x-auto flex gap-2"
				>
					{#if formData.metadata?.[0]?.documents}
						{@const images = formData.metadata?.[0]?.documents}
						{#each images as [_, src], i}
							<div class="p-1 shrink-0 border rounded-md w-52 h-52 relative">
								<img {src} class="h-full w-full rounded-md object-contain" alt={i + ' image'} />
							</div>
						{:else}
							<div class="flex flex-1 items-center justify-center">No images added</div>
						{/each}
					{/if}
				</div>
			</ItemInfo>
		</InfoSection>

		{#if !approved}
			<InfoSection>
				<FormHeader slot="header" title="Property details" />
				<ItemInfo title="Affordability" value={formData.metadata?.[0]?.affordability} />
				<ItemInfo title="Bathrooms" value={formData.metadata?.[0]?.baths} />
				<ItemInfo title="Bedrooms" value={formData.metadata?.[0]?.beds} />
				<ItemInfo title="Crime score" value={formData.metadata?.[0]?.crime_score} />
				<ItemInfo title="Flood zone" value={formData.metadata?.[0]?.flood_zone ? 'Yes' : 'No'} />
				<ItemInfo title="Last renovated" value={formData.metadata?.[0]?.last_renovated} />
				<ItemInfo title="Monthly rent" value={formData.metadata?.[0]?.monthly_rent} />
				<ItemInfo title="Occupied" value={formData.metadata?.[0]?.occupied ? 'Yes' : 'No'} />
				<ItemInfo title="Price per sq foot" value={formData.metadata?.[0]?.price_per_sq_foot[0]} />
				<ItemInfo title="School score" value={formData.metadata?.[0]?.school_score[0]} />
				<ItemInfo title="Total square footage" value={formData.metadata?.[0]?.square_footage[0]} />
				<ItemInfo title="Year built" value={formData.metadata?.[0]?.year_built[0]} />
			</InfoSection>
			<InfoSection>
				<FormHeader slot="header" title="Market details" />
				<ItemInfo
					title="Annual population growth"
					value={formData.metadata?.[0]?.annual_population_growth}
				/>
				<ItemInfo title="Average rent" value={formData.metadata?.[0]?.average_rent[0]} />
				<ItemInfo
					title="Median home sale price"
					value={formData.metadata?.[0]?.median_home_sale_price[0]}
				/>
				<ItemInfo title="City" value={formData.metadata?.[0]?.city[0]} />
				<ItemInfo title="State" value={formData.metadata?.[0]?.state[0]} />
				<ItemInfo title="Country" value={formData.metadata?.[0]?.country[0]} />
				<ItemInfo title="Coordinates" value={formData.metadata?.[0]?.coordinates[0]} />
				<ItemInfo
					title="Market description"
					value={formData.metadata?.[0]?.market_description[0]}
				/>
			</InfoSection>
			<InfoSection>
				<FormHeader slot="header" title="Financial details" subtitle="Overall" />
				<ItemInfo
					title="Expense to income ratio"
					value={formData.metadata?.[0]?.expense_to_income_ratio[0]}
				/>
				<ItemInfo title="Monthly cash flow" value={formData.metadata?.[0]?.monthly_cash_flow[0]} />
				<ItemInfo
					title="Total monthly cost"
					value={formData.metadata?.[0]?.total_monthly_cost[0]}
				/>
				<ItemInfo
					title="Property insurance"
					value={formData.metadata?.[0]?.property_insurance[0]}
				/>
			</InfoSection>
			<InfoSection>
				<FormHeader slot="header" title="Financial details" subtitle="Rent" />
				<ItemInfo
					title="LLC monthly franchise tax"
					value={formData.metadata?.[0]?.llc_monthly_franchise_tax[0]}
				/>

				<ItemInfo title="Monthly utilities" value={formData.metadata?.[0]?.monthly_utilities[0]} />

				<ItemInfo title="Projected rent" value={formData.metadata?.[0]?.projected_rent[0]} />

				<ItemInfo
					title="Property managment fee"
					value={formData.metadata?.[0]?.property_management_fee[0]}
				/>

				<ItemInfo title="Property taxes" value={formData.metadata?.[0]?.property_taxes[0]} />

				<ItemInfo title="Vacancy rate" value={formData.metadata?.[0]?.vacancy_rate[0]} />
			</InfoSection>
			<InfoSection>
				<FormHeader slot="header" title="Financial details" subtitle="Returns" />
				<ItemInfo
					title="Average 5 year ROI"
					value={formData.metadata?.[0]?.average_5_year_roi[0]}
				/>
				<ItemInfo title="Cap rate" value={formData.metadata?.[0]?.cap_rate[0]} />
				<ItemInfo
					title="Projected appreciation"
					value={formData.metadata?.[0]?.projected_appreciation[0]}
				/>
				<ItemInfo title="Total 5 year IRR" value={formData.metadata?.[0]?.total_5_year_irr[0]} />
				<ItemInfo title="Yields" value={formData.metadata?.[0]?.yields[0]} />
			</InfoSection>
			<InfoSection>
				<FormHeader slot="header" title="Financial details" subtitle="Investment" />
				<ItemInfo
					title="Initial maintenance reserve"
					value={formData.metadata?.[0]?.initial_maintenance_reserve[0]}
				/>
				<ItemInfo title="Minimum investment" value={formData.metadata?.[0]?.min_investment[0]} />
				<ItemInfo
					title="Platform closing fee"
					value={formData.metadata?.[0]?.platform_closing_fee[0]}
				/>
				<ItemInfo
					title="Underlying asset price"
					value={formData.metadata?.[0]?.underlying_asset_price[0]}
				/>
			</InfoSection>
			<InfoSection>
				<FormHeader slot="header" title="Documents" />
				{#if formData.metadata?.[0]?.documents?.[0]?.length}
					<Attachments docs={formData.metadata?.[0].documents} />
				{:else}
					<ItemInfo title="Attachments" value="No documents uploaded" />
				{/if}
			</InfoSection>
		{/if}
	</div>
{/if}
