<script lang="ts">
	import { page } from '$app/stores';
	import InvestPopup from '$lib/components/popup/InvestPopup.svelte';
	import WaitlistPopup from '$lib/components/popup/WaitlistPopup.svelte';
	import type { PageData } from './$types';
	import InvestInfo from './InvestInfo.svelte';
	import PropertyHeader from './PropertyHeader.svelte';
	import { getCollectionId } from './collectionId.context';

	export let data: PageData;

	const { minterCanId } = getCollectionId();

	let showWaitlistPopup = false;
	let showInvestPopup = false;

	$: metadata = data.metadata;
	$: waitlist = $page.url.searchParams.has('sample');
</script>

<div class="w-full flex flex-col items-center gap-4">
	<div class="flex gap-2 h-[40rem] overflow-hidden">
		<img
			alt="House"
			src={metadata.property_images[0]}
			class="rounded-xl h-[37rem] w-full object-cover"
		/>
		<div class="flex basis-1/3 flex-col gap-2 h-[37rem]">
			<img
				alt="House"
				src={metadata.property_images[1]}
				class="rounded-xl h-[18.25rem] object-cover"
			/>
			<img
				alt="House"
				src={metadata.property_images[2]}
				class="rounded-xl h-[18.25rem] object-cover"
			/>
		</div>
	</div>
	<div class="flex gap-8 w-full max-w-6xl">
		<PropertyHeader {metadata} />
		<InvestInfo
			{waitlist}
			on:click={() => {
				if (waitlist) {
					showWaitlistPopup = true;
				} else {
					showInvestPopup = true;
				}
			}}
		/>
	</div>
</div>

{#if showWaitlistPopup}
	<WaitlistPopup bind:show={showWaitlistPopup} />
{/if}

{#if showInvestPopup}
	<InvestPopup bind:show={showInvestPopup} {minterCanId} />
{/if}
