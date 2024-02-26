<script lang="ts" context="module">
	type StatusKey = UnionKeyOf<Status>;

	export type BasicInfoData = {
		name: string;
		description: string;
		status: StatusKey;
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
		status: 'Draft'
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
	<Textarea
		disabled={loading}
		bind:value={data.description}
		label="Description"
		placeholder="Enter a description"
		rows={5}
	/>
</div>
