<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import ChevronButton from './ChevronButton.svelte';
	import ScrollingText from './ScrollingText.svelte';

	export let projectData: any;

	const index: Writable<number> = writable(0);
	const maxIndex: number = projectData.length - 1;
</script>

<div class="grid">
	<ChevronButton left={true} {index} {maxIndex} />
	{#key $index}
		<div>
			<img src={projectData[$index].imgSrc} alt="Bild på gymnasieantagningswebben" />
			<ScrollingText skills={projectData[$index].skills} />
		</div>
		<div class="text">
			<h2>{projectData[$index].title}</h2>

			<p>
				{projectData[$index].text}
			</p>
		</div>
	{/key}
	<ChevronButton right={true} {index} {maxIndex} />
</div>

<style lang="scss">
	@import '$lib/styles/variables.scss';
	h2 {
		font-weight: 600;
	}
	img {
		border-radius: 2.3125rem;
		border: 1px solid $black;

		max-width: 100%;
		max-height: 100%;

		margin-top: 3rem;
	}

	.grid {
		display: grid;
		grid-template-columns: 50% auto;
		gap: 1rem;
	}

	.text {
		text-align: left;

		margin-left: auto;
		margin-right: 0;
	}
	.text p {
		margin-top: 0;
	}
</style>
