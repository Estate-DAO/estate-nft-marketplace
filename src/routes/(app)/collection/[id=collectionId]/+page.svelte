<script lang="ts">
	import { page } from '$app/stores';
	import InvestPopup from '$lib/components/popup/InvestPopup.svelte';
	import WaitlistPopup from '$lib/components/popup/WaitlistPopup.svelte';
	import type { PageData } from './$types';
	import InvestInfo from './InvestInfo.svelte';
	import PropertyHeader from './PropertyHeader.svelte';
	import { getCollectionId } from './collectionId.context';

	export let data: PageData;

	const PLACEHOLDER_IMG = 'https://i.ibb.co/Kx2VwVc/image.png';

	const { minterCanId } = getCollectionId();

	let showWaitlistPopup = false;
	let showInvestPopup = false;

	$: metadata = data.metadata;
	$: waitlist = $page.url.searchParams.has('sample');
</script>

<div class="w-full flex flex-col items-center gap-4 pb-8">
	<div class="flex flex-col lg:flex-row gap-2 lg:h-[40rem] w-full overflow-hidden">
		<img
			alt="House"
			src={metadata.property_images[0] || PLACEHOLDER_IMG}
			class="rounded-xl lg:h-[37rem] lg:w-4/6 object-cover"
		/>
		<div class="flex basis-1/3 flex-col gap-2 lg:h-[37rem]">
			<img
				alt="House"
				src={metadata.property_images[1] || PLACEHOLDER_IMG}
				class="rounded-xl h-[18.25rem] object-cover"
			/>
			<img
				alt="House"
				src={metadata.property_images[2] || PLACEHOLDER_IMG}
				class="rounded-xl h-[18.25rem] object-cover"
			/>
		</div>
	</div>
	<div class="flex flex-col lg:flex-row gap-8 w-full max-w-6xl">
		<PropertyHeader {metadata} />
		<InvestInfo
			{metadata}
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
