<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import Button from '../button/Button.svelte';
	import PlusIcon from '../icons/PlusIcon.svelte';
	import Input from '../input/Input.svelte';
	import { onDestroy, onMount } from 'svelte';
	import { nftMinterCanister } from '$lib/backend';
	import { authState } from '$lib/stores/auth';
	import { Principal } from '@dfinity/principal';
	import { isPrincipal } from '$lib/utils/isPrincipal';
	import { fromE8s } from '$lib/utils/icp';

	export let show = false;
	export let minterCanId: string;

	let nftToBuy = 1;
	let nnsAccountId = '';
	let paymentInfo = {
		transferTo: '',
		nftPrice: 0,
		currentInvestment: 0
	};

	let pollInterval: ReturnType<typeof setInterval>;

	let principalError = '';
	let step: 1 | 2 = 1;
	let paymentStatus = 'pending';
	let escrowAccount: Uint8Array | number[] = [];

	function checkForm(e: SubmitEvent) {
		principalError = '';
		if (!isPrincipal(nnsAccountId.trim())) {
			principalError = 'Invalid principal Id';
			e.preventDefault();
			return false;
		}
		step = 2;
	}

	async function checkPaymentStatus() {
		const actor = nftMinterCanister(minterCanId);
		const res = await actor.primary_sale(Principal.from(nnsAccountId));
		console.log({ paymentRes: res });
		if ('Ok' in res) {
			paymentStatus = 'completed';
		}
	}

	async function startPoll() {
		const actor = nftMinterCanister(minterCanId);
		const details = await actor.get_payment_details(Principal.from(nnsAccountId));
		if ('Ok' in details) {
			paymentInfo = {
				transferTo: details.Ok[0],
				nftPrice: Number(details.Ok[1]),
				currentInvestment: Number(details.Ok[2])
			};
		}
		const res = await actor.create_escrow_accountid(Principal.from(nnsAccountId));
		if ('Ok' in res) {
			escrowAccount = res.Ok;
		}
		pollInterval = setInterval(() => checkPaymentStatus(), 5000);
	}

	async function getPaymentInfo() {
		const actor = nftMinterCanister(minterCanId);
		const details = await actor.get_payment_details(loggedInUser);
		if ('Ok' in details) {
			paymentInfo = {
				transferTo: '',
				nftPrice: Number(details.Ok[1]),
				currentInvestment: Number(details.Ok[2])
			};
		}

		console.log(details);
	}

	$: loggedInUser = Principal.from($authState.idString);
	$: step === 1 && getPaymentInfo();
	$: step === 2 && startPoll();
	$: (step !== 2 || paymentStatus === 'completed') && clearInterval(pollInterval);

	onDestroy(() => clearInterval(pollInterval));
</script>

<div
	transition:fade={{ duration: 100 }}
	class="fixed inset-0 flex items-center justify-center h-full w-full z-[100]"
>
	<div class="absolute inset-0 bg-black/50 z-[1]"></div>
	<div
		in:scale={{ start: 0.9, delay: 100, duration: 100 }}
		class="bg-white z-[2] max-w-2xl w-full px-16 py-12 flex flex-col items-center gap-12 relative shadow-xl rounded-lg"
	>
		<button on:click={() => (show = false)} class="absolute top-4 right-4 z-[2]">
			<PlusIcon class="h-5 w-5 rotate-45" />
		</button>
		<div class="text-3xl">{step === 1 ? 'Invest' : 'Pay'}</div>

		{#if step == 1}
			<form on:submit={checkForm} class="flex w-full flex-col items-center gap-12">
				<div class="w-full gap-8 flex flex-col">
					<div class="flex w-full items-center justify-between text-sm gap-4">
						<div>NFT Price:</div>
						<div class="font-bold">{fromE8s(paymentInfo.nftPrice)} ICP</div>
					</div>
					<div class="flex w-full items-center justify-between text-sm gap-4">
						<div>Current investment:</div>
						<div class="font-bold">{fromE8s(paymentInfo.currentInvestment)} ICP</div>
					</div>
					<Input
						bind:value={nftToBuy}
						required
						min={1}
						max={10}
						label="Number of NFTs to buy"
						type="number"
						placeholder="(in USD)"
					/>
					<div>
						<Input
							bind:value={nnsAccountId}
							required
							label="NNS Account Principal ID"
							placeholder="Enter your account Principal ID from which funds will be transferred"
						/>
						{#if principalError}
							<div class="text-red-500 text-xs pt-1">{principalError}</div>
						{/if}
					</div>
					<hr />
					<div class="flex w-full items-center justify-between text-sm gap-4">
						<div>Amount to pay:</div>
						<div class="font-bold">{nftToBuy * paymentInfo.nftPrice} ICP</div>
					</div>
				</div>
				<Button submit>Proceed to payment</Button>
			</form>
		{:else if step === 2}
			<div class="flex flex-col w-full items-center gap-4 text-sm">
				<div class="flex w-full items-start justify-between text-sm gap-4">
					<div>Amount to pay:</div>
					<div class="font-bold text-xs w-1/2 break-all text-right">
						{nftToBuy * paymentInfo.nftPrice} ICP
					</div>
				</div>
				<div class="flex w-full items-start justify-between text-sm gap-4">
					<div>Transferring from account:</div>
					<div class="font-bold text-xs w-1/2 break-all text-right">
						{nnsAccountId}
					</div>
				</div>

				{#if paymentStatus === 'completed'}
					<div class="flex flex-col items-center justify-center gap-4 h-full w-full">
						<div
							class="bg-green-500 h-16 w-16 rounded-full flex items-center justify-center text-white"
						>
							✔︎
						</div>
						<div>Transaction successful</div>
					</div>
				{:else}
					<hr />

					<div class="flex w-full items-start justify-between text-sm gap-4">
						<div>Transferring to:</div>
						<div class="font-bold text-xs w-1/2 break-all text-right">
							{paymentInfo.transferTo}
						</div>
					</div>

					<hr />

					<div class="flex w-full items-start justify-between text-sm gap-4">
						<div>Escrow account:</div>
						<div class="font-bold text-xs w-1/2 break-all text-right">
							{escrowAccount.join('; ')}
						</div>
					</div>

					<hr />

					<PlusIcon class="h-4 w-4 animate-spin" />
					<div class="text-center text-sm">
						<span>Waiting for payment</span>
						<button on:click={checkPaymentStatus} class="underline text-xs font-bold"
							>Check now</button
						>
					</div>
				{/if}
			</div>
		{/if}
	</div>
</div>
