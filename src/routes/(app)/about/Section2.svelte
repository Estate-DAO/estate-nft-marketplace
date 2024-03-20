<script lang="ts">
	import header from './about-header.webp';
	import ButtonAlt from '$lib/components/button/ButtonAlt.svelte';
	import CaretDownIcon from '$lib/components/icons/CaretDownIcon.svelte';
</script>

<section class="flex flex-col lg:flex-row bg-gray-100 lg:p-24 p-4 items-center">
	<div class="lg:w-1/2 h-full">
		<img src={header} class="h-full" alt="Header" />
	</div>
	<div
		class="bg-white/75 backdrop-blur flex flex-col items-center h-full justify-center lg:py-12 lg:px-24 p-8 gap-2 lg:w-1/2"
	>
		<div class="text-2xl font-light text-center">Revolutionizing Vacation Home Investment</div>
		<div class="font-light">
			EstateDAO is a revolutionary platform that enables anyone to invest in vacation homes around
			the world for as little as $100. Using <a
				target="_blank"
				href="https://internetcomputer.org/"
				class="underline font-medium">Internet Computer Blockchain</a
			>, EstateDAO tokenizes and enables fractional ownership of properties, making vacation home
			ownership accessible, hassle-free, and profitable for all types of investors. <br /><br />
			The existing vacation home market is fundamentally flawed and riddled with numerous shortcomings
			(such as high cost, low liquidity, localization, unreliability, and low returns). If rectified,
			this market holds the key to unlocking vast untapped potential. EstateDAO steps in to remedy these
			inefficiencies by leveraging blockchain technology to create a decentralized and transparent marketplace
			for vacation homes.
		</div>
		<div class="pt-4">
			<ButtonAlt href="/20240309 EstateDAO - Whitepaper.pdf" target="_blank">
				<div class="flex gap-2 items-center">
					<span>Read the whitepaper</span>
					<CaretDownIcon class="h-4 w-4 -rotate-90" />
				</div>
			</ButtonAlt>
		</div>
	</div>
</section>
