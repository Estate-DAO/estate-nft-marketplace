<script lang="ts">
	import buy from './1-buy-info.webp';
	import trade from './2-trade-info.webp';
	import earn from './3-earn-info.webp';
	import book from './4-book-info.webp';
</script>

<section class="flex flex-col items-center max-w-3xl w-full lg:px-24 lg:py-12 p-8 gap-8">
	<div class="flex flex-col gap-1 font-bold items-center">
		<div
			class="rounded-full text-4xl w-20 h-20 flex items-center justify-center border-2 border-black"
		>
			1
		</div>
		<div class="text-2xl">Buy.</div>
	</div>
	<div class="font-light">
		<span class="font-bold">EstateDAO</span> offers a practical way for individuals to obtain fractional
		ownership in their desired vacation homes across the globe, with entry points as low as $100. Vacation
		properties are divided into units represented by NFTs (Non-Fungible Tokens). These tokens grant ownership
		in a Special Purpose Vehicle (SPV) specifically created to hold the real estate asset.
	</div>
	<img src={buy} class="w-full" alt="Buy" />

	<div class="flex flex-col gap-1 font-bold items-center">
		<div
			class="rounded-full text-4xl w-20 h-20 flex items-center justify-center border-2 border-black"
		>
			2
		</div>
		<div class="text-2xl">Trade.</div>
	</div>
	<div class="font-light">
		<span class="font-bold">EstateMart</span> allows owners to efficiently exchange their ownership
		of vacation homes using
		<span class="font-bold">EstateNFTs</span> at minimal transaction costs. Our marketplace enhances
		liquidity in a traditionally illiquid market, facilitating flexible entry and exit options to owners.
	</div>
	<img src={trade} class="w-full" alt="Trade" />

	<div class="flex flex-col gap-1 font-bold items-center">
		<div
			class="rounded-full text-4xl w-20 h-20 flex items-center justify-center border-2 border-black"
		>
			3
		</div>
		<div class="text-2xl">Earn.</div>
	</div>
	<div class="font-light">
		<span class="font-bold">EstateDAO</span> empowers its users to generate rental income and
		capital appreciation through tokenized ownership of vacation homes via
		<span class="font-bold">EstateNFTs</span>. With all <span class="font-bold">EstateDAO</span> properties
		under expert management and dedicated rental services, NFT owners can maximize their rental yields
		and return on investment (ROI) to the fullest extent.
	</div>
	<img src={earn} class="w-full" alt="Earn" />

	<div class="flex flex-col gap-1 font-bold items-center">
		<div
			class="rounded-full text-4xl w-20 h-20 flex items-center justify-center border-2 border-black"
		>
			4
		</div>
		<div class="text-2xl">Book.</div>
	</div>
	<div class="font-light">
		<span class="font-bold">MyEstate</span> offers its users the unique opportunity to reserve
		complimentary stays in meticulously curated vacation homes through the utilization of
		<span class="font-bold">EstateNFTs</span>. Owners of these NFTs are entitled to a portion of the
		time-sharing arrangement for the property.
	</div>
	<img src={book} class="w-full" alt="Book" />
</section>
