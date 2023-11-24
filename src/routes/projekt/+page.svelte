<script lang="ts">
	const projectData = [
		{
			title: 'Gymnasieantagningen',
			imgSrc: '/gymnasieantagningen.png',
			text: 'Mitt första uppdrag var hos Göteborgs Regionen, där jag bl.a. tillgänglighetsanpassade samt förvaltade deras befintliga webb.',
			skills: ['React', 'WCAG', 'C#', 'SQL', 'Azure Devops']
		},
		{
			title: 'Volvo Lastvagnar',
			imgSrc: '/volvo1.png',
			text: 'Hos Volvo Lastvagnar fick jag lära mig jobba i ett större team och att följa scrum-principerna till punkt och pricka. Det var även här som jag stötte på SvelteKit för första gången, och det var kärlek vid första ögonkastet. Sen dess har jag byggt alla hobby-projekt med det.',
			skills: ['SvelteKit', 'WCAG', 'C#', 'SQL', 'Azure Devops', 'Scrum']
		},
		{
			title: 'Nelly',
			imgSrc: '/nelly.png',
			text: '',
			skills: ['SvelteKit']
		},
		{
			title: 'Considition 2023',
			imgSrc: '/considition1.png',
			text: '',
			skills: ['SvelteKit', 'WCAG', 'C#', 'SQL', 'Azure Devops']
		}
	];
</script>

<svelte:head><title>Moas projekt</title></svelte:head>

<h1>Projekt jag jobbat med</h1>
<div class="container">
	{#each projectData as project}
		<img class='item' src={project.imgSrc} alt={project.title} />
	{/each}
</div>

<style lang="scss">
	@import '$lib/styles/variables.scss';

	img {
		border-radius: 1.5rem;
		border: 1px solid $black;

		width: 16rem;
	}
</style>
