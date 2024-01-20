/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			Bungee: ['Bungee'],
			Comfortaa: ['Comfortaa'],
			sans: ['Comfortaa'] //default font
		},
		extend: {}
	},
	daisyui: {
		themes: [
			{
				light: {
					primary: '#A26FF3',
					'primary-focus': '#A26FF3',
					'primary-content': '#DDC7FF',

					secondary: '#360089',
					'secondary-focus': '#A26FF3',
					'secondary-content': '#DDC7FF',

					accent: '#37cdbe',
					'accent-focus': '#2ba69a',
					'accent-content': '#ffffff',

					neutral: '#3b424e',
					'neutral-focus': '#2a2e37',
					'neutral-content': '#ffffff',

					'base-100': '#DDC7FF',
					'base-200': '#DDC7FF',
					'base-300': '#DDC7FF',
					'base-content': '#360089',

					info: '#1c92f2',
					success: '#009485',
					warning: '#ff9900',
					error: '#ff5724',

					'--rounded-box': '0',
					'--rounded-btn': '0',
					'--rounded-badge': '0',

					'--animation-btn': '.25s',
					'--animation-input': '.2s',

					'--btn-text-case': 'uppercase',
					'--navbar-padding': '.5rem',
					'--border-btn': '1px'
				}
			}
		]
	},

	plugins: [require('daisyui')]
};
