<script lang="ts">
	export let label: string;
	export let selected = '';
	export let options: { value: string; label: string }[] = [
		{
			value: 'all',
			label: 'All'
		},
		{
			value: 'available',
			label: 'Available'
		},
		{
			value: 'upcoming',
			label: 'Upcoming'
		},
		{
			value: 'sold-out',
			label: 'Sold out'
		}
	];
</script>

<div>
	<div class="sm:hidden">
		<label for="tabs" class="sr-only">{label}</label>
		<!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
		<select
			id="tabs"
			name="tabs"
			class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
		>
			<option>Available</option>
			<option>Sold out</option>
			<option>Upcoming</option>
			<option>All</option>
		</select>
	</div>
	<div class="hidden sm:block">
		<nav class="flex space-x-4" aria-label="Tabs">
			{#each options as { value, label }}
				<button
					on:click={() => (selected = value)}
					class=" rounded-md px-3 py-2 text-sm font-medium {selected === value
						? 'bg-white border-[1px] border-gray-100 shadow-md text-black'
						: 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}"
				>
					{label}
				</button>
			{/each}
		</nav>
	</div>
</div>
