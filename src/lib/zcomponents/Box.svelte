<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import Circle from './Circle.svelte';
	import { page } from '$app/stores';

	const lavender: string = '#D7B9FE';
	const lime: string = '#C4F4CF';

	const pathname: Writable<string> = writable($page.url.pathname);

	const isActiveCircle1: Writable<boolean> = writable($pathname === '/');
	const isActiveCircle2: Writable<boolean> = writable(false);
	const isActiveCircle3: Writable<boolean> = writable(false);
</script>

<div class="box">
	<nav class="circle-row">
		{#key $pathname}
			<Circle
				colour={lavender}
				href="/"
				isActiveCircle={isActiveCircle1}
				on:click={() => {
					isActiveCircle1.set(true);
					isActiveCircle2.set(false);
					isActiveCircle3.set(false);
				}}
			/>
			<Circle
				colour={lime}
				href="/kompetenser"
				isActiveCircle={isActiveCircle2}
				on:click={() => {
					isActiveCircle1.set(false);
					isActiveCircle2.set(true);
					isActiveCircle3.set(false);
				}}
			/>
			<Circle
				colour={lavender}
				href="/projekt"
				isActiveCircle={isActiveCircle3}
				on:click={() => {
					isActiveCircle1.set(false);
					isActiveCircle2.set(false);
					isActiveCircle3.set(true);
				}}
			/>
		{/key}
		<!-- <Circle colour={lime} href="/länkträd" /> -->
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

		padding: 2rem 9.25rem;

		width: 68rem;
		height: 39rem;

		flex-shrink: 0;
	}

	.circle-row {
		display: flex;
		padding-bottom: 2rem;
		gap: 2rem;
	}
</style>
