<script lang="ts">
	import demo from '$lib/assets/demo.png';
</script>

<div class="w-full h-20 shadow-xl flex items-center justify-between px-8 font-light">
	<a href="/" class="text-2xl">Estate DAO</a>
	<div class="flex items-center gap-8">
		<div>About</div>
		<a class="underline" href="/legacy/auth">Login</a>
	</div>
</div>

<div class="h-[400px] flex items-end justify-center space-y-4 bg-emerald-100 relative">
	<img src={demo} class="h-3/4" alt="banner" />
	<div class="absolute left-20 -bottom-20 w-40 h-40 rounded-lg overflow-hidden">
		<div class="absolute inset-0 z-[0] bg-black/50 animate-pulse"></div>
		<img
			src="https://source.unsplash.com/random"
			class="w-full h-full object-cover z-[2]"
			alt="avatar"
		/>
	</div>
</div>

<div class="pt-24 px-20 flex flex-col gap-2">
	<div class="text-4xl font-bold">Name</div>
	<div class="text-lg font-thin">@username</div>
	<div class="text-lg">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore
	</div>
</div>

<div class="flex items-center gap-8 justify-start p-12 flex-wrap">
	{#each new Array(4) as _, i}
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
			<div class="flex flex-col p-4 gap-1 items-center justify-center">
				<div class="font-bold text-black/50">GobGob #1</div>
				<div class="font-bold text-black">9.0 ICP</div>
			</div>
		</a>
	{/each}
</div>
