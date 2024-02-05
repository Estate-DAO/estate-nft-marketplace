<script>
	import Card from '$lib/components/card/Card.svelte';
	import Dropdown from '$lib/components/dropdown/Dropdown.svelte';
	import LocationIcon from '$lib/components/icons/LocationIcon.svelte';
	import SortIcon from '$lib/components/icons/SortIcon.svelte';
	import TabsGroup from '$lib/components/tabs-group/TabsGroup.svelte';
	import { provisionCanister } from '$lib/backend';
	import PlusIcon from '$lib/components/icons/PlusIcon.svelte';
	import { onMount } from 'svelte';

	let loading = true;

	async function fetchCollections() {
		try {
			const actor = provisionCanister();
			const all = await actor.get_all_minter_canisters();
			if ('Ok' in all) {
				console.log({ all: all.Ok.map((o) => o.toText()) });
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
		class="rounded-xl p-4 bg-white/75 flex items-center gap-x-8 z-[2] justify-between shadow-sm backdrop-blur-xl border-[1px] border-gray-50"
	>
		<TabsGroup label="Status" selected="all" />
		<div class="flex items-center gap-x-4">
			<Dropdown
				title="Location"
				options={[
					{ value: 'asc', label: 'Ascending' },
					{ value: 'desc', label: 'Descending' }
				]}
			>
				<LocationIcon slot="leading" />
			</Dropdown>

			<Dropdown
				title="Sort"
				options={[
					{ value: 'asc', label: 'Ascending' },
					{ value: 'desc', label: 'Descending' }
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
	<div class="flex py-12 items-center gap-8 justify-normal px-16 flex-wrap">
		{#each Array(20) as _, i}
			<Card id={i} />
		{/each}
	</div>
{/if}
