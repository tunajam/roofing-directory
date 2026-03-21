import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { config } from '@/lib/config';
import AdSlot from '@/components/AdSlot';

const title = 'Types of Roofing Materials: Pros, Cons & Costs Compared';
const description = 'Compare asphalt shingles, metal, tile, slate, and flat roofing materials. Lifespan, costs, pros and cons for each type to help you choose the right roof.';

export const metadata: Metadata = {
  title: `${title} | ${config.name}`,
  description,
  openGraph: { title, description, type: 'article' },
};

const faqData = [
  { q: 'What is the best roofing material for my home?', a: 'For most homes, architectural asphalt shingles offer the best balance of cost, durability, and appearance. Metal is ideal if you want 50+ year longevity. Tile suits hot, dry climates. Slate is for high-end homes where budget isn\'t the primary concern.' },
  { q: 'What roofing material lasts the longest?', a: 'Natural slate lasts 75–150 years, followed by clay tile (50–100 years) and metal (40–70 years). Asphalt shingles last 15–30 years depending on type.' },
  { q: 'Is a metal roof worth the extra cost?', a: 'If you plan to stay in your home 15+ years, metal often pays for itself through longevity and energy savings. A metal roof can last 2–3× longer than asphalt, and many homeowners never need to re-roof again.' },
  { q: 'Can I put a metal roof over existing shingles?', a: 'In many cases yes, which saves on tear-off costs. However, it depends on local codes, the condition of the existing deck, and the number of existing layers. A reputable contractor can assess whether overlay is appropriate.' },
  { q: 'What is the most energy-efficient roofing material?', a: 'Metal roofs with reflective coatings are the most energy-efficient, reducing cooling costs by 10–25%. Cool-roof asphalt shingles and clay tile also perform well in hot climates.' },
];

const materials = [
  {
    name: 'Asphalt Shingles (3-Tab)',
    cost: '$3.50–$5.50/sq ft',
    lifespan: '15–20 years',
    pros: ['Lowest upfront cost', 'Available everywhere', 'Easy to install and repair', 'Wide color selection'],
    cons: ['Shortest lifespan', 'Poor wind resistance (60 mph)', 'Flat appearance', 'Not eco-friendly (petroleum-based, fills landfills)'],
    bestFor: 'Budget-conscious homeowners, rental properties, or homes you plan to sell soon.',
  },
  {
    name: 'Architectural (Dimensional) Shingles',
    cost: '$4.50–$7.00/sq ft',
    lifespan: '25–30 years',
    pros: ['Great value — best cost-per-year of any material', 'Dimensional look mimics wood shake', 'Better wind resistance (110–130 mph)', 'Available with enhanced manufacturer warranties'],
    cons: ['Still petroleum-based', 'Not as long-lasting as metal or tile', 'Can be damaged by hail'],
    bestFor: 'Most residential homes. This is the default choice for good reason.',
  },
  {
    name: 'Standing Seam Metal',
    cost: '$8–$16/sq ft',
    lifespan: '40–70 years',
    pros: ['Exceptional longevity', 'Energy-efficient (reflects heat)', 'Fire-resistant (Class A)', 'Handles heavy snow and high winds (140+ mph)', 'Recyclable at end of life'],
    cons: ['Higher upfront cost', 'Can dent from large hail', 'Expansion/contraction noise (minimized with proper install)', 'Fewer contractors experienced with installation'],
    bestFor: 'Long-term homeowners, areas with severe weather, and anyone who wants to roof once and forget it.',
  },
  {
    name: 'Clay & Concrete Tile',
    cost: '$10–$18/sq ft',
    lifespan: '50–100 years',
    pros: ['Extremely long-lasting', 'Fire-resistant', 'Beautiful aesthetic (Mediterranean, Spanish, Southwest)', 'Excellent in hot climates — natural ventilation'],
    cons: ['Very heavy — may need structural reinforcement', 'Fragile when walked on', 'Expensive to repair', 'Limited style range'],
    bestFor: 'Homes in the Southwest, Florida, and California. Architecturally appropriate for Mediterranean and Spanish styles.',
  },
  {
    name: 'Natural Slate',
    cost: '$15–$30/sq ft',
    lifespan: '75–150 years',
    pros: ['The longest-lasting roofing material available', 'Stunning natural appearance', 'Fire-resistant and virtually maintenance-free', 'Increases home value significantly'],
    cons: ['Extremely expensive', 'Very heavy — structural assessment required', 'Fragile — walking on it cracks tiles', 'Few qualified installers', 'Long lead times for material'],
    bestFor: 'High-end and historic homes where appearance and longevity justify the investment.',
  },
  {
    name: 'Flat Roofing (TPO, EPDM, Modified Bitumen)',
    cost: '$5–$10/sq ft',
    lifespan: '20–30 years',
    pros: ['Affordable for flat/low-slope roofs', 'Usable rooftop space', 'Easy to install solar panels', 'TPO is energy-efficient (white reflective surface)'],
    cons: ['Not suitable for steep pitches', 'Ponding water is a constant concern', 'Shorter lifespan than most pitched-roof materials', 'Requires proper drainage planning'],
    bestFor: 'Commercial buildings, modern homes with flat roof designs, and any low-slope application where traditional shingles won\'t work.',
  },
];

export default function TypesOfRoofingMaterials() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqData.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      })}} />

      <section className="bg-primary text-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent text-sm font-medium mb-2">
            <Link href="/guides" className="hover:underline">← Guides</Link>
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
          <p className="text-white/60 mt-2 text-sm">March 2026 · 15 min read</p>
        </div>
      </section>

      <AdSlot position="top" className="max-w-3xl mx-auto mt-6 px-4" />

      <article className="max-w-3xl mx-auto px-4 py-12 prose prose-lg">
        <p>
          Choosing a roofing material isn&apos;t just about looks — it affects how long your roof lasts, what you pay to heat and cool your home, your insurance rates, and your home&apos;s resale value. This guide covers every major roofing material with honest pros, cons, and real 2026 pricing so you can make a decision you won&apos;t regret.
        </p>
        <p>
          Want to know how much a full replacement will run? See our <Link href="/guides/roof-replacement-cost-guide">roof replacement cost guide</Link> for detailed pricing by size and region.
        </p>

        <h2>Quick Comparison</h2>
        <div className="overflow-x-auto not-prose">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-primary/5">
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Material</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Cost/sq ft</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Lifespan</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 px-4 py-2">3-Tab Asphalt</td><td className="border border-gray-200 px-4 py-2">$3.50–$5.50</td><td className="border border-gray-200 px-4 py-2">15–20 yr</td><td className="border border-gray-200 px-4 py-2">Budget</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Architectural Asphalt</td><td className="border border-gray-200 px-4 py-2">$4.50–$7.00</td><td className="border border-gray-200 px-4 py-2">25–30 yr</td><td className="border border-gray-200 px-4 py-2">Most homes</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">Standing Seam Metal</td><td className="border border-gray-200 px-4 py-2">$8–$16</td><td className="border border-gray-200 px-4 py-2">40–70 yr</td><td className="border border-gray-200 px-4 py-2">Long-term value</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Clay/Concrete Tile</td><td className="border border-gray-200 px-4 py-2">$10–$18</td><td className="border border-gray-200 px-4 py-2">50–100 yr</td><td className="border border-gray-200 px-4 py-2">Hot/dry climates</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">Natural Slate</td><td className="border border-gray-200 px-4 py-2">$15–$30</td><td className="border border-gray-200 px-4 py-2">75–150 yr</td><td className="border border-gray-200 px-4 py-2">High-end homes</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Flat (TPO/EPDM)</td><td className="border border-gray-200 px-4 py-2">$5–$10</td><td className="border border-gray-200 px-4 py-2">20–30 yr</td><td className="border border-gray-200 px-4 py-2">Low-slope roofs</td></tr>
            </tbody>
          </table>
        </div>

        {materials.map((mat, i) => (
          <div key={i}>
            <h2>{mat.name}</h2>
            <p><strong>Cost:</strong> {mat.cost} installed · <strong>Lifespan:</strong> {mat.lifespan}</p>
            <h3>Pros</h3>
            <ul>
              {mat.pros.map((p, j) => <li key={j}>{p}</li>)}
            </ul>
            <h3>Cons</h3>
            <ul>
              {mat.cons.map((c, j) => <li key={j}>{c}</li>)}
            </ul>
            <p><strong>Best for:</strong> {mat.bestFor}</p>
            {i === 2 && <AdSlot position="sidebar" className="my-8" />}
          </div>
        ))}

        <h2>How to Choose: Decision Framework</h2>
        <ul>
          <li><strong>Budget under $12,000?</strong> Architectural asphalt shingles. Don&apos;t bother with 3-tab — the extra $1,000–$2,000 for architectural buys you 10+ more years.</li>
          <li><strong>Planning to stay 20+ years?</strong> Metal pays for itself. The math works out to roughly the same cost-per-year as asphalt, but you avoid the hassle and disruption of a second replacement.</li>
          <li><strong>Live in a hot, dry climate?</strong> Clay tile or concrete tile. They naturally ventilate and last decades in arid environments.</li>
          <li><strong>Historic or luxury home?</strong> Slate. Nothing else matches the look, and the longevity justifies the investment on a home you&apos;re preserving for generations.</li>
          <li><strong>Flat or low-slope roof?</strong> TPO for energy efficiency, EPDM for budget, modified bitumen for areas with foot traffic.</li>
        </ul>
        <p>
          Whatever material you choose, the contractor matters just as much. See our <Link href="/guides/how-to-choose-roofing-contractor">guide to choosing a roofing contractor</Link> and get at least <Link href="/guides/how-to-get-roofing-quotes">three written quotes</Link> before committing.
        </p>

        <h2>Frequently Asked Questions</h2>
        {faqData.map((faq, i) => (
          <div key={i}>
            <h3>{faq.q}</h3>
            <p>{faq.a}</p>
          </div>
        ))}
      </article>

      <AdSlot position="sidebar" className="max-w-3xl mx-auto px-4 mb-8" />

      <section className="max-w-3xl mx-auto px-4 pb-12">
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-primary mb-2">Find Roofing Contractors Who Know Your Material</h2>
          <p className="text-gray-600 mb-4">
            Compare {config.industry.companyNounPlural} experienced with the material you choose.
          </p>
          <Link
            href="/"
            className="inline-block bg-accent text-primary font-semibold px-6 py-3 rounded-lg hover:bg-accent-dark transition-colors"
          >
            Compare Contractors Now →
          </Link>
        </div>
      </section>
    </>
  );
}
