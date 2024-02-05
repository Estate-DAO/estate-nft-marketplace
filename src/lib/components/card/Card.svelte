<script lang="ts">
	import ImageIcon from '$lib/components/icons/ImageIcon.svelte';
	import Button from '../button/Button.svelte';

	export let id: number;
	export let imgSrc = ''; //https://source.unsplash.com/random/?house,country,{id}
</script>

<a href="/collection/{id}" class="rounded-xl relative overflow-hidden shadow-lg w-[20rem]">
	<div class="absolute top-2 left-2 rounded-lg bg-white/90 p-1 px-3 text-black text-xs">
		Upcoming
	</div>
	{#if imgSrc}
		<img alt="thumba" src={imgSrc} class="w-full h-64 z-[2] object-cover" />
	{:else}
		<div class="flex items-center justify-center w-full h-64 bg-gray-50 animate">
			<ImageIcon class="h-6 w-6" />
		</div>
	{/if}
	<div class="flex flex-col gap-y-1 p-5">
		<div class="font-bold text-sm">Name of the NFT</div>
		<div class="text-sm">McAllen, TX(USA)</div>
		<div class="text-sm">3 Beds | 2 Baths | 2,112.00 sq. ft.</div>
	</div>
</a>
