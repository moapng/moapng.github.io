<script lang="ts">
</script>

<svelte:head>
	<title>Moas portfolio</title>
</svelte:head>

<h1>Vem e’ jag?</h1>
<div class="container">
	<p class="item">
		En frontend-utvecklare som brinner för snygg design och tillgänglighet!
		<br />
		<br />
		Webben skall vara lättläst och tillgänglig för alla, men det behöver inte betyda att vi tappar form
		och stil; vi öppnar bara dörren för att fler skall kunna ta till sig designen
	</p>
	<img class="item" src="/moa.png" alt="bild på Moa i London framför London Eye" />
</div>

<style lang="scss">
	@import '$lib/styles/variables.scss';

	img {
		width: 16rem;
		height: 100%;
	}

	p.item {
		flex-grow: 0;
		flex-basis: 65%;
	}
</style>
