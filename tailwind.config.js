/** @type {import('tailwindcss').Config} */
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
				'float': 'float 6s ease-in-out infinite',
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
						backgroundSize: '200% 200%'
					},
					'50%': { 
						backgroundPosition: '100% 50%',
						backgroundSize: '200% 200%'
					},
				},
			},
		},
	},
	plugins: [
		require("daisyui")
	],
	daisyui: {
		themes: [
			// Single customizable theme - edit these colors to customize your portfolio
			{
				"sami": {
					// Main brand colors - customize these!
					"primary": "#A8B86A",      // Main brand color (buttons, links, highlights)
					"secondary": "#E1A1A1",    // Secondary color (alternative buttons, accents)
					"accent": "#F9DD7E",       // Accent color (prices, special highlights)
					
					// Background colors
					"neutral": "#FCF8ED",      // Page background color
					"base-100": "#FFFFFF",     // Card/component background
					"base-200": "#F8F8F8",     // Slightly darker background
					"base-300": "#F0F0F0",     // Even darker background
					
					// Status colors
					"info": "#7D9250",         // Info messages, links
					"success": "#A8B86A",      // Success messages, confirmations
					"warning": "#F2C230",      // Warning messages, alerts
					"error": "#D7646B",        // Error messages, delete actions
				},
			},
		],
		darkTheme: "sami", // Use the same theme for dark mode
		base: true,
		styled: true,
		utils: true,
		prefix: "",
		logs: true,
		themeRoot: ":root",
	},
}
