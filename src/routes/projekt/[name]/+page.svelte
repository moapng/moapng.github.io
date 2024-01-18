<script lang="ts">
	import TitleSvg from '../../TitleSvg.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex h-1/4">
	{#await data.title}
		<span class="loading loading-bars loading-lg" />
	{:then title}
		<TitleSvg {title} />
	{/await}
</div>

<div class="mt-6">
	<p>
		{#await data.text}
			<span class="loading loading-bars loading-lg" />
		{:then text}
			{@html text}
		{/await}
	</p>
</div>

<style lang="scss">
	@import '$lib/styles/variables.scss';
</style>
