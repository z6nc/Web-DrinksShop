/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'Nunito': ['Nunito Sans', 'sans-serif'],
				'ArchivoBlack': ['Archivo Black', 'sans-serif'],
				'Archivo': ['Archivo', 'sans-serif'],

			  },
			  keyframes: {
				float: {
				  '0%, 100%': { transform: 'translateY(0)' },
				  '50%': { transform: 'translateY(-10px)' },
				},
				slideIn: {
				  '0%': { opacity: '0', transform: 'translateX(-50%)' },
				  '100%': { opacity: '1', transform: 'translateX(0)' },
				},
			  },
			  animation: {
				float: 'float 3s ease-in-out infinite',
				slideIn: 'slideIn 1.5s ease-in-out ',
			  },
			 

		},
	},
	plugins: [animations],
}
