<script lang="ts">
	import TitleSvg from './TitleSvg.svelte';
	import { page } from '$app/stores';
</script>

<div class="flex flex-col justify-around h-full">
	<a href="gr">
		<TitleSvg title="gr" fill={$page.url.pathname === '/projekt/gr' ? '#360089' : '#A26FF3'} />
	</a>
	<a href="volvo">
		<TitleSvg
			title="volvo"
			fill={$page.url.pathname === '/projekt/volvo' ? '#360089' : '#A26FF3'}
		/>
	</a>
	<a href="nelly">
		<TitleSvg
			title="nelly"
			fill={$page.url.pathname === '/projekt/nelly' ? '#360089' : '#A26FF3'}
		/>
	</a>
	<a href="considition">
		<TitleSvg
			title="considition"
			fill={$page.url.pathname === '/projekt/considition' ? '#360089' : '#A26FF3'}
		/>
	</a>
</div>
