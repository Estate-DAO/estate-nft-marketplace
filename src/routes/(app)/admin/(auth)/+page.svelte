<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import { adminStore } from '$lib/stores/admin';
</script>

<div class="flex flex-col items-center justify-center gap-4">
	<Button href="/admin/new-collection">Submit a new collection</Button>
	<div class="text-sm text-gray-400">or</div>
	<Button secondary href="/admin/manage/list">Manage submitted collections</Button>
	<hr class="h-px w-full my-12 bg-gray-200 border-0" />

	<Button
		secondary
		on:click={() =>
			adminStore.set({
				isLoggedIn: false,
				key: ''
			})}>Logout</Button
	>
</div>
