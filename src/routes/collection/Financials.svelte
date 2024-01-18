<script>
	import InfoTitle from './InfoTitle.svelte';
</script>

<div class="flex flex-col gap-8 py-4">
	<div class="rounded-2xl shadow-lg py-4 flex flex-col gap-5">
		<div class="flex items-center justify-between px-6 pb-4 border-black/10 border-b-[1px]">
			<InfoTitle classes="font-bold" title="Total Investment Value" />
			<div class="font-bold text-lg">$4,00,000</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle title="Underlyning Asset Price" />
			<div class="text-lg">$2,00,000</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle title="Home Closing Fee (4%)" />
			<div class="text-lg">WAVED</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle title="Initial Maintenance Reserve (5%)" />
			<div class="text-lg">$2,00,000</div>
		</div>
	</div>

	<div class="rounded-2xl shadow-lg py-4 flex flex-col gap-5">
		<div class="flex items-center justify-between px-6 pb-4 border-black/10 border-b-[1px]">
			<InfoTitle classes="font-bold" title="Total Returns (5 Year IRR)" />
			<div class="font-bold text-lg">10.13%</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle title="Projected Appreciation" />
			<div class="text-lg">5.00%</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle title="Average 5 Year ROI" />
			<div class="text-lg">5.35%</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle title="Cap Rate" />
			<div class="text-lg">4.96%</div>
		</div>
	</div>

	<div class="rounded-2xl shadow-lg py-4 flex flex-col gap-5">
		<div class="flex items-center justify-between px-6 pb-4 border-black/10 border-b-[1px]">
			<InfoTitle classes="font-bold" title="Monthly Gross Rents" />
			<div class="font-bold text-lg">$1,900.00</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle title="Vacancy Rate (5%)" />
			<div class="text-lg">$95.00</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle title="Monthly Utilities" />
			<div class="text-lg">$85.00</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle title="Property Management Fee" />
			<div class="text-lg">$171.00</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle title="LLC Monthly Franchise Tax" />
			<div class="text-lg">$25.00</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle title="Property Taxes" />
			<div class="text-lg">$388.92</div>
		</div>
	</div>

	<div class="rounded-2xl shadow-lg py-4 flex flex-col gap-5">
		<div class="flex items-center justify-between px-6 pb-4 border-black/10 border-b-[1px]">
			<InfoTitle classes="font-bold" title="Property Insurance" />
			<div class="font-bold text-lg">$1,900.00</div>
		</div>
		<div class="flex items-center justify-between px-6 pb-4 border-black/10 border-b-[1px]">
			<InfoTitle classes="font-bold" title="Expense to income Ratio" />
			<div class="text-lg">0.46</div>
		</div>
		<div class="flex items-center justify-between px-6 pb-4 border-black/10 border-b-[1px]">
			<InfoTitle classes="font-bold" title="Total Monthly Costs" />
			<div class="text-lg">$880.00</div>
		</div>
		<div class="flex items-center justify-between px-6">
			<InfoTitle classes="font-bold" title="Monthly Cash Flow" />
			<div class="text-lg">$1,020.00</div>
		</div>
	</div>
</div>
