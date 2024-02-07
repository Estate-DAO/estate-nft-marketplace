<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import DocumentIcon from '$lib/components/icons/DocumentIcon.svelte';
	import ImageIcon from '$lib/components/icons/ImageIcon.svelte';
	import PlusIcon from '$lib/components/icons/PlusIcon.svelte';
	import Input from '$lib/components/input/Input.svelte';
	import { createEventDispatcher } from 'svelte';
	import { slide } from 'svelte/transition';

	export let name = '';
	export let type: 'document' | 'image';

	let inputEl: HTMLInputElement;

	function handleUpload(files: FileList | null) {
		if (files && files[0]) {
			console.log('selected file', files[0]);
		}
	}

	const dispatch = createEventDispatcher<{
		delete: void;
	}>();
</script>

<div
	transition:slide
	class="bg-gray-50 border border-gray-100 relative p-4 rounded-lg flex flex-col mt-8 overflow-hidden"
>
	<Input label="Document's name" type="text" value={name} />
	<div class="absolute top-2 right-4">
		<Button on:click={() => dispatch('delete')} iconOnly secondary>
			<PlusIcon class="h-6 w-6 rotate-45" />
		</Button>
	</div>

	<div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 py-5">
		<label
			class="text-center flex items-center rounded-md flex-col gap-4 cursor-pointer transition-colors focus-within:outline-none hover:bg-black/5 active:bg-black/[2%] px-6 py-5"
		>
			{#if type === 'document'}
				<DocumentIcon class="h-12 w-12 text-gray-300" />
			{:else}
				<ImageIcon class="h-12 w-12 text-gray-300" />
			{/if}
			<div class="relative font-semibold text-sm leading-6 text-black">
				<span>Upload a {type}</span>
				<input
					bind:this={inputEl}
					on:change={(e) => handleUpload(e.currentTarget.files)}
					type="file"
					class="sr-only"
					accept={type === 'document'
						? 'application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, application/pdf'
						: 'image/png, image/jpg, image/jpeg'}
				/>
			</div>
			<p class="text-xs leading-5 text-gray-600">
				{type === 'document' ? 'PDF, PPT, DOC(X) or XLSX' : 'PNG, JPG or JPEG'} up to 10MB
			</p>
		</label>
	</div>
</div>
