<script lang="ts">
	import Sidebar from './Sidebar.svelte';
	import '$lib/styles/common.scss';
	import { setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	const open: Writable<boolean> = writable(false);
	setContext('open', open);
</script>

<Sidebar />
<div
	class={$open
		? 'translate-x-[320px]  w-[calc(100%_-_320px)]'
		: 'translate-x-[82px] w-[calc(100%_-_82px)]'}
>
	<div class="h-20 w-full border-b-2 border-primary flex justify-between">
		<a href="/" class="h-full btn btn-ghost text-xl text-primary">Moa Larsson</a>
		<button class="h-full btn btn-primary text-xl">kontakt</button>
	</div>

	<slot />
</div>

<style lang="scss">
</style>
