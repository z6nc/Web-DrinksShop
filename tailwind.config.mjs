/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'Nunito': ['Nunito Sans', 'sans-serif'],
				'Protest': ['Protest Strike', 'sans-serif'],
				'Archivo': ['Archivo', 'sans-serif'],

			  },
			 

		},
	},
	plugins: [],
}
