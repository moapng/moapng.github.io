<script lang="ts">
	import { page } from '$app/stores';
	import type { Writable } from 'svelte/store';

	export let href: string;
	export let active: Writable<boolean>;
	export let title: string;

	$: if ($page.url.pathname === href) active.set(true);
	else active.set(false);
</script>

<a {href} class:active={$active}>{title}</a>

<style lang="scss">
	@import '$lib/styles/variables.scss';
	a {
		font-family: Fladeo;
		font-size: 2.25rem;
		line-height: normal;
		text-shadow: 0.2rem 0.2rem 0 $black, -0.1rem 0.1rem 0 $black, -0.1rem -0.1rem 0 $black,
			0.1rem -0.1rem 0 $black;

		padding: 0.6rem 2rem;

		border-radius: 1rem 1rem 0rem 0rem;

		color: $lime;
		background: $lavender;
	}

	.active {
		background: $lavender-light;

		text-underline-offset: 0.5rem;
	}
</style>
