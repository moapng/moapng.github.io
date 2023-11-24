<script lang="ts">
	import Box from '../lib/components/Box.svelte';
	import '$lib/styles/common.scss';
</script>

<div class="header">
	<h1>Moa</h1>
</div>
<Box>
	<slot />
</Box>

<style lang="scss">
	@import '$lib/styles/variables.scss';

	.header {
		border-radius: 0rem 0rem 4.375rem 4.375rem;
		background: linear-gradient(180deg, $lavender-light 0%, $lavender-dark 100%);
		border: 0.5rem solid $lavender-light;

		width: 40rem;
		height: 5rem;
		
		padding: 0.5rem;

		margin: auto;
		margin-bottom: 4rem;

		text-align: center;
	}
</style>
