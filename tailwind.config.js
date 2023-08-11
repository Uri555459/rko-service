/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,ts}'],
	theme: {
		extend: {
			colors: {
				blue: '#3300FF',
				'light-blue': '#DBE5FF',
				accent: '#34486C',
				gray: '#737477',
				'page-bg': '#F4F4F4'
			}
		}
	},
	plugins: []
}
