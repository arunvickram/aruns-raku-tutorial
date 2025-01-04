// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
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
					label: 'Intermediate Concepts in Raku',
					items: [
						{ label: 'The Topic Variable $_', slug: 'intermediate/topic-variable' },
					]
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
