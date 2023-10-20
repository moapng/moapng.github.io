<script lang="ts">
	import JsSvg from '$lib/components/svgs/JsSvg.svelte';
	import TsSvg from '$lib/components/svgs/TsSvg.svelte';
	import ReactSvg from '$lib/components/svgs/ReactSvg.svelte';
	import SvelteSvg from '$lib/components/svgs/SvelteSvg.svelte';
</script>

<div class="content">
	<div class="text">
		<h1>Mina kompetenser</h1>
		<div class="grid">
			<ul>
				<li>
					<SvelteSvg /> SvelteKit
				</li>
				<li><ReactSvg />React</li>
				<li><TsSvg /> TypeScript</li>
				<li><JsSvg />JavaScript</li>
			</ul>
			<ul>
				<li>HTML5</li>
				<li>CSS3</li>
				<li>npm</li>
				<li>nodeJS</li>
			</ul>
			<ul>
				<li>C#</li>
				<li>SQL</li>
				<li>Postman</li>
			</ul>
			<ul>
				<li>WCAG</li>
				<li>Scrum</li>
			</ul>
		</div>
	</div>
</div>

<style lang="scss">
	@import '$lib/styles/variables.scss';
	.content {
		z-index: 2;

		display: flex;
	}
	h1 {
		color: $lavender;
		margin-top: 2rem;
	}
	.text {
		z-index: inherit;

		width: 44rem;
		margin: auto;
	}
	.grid {
		//använd grid column ist?
		display: grid;
		grid-template-columns: auto auto auto auto;
		column-gap: 2rem;
		column-rule: 1rem double #ff00ff;
	}
	li {
		display: flex;
	}
	:global(svg) {
		width: 2.5rem;
		height: 2.5rem;
	}
</style>
