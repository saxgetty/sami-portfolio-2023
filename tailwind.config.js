/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				backgroundColorPrimary: '#FFFBF0',
				backgroundColorSecondary: '#EDFF86',
				welcomeBg: '#3490dc',
				aboutBg: '#38c172',
				experienceBg: '#e3342f',
				workBg: '#ffed4a',
				contactBg: '#9561e2',
			},
		},
	},
	plugins: [],
}
