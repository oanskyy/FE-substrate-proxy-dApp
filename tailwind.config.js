/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"talisman-green": "rgb(213, 255, 92)",
				"talisman-grey-1": "rgb(150, 150, 150)",
				"talisman-grey-2": "rgb(90, 90, 90)",
				"talisman-li": "rgb(27, 27, 27)",
				"talisman-sidebar": "rgb(18, 18, 18)"
			}
		}
	},
	plugins: []
}
