import { Metadata } from 'next';
import Link from 'next/link';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'How to Choose a Roofing Contractor (2026 Guide) | RoofCompare',
  description:
    'Learn how to choose the right roofing contractor. Licensing, insurance, red flags, and a step-by-step vetting process to protect your home and wallet.',
  keywords:
    'how to choose a roofing contractor, hiring a roofer, roofing contractor tips, find a good roofer, roofing company selection',
  alternates: {
    canonical: 'https://roofcompare.com/blog/how-to-choose-a-roofing-contractor',
  },
  openGraph: {
    title: 'How to Choose a Roofing Contractor (2026 Guide)',
    description: 'Step-by-step guide to finding and vetting roofing contractors you can trust.',
    type: 'article',
    url: 'https://roofcompare.com/blog/how-to-choose-a-roofing-contractor',
  },
};

const RED_FLAGS = [
  { flag: 'Door-to-door solicitation after a storm', why: 'Storm chasers do shoddy work and disappear. Legitimate contractors don\'t need to canvass neighborhoods.' },
  { flag: 'No physical office or local address', why: 'If they can\'t be found, they can\'t be held accountable for warranty claims.' },
  { flag: 'Asks for full payment upfront', why: 'Standard practice is 10–30% deposit, balance on completion. Full upfront = flight risk.' },
  { flag: 'No written contract or vague scope', why: 'Everything should be in writing — materials, timeline, payment schedule, warranty terms.' },
  { flag: 'Pressure to sign immediately', why: '"This price expires today" is a sales tactic, not a business practice. Good contractors let you think.' },
  { flag: 'Can\'t provide proof of insurance', why: 'Without liability and workers\' comp insurance, YOU are liable if someone gets hurt on your property.' },
  { flag: 'No license number or refuses to share it', why: 'Most states require contractor licensing. No license = illegal operation in many jurisdictions.' },
  { flag: 'Unusually low bid (20%+ below others)', why: 'They\'re cutting corners on materials, skipping permits, or planning to hit you with change orders.' },
];

const VETTING_STEPS = [
  { step: 'Verify licensing', detail: 'Check your state\'s contractor licensing board website. Every state has a public lookup tool.' },
  { step: 'Confirm insurance', detail: 'Ask for a Certificate of Insurance (COI) showing general liability ($1M+) and workers\' comp. Call the insurer to verify it\'s active.' },
  { step: 'Check reviews (but read them carefully)', detail: 'Look at Google, BBB, and Yelp. Focus on detailed reviews mentioning specific projects, not generic 5-star praise.' },
  { step: 'Ask for recent references', detail: 'Call 2–3 past customers. Ask about timeline accuracy, cleanup, and whether they\'d hire them again.' },
  { step: 'Get 3–5 written quotes', detail: 'Quotes should be itemized, not lump-sum. Compare apples to apples — same materials, same scope.' },
  { step: 'Verify warranty terms', detail: 'Manufacturer warranty (materials) and workmanship warranty (labor) are separate. Get both in writing.' },
  { step: 'Confirm permit responsibility', detail: 'The contractor should pull permits and schedule inspections. If they suggest skipping permits, walk away.' },
  { step: 'Review the contract thoroughly', detail: 'Payment schedule, start/end dates, materials specified, change order process, dispute resolution.' },
];

export default function HowToChooseRoofingContractorPost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Choose a Roofing Contractor (2026 Guide)',
    description: 'Step-by-step guide to finding and vetting roofing contractors.',
    datePublished: '2026-03-15',
    dateModified: '2026-03-15',
    author: { '@type': 'Organization', name: 'RoofCompare' },
    publisher: { '@type': 'Organization', name: 'RoofCompare', url: 'https://roofcompare.com' },
    mainEntityOfPage: 'https://roofcompare.com/blog/how-to-choose-a-roofing-contractor',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I find a good roofing contractor?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Start by getting 3–5 quotes from licensed, insured contractors. Verify their license through your state\'s contractor board, check Google and BBB reviews, call past references, and compare itemized quotes. Avoid anyone who pressures you to sign immediately or asks for full payment upfront.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I look for in a roofing contractor?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Valid state license, general liability insurance ($1M+), workers\' compensation coverage, positive reviews with specific project details, manufacturer certifications (GAF, Owens Corning, CertainTeed), a physical local office, and willingness to provide a detailed written contract.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many roofing quotes should I get?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Get at least 3 quotes, ideally 5. This gives you enough data to spot outliers (too high or suspiciously low) and understand the fair market rate for your project. Make sure all quotes cover the same scope of work for an accurate comparison.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I choose the cheapest roofing contractor?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The cheapest bid is often the most expensive in the long run. Low bids usually mean inferior materials, skipped steps (no underlayment, no permits), or inexperienced crews. Focus on value — fair pricing with quality materials, proper installation, and solid warranty coverage.',
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
            How to Choose a Roofing Contractor (2026 Guide)
          </h1>
          <p className="text-white/60 mt-2 text-sm">March 15, 2026 · 9 min read</p>
        </div>
      </section>

      <AdSlot position="top" className="max-w-3xl mx-auto mt-6 px-4" />

      <article className="max-w-3xl mx-auto px-4 py-12 prose prose-lg">
        <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-5 mb-8 not-prose">
          <p className="text-primary font-semibold mb-1">The short version:</p>
          <p className="text-gray-700 m-0">
            Get <strong>3–5 itemized quotes</strong> from licensed, insured contractors. Verify credentials independently. Never pay more than 30% upfront. Read the contract before signing. The cheapest bid is rarely the best value.
          </p>
        </div>

        <p>
          Your roof is the single most important structural component of your home. A bad installation can mean leaks within a year, voided warranties, and tens of thousands in damage. Yet most homeowners spend more time researching a new TV than vetting their roofing contractor.
        </p>
        <p>
          Here&apos;s how to do it right — without getting scammed, overcharged, or stuck with subpar work.
        </p>

        <nav className="bg-gray-50 rounded-xl p-6 mb-10 not-prose">
          <h2 className="text-lg font-bold text-primary mb-3">In this guide:</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1 text-sm">
            <li><a href="#vetting" className="text-accent hover:text-accent-dark">8-step vetting process</a></li>
            <li><a href="#red-flags" className="text-accent hover:text-accent-dark">Red flags to watch for</a></li>
            <li><a href="#certifications" className="text-accent hover:text-accent-dark">Certifications that matter</a></li>
            <li><a href="#quotes" className="text-accent hover:text-accent-dark">How to compare quotes</a></li>
            <li><a href="#faq" className="text-accent hover:text-accent-dark">FAQ</a></li>
          </ol>
        </nav>

        <h2 id="vetting">8-Step Contractor Vetting Process</h2>
        <p>
          Follow these steps in order. Each one filters out a layer of bad contractors until you&apos;re left with the ones worth hiring.
        </p>

        <div className="not-prose space-y-4 mb-8">
          {VETTING_STEPS.map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="bg-accent text-primary font-bold text-sm w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-primary text-sm">{item.step}</p>
                  <p className="text-gray-600 text-sm mt-1">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p>
          This process takes 2–3 hours of your time. That investment protects a $5,000–$15,000 purchase that affects your home for the next 20–30 years. Worth it.
        </p>

        <h2 id="red-flags">Red Flags That Should Kill the Deal</h2>
        <p>
          If you encounter any of these, move on. No exceptions. There are too many good contractors to waste time on sketchy ones.
        </p>

        <div className="overflow-x-auto not-prose mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 pr-3 font-semibold text-primary">Red Flag</th>
                <th className="text-left py-3 font-semibold text-primary">Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              {RED_FLAGS.map((row, i) => (
                <tr key={i} className="border-b border-gray-200">
                  <td className="py-3 pr-3 font-medium text-red-700 text-sm">{row.flag}</td>
                  <td className="py-3 text-gray-600 text-sm">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Storm chasers are the biggest threat. After a major weather event, out-of-state crews flood affected areas, do cheap work fast, and vanish before the first leak. Always verify that a contractor has been operating locally for at least 3–5 years.
        </p>

        <AdSlot position="sidebar" className="my-8 not-prose" />

        <h2 id="certifications">Certifications That Actually Matter</h2>
        <p>
          Not all certifications are created equal. Some are meaningful quality indicators; others are just marketing badges. Here&apos;s what to look for:
        </p>

        <ul>
          <li><strong>GAF Master Elite</strong> — Only 2% of contractors qualify. Requires licensing, insurance, reputation benchmarks, and ongoing training. Unlocks the best GAF warranty options.</li>
          <li><strong>Owens Corning Preferred Contractor</strong> — Vetted for proper installation practices. Gives access to extended warranty programs.</li>
          <li><strong>CertainTeed SELECT ShingleMaster</strong> — Requires manufacturer training on installation best practices.</li>
          <li><strong>NRCA Membership</strong> — National Roofing Contractors Association members commit to ethical business practices and continuing education.</li>
        </ul>

        <p>
          These certifications don&apos;t guarantee perfection, but they indicate a contractor who invests in their craft. A company that bothers to earn and maintain these credentials is more likely to care about doing quality work.
        </p>

        <h2 id="quotes">How to Compare Roofing Quotes</h2>
        <p>
          The biggest mistake homeowners make is comparing total price without looking at what&apos;s included. A $7,000 quote and a $10,000 quote might be for completely different scopes of work.
        </p>

        <p>Every quote should specify:</p>
        <ul>
          <li>Exact shingle brand and product line (not just &ldquo;architectural shingles&rdquo;)</li>
          <li>Underlayment type (synthetic vs felt)</li>
          <li>Whether tear-off is included (and how many layers)</li>
          <li>Flashing scope — new or reuse existing</li>
          <li>Ventilation upgrades (ridge vent, soffit vents)</li>
          <li>Decking repair pricing (per sheet or per square foot)</li>
          <li>Permit costs and who pulls them</li>
          <li>Warranty terms — both manufacturer and workmanship</li>
          <li>Payment schedule with specific milestones</li>
        </ul>

        <p>
          Create a spreadsheet. Line up each contractor&apos;s quote item by item. You&apos;ll quickly see who&apos;s including everything and who&apos;s leaving gaps that become expensive surprises later. For more on pricing, see our <Link href="/blog/how-much-does-a-new-roof-cost">guide to roof costs</Link>.
        </p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <div className="space-y-6 not-prose mb-8">
          <div>
            <h3 className="font-semibold text-primary">How do I find a good roofing contractor?</h3>
            <p className="text-gray-700 mt-1">
              Get 3–5 quotes from licensed, insured contractors. Verify credentials through your state&apos;s licensing board, check reviews, and call references. Use <Link href="/" className="text-accent hover:text-accent-dark">RoofCompare</Link> to find vetted contractors in your area.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">What should I look for in a roofing contractor?</h3>
            <p className="text-gray-700 mt-1">
              Valid license, liability insurance ($1M+), workers&apos; comp coverage, positive detailed reviews, manufacturer certifications, a local physical office, and willingness to provide a written contract.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">How many roofing quotes should I get?</h3>
            <p className="text-gray-700 mt-1">
              At least 3, ideally 5. This helps you identify the fair market rate and spot outliers that are suspiciously cheap or overpriced.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">Should I choose the cheapest roofing contractor?</h3>
            <p className="text-gray-700 mt-1">
              Almost never. The cheapest bid usually means inferior materials, skipped steps, or inexperienced crews. Focus on value — fair price, quality materials, proper installation, and solid warranties.
            </p>
          </div>
        </div>
      </article>

      <section className="max-w-3xl mx-auto px-4 pb-12">
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-primary mb-2">Find Trusted Roofing Contractors Near You</h2>
          <p className="text-gray-600 mb-4">
            Compare quotes from licensed, insured contractors in your area.
          </p>
          <Link
            href="/"
            className="inline-block bg-accent text-primary font-semibold px-6 py-3 rounded-lg hover:bg-accent-dark transition-colors"
          >
            Search Contractors →
          </Link>
        </div>
      </section>
    </>
  );
}
