<script lang="ts">
	import { writable } from 'svelte/store';
	import Circle from './Circle.svelte';
	import { page } from '$app/stores';
	import type { ICircle } from '$lib/Interfaces';

	const lavender: string = '#D7B9FE';
	const lime: string = '#C4F4CF';
	const circlesData: ICircle[] = [
		{ path: '/', isActiveCircle: writable(true), colour: lavender, xAxis: 15.1 },
		{ path: '/kompetenser', isActiveCircle: writable(false), colour: lime, xAxis: 9.4 },
		{ path: '/projekt', isActiveCircle: writable(false), colour: lavender, xAxis: 3.6 }
	];

	// Update the active circle based on the current pathname
	$: {
		circlesData.forEach((circle) => {
			circle.isActiveCircle.set(circle.path === $page.url.pathname);
		});
	}
</script>

<div class="box">
	<nav class="circle-row">
		{#each circlesData as circle (circle.path)}
			<Circle
				colour={circle.colour}
				href={circle.path}
				isActiveCircle={circle.isActiveCircle}
				xAxis={circle.xAxis}
				on:click={() => {
					circlesData.forEach((c) => c.isActiveCircle.set(false));
					circle.isActiveCircle.set(true);
				}}
			/>
		{/each}
	</nav>

	<slot />
</div>

<style lang="scss">
	@import '$lib/styles/variables.scss';

	.box {
		position: relative;

		background: $lavender-dark;
		border-radius: 4.375rem;

		margin: auto;
		margin-top: 8rem;

		padding: 2rem 5rem;

		width: 64rem;
		height: 35rem;

		flex-shrink: 0;
	}

	.circle-row {
		display: flex;
		padding-bottom: 2rem;
		gap: 2rem;
	}
</style>
