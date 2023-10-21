<script lang="ts">
	import type { Writable } from 'svelte/store';

	export let left: boolean = false;
	export let right: boolean = false;
	export let index: Writable<number>;
	export let maxIndex: number;

	const minIndex: number = 0;

	const increase = () => {
		if ($index < maxIndex) index.set($index + 1);
	};
	const decrease = () => {
		if ($index > minIndex) index.set($index - 1);
	};
</script>

{#if left}
	<button class="left" on:click={decrease}>
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			transform="matrix(-1, 0, 0, 1, 0, 0)"
		>
			<path
				d="M13.9394 12.0001L8.46973 6.53039L9.53039 5.46973L16.0607 12.0001L9.53039 18.5304L8.46973 17.4697L13.9394 12.0001Z"
				fill="#1e1e1e"
			/>
		</svg>
	</button>
{/if}
{#if right}
	<button class="right" on:click={increase}>
		<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M13.9394 12.0001L8.46973 6.53039L9.53039 5.46973L16.0607 12.0001L9.53039 18.5304L8.46973 17.4697L13.9394 12.0001Z"
				fill="#1e1e1e"
			/>
		</svg>
	</button>
{/if}

<style lang="scss">
	@import '$lib/styles/variables.scss';

	button {
		border: none;
		background: none;

		position: absolute;
		top: 11rem;
		cursor: pointer;
	}

	button.left {
		left: -3rem;
	}

	button.right {
		right: -3rem;
	}

	svg {
		width: 2rem;
		height: 2rem;
	}
</style>
