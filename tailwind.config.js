const colors = require("tailwindcss/colors");
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				gray: colors.neutral,
			},
			boxShadow: {
				"2xl": "0 0 50px 1px rgba(0, 0, 0, 0.3)",
			},
		},
	},
	plugins: [],
};
