<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';

	const projectData = [
		{
			title: 'Gymnasieantagningen',
			imgSrc: '/gymnasieantagningen.png',
			text: 'Mitt första uppdrag var hos Göteborgs Regionen, där jag bl.a. tillgänglighetsanpassade samt förvaltade deras befintliga webb.',
			skills: ['React', 'WCAG', 'C#', 'SQL', 'Azure Devops']
		},
		{
			title: 'Volvo Lastvagnar',
			imgSrc: '/volvolastvagnar.png',
			text: 'Hos Volvo Lastvagnar fick jag lära mig jobba i ett större team och att följa scrum-principerna till punkt och pricka. Det var även här som jag stötte på SvelteKit för första gången, och det var kärlek vid första ögonkastet. Sen dess har jag byggt alla hobby-projekt med det.',
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
