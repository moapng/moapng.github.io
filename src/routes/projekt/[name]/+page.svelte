<script lang="ts">
	import TitleSvg from './TitleSvg.svelte';
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	export let data: PageData;

	const handleClick = (next: boolean) => {
		if (next) {
			switch ($page.url.pathname) {
				case '/projekt/gr':
					goto('/projekt/volvo');
					break;
				case '/projekt/volvo':
					goto('/projekt/nelly');
					break;
				case '/projekt/nelly':
					goto('/projekt/considition');
					break;
			}
		}
		if (!next) {
			switch ($page.url.pathname) {
				case '/projekt/volvo':
					goto('/projekt/gr');
					break;
				case '/projekt/nelly':
					goto('/projekt/volvo');
					break;
				case '/projekt/considition':
					goto('/projekt/nelly');
					break;
			}
		}
	};
</script>

<div class="h-full flex flex-col justify-between">
	<div class="flex flex-col h-20 md:h-40 pe-20 mt-20">
		{#await data.title}
			<span class="loading loading-bars loading-lg" />
		{:then title}
			<TitleSvg {title} />
		{/await}
	</div>

	<div class="mt-6 flex-grow">
		{#await data.text}
			<span class="loading loading-bars loading-lg" />
		{:then text}
			<p>{@html text}</p>
		{/await}
	</div>

	<div class="mt-6 max-md:absolute max-md:inset-x-10 bottom-60 md:relative">
		{#if $page.url.pathname !== '/projekt/gr'}
			<button class="btn btn-primary float-left" on:click={() => handleClick(false)}
				>föregående</button
			>
		{/if}
		{#if $page.url.pathname !== '/projekt/considition'}
			<button class="btn btn-primary float-right" on:click={() => handleClick(true)}>nästa</button>
		{/if}
	</div>
</div>
