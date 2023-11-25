<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex">
	<h1>{data.project?.title}</h1>
	<button on:click={() => goto('/projekt')} class="flex">
		<svg
			fill="#46237B"
			width="2rem"
			height="2rem"
			viewBox="0 0 200 200"
			xmlns="http://www.w3.org/2000/svg"
			stroke="#91EAA5"
		>
			<path
				d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165ZM116.5,57.5a9.67,9.67,0,0,0-14,0L74,86a19.92,19.92,0,0,0,0,28.5L102.5,143a9.9,9.9,0,0,0,14-14l-28-29L117,71.5C120.5,68,120.5,61.5,116.5,57.5Z"
			/>
		</svg>tillbaka
	</button>
</div>

<div class="container">
	<p class="item">
		{@html data.project?.text}
	</p>
	<img class="item" src={data.project?.imgSrc} alt={data.project?.title} />
</div>

<style lang="scss">
	@import '$lib/styles/variables.scss';
	img {
		height: 18rem;
		width: 40%;
	}
	p.item {
		height: 18rem;
		overflow-y: scroll;

		border-radius: 1.5rem;
		background-color: $lavender-light;

		padding: 1rem;

		flex-basis: 55%;
	}

	button {
		padding: 0.5rem 1rem;
	}

	.flex {
		gap: 1rem;
	}
</style>
