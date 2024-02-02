<script lang="ts">
	export let label: string;
	export let value: string = '';
	export let placeholder: string = '';
</script>

<label class="flex flex-col gap-2">
	<span class="text-sm font-medium leading-6 text-gray-900">{label}</span>
	<input
		{placeholder}
		bind:value
		type="text"
		class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
	/>
</label>
