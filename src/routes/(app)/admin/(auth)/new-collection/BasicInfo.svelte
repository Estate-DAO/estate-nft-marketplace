<script lang="ts" context="module">
	type StatusKey = UnionKeyOf<Status>;

	export type BasicInfoData = {
		name: string;
		description: string;
		status: StatusKey;
		supplyCap: number;
		price: number;
		coverImage: string;
	};
</script>

<script lang="ts">
	import { type UnionKeyOf } from '$lib/backend';
	import Input from '$lib/components/input/Input.svelte';
	import Textarea from '$lib/components/textarea/Textarea.svelte';
	import type { Status } from '$lib/declarations/estate_dao_nft_backend/estate_dao_nft_backend.did';
	import Select from '$lib/components/select/Select.svelte';

	export let loading = true;
	export let data: BasicInfoData = {
		name: '',
		description: '',
		status: 'Draft',
		supplyCap: 1000,
		price: 1,
		coverImage: ''
	};

	const handleStatusChange = ({ detail }: { detail: string }) =>
		(data.status = detail as StatusKey);
</script>

<div class="flex flex-col gap-4">
	<Input disabled={loading} label="Title" bind:value={data.name} placeholder="Enter a title" />
	<Select
		label="Status"
		on:change={handleStatusChange}
		value={data.status}
		options={[
			{ value: 'Ended', label: 'Ended' },
			{ value: 'Live', label: 'Live' },
			{ value: 'Draft', label: 'Draft' },
			{ value: 'Upcoming', label: 'Upcoming' }
		]}
	/>
	<Input
		disabled={loading}
		type="number"
		label="Price (in ICP)"
		bind:value={data.price}
		placeholder="Price (in ICP)"
	/>
	<Input
		disabled={loading}
		type="number"
		label="Supply cap (number of NFTs)"
		bind:value={data.supplyCap}
		placeholder="Supply cap"
	/>
	<Textarea
		disabled={loading}
		bind:value={data.description}
		label="Description"
		placeholder="Enter a description"
		rows={5}
	/>
</div>
