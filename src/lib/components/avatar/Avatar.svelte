<script lang="ts">
	export let initalLetter: string = '';
	export let href: string | undefined = '';
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	{href}
	class="h-10 w-10 bg-black flex items-center text-xl select-none justify-center font-thin text-white rounded-full uppercase"
>
	{initalLetter}
</svelte:element>
