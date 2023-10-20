<script lang="ts">
	import selfieSrc from '$lib/styles/moa.png';
</script>

<div class="content">
	<div class="text">
		<h1>Vem e’ jag?</h1>
		<p>
			En frontend-utvecklare som brinner för snygg design och tillgänglighet!
			<br />
			<br />
			Webben skall vara lättläst och tillgänglig för alla, men det behöver inte betyda att vi tappar
			form och stil; vi öppnar bara dörren för att fler skall kunna ta till sig designen
		</p>
	</div>
	<img src={selfieSrc} alt="bild på Moa i London framför London Eye" />
</div>

<style lang="scss">
	@import '$lib/styles/variables.scss';
	.content {
		z-index: 2;
		margin: auto;
		display: flex;
	}
	h1 {
		margin-top: 1rem;
		color: $lime;
	}

	img {
		z-index: inherit;

		width: 18.8125rem;
		height: 24.8125rem;

		flex-shrink: 0;
		border-radius: 2.3125rem;
	}
	.text {
		z-index: inherit;

		width: 30rem;
		padding-right: 2rem;
		text-align: left;
	}
</style>
