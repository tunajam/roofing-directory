import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { config } from '@/lib/config';
import AdSlot from '@/components/AdSlot';

const title = 'How Much Does a Roof Replacement Cost in 2026?';
const description = 'Complete roof replacement cost breakdown by material, roof size, region, and hidden costs. Real price ranges for asphalt, metal, tile, and slate roofs.';

export const metadata: Metadata = {
  title: `${title} | ${config.name}`,
  description,
  openGraph: { title, description, type: 'article' },
};

const faqData = [
  { q: 'How much does an average roof replacement cost?', a: 'The national average for a roof replacement in 2026 is $9,000–$16,000 for a standard 2,000 sq ft home with architectural asphalt shingles. Metal roofs run $15,000–$35,000, and premium materials like slate can exceed $50,000.' },
  { q: 'What is the cheapest roofing material?', a: '3-tab asphalt shingles are the cheapest at $3.50–$5.50 per square foot installed. However, architectural shingles ($4.50–$7.00/sq ft) offer significantly better durability and are the best value for most homeowners.' },
  { q: 'Does roof size affect cost per square foot?', a: 'Yes. Larger roofs often have a slightly lower per-square-foot cost due to economies of scale on labor and material delivery. However, total cost obviously increases with size.' },
  { q: 'Are there hidden costs in a roof replacement?', a: 'Common hidden costs include rotted decking replacement ($50–$100 per sheet), permit fees ($200–$500), old roof tear-off ($1,000–$1,500), upgraded flashing, and code-required ventilation improvements.' },
  { q: 'Does a new roof increase home value?', a: 'A new roof typically recovers 60–70% of its cost at resale. More importantly, a failing roof can reduce offers by far more than the replacement cost, as buyers factor in the hassle and uncertainty.' },
];

export default function RoofReplacementCostGuide() {
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
          <p className="text-white/60 mt-2 text-sm">March 2026 · 13 min read</p>
        </div>
      </section>

      <AdSlot position="top" className="max-w-3xl mx-auto mt-6 px-4" />

      <article className="max-w-3xl mx-auto px-4 py-12 prose prose-lg">
        <p>
          &quot;How much will a new roof cost?&quot; is the first question every homeowner asks — and the honest answer is &quot;it depends.&quot; Material, roof size, pitch, your region, and the condition of the existing deck all affect the final number. This guide breaks down real 2026 pricing so you can budget accurately and avoid sticker shock.
        </p>

        <h2>Average Roof Replacement Cost by Material</h2>
        <p>
          These are installed costs for a typical 2,000 sq ft home (roughly 20 roofing squares) in 2026, including labor, materials, tear-off of the old roof, and disposal.
        </p>
        <div className="overflow-x-auto not-prose">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-primary/5">
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Material</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Cost per Sq Ft</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Total (2,000 sq ft)</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Lifespan</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 px-4 py-2">3-Tab Asphalt Shingles</td><td className="border border-gray-200 px-4 py-2">$3.50–$5.50</td><td className="border border-gray-200 px-4 py-2">$7,000–$11,000</td><td className="border border-gray-200 px-4 py-2">15–20 years</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Architectural Shingles</td><td className="border border-gray-200 px-4 py-2">$4.50–$7.00</td><td className="border border-gray-200 px-4 py-2">$9,000–$14,000</td><td className="border border-gray-200 px-4 py-2">25–30 years</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">Standing Seam Metal</td><td className="border border-gray-200 px-4 py-2">$8–$16</td><td className="border border-gray-200 px-4 py-2">$16,000–$32,000</td><td className="border border-gray-200 px-4 py-2">40–70 years</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Metal Shingles</td><td className="border border-gray-200 px-4 py-2">$7–$14</td><td className="border border-gray-200 px-4 py-2">$14,000–$28,000</td><td className="border border-gray-200 px-4 py-2">40–60 years</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">Clay/Concrete Tile</td><td className="border border-gray-200 px-4 py-2">$10–$18</td><td className="border border-gray-200 px-4 py-2">$20,000–$36,000</td><td className="border border-gray-200 px-4 py-2">50–100 years</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Natural Slate</td><td className="border border-gray-200 px-4 py-2">$15–$30</td><td className="border border-gray-200 px-4 py-2">$30,000–$60,000</td><td className="border border-gray-200 px-4 py-2">75–150 years</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">Flat Roof (TPO/EPDM)</td><td className="border border-gray-200 px-4 py-2">$5–$10</td><td className="border border-gray-200 px-4 py-2">$10,000–$20,000</td><td className="border border-gray-200 px-4 py-2">20–30 years</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Best value for most homes:</strong> Architectural asphalt shingles. They cost 20–30% more than 3-tab but last 10+ years longer, look significantly better, and carry better warranties. Almost every roofer recommends them over 3-tab at this point.
        </p>

        <h2>Cost by Roof Size</h2>
        <p>
          Roof size is measured in &quot;squares&quot; — one roofing square equals 100 sq ft. Your roof area is usually 1.2–1.5× your home&apos;s footprint depending on pitch and overhangs.
        </p>
        <div className="overflow-x-auto not-prose">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-primary/5">
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Home Size</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Approx. Roof Area</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Asphalt (Architectural)</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Metal (Standing Seam)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 px-4 py-2">1,000 sq ft</td><td className="border border-gray-200 px-4 py-2">1,200–1,500 sq ft</td><td className="border border-gray-200 px-4 py-2">$5,400–$10,500</td><td className="border border-gray-200 px-4 py-2">$9,600–$24,000</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">1,500 sq ft</td><td className="border border-gray-200 px-4 py-2">1,800–2,250 sq ft</td><td className="border border-gray-200 px-4 py-2">$8,100–$15,750</td><td className="border border-gray-200 px-4 py-2">$14,400–$36,000</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">2,000 sq ft</td><td className="border border-gray-200 px-4 py-2">2,400–3,000 sq ft</td><td className="border border-gray-200 px-4 py-2">$10,800–$21,000</td><td className="border border-gray-200 px-4 py-2">$19,200–$48,000</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">3,000 sq ft</td><td className="border border-gray-200 px-4 py-2">3,600–4,500 sq ft</td><td className="border border-gray-200 px-4 py-2">$16,200–$31,500</td><td className="border border-gray-200 px-4 py-2">$28,800–$72,000</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Regional Price Differences</h2>
        <p>
          Where you live has a major impact on roofing costs. Labor rates, permit requirements, material availability, and local climate all play a role.
        </p>
        <ul>
          <li><strong>Northeast (NY, MA, CT):</strong> 15–25% above national average. High labor costs, strict building codes, and harsh winters requiring ice/water shield on the entire roof deck.</li>
          <li><strong>Southeast (FL, GA, TX):</strong> Near national average to 10% above. Hurricane-rated materials and wind-code compliance add costs in coastal areas.</li>
          <li><strong>Midwest (OH, IL, MN):</strong> 5–10% below national average. Lower labor costs but ice dam prevention adds to materials.</li>
          <li><strong>West Coast (CA, OR, WA):</strong> 10–20% above national average. High labor costs, fire-rated materials required in many areas.</li>
          <li><strong>Mountain West (CO, UT, AZ):</strong> Near national average. Dry climate simplifies some requirements but altitude affects shingle performance.</li>
        </ul>

        <AdSlot position="sidebar" className="my-8" />

        <h2>What Affects Your Specific Cost</h2>
        <p>Beyond material and location, these factors swing your final price:</p>
        <ul>
          <li><strong>Roof pitch (steepness):</strong> Steep roofs (8/12 pitch and above) cost 20–40% more due to safety equipment, slower work pace, and additional materials. A walkable 4/12 pitch is the cheapest to work on.</li>
          <li><strong>Number of layers to remove:</strong> Tearing off one layer costs $1,000–$1,500. Two layers (the maximum most codes allow) cost $1,500–$3,000. Some areas allow overlay, but most roofers recommend tear-off.</li>
          <li><strong>Roof complexity:</strong> Valleys, dormers, skylights, chimneys, and hip roofs all add cost. A simple gable roof is cheapest. Every penetration needs flashing work.</li>
          <li><strong>Decking condition:</strong> Rotted or damaged plywood/OSB decking must be replaced before new shingles go on. Budget $50–$100 per 4×8 sheet, and most replacements need 2–10 sheets.</li>
          <li><strong>Access difficulty:</strong> Multi-story homes, steep driveways, landscaping obstacles, or homes with no staging area increase labor costs.</li>
          <li><strong>Time of year:</strong> Late spring through early fall is peak season. Scheduling in late fall or winter (where climate allows) can save 5–15%.</li>
        </ul>

        <h2>Hidden Costs Most Homeowners Miss</h2>
        <p>Your initial quote may not include these — ask about each one:</p>
        <ul>
          <li><strong>Permit fees:</strong> $200–$500 in most areas. Required for full replacements in nearly every jurisdiction. Your contractor should pull permits — if they suggest skipping this, find a different contractor.</li>
          <li><strong>Decking replacement:</strong> Won&apos;t know the full extent until the old roof is off. A good contractor will give you a per-sheet price upfront.</li>
          <li><strong>Code upgrades:</strong> Your old roof may have been grandfathered under old codes. A replacement triggers current code requirements — new ventilation, ice/water shield, drip edge, etc.</li>
          <li><strong>Gutter replacement:</strong> Old gutters often get damaged during tear-off or don&apos;t align properly with the new roof. Budget $1,000–$2,500 if yours are aging.</li>
          <li><strong>Soffit and fascia repairs:</strong> Rotted fascia boards or damaged soffit panels get exposed during roofing. Replacing them while the roof is off is far cheaper than doing it separately later.</li>
          <li><strong>Chimney and skylight flashing:</strong> These should always be replaced during a re-roof. Some quotes exclude them as &quot;extras.&quot;</li>
        </ul>

        <h2>How to Finance a Roof Replacement</h2>
        <ul>
          <li><strong>Home equity loan or HELOC:</strong> Lowest interest rates (6–9% in 2026). Tax-deductible interest in many cases. Best for planned replacements.</li>
          <li><strong>Personal loan:</strong> Higher rates (8–15%) but no home equity required. Fast approval for urgent replacements.</li>
          <li><strong>Contractor financing:</strong> Many offer 12–24 month same-as-cash or low-interest plans. Read the fine print — deferred interest can spike if you don&apos;t pay in full by the deadline.</li>
          <li><strong>Insurance claim:</strong> If storm damage caused the need, your homeowner&apos;s insurance may cover most of the cost minus your deductible. Document damage thoroughly before repairs. See our <Link href="/guides/how-to-choose-roofing-contractor">contractor vetting guide</Link> for advice on working with insurance.</li>
          <li><strong>Credit card:</strong> Only for small roofs or if you have a 0% APR offer. Carrying a $15,000 balance at 20%+ is not a plan.</li>
        </ul>

        <h2>How to Save Money on a Roof Replacement</h2>
        <ul>
          <li>Get at least 3 written quotes — see our <Link href="/guides/how-to-get-roofing-quotes">guide to getting roofing quotes</Link></li>
          <li>Schedule in the off-season (late fall/winter in temperate climates)</li>
          <li>Choose architectural shingles over premium materials if budget is tight — the cost-per-year is excellent</li>
          <li>Ask about manufacturer rebates or promotions</li>
          <li>Don&apos;t pay more than 30% upfront — ever</li>
          <li>Handle gutter guards, attic insulation, or solar prep at the same time to avoid future scaffold costs</li>
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
          <h2 className="text-xl font-bold text-primary mb-2">Get Free Roofing Estimates</h2>
          <p className="text-gray-600 mb-4">
            Compare quotes from top-rated {config.industry.companyNounPlural} in your area.
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
