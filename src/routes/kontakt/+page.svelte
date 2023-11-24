<script lang="ts">
	let successMessage: string | undefined = '';
	let errorMessage: string = '';

	const handleSubmit = async (event: Event) => {
		event.preventDefault();

		if (name && email && message) {
			const response = await fetch('https://formspree.io/f/xdorrogq', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: name,
					email: email,
					message: message
				})
			});
			if (response.ok) {
				successMessage = 'Mejl skickat! Tack, vi hörs snart';
				name = '';
				email = '';
				message = '';
			} else {
				errorMessage = 'Något gick snett... Försök igen lite senare';
			}
		} else {
			errorMessage = 'Vänligen fyll i alla fält för att kunna skicka meddelandet'
		}
	};
	$: name = '';
	$: email = '';
	$: message = '';
</script>

<svelte:head><title>Kontakta Moa</title></svelte:head>
<h1>Kontakta mig</h1>

<form class="container" on:submit={handleSubmit}>
	<div class="contact">
		<label for="name">Namn *</label>
		<input type="text" id="name" name="name" placeholder="Namn" class="text" bind:value={name} />

		<label for="email">Email *</label>
		<input type="email" id="email" name="email" placeholder="Email" bind:value={email} />
	</div>
	<div class="submit">
		<label for="message">Meddelande *</label>
		<textarea id="message" name="message" placeholder="Säg hej" class="text" bind:value={message} />

		<input type="submit" value="Skicka" />
	</div>
</form>
{#if successMessage}
	<p>{successMessage}</p>
{:else if errorMessage}
	<p>{errorMessage}</p>
{/if}

<style lang="scss">
	@import '$lib/styles/variables.scss';

	.contact,
	.submit {
		display: flex;

		flex-direction: column;
	}

	.submit {
		flex-grow: 2;
	}

	.text {
		margin-bottom: 2rem;
	}

	input {
		height: 2.5rem;
	}

	textarea {
		height: 9rem;
		resize: none;
	}

	input,
	textarea {
		background-color: $lavender-light;
		border: 0.1rem solid $lavender-dark;
		border-radius: 0.4rem;

		padding: 0.3rem;
	}
	input:focus,
	textarea:focus {
		background-color: $white;
	}

	input[type='submit'] {
		width: 30%;
		align-self: flex-end;
	}
</style>
