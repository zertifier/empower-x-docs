// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Localize category labels at build time (same approach as `sidebars.js`).
const locale = process.env.DOCUSAURUS_CURRENT_LOCALE || 'en';
const detailsLabels = {
  en: 'PED Rubí',
  es: 'PED Rubí',
  ca: 'PED Rubí',
};
const detailsLabel = detailsLabels[locale] ?? detailsLabels.en;

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  algoritmosSidebar: [
    {
      type: 'doc',
      id: 'index',
    },
    {
      type: 'category',
      label: detailsLabel,
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'analisis-de-comunidades',
        },
        {
          type: 'doc',
          id: 'analisis-por-perfiles',
        },
        {
          type: 'doc',
          id: 'estadisticas-basicas',
        },
        {
          type: 'doc',
          id: 'deteccion-de-anomalias',
        },
      ],
    },
  ],
};

export default sidebars;
