<script lang="ts">
	import '$lib/styles/common.scss';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let title: string;
	export let href: string;

	let open: Writable<boolean> = getContext('open');
</script>

<li class="border-t-2 border-b-2 border-primary mt-8">
	<a {href}>
		<slot />
		{#if $open}
			<p class="ps-8">{title}</p>
		{/if}
	</a>
</li>

<style lang="scss">
	@import '$lib/styles/variables.scss';
</style>
