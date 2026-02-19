import { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/config';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'Roofing Contractors Near Me: How to Find & Vet the Best (2026) | RoofCompare',
  description:
    'How to find reliable roofing contractors near you. Red flags to watch for, questions to ask, licensing requirements by state, and how to compare quotes.',
  keywords:
    'roofing contractors near me, roofing companies near me, local roofers, find a roofer, best roofing contractor',
  alternates: {
    canonical: 'https://roofcompare.com/blog/roofing-contractors-near-me',
  },
  openGraph: {
    title: 'Roofing Contractors Near Me: How to Find & Vet the Best',
    description: 'Complete guide to finding, vetting, and hiring a roofing contractor you can trust.',
    type: 'article',
    url: 'https://roofcompare.com/blog/roofing-contractors-near-me',
  },
};

const RED_FLAGS = [
  { flag: 'Door-to-door solicitation after a storm', why: 'Storm chasers show up, do rushed work, and disappear. They won\'t be around for warranty claims.' },
  { flag: 'No physical address or local presence', why: 'A PO box or out-of-state address means they can vanish. Verify a real office or shop.' },
  { flag: 'Demands large upfront payment', why: 'Standard is 10–30% deposit. If they want 50%+ before starting, walk away.' },
  { flag: 'No written estimate or contract', why: 'Verbal agreements are worthless. Everything — scope, price, timeline, warranty — should be in writing.' },
  { flag: 'Pressures you to decide immediately', why: '"This price is only good today" is a pressure tactic. Good contractors don\'t need it.' },
  { flag: 'No proof of insurance', why: 'If an uninsured worker falls off your roof, YOU could be liable. Verify general liability + workers\' comp.' },
  { flag: 'Unusually low bid', why: 'If one bid is 40% below the others, they\'re cutting corners — cheap materials, no permits, or uninsured labor.' },
  { flag: 'Won\'t pull permits', why: 'If they say "we don\'t need a permit" or "it\'ll save you money" — that\'s a code violation that bites you at resale.' },
];

const QUESTIONS_TO_ASK = [
  { question: 'Are you licensed and insured?', why: 'Non-negotiable. Ask for license number AND insurance certificates. Call to verify both.' },
  { question: 'How long have you been in business locally?', why: 'Look for 5+ years in your area. Longevity = they stand behind their work.' },
  { question: 'Can I see your contractor license?', why: 'Most states require specific roofing licenses. Some contractors operate under general contractor licenses that don\'t cover roofing.' },
  { question: 'What manufacturer certifications do you hold?', why: 'GAF Master Elite, CertainTeed SELECT, Owens Corning Preferred — these unlock better warranties for you.' },
  { question: 'Will you pull the building permit?', why: 'The contractor should handle permits. If they push this to you, it\'s a yellow flag.' },
  { question: 'What does your warranty cover?', why: 'Material warranty (manufacturer) is separate from workmanship warranty (contractor). Get both in writing.' },
  { question: 'Who will be on-site managing the job?', why: 'You want a named project manager, not just a revolving crew. Someone accountable.' },
  { question: 'What happens if we find damage under the shingles?', why: 'Get a per-sheet price for decking replacement upfront so there are no surprise charges.' },
  { question: 'Can I see 3 recent local references?', why: 'Call them. Ask about quality, timeline, cleanup, and if they\'d hire the contractor again.' },
  { question: 'What is your payment schedule?', why: 'Standard: 10–30% deposit, remainder on completion. Never pay in full before work starts.' },
];

const LICENSE_REQUIREMENTS = [
  { state: 'California', requirement: 'C-39 Roofing License required', board: 'CSLB' },
  { state: 'Florida', requirement: 'Certified or Registered Roofing Contractor', board: 'DBPR' },
  { state: 'Texas', requirement: 'No state license (local permits required)', board: 'Varies by city' },
  { state: 'New York', requirement: 'Home Improvement Contractor License (varies by county)', board: 'County-level' },
  { state: 'Illinois', requirement: 'Roofing License required', board: 'IDFPR' },
  { state: 'Georgia', requirement: 'Residential/General Contractor License', board: 'SEB' },
  { state: 'Arizona', requirement: 'CR-42 Roofing License required', board: 'ROC' },
  { state: 'Colorado', requirement: 'No state license (local requirements vary)', board: 'Varies by city' },
  { state: 'Washington', requirement: 'General Contractor Registration', board: 'L&I' },
  { state: 'Tennessee', requirement: 'Home Improvement License (>$25,000)', board: 'Board for Licensing Contractors' },
];

export default function RoofingContractorsNearMePost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Roofing Contractors Near Me: How to Find & Vet the Best',
    description: 'Complete guide to finding, vetting, and hiring a roofing contractor.',
    datePublished: '2026-02-19',
    dateModified: '2026-02-19',
    author: { '@type': 'Organization', name: 'RoofCompare' },
    publisher: { '@type': 'Organization', name: 'RoofCompare', url: 'https://roofcompare.com' },
    mainEntityOfPage: 'https://roofcompare.com/blog/roofing-contractors-near-me',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I find a good roofing contractor near me?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Start by verifying licensing and insurance, then check reviews on Google and the BBB. Get 3+ written estimates, ask for local references, and compare not just price but scope, materials, and warranty. Use RoofCompare to find and compare vetted contractors in your area.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I look for in a roofing contractor?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Look for: valid state/local license, general liability + workers\' comp insurance, 5+ years local experience, manufacturer certifications (GAF, CertainTeed), written estimates with line items, workmanship warranty (minimum 5 years), and verifiable local references.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do roofers need to be licensed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It depends on the state. California, Florida, Arizona, and Illinois require specific roofing licenses. Texas and Colorado have no state requirement but cities may require local permits and registration. Always check your state and local requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many roofing estimates should I get?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Get at least 3 estimates, ideally 4–5. This gives you a realistic price range and helps identify outliers (too high or suspiciously low). Make sure each estimate covers the same scope so you\'re comparing apples to apples.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a fair deposit for a roofing job?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A fair deposit is 10–30% of the total job cost, with the remainder due upon completion and your inspection. Never pay more than 50% upfront, and never pay in full before work starts. Use a credit card if possible for additional consumer protection.',
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
            Roofing Contractors Near Me: How to Find &amp; Vet the Best
          </h1>
          <p className="text-white/60 mt-2 text-sm">February 19, 2026 · 11 min read</p>
        </div>
      </section>

      <AdSlot position="top" className="max-w-3xl mx-auto mt-6 px-4" />

      <article className="max-w-3xl mx-auto px-4 py-12 prose prose-lg">
        <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-5 mb-8 not-prose">
          <p className="text-primary font-semibold mb-1">The one-liner:</p>
          <p className="text-gray-700 m-0">
            The best roofing contractor isn&apos;t the cheapest — it&apos;s the one who&apos;s <strong>licensed, insured, experienced, and willing to put everything in writing</strong>. Get 3+ quotes, verify credentials, and don&apos;t let anyone pressure you into a fast decision.
          </p>
        </div>

        <p>
          Hiring the wrong roofer is one of the most expensive mistakes a homeowner can make. A bad install means leaks, mold, voided warranties, and paying twice. A good contractor means 20–50 years of not thinking about your roof.
        </p>

        <p>
          Here&apos;s how to find one you can actually trust.
        </p>

        <nav className="bg-gray-50 rounded-xl p-6 mb-10 not-prose">
          <h2 className="text-lg font-bold text-primary mb-3">In this guide:</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1 text-sm">
            <li><a href="#how-to-find" className="text-accent hover:text-accent-dark">How to find roofing contractors</a></li>
            <li><a href="#red-flags" className="text-accent hover:text-accent-dark">8 red flags to watch for</a></li>
            <li><a href="#questions" className="text-accent hover:text-accent-dark">10 questions to ask every contractor</a></li>
            <li><a href="#licensing" className="text-accent hover:text-accent-dark">Licensing requirements by state</a></li>
            <li><a href="#compare-quotes" className="text-accent hover:text-accent-dark">How to compare quotes</a></li>
            <li><a href="#faq" className="text-accent hover:text-accent-dark">FAQ</a></li>
          </ol>
        </nav>

        {/* How to Find */}
        <h2 id="how-to-find">How to Find Roofing Contractors Near You</h2>
        <p>Skip the random Google search. Here&apos;s a more systematic approach:</p>

        <ol>
          <li>
            <strong>Use <Link href="/">RoofCompare</Link></strong> — we list contractors by city with service details, so you can compare multiple options at once.
          </li>
          <li>
            <strong>Ask neighbors.</strong> Especially if they had work done recently. You can see the roof from the street and ask how the experience went. Nothing beats a referral from someone on your block.
          </li>
          <li>
            <strong>Check manufacturer directories.</strong> GAF, CertainTeed, and Owens Corning maintain directories of certified contractors. These pros have training and access to better warranties.
          </li>
          <li>
            <strong>Verify on your state licensing board.</strong> Look up the contractor&apos;s license number and check for complaints, disciplinary actions, or expired insurance.
          </li>
          <li>
            <strong>Read Google reviews — but read the bad ones.</strong> A 4.5-star rating with 200+ reviews is great. But read the 1-star reviews carefully. How did the company respond? Did they resolve the issue?
          </li>
        </ol>

        <AdSlot position="sidebar" className="my-8 not-prose" />

        {/* Red Flags */}
        <h2 id="red-flags">8 Red Flags When Hiring a Roofer</h2>
        <p>Any of these should make you walk away — or at least dig deeper:</p>

        <div className="not-prose space-y-4 mb-8">
          {RED_FLAGS.map((item, i) => (
            <div key={i} className="bg-red-50 rounded-lg p-4">
              <h3 className="font-semibold text-red-800 text-sm">🚩 {item.flag}</h3>
              <p className="text-sm text-red-700 mt-1">{item.why}</p>
            </div>
          ))}
        </div>

        <p>
          <strong>Storm chasing</strong> deserves special attention. After every major hailstorm, out-of-state crews flood the area, knock on doors, and offer &ldquo;free inspections.&rdquo; Some are legitimate. Many aren&apos;t. They do the job, collect the insurance check, and you never hear from them again — until the roof leaks 18 months later.
        </p>

        {/* Questions to Ask */}
        <h2 id="questions">10 Questions to Ask Every Roofing Contractor</h2>

        <div className="not-prose space-y-4 mb-8">
          {QUESTIONS_TO_ASK.map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-primary text-sm">{i + 1}. &ldquo;{item.question}&rdquo;</h3>
              <p className="text-sm text-gray-600 mt-1">{item.why}</p>
            </div>
          ))}
        </div>

        <p>
          Print this list or save it on your phone. Any contractor worth hiring will answer every one of these without hesitation. If they get defensive or evasive — next.
        </p>

        <AdSlot position="sidebar" className="my-8 not-prose" />

        {/* Licensing */}
        <h2 id="licensing">Roofing Contractor Licensing by State</h2>
        <p>
          Requirements vary wildly. Some states require specific roofing licenses, others don&apos;t regulate roofing at all (but cities might). Here&apos;s a quick reference:
        </p>

        <div className="overflow-x-auto not-prose mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 pr-3 font-semibold text-primary">State</th>
                <th className="text-left py-3 pr-3 font-semibold text-primary">Requirement</th>
                <th className="text-left py-3 font-semibold text-primary">Licensing Board</th>
              </tr>
            </thead>
            <tbody>
              {LICENSE_REQUIREMENTS.map((row) => (
                <tr key={row.state} className="border-b border-gray-200">
                  <td className="py-3 pr-3 font-medium text-primary">{row.state}</td>
                  <td className="py-3 pr-3 text-gray-700">{row.requirement}</td>
                  <td className="py-3 text-gray-600">{row.board}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Even in states without licensing requirements, <strong>always verify insurance</strong>. General liability (minimum $1M) and workers&apos; compensation are non-negotiable. Ask for a Certificate of Insurance and call the insurance company to confirm it&apos;s active.
        </p>

        {/* Compare Quotes */}
        <h2 id="compare-quotes">How to Compare Roofing Quotes</h2>
        <p>
          You&apos;ve got 3–5 estimates. Now what? Don&apos;t just look at the bottom line:
        </p>

        <ol>
          <li><strong>Check the scope is identical.</strong> Same material, same number of layers removed, same flashing approach. Apples to apples.</li>
          <li><strong>Compare materials.</strong> &ldquo;Architectural shingles&rdquo; isn&apos;t enough — what brand and product line? There&apos;s a big difference between a budget and premium architectural shingle.</li>
          <li><strong>Look at the warranty.</strong> A 10-year workmanship warranty is standard. 25 years is excellent. &ldquo;Lifetime&rdquo; usually means the manufacturer warranty, not the contractor&apos;s.</li>
          <li><strong>Consider the timeline.</strong> Can they start soon? How many days? Will they work on your job continuously or juggle multiple jobs?</li>
          <li><strong>Factor in communication.</strong> Did they show up on time for the estimate? Return your calls? The estimate process is a preview of how the job will go.</li>
        </ol>

        <p>
          For pricing context on what a roof should cost in your area, see our <Link href="/blog/how-much-does-a-new-roof-cost">new roof cost guide</Link> and <Link href="/blog/roof-replacement-cost">roof replacement cost breakdown</Link>.
        </p>

        {/* FAQ */}
        <h2 id="faq">Frequently Asked Questions</h2>

        <div className="space-y-6 not-prose mb-8">
          <div>
            <h3 className="font-semibold text-primary">How do I find a good roofing contractor near me?</h3>
            <p className="text-gray-700 mt-1">
              Verify licensing and insurance, check Google reviews and BBB, get 3+ written estimates, ask for local references, and compare scope/materials/warranty — not just price.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">What should I look for in a roofing contractor?</h3>
            <p className="text-gray-700 mt-1">
              Valid license, general liability + workers&apos; comp insurance, 5+ years local experience, manufacturer certifications, written estimates with line items, and a workmanship warranty of at least 5 years.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">Do roofers need to be licensed?</h3>
            <p className="text-gray-700 mt-1">
              Depends on the state. California, Florida, Arizona, and Illinois require specific roofing licenses. Some states have no requirement. Always check your state and local rules.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">How many roofing estimates should I get?</h3>
            <p className="text-gray-700 mt-1">
              Get at least 3, ideally 4–5. This gives you a realistic price range and helps spot outliers.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">What is a fair deposit for a roofing job?</h3>
            <p className="text-gray-700 mt-1">
              10–30% of the total cost, remainder due on completion. Never pay more than 50% upfront. Never pay in full before work starts.
            </p>
          </div>
        </div>
      </article>

      <section className="max-w-3xl mx-auto px-4 pb-12">
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-primary mb-2">Find Roofing Contractors in Your City</h2>
          <p className="text-gray-600 mb-4">
            Compare local roofing contractors, read reviews, and get estimates.
          </p>
          <Link
            href="/"
            className="inline-block bg-accent text-primary font-semibold px-6 py-3 rounded-lg hover:bg-accent-dark transition-colors"
          >
            Compare Contractors Near You →
          </Link>
        </div>
      </section>
    </>
  );
}
