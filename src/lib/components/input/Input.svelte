<script lang="ts">
	import { onMount } from 'svelte';

	export let label: string;
	export let value: string = '';
	export let placeholder: string = '';
	export let type: 'text' | 'password' | 'number' | 'email' = 'text';
	export let disabled = false;

	let inputEl: HTMLInputElement;

	onMount(() => (inputEl.type = type));
</script>

<label
	class="flex flex-col gap-2 transition-opacity {disabled
		? 'pointer-events-none opacity-50'
		: 'opacity-100'}"
>
	<span class="text-sm font-medium leading-6 text-gray-900">{label}</span>
	<input
		{disabled}
		bind:this={inputEl}
		{placeholder}
		bind:value
		class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
	/>
</label>
