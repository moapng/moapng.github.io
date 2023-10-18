<script lang="ts">
</script>

<div class="content">
	<div class="text">
		<h1>Mina kompetenser</h1>
		<!-- <div class="grid">
			<ul>
				<li>SvelteKit</li>
				<li>React</li>
				<li>TypeScript</li>
				<li>JavaScript</li>
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
		</div> -->
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
	.grid { //använd grid column ist?
		columns: 4;
		column-gap: 2rem;
		column-rule: 1rem double #ff00ff;
	}
	
</style>
