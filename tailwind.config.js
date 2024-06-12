/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				backgroundColorPrimary: '#F3C969',
				backgroundColorSecondary: '#EDFF86',
			},
		},
	},
	plugins: [],
}
