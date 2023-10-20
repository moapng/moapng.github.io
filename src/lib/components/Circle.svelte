<script lang="ts">
	import { spring } from 'svelte/motion';
	import type { Writable } from 'svelte/store';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	export let colour: string;
	export let href: string;
	export let isActiveCircle: Writable<boolean>;
	export let xAxis: number;
	// let coords = spring({ x: 0, y: 0 }, { stiffness: 0.1, damping: 0.7 });
	let coords = tweened({ x: 0, y: 0 }, { duration: 400, easing: cubicOut });
	let isBig: boolean = false;

	const moveCircle = () => {
		coords.set({ x: xAxis, y: 7 });
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
		transition: width 1s;
		width: 3.1rem;
		height: 3.1rem;

		flex-shrink: 0;
	}
	.circle {
		z-index: 1;

		position: absolute;
		// top: 8rem;
		// left: 23.4rem;

		width: 20rem;
		height: 20rem;

		flex-shrink: 0;
	}
</style>
