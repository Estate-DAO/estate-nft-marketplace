<script lang="ts">
	export let secondary = false;
	export let disabled = false;
	export let href: string | undefined = undefined;
	let classes = '';
	export { classes as class };
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	role="presentation"
	{href}
	on:click
	{disabled}
	class="{secondary
		? 'bg-white text-gray-900 ring-1 ring-inset ring-gray-100 hover:bg-gray-50 outline-none active:bg-gray-200'
		: 'bg-black text-white hover:bg-black/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ring-0'}
  inline-flex items-center rounded-md transition-all px-3 py-2 text-sm font-semibold shadow-md active:translate-y-[1px] text-nowrap {classes} disabled:opacity-30"
>
	<slot />
</svelte:element>
