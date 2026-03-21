import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { config } from '@/lib/config';
import AdSlot from '@/components/AdSlot';

const title = 'Roof Repair vs Replacement: How to Decide';
const description = 'Should you repair or replace your roof? A practical decision guide based on roof age, damage extent, cost thresholds, and when patching stops making sense.';

export const metadata: Metadata = {
  title: `${title} | ${config.name}`,
  description,
  openGraph: { title, description, type: 'article' },
};

const faqData = [
  { q: 'When should I replace my roof instead of repairing it?', a: 'Replace when: the roof is over 20 years old, damage covers more than 30% of the surface, repair costs exceed 30% of replacement cost, the decking is compromised, or you\'re dealing with recurring leaks in multiple areas.' },
  { q: 'How much does a roof repair cost vs replacement?', a: 'Minor repairs cost $200–$1,000. Moderate repairs run $1,000–$3,500. A full replacement averages $9,000–$16,000 for asphalt shingles. When repairs approach $4,000–$5,000, replacement often makes more financial sense.' },
  { q: 'Can you patch a roof multiple times?', a: 'You can, but each patch weakens the surrounding area and creates more seams where water can penetrate. After 2–3 significant repairs to the same section, or repairs to more than 30% of the total roof, replacement becomes the smarter investment.' },
  { q: 'Does insurance cover roof repair or replacement?', a: 'Insurance covers damage from sudden events (storms, fallen trees, fire) but not wear and tear. If a storm damages your 25-year-old roof, insurance may cover replacement if the damage is the proximate cause, but an adjuster will factor in depreciation.' },
  { q: 'Should I repair my roof before selling my house?', a: 'If the issues are minor (under $2,000), repair them — buyers notice. If the roof needs replacement, you can either replace it (recover 60–70% at sale) or price it into the listing. A new roof removes a major buyer objection.' },
];

export default function RoofRepairVsReplacement() {
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
          <p className="text-white/60 mt-2 text-sm">March 2026 · 11 min read</p>
        </div>
      </section>

      <AdSlot position="top" className="max-w-3xl mx-auto mt-6 px-4" />

      <article className="max-w-3xl mx-auto px-4 py-12 prose prose-lg">
        <p>
          You&apos;ve got a roof problem. Maybe it&apos;s a leak, missing shingles after a storm, or an inspector told you things don&apos;t look great. The question is: do you spend $500 on a repair or $12,000 on a replacement? Here&apos;s a practical framework to make that call without overthinking it.
        </p>

        <h2>The 30% Rule</h2>
        <p>
          This is the simplest decision tool in roofing, and most contractors agree on it:
        </p>
        <ul>
          <li><strong>If the repair costs less than 30% of a full replacement</strong> → repair makes sense (assuming the roof has meaningful life left)</li>
          <li><strong>If the repair costs more than 30% of a full replacement</strong> → replace the whole thing. You&apos;ll get a new warranty, better materials, and avoid the next repair bill that&apos;s surely coming.</li>
        </ul>
        <p>
          Example: If a full replacement would cost $12,000, the breakpoint is $3,600. A $2,000 repair? Go for it. A $4,500 repair on a 22-year-old roof? Replace it.
        </p>
        <p>
          Need to know what a replacement would cost for your situation? See our <Link href="/guides/roof-replacement-cost-guide">roof replacement cost guide</Link>.
        </p>

        <h2>When to Repair</h2>
        <p>Repair is the right call when:</p>
        <ul>
          <li><strong>Roof is under 15 years old:</strong> The material still has life. A targeted repair extends it.</li>
          <li><strong>Damage is localized:</strong> A few missing shingles, one damaged section, a single flashing failure. The rest of the roof is solid.</li>
          <li><strong>Damage covers less than 30% of the roof:</strong> Isolated problem, not systemic failure.</li>
          <li><strong>Storm damage to an otherwise healthy roof:</strong> A tree branch hits one section — repair it and file insurance for the cost.</li>
          <li><strong>Budget is genuinely tight:</strong> A proper repair buys you 3–5 years if the underlying roof is decent. Just don&apos;t stack repair on repair indefinitely.</li>
        </ul>

        <h3>Common Repairs and Costs</h3>
        <div className="overflow-x-auto not-prose">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-primary/5">
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Repair Type</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Cost Range</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Expected Life Extension</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 px-4 py-2">Replace missing shingles</td><td className="border border-gray-200 px-4 py-2">$150–$400</td><td className="border border-gray-200 px-4 py-2">Matches remaining roof life</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Fix a single leak</td><td className="border border-gray-200 px-4 py-2">$300–$1,000</td><td className="border border-gray-200 px-4 py-2">3–10 years</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">Replace flashing</td><td className="border border-gray-200 px-4 py-2">$200–$600</td><td className="border border-gray-200 px-4 py-2">10–20 years</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Fix vent boot/pipe collar</td><td className="border border-gray-200 px-4 py-2">$100–$300</td><td className="border border-gray-200 px-4 py-2">5–10 years</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">Repair a section (10–20%)</td><td className="border border-gray-200 px-4 py-2">$1,000–$3,500</td><td className="border border-gray-200 px-4 py-2">5–8 years</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Replace damaged decking</td><td className="border border-gray-200 px-4 py-2">$50–$100/sheet + labor</td><td className="border border-gray-200 px-4 py-2">Matches new roof life</td></tr>
            </tbody>
          </table>
        </div>

        <AdSlot position="sidebar" className="my-8" />

        <h2>When to Replace</h2>
        <p>Replacement is the right call when:</p>
        <ul>
          <li><strong>Roof is 20+ years old (asphalt):</strong> Even if it &quot;looks okay,&quot; materials are degrading throughout. A repair fixes one spot while the rest continues to fail. It&apos;s whack-a-mole.</li>
          <li><strong>Damage exceeds 30% of the roof surface:</strong> At this point, the labor and material for a large repair approach replacement cost — and you don&apos;t get a new warranty for a partial job.</li>
          <li><strong>Multiple active leaks:</strong> One leak is a repair. Two or three in different areas means systemic failure.</li>
          <li><strong>Sagging roof deck:</strong> This indicates structural damage from moisture. You can&apos;t repair over rot — it needs to come off.</li>
          <li><strong>You&apos;ve repaired the same roof 3+ times in 5 years:</strong> You&apos;re spending replacement money on a timeline. Do it once and be done.</li>
          <li><strong>Selling your home:</strong> A new roof recovers 60–70% at resale and removes one of the biggest buyer objections. A patched roof raises red flags.</li>
          <li><strong>Energy bills are climbing:</strong> An old, poorly ventilated roof costs you in heating and cooling every month. A replacement with modern materials and proper ventilation pays back over time.</li>
        </ul>

        <h2>The Age Factor</h2>
        <p>
          Roof age is the single biggest factor in the repair vs. replace decision. Here&apos;s how to think about it by material:
        </p>
        <div className="overflow-x-auto not-prose">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-primary/5">
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Material</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Repair Makes Sense</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Gray Zone</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Replace</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 px-4 py-2">3-Tab Asphalt</td><td className="border border-gray-200 px-4 py-2">Under 12 years</td><td className="border border-gray-200 px-4 py-2">12–18 years</td><td className="border border-gray-200 px-4 py-2">18+ years</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Architectural Asphalt</td><td className="border border-gray-200 px-4 py-2">Under 18 years</td><td className="border border-gray-200 px-4 py-2">18–25 years</td><td className="border border-gray-200 px-4 py-2">25+ years</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">Metal</td><td className="border border-gray-200 px-4 py-2">Under 30 years</td><td className="border border-gray-200 px-4 py-2">30–50 years</td><td className="border border-gray-200 px-4 py-2">50+ years</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Tile</td><td className="border border-gray-200 px-4 py-2">Under 40 years</td><td className="border border-gray-200 px-4 py-2">40–60 years</td><td className="border border-gray-200 px-4 py-2">60+ years</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Don&apos;t know how old your roof is? Check closing documents from when you bought the house, ask your home inspector, or look for a permit on file with your local building department. Learn more about assessing your roof&apos;s condition in our <Link href="/guides/roof-inspection-guide">roof inspection guide</Link>.
        </p>

        <h2>The Patch Limit: When Repairs Stop Working</h2>
        <p>
          Every repair creates a seam — a new edge where water can penetrate. There&apos;s a practical limit to how many times you can patch before the patchwork itself becomes the problem.
        </p>
        <ul>
          <li><strong>1–2 repairs:</strong> Normal. This is routine maintenance.</li>
          <li><strong>3–4 repairs in different areas:</strong> Warning sign. The roof is telling you it&apos;s aging out.</li>
          <li><strong>5+ repairs or the same area twice:</strong> You&apos;re past the patch limit. Replacement is the answer.</li>
        </ul>
        <p>
          Also watch for &quot;color patchwork&quot; — when your roof has shingles of 3+ different shades from various repairs. Beyond aesthetics, this indicates the original material is no longer available, meaning the whole roof is aging out.
        </p>

        <h2>Making the Decision: Quick Checklist</h2>
        <div className="not-prose bg-primary/5 border border-primary/10 rounded-xl p-6 text-sm">
          <p className="font-bold mb-3">Answer these questions:</p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Is the roof over 20 years old (asphalt)? → Lean toward replace</li>
            <li>Is damage limited to less than 30% of the roof? → Lean toward repair</li>
            <li>Will the repair cost more than 30% of a replacement? → Replace</li>
            <li>Have you repaired this roof 3+ times in 5 years? → Replace</li>
            <li>Is the decking sagging or spongy? → Replace (urgent)</li>
            <li>Are you selling within 2 years? → Replace if issues are visible</li>
            <li>Is this storm damage to an otherwise healthy roof? → Repair + insurance claim</li>
          </ul>
          <p className="mt-4 font-medium">If you answered &quot;replace&quot; to 3 or more → it&apos;s time for a new roof.</p>
        </div>

        <p>
          Ready to move forward? Start with our <Link href="/guides/how-to-get-roofing-quotes">guide to getting roofing quotes</Link> and use our <Link href="/guides/how-to-choose-roofing-contractor">contractor vetting guide</Link> to find someone trustworthy.
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
          <h2 className="text-xl font-bold text-primary mb-2">Get Expert Opinions on Your Roof</h2>
          <p className="text-gray-600 mb-4">
            Compare {config.industry.companyNounPlural} in your area for repair or replacement quotes.
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
