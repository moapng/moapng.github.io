<script lang="ts">
	import '$lib/styles/common.scss';
</script>

<div class="box">
	<div class="flex gap-8">
		<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
			<circle cx="30" cy="30" r="30" fill="#D7B9FE" />
		</svg>
		<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
			<circle cx="30" cy="30" r="30" fill="#C4F4CF" />
		</svg>
		<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
			<circle cx="30" cy="30" r="30" fill="#D7B9FE" />
		</svg>
		<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
			<circle cx="30" cy="30" r="30" fill="#C4F4CF" />
		</svg>
	</div>
	<slot />
</div>

<style lang="scss">
	@import '$lib/styles/variables.scss';

	.box {
		background: $lavender-dark;
		border-radius: 4.375rem;

		margin: auto;
		margin-top: 8rem;

		padding: 3rem 10rem;

		width: 68rem;
		height: 39rem;

		flex-shrink: 0;
	}
</style>
