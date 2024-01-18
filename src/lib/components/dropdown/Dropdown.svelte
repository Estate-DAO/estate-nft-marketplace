<script lang="ts">
	export let title = '';
	export let value = '';
</script>

<div
	class="relative w-56 border border-1 rounded-xl border-black p-4 flex items-center justify-between"
>
	<div
		style="background: linear-gradient(0deg, transparent 0%, white 40%, white 60%, transparent 100%);"
		class="absolute -top-4 left-2 text-sm p-1"
	>
		{title}
	</div>

	<div>{value}</div>
	<svg class="h-2" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M1.5 1.5L12.5 12.5L23.5 1.5" stroke="black" stroke-width="3" />
	</svg>
</div>
