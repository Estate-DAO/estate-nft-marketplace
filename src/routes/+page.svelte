<div class="w-full h-20 shadow-xl flex items-center justify-between px-8">
	<div class="text-2xl">Estate DAO</div>
	<div>About</div>
</div>

<div class="h-[250px] flex items-center justify-center flex-col space-y-4">
	<div class="text-5xl">ESTATE DAO</div>
	<div class="text-lg">ESTATE DAO</div>
</div>

<div class="flex items-center justify-between px-8">
	<div class="text-xl">Explore</div>
	<button class="bg-emerald-300 rounded-md py-3 px-8">Explore</button>
</div>

<div class="flex py-12 items-center gap-8 justify-center p-8 flex-wrap">
	{#each new Array(10) as _, i}
		<div
			class="rounded-lg shrink-0 shadow-lg flex flex-col overflow-hidden space-y-2 items-center w-72"
		>
			<img
				alt="thumba"
				src="https://source.unsplash.com/random?{i}"
				class="w-full h-72 object-cover"
			/>
			<div class="font-bold">Name of the NFT</div>
			<div class="flex divide-x-2 p-4">
				<div class="flex flex-col items-center justify-center gap-y-2 px-2">
					<div class="text-md font-thin">Floor</div>
					<div class="text-sm font-bold">9.0 ICP</div>
				</div>
				<div class="flex flex-col items-center justify-center gap-y-2 px-2">
					<div class="text-md font-thin">Owners</div>
					<div class="text-sm font-bold">167</div>
				</div>
				<div class="flex flex-col items-center justify-center gap-y-2 px-2">
					<div class="text-md font-thin">Total Volume</div>
					<div class="text-sm font-bold">9.87k ICP</div>
				</div>
			</div>
		</div>
	{/each}
</div>
