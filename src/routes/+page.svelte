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
	.content {
		z-index: 2;

		display: flex;
	}

	img {
		z-index: 2;

		width: 18.8125rem;
		height: 24.8125rem;

		flex-shrink: 0;
		border-radius: 2.3125rem;
	}
	.text {
		z-index: 2;

		text-align: left;
		width: 33rem;
	}
</style>
