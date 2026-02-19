/**
 * DIRECTORY SITE CONFIGURATION
 *
 * Roofing Contractor Directory
 */

const siteConfig = {
  // ── Basics ──────────────────────────────────────────────
  name: 'RoofCompare',
  domain: 'roofcompare.com',
  tagline: 'Compare Roofing Contractors Near You',
  description: 'Find and compare roofing contractors, get estimates for roof repair, replacement, and inspections from trusted local pros.',
  contactEmail: 'hello@roofcompare.com',
  notificationEmail: 'fred@tunajam.com',

  // ── Industry ────────────────────────────────────────────
  industry: {
    singular: 'Roofing Contractor',
    plural: 'Roofing Contractors',
    slug: 'roofing-contractor',
    companyNoun: 'contractor',
    companyNounPlural: 'contractors',
    serviceVerb: 'hire',
  },

  // ── Service Options ─────────────────────────────────────
  serviceOptions: {
    label: 'Service Type',
    unit: '',
    options: [
      { value: 1, label: 'Roof Inspection', description: 'Comprehensive roof assessment and condition report', capacity: '$150–$400' },
      { value: 2, label: 'Roof Repair', description: 'Leak fixes, shingle replacement, flashing repair', capacity: '$300–$1,500' },
      { value: 3, label: 'Partial Re-roof', description: 'Section replacement for localized damage', capacity: '$3,000–$8,000' },
      { value: 4, label: 'Full Replacement', description: 'Complete tear-off and new roof installation', capacity: '$8,000–$25,000+' },
    ],
  },

  // ── How It Works Steps ──────────────────────────────────
  steps: [
    { title: 'Search Your City', description: 'Enter your city to see local roofing contractors.' },
    { title: 'Compare Estimates', description: 'View side-by-side pricing, ratings, and specialties.' },
    { title: 'Get a Free Estimate', description: 'Request a free estimate directly from the contractor.' },
  ],

  // ── Theme ───────────────────────────────────────────────
  theme: {
    primary: '#1e293b',        // slate-800
    primaryLight: '#334155',   // slate-700
    primaryDark: '#0f172a',    // slate-900
    accent: '#2563eb',         // blue-600
    accentLight: '#3b82f6',    // blue-500
    accentDark: '#1d4ed8',     // blue-700
  },

  // ── SEO Templates ───────────────────────────────────────
  seo: {
    cityTitle: '{industryPlural} in {city}, {state} — Compare {count} Local Pros | {siteName}',
    cityDescription: 'Compare {count} roofing contractors in {city}, {state}. Get free estimates for roof repair, replacement, and inspections.',
    companyTitle: '{companyName} — Roofing Contractor in {city}, {state} | {siteName}',
    companyDescription: '{companyName} offers roof repair, replacement, and inspections in {city}, {state}. Compare pricing and read reviews.',
  },

  // ── Hero Search ─────────────────────────────────────────
  hero: {
    heading: 'Compare Roofing\\nContractors Near You',
    subheading: 'Stop calling around. Find the best roofing contractors in your area — compare estimates, ratings, and specialties side by side.',
    searchPlaceholder: 'Enter your city (e.g. Houston, Denver)',
    searchButton: 'Find Roofers →',
  },

  // ── Quote Form ──────────────────────────────────────────
  quoteForm: {
    heading: 'Get a Free Estimate',
    subheading: 'Fill out the form and {companyName} will contact you with a detailed estimate.',
    submitButton: 'Get My Free Estimate →',
    successMessage: '{companyName} will get back to you within 1 business day.',
    fields: ['name', 'phone', 'email', 'serviceOption', 'message'],
  },

  // ── Blog ────────────────────────────────────────────────
  blog: {
    title: 'Roofing Blog',
    description: 'Expert advice on roof replacement costs, repair tips, and maintenance guides.',
  },

  // ── Analytics ───────────────────────────────────────────
  posthog: {
    key: '',
    host: 'https://us.i.posthog.com',
  },

  // ── Notifications ───────────────────────────────────────
  notifications: {
    provider: 'resend',
  },
} as const;

export default siteConfig;
export type SiteConfig = typeof siteConfig;
