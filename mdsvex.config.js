import { defineMDSveXConfig as defineConfig } from 'mdsvex';
//mdsvex.config.js

const config = defineConfig({
	extensions: ['.svx', '.md'],
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
