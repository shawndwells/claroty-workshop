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
            //{ label: 'Outcome Review', slug: 'getting-started/outcome-review' },
            { label: 'Workshop Environment', slug: 'getting-started/workshop-environment' },
          ],
        },
        {
          label: 'CHAPTER 1: Visibility',
          items: [
            { label: '1.1 Overview', slug: 'visibility/overview' },
            { label: '1.2 Assets', slug: 'visibility/assets' },
            { label: '1.3 Zones', slug: 'visibility/zones' },
           // { label: '1.4 Asset Retention', slug: 'visibility/asset-retention' },
           // { label: '1.5 Custom Attributes', slug: 'visibility/custom-attributes' },
          ],
        },
        {
          label: 'CHAPTER 2: Risks & Vulnerabilities',
          items: [
            { label: '2.1 Overview', slug: 'risks-and-vulnerabilities/overview' },
            { label: '2.2 Insights', slug: 'risks-and-vulnerabilities/insights' },
            { label: '2.3 Vulnerabilities', slug: 'risks-and-vulnerabilities/vulnerabilities' },
            { label: '2.4 Attack Vector', slug: 'risks-and-vulnerabilities/attack-vector' },
          ],
        },
        {
          label: 'CHAPTER 3: Threat Detection',
          items: [
            { label: 'Overview', slug: 'threat-detection/overview' },
            { label: 'Alerts', slug: 'threat-detection/alerts' },
            { label: 'Events', slug: 'threat-detection/events' },
          ],
        },
                {
          label: 'CHAPTER 4: Investigation',
          items: [
          ],
        },
                {
          label: 'CHAPTER 5: Reports',
          items: [
            { label: 'Reports', slug: 'reports/reports' },
          ],
        },
/*        {
          label: 'CHAPTER 6: Assessment Planning',
          items: [
            { label: 'Overview', slug: 'ctd-edge-assessment/overview' },
            { label: 'Assessment Preparation', slug: 'ctd-edge-assessment/cli' },
            { label: 'Environment Connection', slug: 'ctd-edge-assessment/environment-connection' },
            { label: 'Passive Data Collection', slug: 'ctd-edge-assessment/passive-data-collection' },
            { label: 'Active Discovery', slug: 'ctd-edge-assessment/active-discovery' },
            { label: 'Asset Enrichment', slug: 'ctd-edge-assessment/asset-enrichment' },
            { label: 'Edge Deployment', slug: 'ctd-edge-assessment/edge-deployment' },
            { label: 'Data Validation & Reporting', slug: 'ctd-edge-assessment/cli' },
            { label: 'EMC Integration', slug: 'ctd-edge-assessment/cli' },
            { label: 'Active Scan Examples', slug: 'ctd-edge-assessment/cli' },
          ],
        }, */
//        { label: 'Changelog', slug: 'changelog' },
/*        {
          label: 'Labs',
          items: [
            { label: 'Asset Discovery and Inventory Creation', slug: 'labs/asset-discovery-and-inventory-creation' },
            { label: 'PCAP Collection and Analysis', slug: 'labs/pcap-collection-and-analysis' },
            { label: 'Active Discovery and Queries', slug: 'labs/active-discovery-and-queries' },
          ],
        }, */
      ],
    }),
  ],
});
