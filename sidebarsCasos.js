// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Localize category labels at build time (same approach as `sidebarsAlgoritmos.js`).
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
  casosSidebar: [
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
          id: 'dataset-consumo-generacion-hora',
        },
      ],
    },
  ],
};

export default sidebars;
