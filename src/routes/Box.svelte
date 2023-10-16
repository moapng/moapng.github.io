<script lang="ts">
	import '$lib/styles/common.scss';
</script>

<div class="box">
	<slot />
</div>

<style lang="scss">
	@import '$lib/styles/variables.scss';

	.box {
		background: $lavender-dark;
		border-radius: 4.375rem;

		margin: auto;
		margin-top: 8rem;

		width: 68rem;
		height: 39rem;

		flex-shrink: 0;
	}
</style>
