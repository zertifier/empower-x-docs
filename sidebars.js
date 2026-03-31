// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Note: Using process.env.DOCUSAURUS_CURRENT_LOCALE to localize labels at build time,
// avoiding importing '@docusaurus/Translate' in this Node context (which caused MODULE_NOT_FOUND).
const locale = process.env.DOCUSAURUS_CURRENT_LOCALE || 'en';
const techResourcesLabels = {
    en: 'Technical Resources',
    es: 'Recursos Técnicos',
    ca: 'Recursos tècnics',
};
const techResourcesLabel = techResourcesLabels[locale] ?? techResourcesLabels.en;

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
    // Manual sidebar for Documentation tab
    tutorialSidebar: [
        {
            type: 'doc',
            id: 'about',
        },
        {
            type: 'doc',
            id: 'agriculture-landing',
        },
        {
            type: 'doc',
            id: 'governance',
        },
        {
            type: 'doc',
            id: 'use-cases',
        },
        {
            type: 'category',
            label: techResourcesLabel,
            collapsed: true,
            items: [
                {type: 'doc', id: 'compute-to-data'},
                {type: 'doc', id: 'gaiax-standards'},
                {type: 'doc', id: 'market-policy'},
                {type: 'doc', id: 'ocean-protocol-market'},
                {type: 'doc', id: 'ontologies'},
                {type: 'doc', id: 'service-offering'},
                {type: 'doc', id: 'verifiable-credentials'},
            ]
        }
    ],
};

export default sidebars;
