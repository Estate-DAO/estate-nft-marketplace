<script lang="ts">
	export let label: string;
	export let value = '';
	export let placeholder = '';
	export let rows: number = 3;
	export let hint = '';
</script>

<label class="flex flex-col gap-2">
	<span class="text-sm font-medium leading-6 text-gray-900">{label}</span>
	<textarea
		{placeholder}
		bind:value
		{rows}
		class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
	/>
	{#if hint}
		<p class="mt-1 text-sm leading-6 text-gray-600">{hint}</p>
	{/if}
</label>
