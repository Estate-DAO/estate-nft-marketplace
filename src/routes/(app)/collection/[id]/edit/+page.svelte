<script lang="ts">
	import { nftMinterCanister } from '$lib/backend';
	import EditHeader, { type SelectedEditTab } from './EditHeader.svelte';
	import BasicInfo from './BasicInfo.svelte';
	import PropertyInfo from './PropertyInfo.svelte';
	import DocumentsInfo from './DocumentsInfo.svelte';
	import { page } from '$app/stores';

	async function editData() {
		const actor = nftMinterCanister($page.params.id);
		const res = await actor.update_prop_data({
			area: 500,
			bath: 2,
			bed: 3
		});
		console.log({ res });
	}

	let selectedTab: SelectedEditTab = 'basic';
</script>

<div class="flex flex-col gap-12">
	<EditHeader bind:selected={selectedTab} />

	{#if selectedTab === 'basic'}
		<BasicInfo />
	{:else if selectedTab === 'property'}
		<PropertyInfo />
	{:else if selectedTab === 'documents'}
		<DocumentsInfo />
	{/if}
</div>
