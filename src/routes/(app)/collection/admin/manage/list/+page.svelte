<script lang="ts">
	import { provisionCanister } from '$lib/backend';
	import { onMount } from 'svelte';
	import ListItem, { type FormMetadataWithId } from './ListItem.svelte';
	import PlusIcon from '$lib/components/icons/PlusIcon.svelte';

	let forms: FormMetadataWithId[] = [];
	let loading = true;

	async function fetchList() {
		loading = true;
		const actor = provisionCanister();

		const res = await actor.get_form_list();
		forms = res.map(([id, data]) => ({ id, ...data }));

		loading = false;
	}

	onMount(fetchList);
</script>

{#if loading}
	<div class="flex items-center justify-center py-8">
		<PlusIcon class="w-6 h-6 animate-spin" />
	</div>
{:else}
	<ul role="list" class="divide-y divide-gray-100">
		{#each forms as formData}
			<ListItem {formData} />
		{:else}
			No items to show
		{/each}
	</ul>
{/if}
