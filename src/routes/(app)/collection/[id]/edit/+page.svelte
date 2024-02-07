<script lang="ts">
	import { nftMinterCanister } from '$lib/backend';
	import EditHeader, { type SelectedEditTab } from './EditHeader.svelte';
	import BasicInfo from './BasicInfo.svelte';
	import PropertyInfo from './PropertyInfo.svelte';
	import DocumentsInfo from './DocumentsInfo.svelte';
	import { page } from '$app/stores';
	import FinancialInfo from './FinancialInfo.svelte';

	async function editData() {
		const actor = nftMinterCanister($page.params.id);
		const res = await actor.update_name_desc(['new name'], ['new desc']);
		console.log({ res });
	}

	let selectedTab: SelectedEditTab = 'basic';
	let loading = false;
</script>

<div class="flex flex-col gap-12">
	<EditHeader bind:loading on:cancel={() => history.back()} bind:selected={selectedTab}>
		<svelte:fragment>
			{#if selectedTab === 'basic'}
				<BasicInfo bind:loading />
			{:else if selectedTab === 'property'}
				<PropertyInfo />
			{:else if selectedTab === 'documents'}
				<DocumentsInfo />
			{:else if selectedTab === 'financials'}
				<FinancialInfo />
			{/if}
		</svelte:fragment>
	</EditHeader>
</div>
