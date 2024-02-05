<script lang="ts">
	let loadedCount = [0, 0, 0, 0, 0, 0];
</script>

<div class="absolute inset-0 z-[2] bg-white/60"></div>
<div class="absolute inset-0 z-[1] grid grid-flow-col-dense grid-rows-11 gap-1">
	<div class="grid grid-cols-2 md:grid-cols-6 gap-4">
		{#each new Array(6) as _, i}
			<div
				class="grid gap-4 transition-opacity duration-300
          {loadedCount[i] < 8 ? 'opacity-0' : 'opacity-100'}"
			>
				{#each new Array(8) as _, j}
					<div>
						<img
							on:load={() => loadedCount[i]++}
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
