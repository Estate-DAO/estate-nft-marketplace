<script lang="ts">
	import ImageIcon from '$lib/components/icons/ImageIcon.svelte';

	export let imgSrc = '';
	export let title = '';
	export let desc = '';
	export let status = '';
	export let sample = false;
	export let href: string;

	$: _status = status === 'Refunded' ? 'Closed' : status || 'Live';
</script>

<a {href} class="rounded-xl relative overflow-hidden shadow-lg w-[20rem]">
	<div
		class="absolute top-2 left-2 rounded-lg bg-white/70 backdrop-blur p-1 px-3 text-black text-xs capitalize"
	>
		{sample ? 'Waitlist' : _status}
	</div>
	{#if imgSrc}
		<img alt="Property preview" src={imgSrc} class="w-full h-64 z-[2] object-cover" />
	{:else}
		<div class="flex items-center justify-center w-full h-64 bg-gray-50 animate">
			<ImageIcon class="h-6 w-6" />
		</div>
	{/if}
	<div class="flex flex-col gap-y-1 p-5">
		<div class="font-bold text-sm line-clamp-2 h-max">
			{title}
			<br /><br />
		</div>
		{#if desc}
			<div class="text-sm line-clamp-2 h-max">{desc} <br /><br /></div>
		{:else}
			<div class="text-sm">McAllen, TX (USA)</div>
			<div class="text-sm">3 Beds | 2 Baths | 2,112.00 sq. ft.</div>
		{/if}
	</div>
</a>
