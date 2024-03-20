<script>
	import ButtonAlt from '$lib/components/button/ButtonAlt.svelte';
	import CaretDownIcon from '$lib/components/icons/CaretDownIcon.svelte';
</script>

<section class="flex flex-col bg-gray-100 items-center w-full lg:p-24 p-8">
	<div class="flex flex-col gap-8 font-bold items-center max-w-3xl">
		<div class="text-4xl font-thin">Need more information about EstateDAO?</div>
		<div>Dive Into Our Whitepaper And Learn More</div>
		<ButtonAlt href="/20240309 EstateDAO - Whitepaper.pdf" target="_blank">
			<div class="flex gap-2 items-center">
				<span>Read our whitepaper</span>
				<CaretDownIcon class="h-4 w-4 -rotate-90" />
			</div>
		</ButtonAlt>
	</div>
</section>
