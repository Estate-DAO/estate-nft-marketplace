<script lang="ts" context="module">
	type Documents = [string, string][];
	type DocumentsMap = {
		url: string;
		name: string;
	};
</script>

<script lang="ts">
	import { assetManager, nftMinterCanister } from '$lib/backend';
	import Button from '$lib/components/button/Button.svelte';
	import { getCollectionId } from './collectionId.context';
	import DocumentUpload from './DocumentUpload.svelte';

	export let loading = false;
	export let documents: Documents[] | undefined = [];

	const { minterCanId, assetCanId } = getCollectionId();

	let documentsMap: DocumentsMap[] = [];

	$: mapDocuments(documents);

	function mapDocuments(documents?: Documents[]) {
		//@ts-ignore
		documentsMap = documents ? documents.map(([name, url]) => ({ name, url })) : [];
	}

	function addDoc() {
		documentsMap.push({
			url: '',
			name: ''
		});
		documentsMap = [...documentsMap];
	}

	function removeDoc(idx: number) {
		documentsMap.splice(idx, 1);
		documentsMap = [...documentsMap];
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
	{#each documentsMap as { name }, i}
		<DocumentUpload
			bind:loading
			{name}
			type="document"
			on:delete={() => removeDoc(i)}
			on:file={({ detail }) => uploadDocAndUpdate(detail)}
		/>
	{/each}
	<div class="mt-8">
		<Button on:click={addDoc}>Add new</Button>
	</div>
</div>
