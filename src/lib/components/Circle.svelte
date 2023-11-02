<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	export let colour: string;
	export let href: string;
	export let isActiveCircle: Writable<boolean>;
	export let xAxis: number;
	export let icon: string;

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

<a {href} on:click class="flex">
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
		<image x="2.5" y="2.5" width="25" height="25" href={icon} class:opacity={isBig} />
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
	}
	.opacity {
		transition: opacity 1s;
		opacity: 0.1;
	}
	.circle {
		z-index: 1;

		position: absolute;

		width: 20rem;
		height: 20rem;
	}
</style>
