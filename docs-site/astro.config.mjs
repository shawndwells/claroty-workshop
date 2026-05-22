import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy';

export default defineConfig({
  site: 'https://claroty-workshop.missionit.com',
  base: '/',
  integrations: [
    starlight({
      plugins: [starlightThemeGalaxy()],
      components: {
        Hero: './src/components/Hero.astro',
      },
      logo: {
        src: './src/assets/hunting.png',
        replacesTitle: false
      },
      title: 'Claroty CTD',
      favicon: '/icons/faviconV2.png',
      social: [
        { label: 'GitHub', icon: 'github', href: 'https://github.com/MissionIT/claroty-workshop' },
      ],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Intros and Overview', slug: 'getting-started/intros-and-overview' },
            { label: 'Outcome Review', slug: 'getting-started/outcome-review' },
            { label: 'Workshop Environment', slug: 'getting-started/workshop-environment' },
          ],
        },
        {
          label: 'Deployment Planning',
          items: [
            { label: 'Deployment Topologies', slug: 'usage/cli' },
            { label: 'Pre-Install Requirements', slug: 'usage/cli' },
            { label: 'Installation Process', slug: 'usage/cli' },
            { label: 'Applying CTD Updates', slug: 'usage/cli' },
            { label: 'Applying Threat Bundle Updates', slug: 'usage/cli' },
            { label: 'Cyber Baseline Scan', slug: 'usage/transports' },
            { label: 'Post-Install Checklist', slug: 'usage/editor-integration' },
          ],
        },
//        {
//          label: 'Modules',
//          autogenerate: { directory: 'modules' },
//        },
//        {
//          label: 'Deployment',
//          items: [
//            { label: 'Docker', slug: 'deployment/docker' },
//            { label: 'Amazon Bedrock', slug: 'deployment/amazon-bedrock' },
//            { label: 'Google Cloud', slug: 'deployment/google-cloud' },
//          ],
//        },
//        {
//          label: 'Development',
//          items: [
//            { label: 'Contributing', slug: 'development/contributing' },
//            { label: 'Module Development', slug: 'development/module-development' },
//            { label: 'Resource Development', slug: 'development/resource-development' },
//            { label: 'Integration Testing', slug: 'development/integration-testing' },
//            { label: 'E2E Testing', slug: 'development/e2e-testing' },
//            { label: 'Docs Site Guide', slug: 'development/docs-site' },
//          ],
//        },
//        {
//          label: 'Examples',
//          items: [
//            { label: 'Basic Usage', slug: 'examples/basic-usage' },
//            { label: 'MCP Config', slug: 'examples/mcp-config' },
//          ],
//        },
//        { label: 'Changelog', slug: 'changelog' },
      ],
    }),
  ],
});
