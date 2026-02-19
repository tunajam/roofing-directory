import { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/config';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'How Much Does a New Roof Cost? (2026 Pricing Guide) | RoofCompare',
  description:
    'A new roof costs $5,000–$45,000+ depending on material, size, and complexity. Full cost breakdown, factors that affect price, and when to repair vs replace.',
  keywords:
    'how much does a new roof cost, new roof cost, new roof price, roof cost estimate, roof pricing',
  alternates: {
    canonical: 'https://roofcompare.com/blog/how-much-does-a-new-roof-cost',
  },
  openGraph: {
    title: 'How Much Does a New Roof Cost? (2026 Pricing Guide)',
    description: 'Full cost breakdown for a new roof — materials, labor, permits, and hidden costs.',
    type: 'article',
    url: 'https://roofcompare.com/blog/how-much-does-a-new-roof-cost',
  },
};

const COST_FACTORS = [
  { factor: 'Roof Size', impact: 'High', detail: 'Measured in "squares" (100 sq ft each). A 1,500 sq ft home = ~15–20 squares.' },
  { factor: 'Material Choice', impact: 'High', detail: 'Asphalt ($3.50–$7/sq ft) vs metal ($7–$14) vs tile ($10–$18) vs slate ($15–$30).' },
  { factor: 'Roof Pitch/Slope', impact: 'Medium', detail: 'Steeper roofs (8:12+) cost 10–20% more due to safety equipment and slower work.' },
  { factor: 'Layers to Remove', impact: 'Medium', detail: 'Tearing off 2 layers costs $1,000–$2,000 more than a single layer.' },
  { factor: 'Complexity', impact: 'Medium', detail: 'Dormers, valleys, skylights, and chimney flashing add labor and materials.' },
  { factor: 'Local Labor Rates', impact: 'Medium', detail: 'Union markets (NYC, Chicago) pay 2x non-union markets (Southeast).' },
  { factor: 'Permits', impact: 'Low', detail: 'Most cities require permits — $100–$500 depending on jurisdiction.' },
  { factor: 'Structural Repairs', impact: 'Variable', detail: 'Rotted decking, damaged rafters — impossible to predict until tear-off.' },
];

const REPAIR_VS_REPLACE = [
  { scenario: 'Minor leak, localized damage', age: 'Under 15 years', action: 'Repair', cost: '$300–$1,500' },
  { scenario: 'Missing/cracked shingles (small area)', age: 'Under 15 years', action: 'Repair', cost: '$200–$800' },
  { scenario: 'Storm damage (partial)', age: 'Under 20 years', action: 'Repair or partial re-roof', cost: '$1,000–$5,000' },
  { scenario: 'Widespread granule loss', age: '15–20 years', action: 'Start planning replacement', cost: '$5,500–$12,000' },
  { scenario: 'Multiple leaks, sagging', age: '20+ years', action: 'Replace', cost: '$5,500–$15,000+' },
  { scenario: 'Daylight through roof boards', age: 'Any', action: 'Replace immediately', cost: '$5,500–$15,000+' },
  { scenario: 'Failed inspection for home sale', age: 'Any', action: 'Replace', cost: '$5,500–$15,000+' },
];

const CITY_PRICES = [
  { city: 'Houston, TX', slug: '/tx/houston', avg: '$5,500–$9,000' },
  { city: 'Los Angeles, CA', slug: '/ca/los-angeles', avg: '$8,000–$15,000' },
  { city: 'Chicago, IL', slug: '/il/chicago', avg: '$7,000–$13,000' },
  { city: 'Phoenix, AZ', slug: '/az/phoenix', avg: '$6,000–$11,000' },
  { city: 'Dallas, TX', slug: '/tx/dallas', avg: '$5,500–$10,000' },
  { city: 'Atlanta, GA', slug: '/ga/atlanta', avg: '$6,000–$10,500' },
  { city: 'Denver, CO', slug: '/co/denver', avg: '$7,000–$12,500' },
  { city: 'Miami, FL', slug: '/fl/miami', avg: '$7,500–$14,000' },
  { city: 'Seattle, WA', slug: '/wa/seattle', avg: '$7,500–$13,500' },
  { city: 'Nashville, TN', slug: '/tn/nashville', avg: '$5,500–$10,000' },
];

export default function HowMuchNewRoofCostPost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Much Does a New Roof Cost? (2026 Pricing Guide)',
    description: 'Full cost breakdown for a new roof in 2026.',
    datePublished: '2026-02-19',
    dateModified: '2026-02-19',
    author: { '@type': 'Organization', name: 'RoofCompare' },
    publisher: { '@type': 'Organization', name: 'RoofCompare', url: 'https://roofcompare.com' },
    mainEntityOfPage: 'https://roofcompare.com/blog/how-much-does-a-new-roof-cost',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does a new roof cost in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A new asphalt shingle roof costs $5,500–$12,000 for a typical home. Metal roofs run $10,000–$25,000. Tile and slate range from $15,000–$45,000+. The biggest cost drivers are material choice, roof size, and your location.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the biggest cost factor for a new roof?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Material choice is the biggest factor, followed by roof size. Choosing metal over asphalt can double or triple the price. After that, roof complexity (pitch, dormers, skylights) and local labor rates have the most impact.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I repair or replace my roof?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Repair if the damage is localized and the roof is under 15 years old. Replace if the roof is 20+ years old, has multiple leaks, shows widespread wear, or if repair costs exceed 30% of replacement cost. A $3,000 repair on a roof that needs replacing in 2 years is wasted money.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I negotiate roof replacement costs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Get 3+ quotes, schedule during the off-season (late fall/winter), and ask about material alternatives. Many contractors will match or beat competitor quotes. Paying in cash or financing through their preferred lender sometimes gets a discount.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in a roof replacement quote?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A good quote should include: tear-off and disposal, new underlayment, drip edge, shingles/material, flashing around penetrations, ridge vent, cleanup, permits, and warranty details. If a quote just says "new roof — $X" without line items, ask for a detailed breakdown.',
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
            How Much Does a New Roof Cost? (2026 Pricing Guide)
          </h1>
          <p className="text-white/60 mt-2 text-sm">February 19, 2026 · 10 min read</p>
        </div>
      </section>

      <AdSlot position="top" className="max-w-3xl mx-auto mt-6 px-4" />

      <article className="max-w-3xl mx-auto px-4 py-12 prose prose-lg">
        <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-5 mb-8 not-prose">
          <p className="text-primary font-semibold mb-1">Quick answer:</p>
          <p className="text-gray-700 m-0">
            A new roof costs <strong>$5,000–$45,000+</strong>. Most homeowners with asphalt shingles pay <strong>$5,500–$12,000</strong>. Material choice accounts for the biggest price swing — metal and tile cost 2–4x more than asphalt but last decades longer.
          </p>
        </div>

        <p>
          &ldquo;How much does a new roof cost?&rdquo; is one of those questions where the honest answer is &ldquo;it depends.&rdquo; But that&apos;s not helpful when you&apos;re staring at a leaking ceiling trying to budget. So here&apos;s the actual breakdown.
        </p>

        <nav className="bg-gray-50 rounded-xl p-6 mb-10 not-prose">
          <h2 className="text-lg font-bold text-primary mb-3">In this guide:</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1 text-sm">
            <li><a href="#cost-breakdown" className="text-accent hover:text-accent-dark">Full cost breakdown</a></li>
            <li><a href="#factors" className="text-accent hover:text-accent-dark">8 factors that affect price</a></li>
            <li><a href="#by-city" className="text-accent hover:text-accent-dark">Pricing by city</a></li>
            <li><a href="#repair-replace" className="text-accent hover:text-accent-dark">When to repair vs replace</a></li>
            <li><a href="#whats-included" className="text-accent hover:text-accent-dark">What a quote should include</a></li>
            <li><a href="#faq" className="text-accent hover:text-accent-dark">FAQ</a></li>
          </ol>
        </nav>

        {/* Cost Breakdown */}
        <h2 id="cost-breakdown">New Roof Cost Breakdown</h2>
        <p>
          Here&apos;s where the money goes on a typical 1,500 sq ft asphalt shingle roof replacement:
        </p>

        <div className="not-prose space-y-3 mb-8">
          {[
            { item: 'Shingles & underlayment', cost: '$1,800–$3,500', pct: '35%' },
            { item: 'Labor (tear-off, installation)', cost: '$2,000–$4,000', pct: '35%' },
            { item: 'Flashing, drip edge, ridge vent', cost: '$400–$800', pct: '8%' },
            { item: 'Tear-off & dumpster', cost: '$400–$800', pct: '7%' },
            { item: 'Decking repairs (if needed)', cost: '$0–$1,500', pct: '0–10%' },
            { item: 'Permits & inspections', cost: '$100–$500', pct: '3%' },
            { item: 'Contractor overhead/profit', cost: '$500–$1,200', pct: '10%' },
          ].map((item) => (
            <div key={item.item} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
              <span className="text-gray-700 text-sm">{item.item}</span>
              <div className="text-right">
                <span className="font-semibold text-primary text-sm">{item.cost}</span>
                <span className="text-gray-400 text-xs ml-2">~{item.pct}</span>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between bg-primary/5 rounded-lg p-3 border border-primary/10">
            <span className="text-primary font-bold text-sm">Total (typical range)</span>
            <span className="font-bold text-primary">$5,500–$12,000</span>
          </div>
        </div>

        <p>
          The wildcard is <strong>decking repairs</strong>. You won&apos;t know the condition of the plywood underneath until the old shingles come off. Budget an extra $500–$1,500 just in case — about 1 in 4 roofs need some deck repair.
        </p>

        {/* Factors */}
        <h2 id="factors">8 Factors That Affect Your New Roof Cost</h2>

        <div className="overflow-x-auto not-prose mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 pr-3 font-semibold text-primary">Factor</th>
                <th className="text-left py-3 pr-3 font-semibold text-primary">Impact</th>
                <th className="text-left py-3 font-semibold text-primary">Details</th>
              </tr>
            </thead>
            <tbody>
              {COST_FACTORS.map((row) => (
                <tr key={row.factor} className="border-b border-gray-200">
                  <td className="py-3 pr-3 font-medium text-primary">{row.factor}</td>
                  <td className="py-3 pr-3">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                      row.impact === 'High' ? 'bg-red-100 text-red-700' :
                      row.impact === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      row.impact === 'Variable' ? 'bg-purple-100 text-purple-700' :
                      'bg-green-100 text-green-700'
                    }`}>{row.impact}</span>
                  </td>
                  <td className="py-3 text-gray-600 text-sm">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          The biggest mistake people make is comparing quotes without accounting for these differences. A $6,000 quote with 3-tab shingles and no tear-off isn&apos;t the same as a $9,000 quote with architectural shingles, full tear-off, and new flashing. Read the line items.
        </p>

        <p>
          For a deeper dive on material pricing, check our <Link href="/blog/roof-replacement-cost">roof replacement cost by material guide</Link>.
        </p>

        <AdSlot position="sidebar" className="my-8 not-prose" />

        {/* By City */}
        <h2 id="by-city">New Roof Cost by City</h2>
        <p>Average cost for an asphalt shingle roof on a 1,500 sq ft home:</p>

        <div className="overflow-x-auto not-prose mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 pr-3 font-semibold text-primary">City</th>
                <th className="text-left py-3 font-semibold text-primary">Average Cost (Asphalt)</th>
              </tr>
            </thead>
            <tbody>
              {CITY_PRICES.map((row) => (
                <tr key={row.city} className="border-b border-gray-200">
                  <td className="py-3 pr-3">
                    <Link href={row.slug} className="font-medium text-accent hover:text-accent-dark no-underline">
                      {row.city}
                    </Link>
                  </td>
                  <td className="py-3 font-semibold text-accent-dark">{row.avg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          <Link href="/" className="text-accent hover:text-accent-dark">Search your city on RoofCompare</Link> for local contractor pricing.
        </p>

        {/* Repair vs Replace */}
        <h2 id="repair-replace">When to Repair vs Replace Your Roof</h2>
        <p>
          This is the real question most people are asking. Here&apos;s a practical decision guide:
        </p>

        <div className="overflow-x-auto not-prose mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 pr-3 font-semibold text-primary">Scenario</th>
                <th className="text-left py-3 pr-3 font-semibold text-primary">Roof Age</th>
                <th className="text-left py-3 pr-3 font-semibold text-primary">Recommendation</th>
                <th className="text-left py-3 font-semibold text-primary">Expected Cost</th>
              </tr>
            </thead>
            <tbody>
              {REPAIR_VS_REPLACE.map((row, i) => (
                <tr key={i} className="border-b border-gray-200">
                  <td className="py-3 pr-3 text-gray-700">{row.scenario}</td>
                  <td className="py-3 pr-3 text-gray-700">{row.age}</td>
                  <td className="py-3 pr-3">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                      row.action.includes('Replace') ? 'bg-red-100 text-red-700' :
                      row.action.includes('planning') ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>{row.action}</span>
                  </td>
                  <td className="py-3 font-semibold text-accent-dark">{row.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          <strong>The 30% rule:</strong> If repair costs exceed 30% of full replacement cost, replace the whole thing. You&apos;ll get a warranty, better energy efficiency, and avoid throwing good money after bad.
        </p>

        {/* What's Included */}
        <h2 id="whats-included">What Should a Roof Quote Include?</h2>
        <p>A legitimate roof replacement quote should itemize:</p>

        <ul>
          <li><strong>Tear-off and disposal</strong> — removing old material, dumpster rental</li>
          <li><strong>Decking inspection/repair</strong> — or a per-sheet price for replacements</li>
          <li><strong>Underlayment</strong> — synthetic preferred over felt</li>
          <li><strong>Drip edge</strong> — metal edging along eaves and rakes</li>
          <li><strong>Shingles/material</strong> — brand, product line, color</li>
          <li><strong>Flashing</strong> — around chimneys, vents, skylights, walls</li>
          <li><strong>Ridge vent or ventilation</strong> — critical for roof longevity</li>
          <li><strong>Cleanup and haul-away</strong> — including magnetic nail sweep</li>
          <li><strong>Permits</strong> — who pulls them and what they cost</li>
          <li><strong>Warranty</strong> — manufacturer (material) AND workmanship (labor)</li>
        </ul>

        <p>
          If a quote is a single line item with no breakdown — that&apos;s a red flag. Find a contractor who&apos;ll show you the math. Need help vetting contractors? Read our <Link href="/blog/roofing-contractors-near-me">guide to finding roofing contractors</Link>.
        </p>

        <AdSlot position="sidebar" className="my-8 not-prose" />

        {/* FAQ */}
        <h2 id="faq">Frequently Asked Questions</h2>

        <div className="space-y-6 not-prose mb-8">
          <div>
            <h3 className="font-semibold text-primary">How much does a new roof cost in 2026?</h3>
            <p className="text-gray-700 mt-1">
              A new asphalt shingle roof costs $5,500–$12,000 for a typical home. Metal roofs run $10,000–$25,000. Tile and slate range from $15,000–$45,000+.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">What is the biggest cost factor for a new roof?</h3>
            <p className="text-gray-700 mt-1">
              Material choice, followed by roof size. Choosing metal over asphalt can double or triple the price.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">Should I repair or replace my roof?</h3>
            <p className="text-gray-700 mt-1">
              Repair if damage is localized and the roof is under 15 years old. Replace if it&apos;s 20+ years old, has multiple leaks, or if repair costs exceed 30% of replacement cost.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">Can I negotiate roof replacement costs?</h3>
            <p className="text-gray-700 mt-1">
              Yes. Get 3+ quotes, schedule during off-season, and ask about material alternatives. Many contractors will match competitor quotes.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">What should a roof replacement quote include?</h3>
            <p className="text-gray-700 mt-1">
              Tear-off and disposal, underlayment, drip edge, shingles/material, flashing, ridge vent, cleanup, permits, and warranty details. Avoid single line-item quotes.
            </p>
          </div>
        </div>
      </article>

      <section className="max-w-3xl mx-auto px-4 pb-12">
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-primary mb-2">Get New Roof Estimates in Your Area</h2>
          <p className="text-gray-600 mb-4">
            Compare pricing from trusted local roofing contractors.
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
