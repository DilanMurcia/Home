/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				labrada: ['Labrada', 'sans-serif'], // Agrega la fuente Labrada
			  },
			  fontSize: {
				// '80': '80px', // Agrega un tamaño de fuente personalizado de 80px
				// '64': '64px',
			  },
		},
	},
	plugins: [],
}
