<script lang="ts">
	import Sidebar from './Sidebar.svelte';
	import '$lib/styles/common.scss';
	import { setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	const open: Writable<boolean> = writable(false);
	setContext('open', open);
</script>

<Sidebar />

<div class={$open ? 'ms-96' : 'ms-28'}>
	' ajshydgbajshdb
	<slot />
</div>

<style lang="scss">
</style>
