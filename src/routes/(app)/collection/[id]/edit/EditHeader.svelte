<script lang="ts" context="module">
	const tabs: SelectedEditTab[] = ['basic', 'property', 'documents', 'financials', 'images'];
	export type SelectedEditTab = 'basic' | 'property' | 'documents' | 'financials' | 'images';
</script>

<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import TabItem from '$lib/components/tab/TabItem.svelte';
	import { createEventDispatcher } from 'svelte';

	export let selected: SelectedEditTab = 'basic';
	export let loading = false;

	const dispatch = createEventDispatcher<{
		cancel: void;
		save: void;
	}>();
</script>

<div class="relative border-b border-gray-200 pb-5 sm:pb-0">
	<div class="flex items-end justify-between py-4">
		<div class="text-4xl">Edit Collection</div>
		<div class="mt-3 flex gap-3">
			<Button on:click={() => dispatch('cancel')} secondary>Cancel</Button>
			<Button {loading} on:click={() => dispatch('save')}>Save</Button>
		</div>
	</div>
	<div class="mt-4">
		<!-- Dropdown menu on small screens -->
		<div class="sm:hidden">
			<label for="current-tab" class="sr-only">Select a tab</label>
			<select
				class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:font-bold"
			>
				{#each tabs as tab}
					<option value={tab} class="capitalize" selected={selected === tab}>{tab}</option>
				{/each}
			</select>
		</div>
		<!-- Tabs at small breakpoint and up -->
		<div class="hidden sm:block">
			<nav class="-mb-px flex space-x-8">
				<!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
				{#each tabs as tab}
					<TabItem on:click={() => (selected = tab)} secondary={selected !== tab}>
						{tab}
					</TabItem>
				{/each}
			</nav>
		</div>
	</div>
</div>
<slot />
