<script lang="ts">
	import { spring } from 'svelte/motion';
	import type { Writable } from 'svelte/store';

	export let colour: string;
	export let href: string;
	export let isActiveCircle: Writable<boolean>;
	let coords = spring({ x: 0, y: 0 }, { stiffness: 0.1, damping: 0.1 });
	let isBig: boolean = false;

	const moveCircle = () => {
		coords.set({ x: 1, y: 1 });
		isBig = true;
		isActiveCircle.set(true);
	};

	const resetCircle = () => {
		coords.set({ x: 0, y: 0 });
		isBig = false;
		isActiveCircle.set(false);
	};

	$: if ($isActiveCircle) moveCircle();
	$: if (!$isActiveCircle) resetCircle();
</script>

<a {href} on:click>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="30"
		height="30"
		viewBox="0 0 30 30"
		fill="none"
		style="transform: translate({$coords.x}rem, {$coords.y}rem);"
		class:circle={isBig}
	>
		<circle cx="15" cy="15" r="15" fill={colour} />
	</svg>
</a>

<style lang="scss">
	@import '$lib/styles/variables.scss';
	a {
		width: 3.75rem;
	}
	a svg {
		width: 3.75rem;
		height: 3.75rem;

		flex-shrink: 0;
	}
	.circle {
		z-index: 1;

		position: absolute;
		top: 8rem;
		left: 23.4rem;

		width: 21.25rem;
		height: 21.25rem;

		flex-shrink: 0;
	}
</style>
