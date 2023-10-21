<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	export let projectData: any;

	const index: Writable<number> = writable(0);
	const maxIndex: number = projectData.length - 1;
	const minIndex: number = 0;

	const increase = () => {
		if ($index < maxIndex) index.set($index + 1);
	};
	const decrease = () => {
		if ($index > minIndex) index.set($index - 1);
	};
</script>

<div class="grid">
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
	<img src="/gymnasieantagningen.png" alt="Bild på gymnasieantagningswebben" />
	<div class="text">
		<p>
			{projectData[$index].text}
		</p>
		<ul>
			{#each projectData[$index].skills as skill}
				<li>{skill}</li>
			{/each}
		</ul>
	</div>
	<button class="right" on:click={increase}>
		<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M13.9394 12.0001L8.46973 6.53039L9.53039 5.46973L16.0607 12.0001L9.53039 18.5304L8.46973 17.4697L13.9394 12.0001Z"
				fill="#1e1e1e"
			/>
		</svg>
	</button>
</div>

<style lang="scss">
	@import '$lib/styles/variables.scss';
	img {
		border-radius: 2.3125rem;

		width: 30rem;

		flex-shrink: 0;
	}

	.grid {
		display: grid;
		grid-template-columns: 60% auto;

		margin-top: 1rem;
	}

	.text {
		text-align: left;
	}

	ul {
		position: absolute;
		bottom: 0;

		display: flex;
		gap: 1rem;
	}

	button {
		border: none;
		background: none;

		position: absolute;
		top: 11rem;
	}
	button:hover {
		cursor: pointer;
	}
	button.left {
		border-radius: 2rem 0 0 2rem;

		left: -3rem;
	}

	button.right {
		border-radius: 0 2rem 2rem 0;

		right: -3rem;
	}
</style>
