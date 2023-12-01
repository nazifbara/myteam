/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Livvic', 'sans-serif']
		},
		colors: {
			primary: 'hsl(0 87% 73%)',
			secondary: 'hsl(179 42% 63%)',
			text: 'hsl(0 0% 100%)',
			surface: {
				1: 'hsl(179 42% 63%)',
				2: 'hsl(187 41% 29%)',
				3: 'hsl(186 98% 17%)',
				4: 'hsl(186 100% 14%)',
				5: 'hsl(186 96% 10%)',
				6: 'hsl(186 100% 8%)'
			}
		},
		extend: {}
	},
	plugins: []
}
