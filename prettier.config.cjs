/** @type {import("prettier").Config} */
const config = {
	trailingComma: 'none',
	singleQuote: true,
	printWidth: 99999,
	useTabs: true,
	tabWidth: 4,
	semi: false,
	plugins: [require.resolve('prettier-plugin-tailwindcss')]
}

module.exports = config
