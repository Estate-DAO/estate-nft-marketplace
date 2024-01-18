<div
	class="flex flex-col overflow-hidden h-screen w-full items-center justify-center pb-20 gap-4 relative"
>
	<div class="text-4xl z-[3] font-thin">Welcome to <span class="font-bold">Estate</span> DAO</div>
	<div class="absolute inset-0 z-[2] bg-white/60"></div>
	<div class="absolute inset-0 z-[1] grid grid-flow-col-dense grid-rows-11 gap-1">
		<div class="grid grid-cols-2 md:grid-cols-6 gap-4">
			{#each new Array(6) as _, i}
				<div class="grid gap-4">
					{#each new Array(8) as _, j}
						<div>
							<img
								class="h-auto max-w-full rounded-lg"
								src="https://source.unsplash.com/random/?house,country,{i + '' + j}"
								alt=""
							/>
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>
