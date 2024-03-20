<script lang="ts">
	import bg from './landing-bg.webp';
	let loaded = false;
</script>

<div class="absolute inset-0 z-[2] bg-white/60"></div>
<div class="absolute inset-0 h-full z-[1] grid grid-flow-col-dense grid-rows-11 gap-1">
	<img
		on:load={() => (loaded = true)}
		class="h-auto max-w-full rounded-lg {loaded ? 'opacity-100' : 'opacity-5'}"
		src={bg}
		alt=""
	/>
</div>
