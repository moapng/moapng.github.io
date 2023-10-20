<script lang="ts">
	import Box from '../lib/components/Box.svelte';

	import '$lib/styles/common.scss';
</script>

<div class="app">
	<div class="header">
		<h1>Moa</h1>
	</div>
	<Box>
		<slot />
	</Box>
</div>

<style lang="scss">
	@import '$lib/styles/variables.scss';

	.app {
		margin: auto;
		text-align: center;
		flex-shrink: 0;
	}
	.header {
		border-radius: 0rem 0rem 4.375rem 4.375rem;
		background: $lavender-dark;
		margin: auto;
		margin-bottom: 8.4rem;
		text-align: center;
		width: 52rem;
		height: 5rem;
		flex-shrink: 0;
	}
</style>
