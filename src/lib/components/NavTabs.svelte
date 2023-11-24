<script lang="ts">
	import { writable } from 'svelte/store';
	import type { ITab } from '$lib/Interfaces';
	import Tab from './Tab.svelte';

	const navData: ITab[] = [
		{
			href: '/',
			title: 'Vem',
			active: writable(true)
		},
		{
			href: '/kompetenser',
			title: 'Kompetenser',
			active: writable(false)
		},
		{
			href: '/projekt',
			title: 'Projekt',
			active: writable(false)
		},
		{
			href: '/kontakt',
			title: 'Kontakt',
			active: writable(false)
		}
	];
</script>

<nav>
	{#each navData as tab}
		<Tab href={tab.href} active={tab.active} title={tab.title} />
	{/each}
</nav>

<style lang="scss">
	@import '$lib/styles/variables.scss';
	nav {
		display: flex;

		height: 3.125rem;
		padding: 0.3125rem 2.4375rem;

		justify-content: center;
		align-items: center;

		gap: 0.8rem;
	}
</style>
