<script lang="ts">
	import JsSvg from '$lib/components/svgs/JsSvg.svelte';
	import TsSvg from '$lib/components/svgs/TsSvg.svelte';
	import ReactSvg from '$lib/components/svgs/ReactSvg.svelte';
	import SvelteSvg from '$lib/components/svgs/SvelteSvg.svelte';
	import HtmlSvg from '$lib/components/svgs/HtmlSvg.svelte';
	import CssSvg from '$lib/components/svgs/CssSvg.svelte';
	import NpmSvg from '$lib/components/svgs/NpmSvg.svelte';
	import NodeSvg from '$lib/components/svgs/NodeSvg.svelte';
	import CSvg from '$lib/components/svgs/CSvg.svelte';
	import SqlSvg from '$lib/components/svgs/SqlSvg.svelte';
	import ScrumSvg from '$lib/components/svgs/ScrumSvg.svelte';
	import A11ySvg from '$lib/components/svgs/A11ySvg.svelte';
	import PostmanSvg from '$lib/components/svgs/PostmanSvg.svelte';
	import FigmaSvg from '$lib/components/svgs/FigmaSvg.svelte';
</script>

<svelte:head><title>Moas kompetenser</title></svelte:head>

<h1>Mina kompetenser</h1>
<div class="container">
	<li>
		<SvelteSvg />SvelteKit
	</li>
	<li><ReactSvg />React</li>
	<li><TsSvg /> TypeScript</li>
	<li><JsSvg />JavaScript</li>
	<li><HtmlSvg />HTML5</li>
	<li><CssSvg />CSS3</li>
	<li><NpmSvg />npm</li>
	<li><NodeSvg />nodeJS</li>
	<li><A11ySvg />WCAG</li>
	<li><FigmaSvg />Figma</li>
	<li><ScrumSvg /> Scrum</li>
	<li><CSvg /> C#</li>
	<li><SqlSvg />SQL</li>
	<li><PostmanSvg />Postman</li>
</div>

<style lang="scss">
	@import '$lib/styles/variables.scss';

	li {
		display: flex;
		align-items: center;
		
		gap: 1rem;
	}

	.container {
		flex-direction: column;
	}
</style>
