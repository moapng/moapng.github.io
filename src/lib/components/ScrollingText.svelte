<script lang="ts">
	export let skills: string[];
</script>

<div class="scroll-container">
	<ul>
		{#each skills as skill}
			<li>{skill}</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	@import '$lib/styles/variables.scss';
	.scroll-container {
		background-color: $lime-light;
		border-radius: 2.3125rem;
		border: 1px solid $black;

		padding: 0;
		height: 2rem;

		overflow: hidden;
		text-overflow: hidden;
	}
	.scroll-container:hover {
		animation-play-state: paused;
	}
	ul {
		display: flex;
		padding: 0;
		margin: 0;

		gap: 1rem;

		transform: translateX(100%);
		animation: my-animation 15s linear infinite;
	}

	@keyframes my-animation {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(-100%);
		}
	}
</style>
