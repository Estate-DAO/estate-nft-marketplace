<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import LandingBg from '$lib/components/landing-bg/LandingBg.svelte';
</script>

<div
	class="flex flex-col overflow-hidden h-screen w-full items-center justify-center pb-20 gap-4 relative"
>
	<div class="text-4xl z-[3] font-thin text-center">
		Welcome to <span class="font-bold">Estate</span> DAO
	</div>
	<Button href="/market" class="z-[3]">Go to marketplace</Button>
	<LandingBg />
</div>
