/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#E8F4FC',
					100: '#D1E9F9',
					200: '#A3D3F3',
					300: '#75BDED',
					400: '#47A7E7',
					500: '#2B7DBD', // Main brand blue
					600: '#226497',
					700: '#1A4B71',
					800: '#11324B',
					900: '#091926',
				},
				secondary: {
					50: '#F3EDF9',
					100: '#E7DBF3',
					200: '#CFB7E7',
					300: '#B793DB',
					400: '#9F6FCF',
					500: '#6B3FA0', // Main brand purple
					600: '#563280',
					700: '#412660',
					800: '#2B1940',
					900: '#160D20',
				},
				accent: {
					blue: '#E8F4FC',
					navy: '#1A3A52',
					green: '#10B981',
					gray: '#64748B',
					lightGray: '#F1F5F9',
				},
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				heading: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
			},
			boxShadow: {
				'premium': '0 10px 40px -10px rgba(43, 125, 189, 0.2)',
				'premium-lg': '0 20px 60px -15px rgba(43, 125, 189, 0.3)',
				'card': '0 4px 20px -4px rgba(0, 0, 0, 0.1)',
				'card-hover': '0 12px 40px -8px rgba(43, 125, 189, 0.25)',
			},
			animation: {
				'fade-in': 'fadeIn 0.6s ease-out',
				'slide-up': 'slideUp 0.6s ease-out',
				'slide-in': 'slideIn 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				slideIn: {
					'0%': { opacity: '0', transform: 'translateX(-30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
			},
		},
	},
	plugins: [],
}
