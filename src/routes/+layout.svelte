<script lang="ts">
	import Sidebar from './Sidebar.svelte';
	import '$lib/styles/common.scss';
	import { setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import { page } from '$app/stores';
	import { onMount, onDestroy } from 'svelte';

	let innerWidth: number;

	const open: Writable<boolean> = writable(false);
	setContext('open', open);
</script>

<svelte:window bind:innerWidth />
<Sidebar />
{#if innerWidth > 768}
	<div
		class="{$open
			? 'translate-x-[320px]  w-[calc(100%_-_320px)]'
			: 'translate-x-[82px] w-[calc(100%_-_82px)]'} h-screen"
	>
		<div class="h-24 w-full border-b-2 border-primary flex justify-between">
			<p class="relative left-24 flex items-center text-primary font-normal text-4xl">
				Moa Larsson
			</p>
			<!-- <button class="h-full btn btn-primary text-3xl font-Bungee">kontakt</button> -->
		</div>
		<div class="flex divide-x-2 divide-primary h-[calc(100%_-_6rem)]">
			<section class="py-0 md:py-20 {$open ? 'px-5 xl:px-10' : 'px-10 xl:px-20'} w-1/2">
				<slot />
			</section>
			<section class="py-5 px-10 md:px-20 md:py-20 md:px-20 w-1/2">
				{#if $page.data.component}
					<svelte:component this={$page.data.component} />
				{/if}
			</section>
		</div>
	</div>
{:else if innerWidth <= 768}
	{#if !$open}
		<div
			class="{$open
				? 'translate-x-[320px]  w-[calc(100%_-_320px)]'
				: 'translate-x-[82px] w-[calc(100%_-_82px)]'} h-screen"
		>
			<div class="h-16 w-full border-b-2 border-primary flex justify-between">
				<p class="relative left-20 flex items-center text-primary font-normal text-2xl">
					Moa Larsson
				</p>
				<!-- <button class="h-full btn btn-primary text-3xl font-Bungee">kontakt</button> -->
			</div>
			<div class="flex flex-col">
				<section class="py-0 px-10">
					<slot />
				</section>
				<section class="py-0 px-10">
					{#if $page.data.component}
						<svelte:component this={$page.data.component} />
					{/if}
				</section>
			</div>
		</div>
	{/if}
{/if}
