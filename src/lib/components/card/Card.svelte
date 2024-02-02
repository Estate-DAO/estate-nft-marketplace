<script lang="ts">
	export let id: number;
</script>

<a href="/collection" class="rounded-xl relative overflow-hidden shadow-lg w-[20rem]">
	<div class="absolute top-2 left-2 rounded-lg bg-white/90 p-1 px-3 text-black text-xs">
		Upcoming
	</div>
	<img
		alt="thumba"
		src="https://source.unsplash.com/random/?house,country,{id}"
		class="w-full h-64 z-[2] object-cover"
	/>
	<div class="flex flex-col gap-y-1 p-5">
		<div class="font-bold text-sm">Name of the NFT</div>
		<div class="text-sm">McAllen, TX(USA)</div>
		<div class="text-sm">3 Beds | 2 Baths | 2,112.00 sq. ft.</div>
	</div>
</a>
