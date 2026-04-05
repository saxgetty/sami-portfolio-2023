import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				paper: '#F5F0E3',
				ink: '#6B1E23',
				cocoa: '#8B4513',
				sage: '#9CBE8E',
				forest: '#4A6741',
				coral: '#E45455',
				marigold: '#E9A72F',
				terracotta: '#E86A33',
				sky: '#6D929D',
			},
			fontFamily: {
				sans: ['Nunito', 'sans-serif'],
				display: ['Fredoka', 'sans-serif'],
				title: ['Righteous', 'cursive'],
				mono: ['Fira Code', 'monospace'],
				fredoka: ['Fredoka', 'Arial', 'sans-serif'],
			},
			animation: {
				float: 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				'gradient-shift': {
					'0%, 100%': {
						backgroundPosition: '0% 50%',
						backgroundSize: '200% 200%',
					},
					'50%': {
						backgroundPosition: '100% 50%',
						backgroundSize: '200% 200%',
					},
				},
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			{
				sami: {
					primary: '#A8B86A',
					secondary: '#E1A1A1',
					accent: '#F9DD7E',
					neutral: '#FCF8ED',
					'base-100': '#FFFFFF',
					'base-200': '#F8F8F8',
					'base-300': '#F0F0F0',
					info: '#7D9250',
					success: '#A8B86A',
					warning: '#F2C230',
					error: '#D7646B',
				},
			},
		],
		darkTheme: 'sami',
		base: true,
		styled: true,
		utils: true,
		prefix: '',
		logs: true,
		themeRoot: ':root',
	},
} satisfies Config
