<script lang="ts">
	import Sidebar from './Sidebar.svelte';
	import '$lib/styles/common.scss';
	import { setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import { page } from '$app/stores';

	const open: Writable<boolean> = writable(false);
	setContext('open', open);
</script>

<Sidebar />
<div
	class="{$open
		? 'translate-x-[320px]  w-[calc(100%_-_320px)]'
		: 'translate-x-[82px] w-[calc(100%_-_82px)]'} h-screen"
>
	<div class="h-24 w-full border-b-2 border-primary flex justify-between">
		<a href="/" class="relative left-24 h-full btn btn-ghost text-primary font-normal text-4xl"
			>Moa Larsson</a
		>
		<button class="h-full btn btn-primary text-3xl font-Bungee">kontakt</button>
	</div>
	<div class="flex divide-x-2 divide-primary h-[calc(100%_-_6rem)]">
		<section class="py-28 {$open ? 'px-10' : 'px-32'} w-1/2">
			<slot />
		</section>
		<section class="py-28 px-40 w-1/2">
			{#if $page.data.component}
				<svelte:component this={$page.data.component} />
			{/if}
		</section>
	</div>
</div>
