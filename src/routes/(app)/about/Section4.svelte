<script lang="ts">
	import CaretDownIcon from '$lib/components/icons/CaretDownIcon.svelte';
</script>

<section class="flex flex-col items-center max-w-3xl w-full lg:px-24 lg:py-12 p-8 gap-12">
	<div class="text-3xl font-light">
		With <span class="font-bold uppercase">Estate</span>
		<span class="font-thin uppercase">DAO,</span> you can
	</div>
	<div class="flex gap-2">
		<div class="flex flex-col flex-1 items-center gap-1 font-bold">
			<div
				class="rounded-full text-4xl w-20 h-20 flex items-center justify-center border-2 border-black"
			>
				1
			</div>
			<div class="text-2xl">Buy.</div>
			<div class="font-normal text-center text-sm">
				Vacation homes, starting at <span class="font-bold">$100</span>*
			</div>
		</div>
		<div class="flex flex-col flex-1 items-center gap-1 font-bold">
			<div
				class="rounded-full text-4xl w-20 h-20 flex items-center justify-center border-2 border-black"
			>
				2
			</div>
			<div class="text-2xl">Trade.</div>
			<div class="font-normal text-center text-sm">
				Ownership of vacation homes with <span class="font-bold">EstateNFTs</span>
			</div>
		</div>
		<div class="flex flex-col flex-1 items-center gap-1 font-bold">
			<div
				class="rounded-full text-4xl w-20 h-20 flex items-center justify-center border-2 border-black"
			>
				3
			</div>
			<div class="text-2xl">Earn.</div>
			<div class="font-normal text-center text-sm">High Returns and Rewards</div>
		</div>
		<div class="flex flex-col flex-1 items-center gap-1 font-bold">
			<div
				class="rounded-full text-4xl w-20 h-20 flex items-center justify-center border-2 border-black"
			>
				4
			</div>
			<div class="text-2xl">Book.</div>
			<div class="font-normal text-center text-sm">
				Free Stays using <span class="font-bold">EstateNFTs</span>
			</div>
		</div>
	</div>
	<div class="w-8 h-8 border rounded-full border-black flex items-center justify-center">
		<CaretDownIcon class="h-4 w-4" />
	</div>
</section>
