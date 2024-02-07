<script lang="ts">
	import Card from '$lib/components/card/Card.svelte';
	import Dropdown from '$lib/components/dropdown/Dropdown.svelte';
	import LocationIcon from '$lib/components/icons/LocationIcon.svelte';
	import SortIcon from '$lib/components/icons/SortIcon.svelte';
	import TabsGroup from '$lib/components/tabs-group/TabsGroup.svelte';
	import { provisionCanister } from '$lib/backend';
	import PlusIcon from '$lib/components/icons/PlusIcon.svelte';
	import { onMount } from 'svelte';

	let loading = true;
	let collections: {
		assetCanId: string;
		minterCanId: string;
	}[] = [];

	async function fetchCollections() {
		try {
			const actor = provisionCanister();
			const all = await actor.get_all_canisters();
			if ('Ok' in all) {
				collections = all.Ok.map((o) => ({
					assetCanId: o.asset_canister.toText(),
					minterCanId: o.minter_canister.toText()
				}));
				console.log(collections);
			}
		} catch (error) {
			console.error(error);
		} finally {
			loading = false;
		}
	}

	onMount(fetchCollections);
</script>

<div class="py-4 sticky top-20 z-40">
	<div
		class="rounded-xl p-4 bg-white/75 flex gap-4 z-[2] justify-between shadow-sm backdrop-blur-xl border-[1px] border-gray-50"
	>
		<TabsGroup defaultValue="Status" selected="all" />
		<div class="flex flex-wrap items-center gap-4">
			<Dropdown
				title="Location"
				options={[
					{ value: 'texas', label: 'Texas' },
					{ value: 'winnipeg', label: 'Winnipeg' },
					{ value: 'new york', label: 'New York' },
					{ value: 'california', label: 'California' },
					{ value: 'florida', label: 'Florida' },
					{ value: 'colorado', label: 'Colorado' }
				]}
			>
				<LocationIcon slot="leading" />
			</Dropdown>

			<Dropdown
				title="Sort"
				options={[
					{ value: 'new', label: 'New' },
					{ value: 'popularity', label: 'Popularity' },
					{ value: 'price-lth', label: 'Price: Low to High' },
					{ value: 'price-htl', label: 'Price: High to Low' }
				]}
			>
				<SortIcon slot="leading" />
			</Dropdown>
		</div>
	</div>
</div>

{#if loading}
	<div class="h-full w-full flex items-center justify-center">
		<PlusIcon class="animate-spin w-10 h-10" />
	</div>
{:else}
	<div class="flex py-12 items-center gap-8 justify-normal pl-6 flex-wrap">
		{#each collections as { assetCanId, minterCanId }, i}
			<Card
				id={`${minterCanId}@${assetCanId}`}
				imgSrc={`https://source.unsplash.com/random/?house,country,${i}`}
			/>
		{/each}
	</div>
{/if}
