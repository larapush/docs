// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LaraPush Docs',
  tagline: '#1 Self Hosted Push Notifications',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://larapush.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/guide/',

  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'LaraPush', // Usually your GitHub org/user name.
  projectName: 'doccs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/larapush-social-card.jpg',
      navbar: {
        title: 'LaraPush Docs',
        logo: {
          alt: 'LaraPush Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            href: '/docs/category/getting-started',
            label: 'Getting Started',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            href: '/docs/category/features/',
            label: 'Features',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            href: '/docs/category/system-settings',
            label: 'System Settings',
          },
          {
            href: 'https://larapush.com/pricing/',
            label: 'Buy Now',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/category/getting-started',
              },
              {
                label: 'Installation',
                to: '/docs/getting-started/installation',
              },
              {
                label: 'Features',
                to: '/docs/category/features/',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'Website',
                href: 'https://larapush.com',
              },
              {
                label: 'Pricing',
                href: 'https://larapush.com/pricing/',
              },
              {
                label: 'Features',
                href: 'https://larapush.com/features/',
              },
            ],
          },
          {
            title: 'Help',
            items: [
              {
                label: 'Contact Us',
                href: 'https://larapush.com/contact/',
              },
              {
                label: 'How to buy',
                href: 'https://larapush.com/how-to-buy/',
              },
              {
                label: 'Sitemap',
                href: 'https://larapush.com/guide/sitemap.xml',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LaraPush`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '1E67GIS4N7',

        // Public API key: it is safe to commit it
        apiKey: 'c0446e20fe0923ec4d7e74ddb3627e9b',

        indexName: 'larapush',

        contextualSearch: false,

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
    }),

  plugins: [
    // without options:
    // './test-plugin',
  ],
};

module.exports = config;
