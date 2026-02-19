import { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/config';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'Roof Replacement Cost in 2026: By Material, Size & Region | RoofCompare',
  description:
    'What does a roof replacement actually cost? Real pricing by material (asphalt $5,500–$12,000, metal $10,000–$25,000, tile $15,000–$30,000, slate $20,000–$45,000), house size, and region.',
  keywords:
    'roof replacement cost, cost to replace a roof, new roof cost, roof replacement price, how much to replace a roof',
  alternates: {
    canonical: 'https://roofcompare.com/blog/roof-replacement-cost',
  },
  openGraph: {
    title: 'Roof Replacement Cost in 2026: By Material, Size & Region',
    description:
      'Complete breakdown of roof replacement costs by material type, house size, and region. Data from thousands of contractors.',
    type: 'article',
    url: 'https://roofcompare.com/blog/roof-replacement-cost',
  },
};

const COST_BY_MATERIAL = [
  { material: 'Asphalt Shingles (3-tab)', costPerSqFt: '$3.50–$5.50', total1500: '$5,250–$8,250', total2500: '$8,750–$13,750', lifespan: '15–25 years' },
  { material: 'Architectural Shingles', costPerSqFt: '$4.50–$7.00', total1500: '$6,750–$10,500', total2500: '$11,250–$17,500', lifespan: '25–30 years' },
  { material: 'Standing Seam Metal', costPerSqFt: '$7.00–$14.00', total1500: '$10,500–$21,000', total2500: '$17,500–$35,000', lifespan: '40–70 years' },
  { material: 'Clay/Concrete Tile', costPerSqFt: '$10.00–$18.00', total1500: '$15,000–$27,000', total2500: '$25,000–$45,000', lifespan: '50–100 years' },
  { material: 'Natural Slate', costPerSqFt: '$15.00–$30.00', total1500: '$22,500–$45,000', total2500: '$37,500–$75,000', lifespan: '75–150 years' },
];

const COST_BY_SIZE = [
  { size: '1,000 sq ft', stories: '1-story ranch', asphalt: '$4,500–$7,000', metal: '$8,000–$14,000', tile: '$12,000–$20,000' },
  { size: '1,500 sq ft', stories: '1–2 story', asphalt: '$5,500–$10,500', metal: '$10,500–$21,000', tile: '$15,000–$27,000' },
  { size: '2,000 sq ft', stories: '2-story', asphalt: '$7,000–$14,000', metal: '$14,000–$28,000', tile: '$20,000–$36,000' },
  { size: '2,500 sq ft', stories: '2-story+', asphalt: '$8,750–$17,500', metal: '$17,500–$35,000', tile: '$25,000–$45,000' },
  { size: '3,000+ sq ft', stories: 'Large home', asphalt: '$10,500–$21,000', metal: '$21,000–$42,000', tile: '$30,000–$54,000' },
];

const REGIONAL_PRICES = [
  { region: 'Southeast (FL, GA, TX)', avg: '$5,500–$10,000', slug: '/tx/houston', city: 'Houston, TX', notes: 'Lower labor costs, high demand after storm season' },
  { region: 'Northeast (NY, MA, CT)', avg: '$8,000–$16,000', slug: '/ny/new-york', city: 'New York, NY', notes: 'Higher labor & material costs, shorter install season' },
  { region: 'Midwest (IL, OH, MI)', avg: '$6,500–$12,000', slug: '/il/chicago', city: 'Chicago, IL', notes: 'Moderate costs, freeze-thaw damage common' },
  { region: 'West (CA, WA, CO)', avg: '$7,500–$15,000', slug: '/ca/los-angeles', city: 'Los Angeles, CA', notes: 'Tile popular, fire-resistant materials add cost' },
  { region: 'Mountain (AZ, NV, UT)', avg: '$6,000–$11,000', slug: '/az/phoenix', city: 'Phoenix, AZ', notes: 'Tile common for heat, lower labor costs' },
];

export default function RoofReplacementCostPost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Roof Replacement Cost in 2026: By Material, Size & Region',
    description: 'Complete breakdown of roof replacement costs by material type, house size, and region.',
    datePublished: '2026-02-19',
    dateModified: '2026-02-19',
    author: { '@type': 'Organization', name: 'RoofCompare' },
    publisher: { '@type': 'Organization', name: 'RoofCompare', url: 'https://roofcompare.com' },
    mainEntityOfPage: 'https://roofcompare.com/blog/roof-replacement-cost',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does it cost to replace a roof?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A roof replacement costs $5,500 to $12,000 for asphalt shingles on a typical 1,500 sq ft home. Metal roofs run $10,500–$21,000, tile $15,000–$27,000, and slate $22,500–$45,000 for the same size. Material, house size, roof complexity, and location all affect the final price.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the cheapest roof material?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '3-tab asphalt shingles are the cheapest at $3.50–$5.50 per square foot installed. They last 15–25 years. Architectural shingles cost slightly more ($4.50–$7.00/sq ft) but last 25–30 years, making them a better long-term value.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does a roof replacement take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most asphalt shingle roofs take 1–3 days for a crew of 4–6 workers. Metal roofs take 3–5 days. Tile and slate can take 1–2 weeks due to the weight and precision required. Weather delays and structural repairs extend the timeline.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does homeowners insurance cover roof replacement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Homeowners insurance typically covers roof replacement if damage is caused by a covered peril (storm, hail, fire, fallen tree). It does not cover wear and tear, neglect, or aging. Most policies pay actual cash value (depreciated) unless you have a replacement cost policy.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is a metal roof worth the extra cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Metal roofs cost 2–3x more upfront but last 40–70 years vs 15–25 for asphalt. They also reduce energy costs by 10–25%, resist wind up to 140 mph, and increase home value. If you plan to stay in your home 15+ years, metal often has a lower total cost of ownership.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="bg-primary text-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent text-sm font-medium mb-2">
            <Link href="/blog" className="hover:underline">← Blog</Link>
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Roof Replacement Cost in 2026: By Material, Size &amp; Region
          </h1>
          <p className="text-white/60 mt-2 text-sm">February 19, 2026 · 12 min read</p>
        </div>
      </section>

      <AdSlot position="top" className="max-w-3xl mx-auto mt-6 px-4" />

      <article className="max-w-3xl mx-auto px-4 py-12 prose prose-lg">
        {/* Key takeaway */}
        <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-5 mb-8 not-prose">
          <p className="text-primary font-semibold mb-1">Bottom line:</p>
          <p className="text-gray-700 m-0">
            A <strong>roof replacement costs $5,500 to $45,000+</strong> depending on material and house size. Asphalt shingles on a 1,500 sq ft home run <strong>$5,500–$10,500</strong>. Metal is <strong>$10,500–$21,000</strong>. The material you pick matters more than anything else.
          </p>
        </div>

        <p>
          Your roof is probably the most expensive thing you&apos;ll replace on your house — and the quotes you get will be all over the map. We&apos;ve pulled pricing from contractors across the country to give you real numbers, not marketing fluff.
        </p>

        <p>
          Here&apos;s what you&apos;ll actually pay based on material, square footage, and where you live.
        </p>

        {/* TOC */}
        <nav className="bg-gray-50 rounded-xl p-6 mb-10 not-prose">
          <h2 className="text-lg font-bold text-primary mb-3">What&apos;s in this guide:</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1 text-sm">
            <li><a href="#by-material" className="text-accent hover:text-accent-dark">Cost by material type</a></li>
            <li><a href="#by-size" className="text-accent hover:text-accent-dark">Cost by house size</a></li>
            <li><a href="#by-region" className="text-accent hover:text-accent-dark">Regional pricing differences</a></li>
            <li><a href="#cost-breakdown" className="text-accent hover:text-accent-dark">Where your money goes</a></li>
            <li><a href="#save-money" className="text-accent hover:text-accent-dark">How to save on a roof replacement</a></li>
            <li><a href="#faq" className="text-accent hover:text-accent-dark">FAQ</a></li>
          </ol>
        </nav>

        {/* Cost by Material */}
        <h2 id="by-material">Roof Replacement Cost by Material Type</h2>
        <p>
          Material is the #1 cost driver. A slate roof costs 4–6x more than asphalt — but lasts 5–6x longer. Here&apos;s the full comparison:
        </p>

        <div className="overflow-x-auto not-prose mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 pr-3 font-semibold text-primary">Material</th>
                <th className="text-left py-3 pr-3 font-semibold text-primary">Cost/Sq Ft</th>
                <th className="text-left py-3 pr-3 font-semibold text-primary">1,500 Sq Ft Home</th>
                <th className="text-left py-3 pr-3 font-semibold text-primary">2,500 Sq Ft Home</th>
                <th className="text-left py-3 font-semibold text-primary">Lifespan</th>
              </tr>
            </thead>
            <tbody>
              {COST_BY_MATERIAL.map((row) => (
                <tr key={row.material} className="border-b border-gray-200">
                  <td className="py-3 pr-3 font-medium text-primary">{row.material}</td>
                  <td className="py-3 pr-3 text-gray-700">{row.costPerSqFt}</td>
                  <td className="py-3 pr-3 font-semibold text-accent-dark">{row.total1500}</td>
                  <td className="py-3 pr-3 font-semibold text-accent-dark">{row.total2500}</td>
                  <td className="py-3 text-gray-700">{row.lifespan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          <strong>Asphalt shingles</strong> dominate the U.S. market — about 80% of homes use them. They&apos;re cheap, widely available, and every contractor knows how to install them. Architectural (dimensional) shingles cost a bit more than 3-tab but look significantly better and last 5–10 years longer.
        </p>
        <p>
          <strong>Metal roofs</strong> are gaining ground fast. The upfront cost hurts, but when you factor in the 40–70 year lifespan and lower energy bills, the math often favors metal if you&apos;re staying put.
        </p>
        <p>
          <strong>Tile and slate</strong> are premium materials that outlast the house itself. Common in the Southwest (tile) and Northeast (slate). Gorgeous, but heavy — your roof deck may need reinforcement.
        </p>

        <AdSlot position="sidebar" className="my-8 not-prose" />

        {/* Cost by Size */}
        <h2 id="by-size">Roof Replacement Cost by House Size</h2>
        <p>
          Roof area is usually 1.2–1.5x your home&apos;s square footage (depending on pitch and overhangs). Here&apos;s what to expect:
        </p>

        <div className="overflow-x-auto not-prose mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 pr-3 font-semibold text-primary">Roof Size</th>
                <th className="text-left py-3 pr-3 font-semibold text-primary">Typical Home</th>
                <th className="text-left py-3 pr-3 font-semibold text-primary">Asphalt</th>
                <th className="text-left py-3 pr-3 font-semibold text-primary">Metal</th>
                <th className="text-left py-3 font-semibold text-primary">Tile</th>
              </tr>
            </thead>
            <tbody>
              {COST_BY_SIZE.map((row) => (
                <tr key={row.size} className="border-b border-gray-200">
                  <td className="py-3 pr-3 font-medium text-primary">{row.size}</td>
                  <td className="py-3 pr-3 text-gray-700">{row.stories}</td>
                  <td className="py-3 pr-3 font-semibold text-accent-dark">{row.asphalt}</td>
                  <td className="py-3 pr-3 text-gray-700">{row.metal}</td>
                  <td className="py-3 text-gray-700">{row.tile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Multi-story homes cost more per square foot because of scaffolding, safety equipment, and the logistics of hauling materials up. A steep pitch (8:12 or higher) adds 10–20% to the price too.
        </p>

        {/* Regional Pricing */}
        <h2 id="by-region">Roof Replacement Cost by Region</h2>
        <p>
          Labor rates, material availability, and local building codes create big regional swings. The same asphalt shingle roof can cost 40–60% more in the Northeast than the Southeast.
        </p>

        <div className="overflow-x-auto not-prose mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 pr-3 font-semibold text-primary">Region</th>
                <th className="text-left py-3 pr-3 font-semibold text-primary">Avg. Replacement (1,500 sq ft)</th>
                <th className="text-left py-3 font-semibold text-primary">Notes</th>
              </tr>
            </thead>
            <tbody>
              {REGIONAL_PRICES.map((row) => (
                <tr key={row.region} className="border-b border-gray-200">
                  <td className="py-3 pr-3">
                    <Link href={row.slug} className="font-medium text-accent hover:text-accent-dark no-underline">
                      {row.city}
                    </Link>
                    <span className="block text-xs text-gray-500">{row.region}</span>
                  </td>
                  <td className="py-3 pr-3 font-semibold text-accent-dark">{row.avg}</td>
                  <td className="py-3 text-gray-600 text-sm">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Want pricing specific to your city? <Link href="/" className="text-accent hover:text-accent-dark">Search your city on RoofCompare</Link> to see local contractors and estimates.
        </p>

        {/* Cost Breakdown */}
        <h2 id="cost-breakdown">Where Your Money Goes</h2>
        <p>Here&apos;s a typical cost breakdown for an asphalt shingle roof replacement on a 1,500 sq ft home:</p>

        <div className="not-prose space-y-3 mb-8">
          {[
            { item: 'Materials (shingles, underlayment, flashing)', pct: '40%', cost: '$2,200–$4,200' },
            { item: 'Labor', pct: '35%', cost: '$1,900–$3,700' },
            { item: 'Tear-off & disposal', pct: '10%', cost: '$500–$1,000' },
            { item: 'Permits & inspections', pct: '5%', cost: '$200–$500' },
            { item: 'Overhead & profit', pct: '10%', cost: '$500–$1,000' },
          ].map((item) => (
            <div key={item.item} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
              <span className="text-gray-700 text-sm">{item.item}</span>
              <div className="text-right">
                <span className="font-semibold text-primary text-sm">{item.cost}</span>
                <span className="text-gray-400 text-xs ml-2">({item.pct})</span>
              </div>
            </div>
          ))}
        </div>

        <p>
          Labor is the second-biggest expense. It varies wildly — union markets like Chicago and NYC pay roofers $35–$50/hour, while non-union markets in the South may be $18–$28/hour.
        </p>

        {/* Save Money */}
        <h2 id="save-money">5 Ways to Save on a Roof Replacement</h2>
        <ol>
          <li>
            <strong>Get at least 3 quotes.</strong> Pricing varies 20–40% between contractors in the same area. Use <Link href="/">RoofCompare</Link> to find and compare local pros.
          </li>
          <li>
            <strong>Schedule in the off-season.</strong> Late fall and winter are slow for roofers in most markets. You&apos;ll often get 10–15% lower quotes when crews need work.
          </li>
          <li>
            <strong>Ask about overlay vs. tear-off.</strong> If you have a single layer of asphalt shingles in decent shape, an overlay (new shingles on top) costs 25% less. Not always recommended, but worth discussing.
          </li>
          <li>
            <strong>Check insurance and tax credits.</strong> Storm damage? File a claim. Installing energy-efficient materials (metal, cool roofs)? The federal tax credit covers up to 30% of material costs.
          </li>
          <li>
            <strong>Don&apos;t over-spec the material.</strong> A 50-year architectural shingle on a starter home you&apos;ll sell in 10 years doesn&apos;t make sense. Match the material to your timeline.
          </li>
        </ol>

        <AdSlot position="sidebar" className="my-8 not-prose" />

        {/* FAQ */}
        <h2 id="faq">Frequently Asked Questions</h2>

        <div className="space-y-6 not-prose mb-8">
          <div>
            <h3 className="font-semibold text-primary">How much does it cost to replace a roof?</h3>
            <p className="text-gray-700 mt-1">
              A roof replacement costs $5,500 to $12,000 for asphalt shingles on a typical 1,500 sq ft home. Metal roofs run $10,500–$21,000, tile $15,000–$27,000, and slate $22,500–$45,000 for the same size.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">What is the cheapest roof material?</h3>
            <p className="text-gray-700 mt-1">
              3-tab asphalt shingles are the cheapest at $3.50–$5.50 per square foot installed, lasting 15–25 years. Architectural shingles cost slightly more but are better long-term value at 25–30 years.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">How long does a roof replacement take?</h3>
            <p className="text-gray-700 mt-1">
              Most asphalt roofs take 1–3 days for a crew of 4–6. Metal roofs take 3–5 days. Tile and slate can take 1–2 weeks.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">Does homeowners insurance cover roof replacement?</h3>
            <p className="text-gray-700 mt-1">
              Insurance covers damage from covered perils (storms, hail, fire). It does not cover wear and tear or aging. Most policies pay actual cash value unless you have replacement cost coverage.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">Is a metal roof worth the extra cost?</h3>
            <p className="text-gray-700 mt-1">
              Metal costs 2–3x more upfront but lasts 40–70 years, reduces energy costs 10–25%, and resists wind up to 140 mph. If you&apos;re staying 15+ years, metal often has lower total cost of ownership.
            </p>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 pb-12">
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-primary mb-2">Compare Roof Replacement Costs in Your Area</h2>
          <p className="text-gray-600 mb-4">
            Find trusted local roofing contractors and get estimates.
          </p>
          <Link
            href="/"
            className="inline-block bg-accent text-primary font-semibold px-6 py-3 rounded-lg hover:bg-accent-dark transition-colors"
          >
            Find Local Contractors →
          </Link>
        </div>
      </section>
    </>
  );
}
