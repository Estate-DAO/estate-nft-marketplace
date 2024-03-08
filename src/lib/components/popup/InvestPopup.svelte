<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import Button from '../button/Button.svelte';
	import PlusIcon from '../icons/PlusIcon.svelte';
	import CopyIcon from '../icons/CopyIcon.svelte';
	import Input from '../input/Input.svelte';
	import { onDestroy } from 'svelte';
	import { nftMinterCanister } from '$lib/backend';
	import { authState } from '$lib/stores/auth';
	import { Principal } from '@dfinity/principal';
	import { isPrincipal } from '$lib/utils/isPrincipal';
	import { fromE8s } from '$lib/utils/icp';
	import CopyButton from '../button/CopyButton.svelte';

	const links = [
		'https://in.sumsub.com/websdk/p/sbx_1Dds9ZQtHzpIImt0',
		'https://in.sumsub.com/websdk/p/sbx_OwfsYqc8CAJDlQpd',
		'https://in.sumsub.com/websdk/p/sbx_pfImiHfa8V3AUdHp',
		'https://in.sumsub.com/websdk/p/sbx_V197zCspgncnrXXn',
		'https://in.sumsub.com/websdk/p/sbx_CzQ44v3kSwRPmHeZ',
		'https://in.sumsub.com/websdk/p/sbx_I1kLCxbFPqPOJkkt',
		'https://in.sumsub.com/websdk/p/sbx_KKOlacaRI7CNOxRt',
		'https://in.sumsub.com/websdk/p/sbx_2VYqdRdd5pXO5XsO',
		'https://in.sumsub.com/websdk/p/sbx_Xt5D4agfkpopA8Fi',
		'https://in.sumsub.com/websdk/p/sbx_Xoq0WwyDN69YtA0r'
	];

	const allowedIds = [
		'xhlmj-ejtk2-rdeng-jpr7y-tsxbg-pblxc-sv7py-c4ek2-zfa2l-cpvga-tqe',
		'7ticg-6lqof-r6ovt-2bstx-2a3nl-7od46-cmdn3-a4rbm-r5jlo-uuys6-6qe',
		'27zvx-tsc3k-4nbka-lld3q-katj4-q2nna-klrrk-fihsy-hxhuu-fdmnn-oqe',
		'uiw6g-yfrmb-qwv5q-jh7e4-b4eri-paqxv-etsjd-v4all-63w3g-r6zgj-kae',
		'f7jwi-fvcwf-kux4z-kif3n-wvn4k-eemwd-b27xi-uxr3u-hurvl-ckpak-wqe',
		'l55nb-j472y-gxser-vdj7g-ponga-dqicw-oafjo-roytc-h5wfu-laxs5-fqe',
		'2vyn7-mjs74-dgior-2hfih-7a66u-nmoqh-2ju3x-776ed-y7yb5-c4zpa-yae',
		'jakb2-fu6sv-lmtaz-i3o45-vu6xc-xdbxb-26gjm-q3cby-qsxyr-zt4pg-qae',
		'iunhp-s3krq-o4rvd-3ylbf-i55mx-qzvli-yyizs-c7eh3-jpox2-6lei6-qqe',
		'ms7ce-a36q5-3wswk-toqpu-zt474-r7b3t-qve5c-bfj43-v5dca-du23y-gae',
		'l5u6z-rcsi6-4bran-3kfhi-zdqux-hpaul-atjes-d4dv3-lto2u-ozkp2-pqe',
		'izveb-5bgtv-zyl37-nyaev-lzhvz-ssccu-npj76-wpz3s-mi5pc-kiifc-fqe',
		'avubp-iv63x-tya4c-7a4rc-bl4b3-ctiza-exvcl-uvz6l-nuk5q-n6by7-3ae',
		'j6jlw-6a36f-naf4d-bxnlq-kk5dk-4bqbk-kmt62-p4ups-sgxuo-leviy-aqe',
		'q2arq-luyhj-7alxs-lqvam-eeluo-o2bps-qh35h-jq4ve-6hi3c-7tsqj-zqe',
		'n5ecb-7l2f7-tcstu-27d25-l7kvb-vr37a-hx3om-4rta3-f2vbj-tqyuf-3ae'
	];

	export let show = false;
	// export let showWarning = false;
	export let minterCanId: string;

	let nftToBuy = 1;
	let initLoading = true;
	let nnsAccountId = '';
	let initError = '';
	let paymentInfo = {
		transferTo: '',
		nftPrice: 0,
		currentInvestment: 0
	};

	let pollInterval: ReturnType<typeof setInterval>;
	let step: 1 | 2 | 3 | 4 = 1;
	let paymentStatus = 'pending';

	async function checkPaymentStatus() {
		const actor = nftMinterCanister(minterCanId);
		const res = await actor.primary_sale();
		console.log({ paymentRes: res });
		if ('Ok' in res) {
			paymentStatus = 'completed';
		}
	}

	async function startPoll() {
		const actor = nftMinterCanister(minterCanId);
		const details = await actor.get_payment_details();
		if ('Ok' in details) {
			paymentInfo = {
				transferTo: details.Ok[0],
				nftPrice: Number(details.Ok[1]),
				currentInvestment: Number(details.Ok[2])
			};
		}
		pollInterval = setInterval(() => checkPaymentStatus(), 5000);
	}

	async function saveNnsAccountId() {
		initLoading = true;
		initError = '';
		if (!nnsAccountId) return;
		try {
			if (!isPrincipal(nnsAccountId)) {
				initError =
					'Invalid principal. Please copy the correct principal from NNS Dapp settings page.';
				return false;
			}
			const actor = nftMinterCanister(minterCanId);
			const res = await actor.update_NNS_account(Principal.from(nnsAccountId));
			console.log({ update_NNS_account: res });
			if ('Ok' in res) {
				step = 3;
			} else {
				initLoading = false;
			}
		} catch {
			initError = 'Something went wrong, please try again!';
		} finally {
			initLoading = false;
		}
	}

	async function init() {
		try {
			const actor = await nftMinterCanister(minterCanId);
			const res = await actor.get_NNS_account();
			console.log({ get_NNS_account: res });
			if ('Ok' in res) {
				nnsAccountId = res.Ok.toString();
				step = 3;
			}
		} finally {
			initLoading = false;
		}
	}

	async function getPaymentInfo() {
		const actor = nftMinterCanister(minterCanId);
		const details = await actor.get_payment_details();
		console.log({ get_payment_details: details });
		if ('Ok' in details) {
			paymentInfo = {
				transferTo: details.Ok[0],
				nftPrice: Number(details.Ok[1]),
				currentInvestment: Number(details.Ok[2])
			};
		}
	}

	async function copy(text: string) {
		try {
			await navigator.clipboard.writeText(text);
		} catch (e) {
			console.error(e);
		}
	}

	$: step === 2 && init();
	$: step === 3 && getPaymentInfo();
	$: step === 4 && startPoll();
	$: (step !== 4 || paymentStatus === 'completed') && clearInterval(pollInterval);

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
		<div class="text-3xl">{step === 4 ? 'Pay' : 'Invest'}</div>

		{#if !$authState.isLoggedIn}
			<div class="flex flex-col gap-8 items-center">
				<div>You need to login before you can invest</div>
				<Button href="/login">Click to login</Button>
			</div>
		{:else if !allowedIds.includes($authState.idString || '')}
			<div class="flex flex-col gap-8 items-center">
				<div>
					This is a closed beta sale. You need to be invited to be participated in your sale.
					However, we have registered your concern and will let you know once you can participate in
					the sale!
				</div>
				<Button on:click={() => (show = false)}>Close</Button>
			</div>
		{:else if step === 1}
			<div class="flex flex-col gap-8 items-center w-full">
				<div>Complete KYC to continue</div>
				<iframe
					title="KYC"
					class="w-full h-[28rem] rounded-xl"
					src={links[Math.floor(Math.random() * links.length) | 0]}
				/>
				<div class="text-xs text-white">
					Having issue with KYC? <button on:click={() => (step = 2)}>Click here.</button>
				</div>
			</div>
		{:else if step === 2}
			<div>
				{#if initLoading}
					<PlusIcon class="h-5 w-5 animate-spin" />
				{:else}
					<form on:submit|preventDefault={saveNnsAccountId} class="flex flex-col gap-4">
						<div class="font-md font-medium">
							You need to link your NNS Dapp account to continue
						</div>

						<div class="flex flex-col gap-2">
							<Input
								bind:value={nnsAccountId}
								label="NNS Principal ID"
								required
								placeholder="Enter NNS principal ID"
							/>
							{#if initError}
								<div class="text-xs text-red-500">{initError}</div>
							{/if}
							<div class="text-sm">
								Note: Please make sure funds are always transferred from this account. You can visit <a
									class="underline"
									href="https://nns.ic0.app/settings/"
									target="_blank">this link</a
								> to get the ID.
							</div>
						</div>

						<Button submit>Link</Button>
					</form>
				{/if}
			</div>
		{:else if step === 3}
			<form
				on:submit|preventDefault={() => (step = 4)}
				class="flex w-full flex-col items-center gap-12"
			>
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
						label="Number of NFTs to buy"
						type="number"
						placeholder="(in USD)"
					/>
					<div>
						<span class="text-sm font-medium leading-6 text-gray-900">Linked NNS Account ID:</span>
						<div>{nnsAccountId}</div>
					</div>
					<hr />
					<div class="flex w-full items-center justify-between text-sm gap-4">
						<div>Amount to pay:</div>
						<div class="font-bold">{nftToBuy * fromE8s(paymentInfo.nftPrice)} ICP</div>
					</div>
				</div>
				<Button submit>Proceed to payment</Button>
			</form>
		{:else if step === 4}
			<div class="flex flex-col w-full items-center gap-4 text-sm">
				{#if paymentStatus === 'completed'}
					<div class="flex flex-col items-center justify-center gap-4 h-full w-full">
						<div class="flex w-full items-start justify-between text-sm gap-4">
							<div>Amount for NFT:</div>
							<div class="font-bold text-xs w-1/2 break-all text-right">
								{nftToBuy * fromE8s(paymentInfo.nftPrice)} ICP
							</div>
						</div>
						<div
							class="bg-green-100 h-24 w-24 rounded-full text-xl flex items-center justify-center text-white"
						>
							✅
						</div>
						<div class="font-bold py-4 text-2xl">Transaction successful</div>
						<Button on:click={() => (show = false)}>Close</Button>
					</div>
				{:else}
					{@const amount = nftToBuy * fromE8s(paymentInfo.nftPrice)}
					<div class="flex w-full items-start justify-between text-sm gap-4">
						<div>Amount to pay:</div>
						<div class="flex items-center gap-2">
							<div class="font-bold whitespace-nowrap text-xs w-1/2 break-all text-right">
								{amount} ICP
							</div>
							<CopyButton on:click={() => copy(amount.toString())}>
								<CopyIcon class="w-3 h-3" />
							</CopyButton>
						</div>
					</div>
					<div class="flex w-full items-start justify-between text-sm gap-4">
						<div>Transferring from account:</div>
						<div class="font-bold text-xs w-1/2 break-all text-right">
							{nnsAccountId}
						</div>
					</div>
					<hr />

					<div class="flex w-full items-start justify-between text-sm gap-4">
						<div>Transferring to:</div>
						<div class="flex items-center gap-2">
							<div class="font-bold text-xs w-1/2 break-all text-right">
								{paymentInfo.transferTo}
							</div>
							<CopyButton on:click={() => copy(paymentInfo.transferTo)}>
								<CopyIcon class="w-3 h-3" />
							</CopyButton>
						</div>
					</div>

					<hr />

					<PlusIcon class="h-4 w-4 animate-spin" />
					<div class="text-center text-sm">
						<span>Waiting for payment</span>
						<button on:click={checkPaymentStatus} class="underline text-xs font-bold">
							Check now
						</button>
					</div>
				{/if}
			</div>
		{/if}
	</div>
</div>
