<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import Input from '$lib/components/input/Input.svelte';
	import { slide } from 'svelte/transition';

	let documents: {
		url: string;
		name: string;
	}[] = [
		{ url: '/', name: 'Registration certificate' },
		{ url: '/', name: 'Return on Investment Prediction' }
	];
</script>

<div class="flex flex-col gap-8">
	{#each documents as { name }}
		<div transition:slide class="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col">
			<Input label="Document's name" type="text" value={name} />
			<div
				class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
			>
				<div class="text-center">
					<svg
						class="mx-auto h-12 w-12 text-gray-300"
						viewBox="0 0 24 24"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
							clip-rule="evenodd"
						></path>
					</svg>
					<div class="mt-4 flex text-sm leading-6 text-gray-600">
						<label
							for="file-upload"
							class="relative cursor-pointer rounded-md bg-white font-semibold text-black focus-within:outline-none focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2 hover:text-black"
						>
							<span>Upload a document</span>
							<input id="file-upload" name="file-upload" type="file" class="sr-only" />
						</label>
						<p class="pl-1">or drag and drop</p>
					</div>
					<p class="text-xs leading-5 text-gray-600">PDF, DOCX, XLSX up to 10MB</p>
				</div>
			</div>
		</div>
	{/each}
	<div>
		<Button
			on:click={() => {
				documents.push({
					url: '',
					name: ''
				});
				documents = [...documents];
			}}>Add new</Button
		>
	</div>
</div>
