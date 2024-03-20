<script lang="ts">
	import hero from './about-hero.webp';
	import ButtonAlt from '$lib/components/button/ButtonAlt.svelte';
</script>

<section
	id="top"
	style="background: url('{hero}'); background-position: center; background-size: cover;"
	class="min-h-[30rem] w-full flex items-center justify-center p-8"
>
	<div class="bg-white/75 backdrop-blur flex flex-col items-center lg:py-12 lg:px-24 p-8 gap-2">
		<div class="text-4xl font-light text-center">Own a Vacation Home <br />Starting at $100</div>
		<div class="text-lg">
			& get <span class="font-bold uppercase">Free</span> holidays by owning
		</div>
		<div class="text-2xl uppercase font-bold">Estate<span class="font-thin">Nft</span></div>
		<div class="pt-4">
			<ButtonAlt href="/market">Explore more</ButtonAlt>
		</div>
	</div>
</section>
