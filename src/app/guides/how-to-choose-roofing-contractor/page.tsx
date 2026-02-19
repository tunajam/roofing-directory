import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { config } from '@/lib/config';
import AdSlot from '@/components/AdSlot';

const title = 'How to Choose a Roofing Contractor (2026 Guide)';
const description = 'Everything you need to vet a roofing contractor — state licensing, insurance, written estimates, material options, warranty types, and red flags to avoid.';

export const metadata: Metadata = {
  title: `${title} | ${config.name}`,
  description,
  openGraph: { title, description, type: 'article' },
};

const faqData = [
  { q: 'Do roofing contractors need a license?', a: 'It varies by state. About 35 states require roofing-specific or general contractor licenses. States like Florida, California, and Arizona have strict licensing. Others like New York and Missouri have no statewide requirement but may have local ones.' },
  { q: 'What insurance should a roofing contractor carry?', a: 'General liability ($1M–$2M), workers\' compensation, and ideally commercial auto. Without workers\' comp, you could be liable for injuries on your property.' },
  { q: 'What\'s the difference between a manufacturer warranty and a workmanship warranty?', a: 'Manufacturer warranties cover material defects (typically 25–50 years). Workmanship warranties cover installation errors (typically 5–15 years). You want both.' },
  { q: 'Should I get multiple roofing estimates?', a: 'Always get at least three written estimates. Compare scope of work, materials specified, timeline, and warranty terms — not just price.' },
  { q: 'How long does a roof replacement take?', a: 'Most residential roof replacements take 1–3 days. Complex roofs, weather delays, or structural repairs can extend this to a week or more.' },
];

export default function HowToChooseRoofingContractor() {
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
          <p className="text-white/60 mt-2 text-sm">February 2026 · 14 min read</p>
        </div>
      </section>

      <AdSlot position="top" className="max-w-3xl mx-auto mt-6 px-4" />

      <article className="max-w-3xl mx-auto px-4 py-12 prose prose-lg">
        <p>
          A roof replacement is one of the most expensive home improvements you&apos;ll make — $8,000 to $25,000+ depending on size and materials. Hiring the wrong contractor can mean leaks within a year, voided warranties, or a contractor who disappears mid-job. Here&apos;s how to get it right.
        </p>

        <h2>1. Check State Licensing Requirements</h2>
        <p>
          Licensing requirements vary dramatically by state. Here&apos;s the landscape:
        </p>
        <ul>
          <li><strong>Strict licensing states:</strong> California, Florida, Arizona, Nevada, Louisiana, Oregon — require specific roofing or general contractor licenses with exams</li>
          <li><strong>Registration states:</strong> Texas, Pennsylvania, Virginia — require contractor registration but no exam</li>
          <li><strong>Local-only states:</strong> New York, Missouri, Colorado — no state license but cities/counties may require permits</li>
        </ul>
        <p>
          Look up your state&apos;s requirements at your state contractor licensing board. Then verify the contractor&apos;s license number directly — don&apos;t just take their word for it.
        </p>

        <h2>2. Verify Insurance (Non-Negotiable)</h2>
        <p>Roofing is one of the most dangerous trades. You need to see proof of:</p>
        <ul>
          <li><strong>General liability ($1M–$2M)</strong> — covers damage to your home and property</li>
          <li><strong>Workers&apos; compensation</strong> — covers injuries to crew members. Without this, an injured worker could sue <em>you</em>.</li>
          <li><strong>Commercial auto</strong> — covers damage from their vehicles on your property</li>
        </ul>
        <p>
          Request a Certificate of Insurance and call the insurance company to confirm it&apos;s current. Policies can lapse — a document from six months ago means nothing.
        </p>

        <h2>3. Demand Written Estimates</h2>
        <p>A proper roofing estimate should include:</p>
        <ul>
          <li>Exact materials (brand, product line, color)</li>
          <li>Scope: tear-off old roof or overlay?</li>
          <li>Underlayment and ice/water shield details</li>
          <li>Flashing replacement plan</li>
          <li>Ventilation assessment</li>
          <li>Cleanup and debris disposal</li>
          <li>Projected timeline with start date</li>
          <li>Payment schedule (never more than 30% upfront)</li>
          <li>Warranty terms for both materials and labor</li>
        </ul>
        <p>
          If an estimate is a single line item like &quot;Roof replacement — $12,000,&quot; walk away. You have no idea what you&apos;re getting.
        </p>

        <h2>4. Understand Material Options</h2>
        <div className="overflow-x-auto not-prose">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-primary/5">
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Material</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Lifespan</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Cost/sq ft</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 px-4 py-2">3-tab asphalt shingles</td><td className="border border-gray-200 px-4 py-2">15–20 years</td><td className="border border-gray-200 px-4 py-2">$3.50–$5.50</td><td className="border border-gray-200 px-4 py-2">Budget-friendly</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Architectural shingles</td><td className="border border-gray-200 px-4 py-2">25–30 years</td><td className="border border-gray-200 px-4 py-2">$4.50–$7.00</td><td className="border border-gray-200 px-4 py-2">Most homes (best value)</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">Metal roofing</td><td className="border border-gray-200 px-4 py-2">40–70 years</td><td className="border border-gray-200 px-4 py-2">$7–$14</td><td className="border border-gray-200 px-4 py-2">Longevity, energy savings</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Clay/concrete tile</td><td className="border border-gray-200 px-4 py-2">50–100 years</td><td className="border border-gray-200 px-4 py-2">$10–$18</td><td className="border border-gray-200 px-4 py-2">Southwest/Mediterranean style</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">Slate</td><td className="border border-gray-200 px-4 py-2">75–150 years</td><td className="border border-gray-200 px-4 py-2">$15–$30</td><td className="border border-gray-200 px-4 py-2">Historic/high-end homes</td></tr>
            </tbody>
          </table>
        </div>

        <h2>5. Know the Warranty Types</h2>
        <ul>
          <li><strong>Manufacturer&apos;s standard warranty (25–50 years)</strong> — covers defects in the shingles/materials themselves. Often prorated after the first 10 years.</li>
          <li><strong>Manufacturer&apos;s enhanced warranty</strong> — only available through certified installers. Covers both materials and labor. Worth the premium.</li>
          <li><strong>Workmanship warranty (5–15 years)</strong> — from the contractor, covers installation errors. Get this in writing with specific terms.</li>
        </ul>
        <p>
          <strong>Key question:</strong> Is the warranty transferable if you sell the house? This affects resale value.
        </p>

        <h2>6. Red Flags to Avoid</h2>
        <ul>
          <li>Door-to-door salespeople after a storm (&quot;storm chasers&quot;)</li>
          <li>Demands for full payment upfront</li>
          <li>No physical office or local address</li>
          <li>Won&apos;t provide references from the last 6 months</li>
          <li>Pressure to sign today with a &quot;limited-time discount&quot;</li>
          <li>Suggests filing an inflated insurance claim</li>
          <li>No written contract before work begins</li>
        </ul>

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
          <h2 className="text-xl font-bold text-primary mb-2">Compare Roofing Contractors in Your City</h2>
          <p className="text-gray-600 mb-4">
            Find licensed, insured {config.industry.companyNounPlural} near you and compare estimates.
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
