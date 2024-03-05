<script lang="ts">
	export let waitlist = false;
</script>

<div class="shrink-0 bg-black rounded-xl flex flex-col text-white gap-3 p-6 shadow-xl h-fit">
	<div class="font-bold text-5xl">Open</div>
	<!-- <div class="text-3xl font-thin">Invested</div> -->
	<!-- <div class="text-lg font-bold">1075 Investors</div> -->
	<div class="w-72 bg-white/20 h-4 rounded-full relative overflow-hidden">
		<div class="absolute bg-white left-0 h-full w-0" />
	</div>
	<div class="text-md font-thin">Funding</div>

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
