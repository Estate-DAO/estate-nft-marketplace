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
	$: images = (metadata.property_images || []).slice(1, 3).reduce((acc, _c, i, v) => {
		if (i % 2 === 0) acc.push(v.slice(i, i + 2));
		return acc;
	}, []);
</script>

<div class="w-full flex flex-col items-center gap-4 pb-8">
	<div class="flex flex-col lg:flex-row gap-2 lg:h-[40rem] w-full overflow-hidden overflow-x-auto">
		<img
			alt="House"
			src={metadata.property_images[0] || PLACEHOLDER_IMG}
			class="rounded-xl lg:h-[37rem] lg:grow object-cover"
		/>

		{#each images as [im1, im2]}
			<div class="flex basis-[25%] shrink-0 flex-col gap-2 lg:h-[37rem]">
				<img
					alt="House"
					src={im1 || PLACEHOLDER_IMG}
					class="rounded-xl h-[18.25rem] object-cover"
				/>
				{#if im2}
					<img
						alt="House"
						src={im2 || PLACEHOLDER_IMG}
						class="rounded-xl h-[18.25rem] object-cover"
					/>
				{/if}
			</div>
		{/each}
	</div>
	<div class="flex flex-col lg:flex-row gap-8 w-full max-w-6xl">
		<PropertyHeader {metadata} />
		{#key showInvestPopup}
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
		{/key}
	</div>
</div>

{#if showWaitlistPopup}
	<WaitlistPopup bind:show={showWaitlistPopup} />
{/if}

{#if showInvestPopup}
	<InvestPopup bind:show={showInvestPopup} {minterCanId} />
{/if}
