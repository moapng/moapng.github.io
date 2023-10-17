<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const currentColour: Writable<string> = getContext('currentColour');
	currentColour.set('#C4F4CF');
</script>

<div class="content">
	<div class="text">
		<h1>Projekt jag jobbat med</h1>
		<p>xxxxxxxxxxxxxxxxxxxxx</p>
	</div>
</div>

<style lang="scss">
	.content {
		z-index: 2;

		display: flex;
	}

	.text {
		z-index: 2;

		text-align: left;
		width: 33rem;
	}
</style>
