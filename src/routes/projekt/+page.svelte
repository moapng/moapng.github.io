<script lang="ts">
	import { goto } from '$app/navigation';
	import projects from '$lib/projectData.json';

	const projectData = projects;
</script>

<svelte:head>
	<title>Moas projekt</title>
</svelte:head>

<h1>Projekt jag jobbat med</h1>
<div class="container">
	{#each projectData as { title, imgSrc }}
		<div
			class="imgContainer"
			on:click={() => goto(`projekt/${title}`)}
			on:keyup={(e) => e.key === 'Enter' && goto(title)}
			aria-hidden
		>
			<img class="item" src={imgSrc} alt={'bild som representerar ' + title} />
			<button on:click on:keyup>{title}</button>
		</div>
	{/each}
</div>

<style lang="scss">
	@import '$lib/styles/variables.scss';
	.imgContainer {
		width: 16rem;
	}
	.imgContainer:hover {
		cursor: pointer;
		scale: 1.2;
		button {
			background-color: $lime-light;
			scale: 1;
		}
	}
	img {
		width: 100%;
		height: 7rem;
	}

	button {
		width: 100%;

		text-wrap: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
</style>
