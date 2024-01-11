<div class="w-full h-20 shadow-xl flex items-center justify-between px-8 font-light">
	<div class="text-2xl">Estate DAO</div>
	<div class="flex items-center gap-8">
		<div>About</div>
		<a class="underline" href="/auth">Login</a>
	</div>
</div>

<div class="h-[300px] flex items-center justify-center flex-col space-y-4 bg-emerald-100">
	<div class="text-5xl">ESTATE DAO</div>
	<div class="text-lg">ESTATE DAO</div>
</div>

<div class="flex items-center justify-between px-8 pt-16">
	<div class="text-xl">Explore</div>
	<div class="bg-emerald-300 rounded-md py-3 px-8">Explore</div>
</div>

<div class="flex py-12 items-center gap-8 justify-center p-8 flex-wrap">
	{#each new Array(10) as _, i}
		<a
			href="/collection"
			class="rounded-lg relative shrink-0 shadow-lg flex flex-col overflow-hidden items-center w-72"
		>
			<div class="h-72 absolute w-72 z-[1] top-0 bg-black/50 animate-pulse"></div>

			<img
				alt="thumba"
				src="https://source.unsplash.com/random?{i}"
				class="w-full h-72 z-[2] object-cover"
			/>
			<div class="font-bold py-2">Name of the NFT</div>
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
		</a>
	{/each}
</div>
