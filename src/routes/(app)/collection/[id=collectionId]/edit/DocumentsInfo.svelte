<script lang="ts">
	import { assetManager, nftMinterCanister } from '$lib/backend';
	import Button from '$lib/components/button/Button.svelte';
	import { getCollectionId } from '../collectionId.context';
	import DocumentUpload from './DocumentUpload.svelte';

	const { minterCanId, assetCanId } = getCollectionId();

	let documents: {
		url: string;
		name: string;
	}[] = [];

	function removeDoc(idx: number) {
		documents.splice(idx, 1);
		documents = [...documents];
	}

	async function uploadDocAndUpdate({ name, file }: { name: string; file: File }) {
		console.log('uploading', file);
		const manager = assetManager(assetCanId);
		const actor = nftMinterCanister(minterCanId);
		console.log('created asset manager & actor');

		const assetRes = await manager.store(file);

		console.log({ assetRes });

		const greeting = await actor.collection_image();
	}
</script>

<div class="flex flex-col -mt-8">
	{#each documents as { name }, i}
		<DocumentUpload
			{name}
			type="document"
			on:delete={() => removeDoc(i)}
			on:file={({ detail }) => uploadDocAndUpdate(detail)}
		/>
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
