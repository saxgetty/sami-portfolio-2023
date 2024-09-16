/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				backgroundColorPrimary: '#FFFBF0',
				backgroundColorSecondary: '#EDFF86',
				welcomeBg: '#E9EDC9',
				aboutBg: '#606C38',
				experienceBg: '#FEFAE0',
				workBg: '#CCD5AE',
				developmentBg: '#CCD5AE',
				designBg: '#bc6c25',
				contactBg: '#283618',
				// light green #CCD5AE
				// dark green #283618
				// pastel green #E9EDC9
				// green #606C38
				// cream #FEFAE0 
				// pastel orange #FAEDCD
				// orange #DDA15E
				// light orange #D4A373
				// dark orange #BC6C25
			},
		},
	},
	plugins: [],
}
