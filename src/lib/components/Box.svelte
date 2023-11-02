<script lang="ts">
	import { writable } from 'svelte/store';
	import Circle from './Circle.svelte';
	import { page } from '$app/stores';
	import type { ICircle } from '$lib/Interfaces';

	const lavender: string = '#D7B9FE';
	const lime: string = '#C4F4CF';
	const circlesData: ICircle[] = [
		{
			path: '/',
			isActiveCircle: writable(true),
			colour: lavender,
			xAxis: 15.1,
			icon: '/icons/moaicon.svg'
		},
		{
			path: '/kompetenser',
			isActiveCircle: writable(false),
			colour: lime,
			xAxis: 9.4,
			icon: '/icons/kompetensericon.svg'
		},
		{
			path: '/projekt',
			isActiveCircle: writable(false),
			colour: lavender,
			xAxis: 5.6,
			icon: '/icons/projekticon.svg'
		},
		{
			path: '/kontakt',
			isActiveCircle: writable(false),
			colour: lime,
			xAxis: -0.1,
			icon: '/icons/kontakticon.svg'
		}
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
				icon={circle.icon}
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

		padding: 2rem 7rem;

		width: 68rem;
		height: 38rem;
	}

	.circle-row {
		position: relative;
		right: 2rem;

		display: flex;
		padding-bottom: 2rem;
		column-gap: 2rem;
	}
</style>
