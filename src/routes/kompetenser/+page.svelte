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

<div class="content">
	<h1>Mina kompetenser</h1>
	<div class="grid">
		<ul>
			<li>
				<SvelteSvg />SvelteKit
			</li>
			<li><ReactSvg />React</li>
			<li><TsSvg /> TypeScript</li>
			<li><JsSvg />JavaScript</li>
		</ul>
		<ul>
			<li><HtmlSvg />HTML5</li>
			<li><CssSvg />CSS3</li>
			<li><NpmSvg />npm</li>
			<li><NodeSvg />nodeJS</li>
		</ul>
		<ul>
			<li><A11ySvg />WCAG</li>
			<li><FigmaSvg />Figma</li>
			<li><ScrumSvg /> Scrum</li>
		</ul>
		<ul>
			<li><CSvg /> C#</li>
			<li><SqlSvg />SQL</li>
			<li><PostmanSvg />Postman</li>
		</ul>
	</div>
</div>

<style lang="scss">
	@import '$lib/styles/variables.scss';
	.content {
		z-index: 2;
		position: relative;
	}

	h1 {
		color: $lavender;
		margin-top: 2rem;
	}

	.grid {
		display: grid;
		grid-template-columns: auto auto auto auto;
	}
	ul {
		padding: 1rem 0;
		margin: 0 auto;
	}
	li {
		display: flex;
		align-items: center;
		margin-bottom: 1.5rem;
		gap: 1rem;
	}

	:global(svg) {
		width: 3rem;
		height: 3rem;
	}
</style>
