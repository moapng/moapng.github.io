<script lang="ts">
	import NavTabs from './NavTabs.svelte';
</script>

<NavTabs />
<div class="box">
	<slot />
</div>

<style lang="scss">
	@import '$lib/styles/variables.scss';

	.box {
		position: relative;

		background: linear-gradient(180deg, $lavender-light 0%, $lavender-dark 100%);
		border-radius: 4.375rem;
		border: 1rem solid $lavender-light;

		margin: auto;

		padding: 2rem 7rem;

		width: 68rem;
		height: 34rem;
	}
</style>
