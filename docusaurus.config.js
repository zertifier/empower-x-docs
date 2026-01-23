// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mi Sitio',
  tagline: 'Los dinosaurios son geniales',
  favicon: 'img/favicon.ico',
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        // Use hashed index filename for long-term caching in production
        hashed: true,
        // Index docs and standalone pages; skip blog
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        // Our docs live under /documentacion
        docsRouteBasePath: 'documentacion',
        // Languages supported by lunr
        language: ['es', 'en'],
        // Optional UX improvements
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  // GitHub Pages project site: https://<org>.github.io/<projectName>/
  // Set the production url of your site here
  // GitHub Pages project site: https://<org>.github.io/<projectName>/
  url: 'https://zertifier.github.io',
  // For GitHub Pages project sites, baseUrl must be '/<projectName>/'
  baseUrl: '/',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zertifier', // Your GitHub org/user name.
  projectName: 'empower-x-docs', // Your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en', 'ca'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'documentacion',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'algoritmos',
        path: 'algoritmos',
        routeBasePath: 'algoritmos',
        sidebarPath: './sidebarsAlgoritmos.js',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'casos',
        path: 'casos',
        routeBasePath: 'casos',
        sidebarPath: './sidebarsCasos.js',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        // Remove text title so only the logo is shown in the topbar
        title: '',
        logo: {
          alt: 'Empower‑X Logo',
          src: 'img/logo_empowerX.png',
          srcDark: 'img/logo_empowerX.png',
          // Use `href` (logo does not support `to`)
          href: 'documentacion/about/',
          target: '_self',
        },
        items: [
          { type: 'doc', docId: 'about', label: 'Documentación', position: 'left' },
          { type: 'doc', docId: 'index', docsPluginId: 'casos', label: 'Casos', position: 'left' },
          { type: 'doc', docId: 'index', docsPluginId: 'algoritmos', label: 'Algoritmos', position: 'left' },
          { to: 'videos', label: 'Vídeos', position: 'left' },
          { to: 'contacto', label: 'Contacto', position: 'left' },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentación',
            items: [
              {
                label: 'Documentación',
                to: 'documentacion/about/',
              },
            ],
          },
          {
            title: 'Explorar',
            items: [
              { label: 'Casos', to: 'casos/' },
              { label: 'Vídeos', to: 'videos' },
              { label: 'Algoritmos', to: 'algoritmos/' },
              { label: 'Contacto', to: 'contacto' },
            ],
          },
        ],
        copyright: `© Zertifier ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
