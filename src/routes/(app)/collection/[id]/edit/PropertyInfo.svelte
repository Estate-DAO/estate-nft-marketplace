<script lang="ts">
	import { nftMinterCanister } from '$lib/backend';
	import Input from '$lib/components/input/Input.svelte';
	import { page } from '$app/stores';

	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	export let loading = true;

	export const saveData = async () => {
		loading = true;
		try {
			const actor = nftMinterCanister($page.params.id);
			const res = await actor.update_prop_data({
				area: [area],
				bed: [bed],
				bath: [bath],
				Country: [country],
				State: [state]
			});
		} catch (_) {
			console.error('Error fetching get_collection_metadata data');
		} finally {
			loading = false;
		}
	};

	let area: number;
	let bed: number;
	let bath: number;
	let country = '';
	let state = '';
	let allData: any;

	async function fetchDetails() {
		loading = true;
		try {
			const actor = nftMinterCanister($page.params.id);

			const res = await actor.get_collection_metadata();
			allData = res;
			if ('Ok' in res) {
				if (res.Ok.prop_data[0]) {
					res.Ok.prop_data[0].area[0] && (area = res.Ok.prop_data[0].area[0]);
					res.Ok.prop_data[0].bed[0] && (bed = res.Ok.prop_data[0].bed[0]);
					res.Ok.prop_data[0].bath[0] && (bath = res.Ok.prop_data[0].bath[0]);
					country = res.Ok.prop_data[0].Country[0] || '';
					state = res.Ok.prop_data[0].State[0] || '';
				}
			}
		} catch (_) {
			console.error('Error fetching get_collection_metadata data');
		} finally {
			loading = false;
		}
	}

	onMount(fetchDetails);
</script>

<div class="flex flex-col gap-4">
	<Input bind:value={bed} label="Number of Bedrooms" type="number" />
	<Input bind:value={bath} label="Number of Bathrooms" type="number" />
	<Input bind:value={area} label="Area (in square ft.)" type="number" />
	<Input label="Country" bind:value={country} placeholder="Enter the country" />
	<Input label="State" bind:value={state} placeholder="Enter the state" />
</div>

{#if allData}
	<pre transition:slide class="text-sm p-4 bg-gray-100 rounded-xl">
    {JSON.stringify(allData, null, 4)}
  </pre>
{/if}
