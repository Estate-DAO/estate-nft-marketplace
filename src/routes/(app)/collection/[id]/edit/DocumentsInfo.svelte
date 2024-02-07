<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import DocumentUpload from './DocumentUpload.svelte';

	let documents: {
		url: string;
		name: string;
	}[] = [
		{ url: '/', name: 'Registration certificate' },
		{ url: '/', name: 'Return on Investment Prediction' }
	];

	function removeDoc(idx: number) {
		documents.splice(idx, 1);
		documents = [...documents];
	}
</script>

<div class="flex flex-col -mt-8">
	{#each documents as { name }, i}
		<DocumentUpload {name} type="document" on:delete={() => removeDoc(i)} />
	{/each}
	<div class="mt-8">
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
