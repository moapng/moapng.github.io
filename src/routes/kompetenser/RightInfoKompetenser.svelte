<script lang="ts">
	let arrayOfSvgNames = [
		'Svelte',
		'React',
		'TypeScript',
		'JavaScript',
		'Html',
		'Css',
		'Npm',
		'Node',
		'A11y',
		'Figma',
		'Scrum',
		'C#',
		'Sql',
		'Postman',
		'Azure Devops'
	];

	const getSvgComponent = (svgName: string) =>
		import(`./svgs/${svgName.replace(/[^a-zA-Z0-9 ]/g, '')}Svg.svelte`);
</script>

<ul class="grid grid-cols-3 max-md:pt-4 md:grid-cols-2 md:h-full">
	{#each arrayOfSvgNames as svgName}
		<li class="flex items-center gap-4 w-24 md:w-32">
			{#await getSvgComponent(svgName)}
				<span class="loading loading-bars loading-lg" />
			{:then { default: SvgComponent }}
				<SvgComponent />
			{/await}
			<p class="w-10">{svgName === 'A11y' ? 'Accessibility, WCAG' : svgName}</p>
		</li>
	{/each}
</ul>
