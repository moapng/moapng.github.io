<script lang="ts">
	import { page } from '$app/stores';
	import '$lib/styles/common.scss';
	import { setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import { spring, tweened } from 'svelte/motion';

	const lavender: string = '#D7B9FE';
	const lime: string = '#C4F4CF';

	const currentColour: Writable<string> = setContext('currentColour', writable(lavender));

	let coords = spring({ x: 0, y: 0 }, { stiffness: 0.1, damping: 0.1 });
	let isBig: boolean = false;
	const moveCircle = () => {
		if ($coords.x === 0 && $coords.y === 0) {
			coords.set({ x: 1, y: 1 });
			isBig = true;
		} else coords.set({ x: 0, y: 0 });
	};
</script>

<div class="box">
	<div class="circle-row">
		<a href="/">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="30"
				height="30"
				viewBox="0 0 30 30"
				fill="none"
				style="transform: translate({$coords.x}rem, {$coords.y}rem);"
				on:click={moveCircle}
				on:keydown={() => {}}
				role="button"
				tabindex="0"
				class:circle={isBig}
			>
				<circle cx="15" cy="15" r="15" fill={lavender} />
			</svg>
		</a>
		<a href="/kompetenser">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="30"
				height="30"
				viewBox="0 0 30 30"
				fill="none"
			>
				<circle
					cx="15"
					cy="15"
					r="15"
					fill={$page.url.href.includes('/kompetenser') ? 'transparent' : lime}
				/>
			</svg>
		</a>
		<a href="/">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="30"
				height="30"
				viewBox="0 0 30 30"
				fill="none"
			>
				<circle cx="15" cy="15" r="15" fill={lavender} />
			</svg>
		</a>
		<a href="/">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="30"
				height="30"
				viewBox="0 0 30 30"
				fill="none"
			>
				<circle cx="15" cy="15" r="15" fill={lime} />
			</svg>
		</a>
	</div>

	<slot />
	<!-- <svg
		xmlns="http://www.w3.org/2000/svg"
		width="30"
		height="30"
		viewBox="0 0 30 30"
		fill="none"
		class="circle"
	>
		<circle cx="15" cy="15" r="15" fill={$currentColour} />
	</svg> -->
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
