<script lang="ts">
	import InvestInfo from './InvestInfo.svelte';
	import PropertyHeader from './PropertyHeader.svelte';
</script>

<div class="w-full flex flex-col items-center gap-4 p-12">
	<div class="flex gap-2 h-[40rem] overflow-hidden">
		<img
			alt="House"
			src="https://source.unsplash.com/random/?house,country,1"
			class="rounded-xl h-[37rem] w-full object-cover"
		/>
		<div class="flex basis-1/3 flex-col gap-2 h-[37rem]">
			<img
				alt="House"
				src="https://source.unsplash.com/random/?house,country,2"
				class="rounded-xl h-[18.25rem] object-cover"
			/>
			<img
				alt="House"
				src="https://source.unsplash.com/random/?house,country,3"
				class="rounded-xl h-[18.25rem] object-cover"
			/>
		</div>
	</div>
	<div class="flex gap-8 w-full max-w-6xl">
		<PropertyHeader />
		<InvestInfo />
	</div>
</div>
