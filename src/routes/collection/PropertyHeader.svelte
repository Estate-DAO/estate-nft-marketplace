<script lang="ts">
	import Actions from './Actions.svelte';
	import Details from './Details.svelte';
	import Documents from './Documents.svelte';
	import Financials from './Financials.svelte';
	import Market from './Market.svelte';
	import PropertyInfoCards from './PropertyInfoCards.svelte';
	import Tabs from './Tabs.svelte';

	const tabs = ['details', 'financials', 'documents', 'the market'] as TABTYPE[];
	type TABTYPE = 'details' | 'financials' | 'documents' | 'the market';
	let selected: TABTYPE = 'details';
</script>

<div class="flex flex-col grow gap-4">
	<div class="flex justify-between">
		<div class="flex gap-8 items-center">
			<div class="text-5xl font-bold">1600 Cardinal Avenue</div>
			<div
				class="py-2 px-4 text-xs translate-y-1 bg-black rounded-full text-white font-thin flex h-min items-center justify-center"
			>
				Upcoming
			</div>
		</div>
		<Actions />
	</div>
	<div class="font-thin text-2xl">McAllen, TX (USA)</div>
	<div class="font-light text-2xl">3 Beds | 2 Baths | 2,112.00 sq. ft.</div>
	<PropertyInfoCards />
	<Tabs {tabs} bind:selected />
	{#if selected === 'details'}
		<Details />
	{:else if selected === 'financials'}
		<Financials />
	{:else if selected === 'documents'}
		<Documents />
	{:else if selected === 'the market'}
		<Market />
	{/if}
</div>
