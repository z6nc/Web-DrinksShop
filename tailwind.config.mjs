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
			
				slideIn: {
				  '0%': { opacity: '0', transform: 'translateX(-50%)' },
				  '100%': { opacity: '1', transform: 'translateX(0)' },
				},
			  },
			  animation: {
				slideIn: 'slideIn 1.5s ease-in-out ',
			  },
			  dropShadow: {
				'3xl': '0 2px 3px rgba(0, 0, 0, 1)',
				
			  }
			 

		},
	},
	plugins: [animations],
}
