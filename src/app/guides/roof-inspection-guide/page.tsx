import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { config } from '@/lib/config';
import AdSlot from '@/components/AdSlot';

const title = 'Roof Inspection Guide: What to Expect & Why It Matters';
const description = 'Everything you need to know about roof inspections — what inspectors check, how much it costs, DIY inspection tips, and when you should schedule one.';

export const metadata: Metadata = {
  title: `${title} | ${config.name}`,
  description,
  openGraph: { title, description, type: 'article' },
};

const faqData = [
  { q: 'How much does a professional roof inspection cost?', a: 'A standard roof inspection costs $150–$400 depending on roof size, complexity, and your location. Some contractors offer free inspections, but be cautious — free inspections from roofers can come with sales pressure.' },
  { q: 'How long does a roof inspection take?', a: 'Most residential roof inspections take 45 minutes to 2 hours. Complex roofs with multiple penetrations, steep pitches, or visible damage take longer.' },
  { q: 'How often should I get my roof inspected?', a: 'At minimum, every 2–3 years and after any major storm. If your roof is over 15 years old, annual inspections are worth the investment. They catch small problems before they become expensive ones.' },
  { q: 'Can I inspect my roof myself?', a: 'You can do a meaningful ground-level and attic inspection yourself (see our DIY checklist above). However, a professional can safely walk the roof, check flashing details, and identify issues that aren\'t visible from the ground.' },
  { q: 'What happens if the inspection finds problems?', a: 'The inspector provides a written report detailing issues and recommended repairs. You can use this report to get repair quotes, negotiate a home sale price, or file an insurance claim if storm damage is found.' },
];

export default function RoofInspectionGuide() {
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
          <p className="text-white/60 mt-2 text-sm">March 2026 · 12 min read</p>
        </div>
      </section>

      <AdSlot position="top" className="max-w-3xl mx-auto mt-6 px-4" />

      <article className="max-w-3xl mx-auto px-4 py-12 prose prose-lg">
        <p>
          A roof inspection is the cheapest insurance you can buy. For $150–$400, a professional identifies problems that could cost $5,000–$20,000 if left unchecked. Whether you&apos;re buying a home, maintaining your current roof, or dealing with storm damage, here&apos;s exactly what happens during an inspection and how to make the most of it.
        </p>

        <h2>When to Get a Roof Inspection</h2>
        <p>Don&apos;t wait until you see a leak. Schedule an inspection when:</p>
        <ul>
          <li><strong>Buying a home:</strong> Always. The general home inspection often gives the roof a cursory look. A dedicated roof inspection reveals issues a generalist misses.</li>
          <li><strong>After a major storm:</strong> Hail, high winds (60+ mph), or fallen debris can cause damage that isn&apos;t visible from the ground. Document everything for insurance.</li>
          <li><strong>Your roof is 15+ years old:</strong> Even if everything looks fine, aging materials fail in subtle ways. Annual inspections from this point forward are smart.</li>
          <li><strong>Before selling your home:</strong> A pre-listing inspection lets you fix issues on your terms instead of scrambling during buyer negotiations.</li>
          <li><strong>Routine maintenance:</strong> Every 2–3 years at minimum. Spring and fall are ideal timing.</li>
          <li><strong>After a DIY project:</strong> If you or someone else installed a satellite dish, solar panels, or did any work near the roof, check that nothing was damaged.</li>
        </ul>

        <h2>What a Professional Inspector Checks</h2>
        <p>A thorough roof inspection covers three areas: the exterior roof surface, the interior/attic, and the structural components.</p>

        <h3>Exterior Inspection</h3>
        <ul>
          <li><strong>Shingle/material condition:</strong> Curling, cracking, missing pieces, granule loss, blistering</li>
          <li><strong>Flashing:</strong> Condition around chimneys, vents, skylights, walls, and valleys</li>
          <li><strong>Gutters and downspouts:</strong> Proper attachment, granule accumulation, water flow</li>
          <li><strong>Ridge caps and hip caps:</strong> Seal integrity, lifting, cracking</li>
          <li><strong>Vent boots and pipe collars:</strong> Rubber seals crack over time — a top leak source</li>
          <li><strong>Drip edge:</strong> Present and properly installed along eaves and rakes</li>
          <li><strong>Moss, algae, or debris:</strong> Organic growth that holds moisture against the roof</li>
        </ul>

        <h3>Interior/Attic Inspection</h3>
        <ul>
          <li><strong>Daylight penetration:</strong> Any light through the roof deck means water gets through too</li>
          <li><strong>Water stains:</strong> On rafters, sheathing, or insulation</li>
          <li><strong>Mold or mildew:</strong> Signs of chronic moisture problems</li>
          <li><strong>Ventilation:</strong> Proper intake (soffit vents) and exhaust (ridge or attic vents)</li>
          <li><strong>Insulation condition:</strong> Adequate depth, dry, evenly distributed</li>
        </ul>

        <h3>Structural Assessment</h3>
        <ul>
          <li><strong>Sagging or uneven planes:</strong> Indicates decking deterioration or structural issues</li>
          <li><strong>Chimney condition:</strong> Mortar joints, cap, cricket/diverter presence</li>
          <li><strong>Fascia and soffit:</strong> Rot, animal damage, paint peeling</li>
        </ul>

        <AdSlot position="sidebar" className="my-8" />

        <h2>Types of Roof Inspections</h2>
        <div className="overflow-x-auto not-prose">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-primary/5">
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Type</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Cost</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">What&apos;s Included</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 px-4 py-2">Visual Inspection</td><td className="border border-gray-200 px-4 py-2">$150–$300</td><td className="border border-gray-200 px-4 py-2">Walk the roof, check attic, written report</td><td className="border border-gray-200 px-4 py-2">Routine maintenance</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Drone Inspection</td><td className="border border-gray-200 px-4 py-2">$150–$350</td><td className="border border-gray-200 px-4 py-2">High-res aerial photos/video, no foot traffic</td><td className="border border-gray-200 px-4 py-2">Steep or fragile roofs</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">Infrared/Thermal</td><td className="border border-gray-200 px-4 py-2">$300–$600</td><td className="border border-gray-200 px-4 py-2">Thermal imaging detects trapped moisture</td><td className="border border-gray-200 px-4 py-2">Suspected hidden leaks</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Insurance Inspection</td><td className="border border-gray-200 px-4 py-2">Varies</td><td className="border border-gray-200 px-4 py-2">Focused on storm/hail damage documentation</td><td className="border border-gray-200 px-4 py-2">Filing claims</td></tr>
            </tbody>
          </table>
        </div>

        <h2>DIY Roof Inspection Checklist</h2>
        <p>
          You can catch most problems yourself without climbing on the roof. Do this twice a year — once in spring after winter damage, and once in fall before winter sets in.
        </p>
        <div className="not-prose bg-primary/5 border border-primary/10 rounded-xl p-6 text-sm">
          <p className="font-bold mb-3">From the Ground (use binoculars):</p>
          <ul className="space-y-1 list-disc pl-5 mb-4">
            <li>Scan for missing, curling, or damaged shingles</li>
            <li>Check the ridge line for straightness — any dips indicate problems</li>
            <li>Look at flashing around chimneys, vents, and walls</li>
            <li>Note any moss, algae, or dark streaks</li>
            <li>Check that gutters are attached and not overflowing</li>
          </ul>
          <p className="font-bold mb-3">Gutters (from a ladder):</p>
          <ul className="space-y-1 list-disc pl-5 mb-4">
            <li>Scoop out debris and check for granule buildup</li>
            <li>Heavy granules = shingles deteriorating</li>
            <li>Check that downspouts are directing water away from the foundation</li>
          </ul>
          <p className="font-bold mb-3">Attic (flashlight needed):</p>
          <ul className="space-y-1 list-disc pl-5 mb-4">
            <li>Look for daylight through the roof deck</li>
            <li>Check for water stains on rafters and sheathing</li>
            <li>Smell for mold or mildew</li>
            <li>Feel insulation for dampness</li>
            <li>Verify vents are clear and unblocked</li>
          </ul>
          <p className="font-bold mb-3">Inside the Home:</p>
          <ul className="space-y-1 list-disc pl-5">
            <li>Check ceilings in top-floor rooms for stains or bubbling paint</li>
            <li>Look at walls near the roofline for moisture marks</li>
            <li>Note any musty smells in upstairs rooms</li>
          </ul>
        </div>
        <p>
          If your DIY inspection turns up warning signs, see our guide on <Link href="/guides/signs-you-need-new-roof">signs you need a new roof</Link> to assess severity, and our <Link href="/guides/roof-repair-vs-replacement">repair vs. replacement guide</Link> to decide next steps.
        </p>

        <h2>How to Choose a Roof Inspector</h2>
        <ul>
          <li><strong>Independent inspectors vs. roofing contractors:</strong> Independent inspectors have no incentive to upsell repairs. Contractor inspections can be biased but are often free. Use independent for buying/selling; contractor for maintenance.</li>
          <li><strong>Certifications to look for:</strong> HAAG Certified Inspector (industry standard for storm damage), InterNACHI or ASHI certified (home inspection associations)</li>
          <li><strong>Ask for a written report:</strong> With photos. Any inspector who gives a verbal-only assessment isn&apos;t worth hiring.</li>
          <li><strong>Check reviews:</strong> Use our <Link href="/">directory</Link> to find inspectors and contractors with verified reviews in your area.</li>
        </ul>

        <h2>What to Do After Your Inspection</h2>
        <ul>
          <li><strong>No issues found:</strong> Great. File the report and schedule your next inspection in 2–3 years (or 1 year if the roof is 15+).</li>
          <li><strong>Minor repairs needed:</strong> Get 2–3 quotes. Most small repairs ($200–$1,000) are straightforward. See our <Link href="/guides/how-to-get-roofing-quotes">guide to getting quotes</Link>.</li>
          <li><strong>Major issues found:</strong> Read our <Link href="/guides/roof-repair-vs-replacement">repair vs. replacement guide</Link> and our <Link href="/guides/roof-replacement-cost-guide">cost guide</Link> to understand your options.</li>
          <li><strong>Storm damage documented:</strong> File an insurance claim promptly. The inspection report is your evidence. Most policies have time limits for filing.</li>
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
          <h2 className="text-xl font-bold text-primary mb-2">Find Roof Inspectors Near You</h2>
          <p className="text-gray-600 mb-4">
            Compare top-rated {config.industry.companyNounPlural} who offer professional roof inspections.
          </p>
          <Link
            href="/"
            className="inline-block bg-accent text-primary font-semibold px-6 py-3 rounded-lg hover:bg-accent-dark transition-colors"
          >
            Find Inspectors →
          </Link>
        </div>
      </section>
    </>
  );
}
