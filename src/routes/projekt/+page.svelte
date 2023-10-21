<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';

	const projectData = [
		{
			imgSrc: '$lib/styles/images/gymnasieantagningen.png',
			text: 'Mitt första uppdrag var hos Göteborgs Regionen, där jag bl.a. tillgänglighetsanpassade samt förvaltade deras befintliga webb.',
			skills: ['React', 'WCAG', 'C#', 'SQL']
		},
		{
			imgSrc: '$lib/styles/images/gymnasieantagningen.png',
			text: 'Volvo Lastvagnar',
			skills: ['SvelteKit', 'WCAG', 'C#', 'SQL', 'Azure Devops', 'Scrum']
		}
	];
</script>

<div class="content">
	<h1>Projekt jag jobbat med</h1>
	<Carousel {projectData} />
</div>

<style lang="scss">
	@import '$lib/styles/variables.scss';
	.content {
		z-index: 2;
		position: relative;
	}

	h1 {
		color: $lime;
		margin-top: 2rem;
	}
</style>
