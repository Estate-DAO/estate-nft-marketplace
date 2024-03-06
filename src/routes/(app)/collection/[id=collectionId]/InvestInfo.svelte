<script lang="ts">
	import { nftMinterCanister } from '$lib/backend';
	import type { CollectionMetadata } from '$lib/declarations/estate_dao_nft_backend/estate_dao_nft_backend.did';
	import { fromE8s } from '$lib/utils/icp';
	import { getCollectionId } from './collectionId.context';

	export let waitlist = false;
	export let metadata: CollectionMetadata;

	const { minterCanId } = getCollectionId();

	let loading = true;
	let invested = BigInt(0);

	$: investedPercentage = (
		(Number(invested) / (Number(metadata.price) * Number(metadata.supply_cap))) *
		100
	).toFixed(2);

	async function getInvestedAmount() {
		try {
			const actor = nftMinterCanister(minterCanId);
			const res = await actor.get_total_invested();
			invested = res;
		} catch (e) {
			console.error(e);
		} finally {
			loading = false;
		}
	}

	getInvestedAmount();
</script>

<div class="shrink-0 bg-black rounded-xl flex flex-col text-white gap-3 p-6 shadow-xl h-fit">
	<div class="font-bold text-5xl">Open</div>
	<div class="text-3xl font-thin">Invested</div>
	<div class="text-lg font-bold">{fromE8s(invested).toFixed(2)} ICP</div>
	<div class="w-72 bg-white/20 h-4 rounded-full relative overflow-hidden">
		<div style="width: {investedPercentage}%;" class="absolute bg-white left-0 h-full" />
	</div>
	<div class="text-md font-thin">Funded {investedPercentage}% till now</div>

	<button
		on:click
		class="bg-white font-bold text-lg text-nowrap text-black rounded-xl w-min py-1 px-8"
	>
		{#if waitlist}
			Register for waitlist
		{:else}
			Invest
		{/if}
	</button>
</div>
