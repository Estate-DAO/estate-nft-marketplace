<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import Button from '../button/Button.svelte';
	import PlusIcon from '../icons/PlusIcon.svelte';
	import Input from '../input/Input.svelte';

	export let show = false;

	let loading = true;
	let step: 1 | 2 | 3 = 1;

	function initTransaction() {
		step = 2;
	}
</script>

<div
	transition:fade={{ duration: 100 }}
	class="fixed inset-0 flex items-center justify-center h-full w-full z-[100]"
>
	<div class="absolute inset-0 bg-black/50 z-[1]"></div>
	<div
		in:scale={{ start: 0.9, delay: 100, duration: 100 }}
		class="bg-white z-[2] px-16 py-12 flex flex-col items-center gap-12 relative shadow-xl rounded-lg"
	>
		<button on:click={() => (show = false)} class="absolute top-4 right-4 z-[2]">
			<PlusIcon class="h-5 w-5 rotate-45" />
		</button>
		<div class="text-3xl">Invest</div>
		{#if step === 3}
			<div class="flex flex-col items-center justify-center gap-4 h-full w-full">
				<div
					class="bg-green-500 h-16 w-16 rounded-full flex items-center justify-center text-white"
				>
					✔︎
				</div>
				<div>Transaction successful</div>
			</div>
		{:else if step == 1}
			<form on:submit={initTransaction} class="flex flex-col items-center gap-12">
				<div class="w-full gap-8 flex flex-col">
					<div class="flex items-center justify-between">
						<div>NFT Price :</div>
						<div></div>
					</div>
					<Input required label="Number of NFTs to buy" type="number" placeholder="(in USD)" />
				</div>
				<Button submit>Init transaction</Button>
			</form>
		{/if}
	</div>
</div>
