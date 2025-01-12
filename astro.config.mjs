// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import fs from 'fs';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Arun's Raku Tutorial",
			logo: {
				src: './src/assets/Camelia.svg',
			},
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			expressiveCode: {
				shiki: {
					langs: [
						JSON.parse(fs.readFileSync('./src/assets/raku.json', 'utf-8')),
					]	
				}
			},
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'What is Raku?', slug: 'introduction/what-is-raku' },
						{ label: 'About this tutorial', slug: 'introduction/about' }
					]
				},
				{
					label: 'The Basics',
					items: [
						{ label: 'Variables', slug: 'basics/variables' },
						{ label: 'Control flow in Raku', slug: 'basics/control-flow' }
					]
				},
				{
					label: 'Object-oriented programming',
					items: [
						{ label: 'OOP', slug: 'oop/oop' }
					]
				},
				{
					label: 'Intermediate Concepts in Raku',
					items: [
						{ label: 'The Topic Variable $_', slug: 'intermediate/topic-variable' },
						{ label: 'The Whatever Star `*`', slug: 'intermediate/whatever' },

					]
				},
				// {
				// 	label: 'Guides',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example Guide', slug: 'guides/example' },
				// 	],
				// },
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});
