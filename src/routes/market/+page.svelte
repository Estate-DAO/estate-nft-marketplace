<script>
	import Card from '$lib/components/card/Card.svelte';
	import Dropdown from '$lib/components/dropdown/Dropdown.svelte';
	import Selector from '$lib/components/selector/Selector.svelte';
</script>

<div class="p-4 sticky top-24 z-40">
	<div class="rounded-xl p-4 bg-white flex items-center gap-x-8 z-[2] justify-between shadow-2xl">
		<Selector />
		<div class="flex items-center gap-x-4">
			<Dropdown title="Location" value="Geo Location" />
			<Dropdown title="Sort by" value="Popularity" />
		</div>
	</div>
</div>

<div class="flex py-12 items-center gap-8 justify-normal px-16 flex-wrap">
	{#each Array(20) as _, i}
		<Card id={i} />
	{/each}
</div>
