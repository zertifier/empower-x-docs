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

const bettergyLabels = {
  en: 'Bettergy',
  es: 'Bettergy',
  ca: 'Bettergy',
};
const bettergyLabel = bettergyLabels[locale] ?? bettergyLabels.en;

const soyEficienteLabels = {
  en: 'Soy Eficiente',
  es: 'Soy Eficiente',
  ca: 'Soy Eficiente',
};
const soyEficienteLabel = soyEficienteLabels[locale] ?? soyEficienteLabels.en;

const biyiudLabels = {
  en: 'Biyiud',
  es: 'Biyiud',
  ca: 'Biyiud',
};
const biyiudLabel = biyiudLabels[locale] ?? biyiudLabels.en;

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
        {
          type: 'doc',
          id: 'dataset-energetico-horario-estaciones-bombeo-infraestructura-hidrica',
        },
        {
          type: 'doc',
          id: 'dataset-energetico-horario-contenedores-residuos-subterraneos',
        },
        {
          type: 'doc',
          id: 'dataset-energetico-horario-edificios-culturales-patrimonio',
        },
        {
          type: 'doc',
          id: 'dataset-energetico-horario-instalaciones-educativas',
        },
        {
          type: 'doc',
          id: 'dataset-energetico-horario-alumbrado-publico-puntos-luz',
        },
        {
          type: 'doc',
          id: 'dataset-energetico-horario-instalaciones-deportivas',
        },
        {
          type: 'doc',
          id: 'dataset-energetico-horario-edificios-uso-mixto',
        },
        {
          type: 'doc',
          id: 'dataset-energetico-horario-edificios-oficinas-espacios-administrativos',
        },
        {
          type: 'doc',
          id: 'dataset-energetico-horario-instalaciones-piscinas',
        },
        {
          type: 'doc',
          id: 'dataset-energetico-horario-edificios-servicios-sanitarios-salud',
        },
        {
          type: 'doc',
          id: 'dataset-energetico-horario-semaforos-sistemas-senalizacion',
        },
      ],
    },
    {
      type: 'category',
      label: bettergyLabel,
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'dataset-inversores-solares-bettergy',
        },
      ],
    },
    {
      type: 'category',
      label: soyEficienteLabel,
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'dataset-precios-horarios-energia-soy-eficiente',
        },
      ],
    },
    {
      type: 'category',
      label: biyiudLabel,
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'variacion-porcentual-interanual-consumo-energia',
        },
      ],
    },
  ],
};

export default sidebars;
