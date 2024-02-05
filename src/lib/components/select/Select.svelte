<script lang="ts">
	export let label: string;
	export let value = '';
	export let options: { value: string; label: string }[] = [];
</script>

<label class="flex flex-col gap-2">
	<span class="text-sm font-medium leading-6 text-gray-900">{label}</span>
	<select
		bind:value
		class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
	>
		{#each options as { value, label }}
			<option {value}>{label}</option>
		{/each}
	</select>
</label>
