<script lang="ts">
	import PlusIcon from '../icons/PlusIcon.svelte';

	export let secondary = false;
	export let disabled = false;
	export let submit = false;
	export let href: string | undefined = undefined;
	export let loading = false;
	export let iconOnly = false;
  export let target: string | undefined = undefined;
	let classes = '';
	export { classes as class };
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	role="presentation"
	{href}
	on:click
	type={submit && !href ? 'submit' : 'button'}
	{disabled}
  {target}
	class="{secondary
		? 'bg-white text-gray-900 ring-1 ring-inset ring-gray-100 hover:bg-gray-50 outline-none active:bg-gray-200'
		: 'bg-black text-white hover:bg-black/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ring-0'}
		{iconOnly ? 'p-1' : 'px-4 py-2'}
  inline-flex relative items-center w-fit h-fit rounded-md transition-all text-sm font-semibold shadow-md active:translate-y-[1px] text-nowrap disabled:opacity-30 {classes}"
>
	<div class="{loading ? 'opacity-0' : ''} transition-opacity">
		<slot />
	</div>
	{#if loading}
		<div class="absolute inset-0 flex items-center justify-center">
			<PlusIcon class="w-5 h-5 animate-spin" />
		</div>
	{/if}
</svelte:element>
