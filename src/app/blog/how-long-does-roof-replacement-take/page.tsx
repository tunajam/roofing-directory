import { Metadata } from 'next';
import Link from 'next/link';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'How Long Does a Roof Replacement Take? (2026 Timeline) | RoofCompare',
  description:
    'A typical roof replacement takes 1–3 days. Full timeline breakdown by roof size, material, and complexity — plus what delays to watch for.',
  keywords:
    'how long does roof replacement take, roof replacement timeline, roof installation time, how long to replace a roof, roof replacement duration',
  alternates: {
    canonical: 'https://roofcompare.com/blog/how-long-does-roof-replacement-take',
  },
  openGraph: {
    title: 'How Long Does a Roof Replacement Take? (2026 Timeline)',
    description: 'Realistic timelines for roof replacement — from signing the contract to final inspection.',
    type: 'article',
    url: 'https://roofcompare.com/blog/how-long-does-roof-replacement-take',
  },
};

const TIMELINES = [
  { type: 'Small home (under 1,200 sq ft) — Asphalt', duration: '1 day', crew: '4–5 person crew' },
  { type: 'Average home (1,200–2,000 sq ft) — Asphalt', duration: '1–2 days', crew: '4–6 person crew' },
  { type: 'Large home (2,000–3,000 sq ft) — Asphalt', duration: '2–3 days', crew: '5–7 person crew' },
  { type: 'Complex roof (steep pitch, many dormers)', duration: '3–5 days', crew: '5–7 person crew' },
  { type: 'Metal roof (standing seam)', duration: '3–5 days', crew: '3–5 person crew' },
  { type: 'Tile or slate roof', duration: '5–10 days', crew: '4–6 person crew' },
  { type: 'Complete tear-off + structural repairs', duration: '5–7+ days', crew: 'Varies' },
];

const PHASES = [
  { phase: 'Contract signing to start date', time: '1–6 weeks', detail: 'Material ordering, permit applications, scheduling. Peak season (summer/fall) means longer waits. Off-season can be faster.' },
  { phase: 'Setup and tear-off', time: '2–4 hours', detail: 'Tarps laid for protection, dumpster placed, old shingles stripped. This is the noisiest part.' },
  { phase: 'Deck inspection and repairs', time: '1–4 hours', detail: 'Rotted or damaged plywood replaced. About 25% of roofs need some deck repair. This can add half a day if extensive.' },
  { phase: 'Underlayment and drip edge', time: '1–2 hours', detail: 'Synthetic underlayment rolled out, drip edge installed along eaves and rakes, ice & water shield in valleys.' },
  { phase: 'Shingle/material installation', time: '4–12 hours', detail: 'The main event. Time depends on roof size, material type, and crew size. Asphalt is fastest, tile/slate slowest.' },
  { phase: 'Flashing, vents, and detail work', time: '2–4 hours', detail: 'Flashing around chimneys, pipe boots, skylights, and wall intersections. Ridge vent installation.' },
  { phase: 'Cleanup and magnetic sweep', time: '1–2 hours', detail: 'Debris removal, magnetic nail sweep of yard and driveway, final visual inspection.' },
  { phase: 'Final inspection', time: '1–2 weeks after', detail: 'City inspector verifies permit compliance. Some jurisdictions require this; others don\'t.' },
];

const DELAYS = [
  { cause: 'Weather', impact: 'Rain, high winds (25+ mph), or extreme heat halt work. Crews won\'t install shingles in rain — adhesive won\'t seal properly.', avoidance: 'Schedule during your area\'s driest season. Have buffer days in the contract.' },
  { cause: 'Hidden deck damage', impact: 'Rotted plywood found during tear-off adds 2–8 hours per affected area. Severe structural issues can add days.', avoidance: 'Budget for potential deck repairs ($50–$75/sheet). Ask your contractor\'s policy for unexpected repairs.' },
  { cause: 'Material backorders', impact: 'Specific shingle colors or metal panels can be weeks out, especially after storm seasons when demand spikes.', avoidance: 'Confirm material availability before signing. Be flexible on color if speed matters.' },
  { cause: 'Permit delays', impact: 'Some cities take 1–3 weeks to issue permits. Work can\'t start without one (legally).', avoidance: 'Confirm the contractor pulls permits and factor lead time into your timeline.' },
  { cause: 'Crew availability', impact: 'Peak season (May–October) means contractors are booked 4–8 weeks out.', avoidance: 'Book early. Off-season (November–March) often means faster scheduling and sometimes lower prices.' },
];

export default function HowLongRoofReplacementPost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Long Does a Roof Replacement Take?',
    description: 'Realistic timelines for roof replacement by size, material, and complexity.',
    datePublished: '2026-03-15',
    dateModified: '2026-03-15',
    author: { '@type': 'Organization', name: 'RoofCompare' },
    publisher: { '@type': 'Organization', name: 'RoofCompare', url: 'https://roofcompare.com' },
    mainEntityOfPage: 'https://roofcompare.com/blog/how-long-does-roof-replacement-take',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does it take to replace a roof?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most asphalt shingle roofs take 1–3 days to replace. A simple roof on a small home can be done in a single day. Larger homes, complex roofs, or premium materials (metal, tile) take 3–10 days. The full process from contract to final inspection is typically 2–8 weeks.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can a roof be replaced in one day?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, for small to mid-sized homes (under 1,800 sq ft) with a simple roof shape and asphalt shingles. A well-organized 5–6 person crew can tear off the old roof and install a new one in 8–10 hours. However, rushing isn\'t ideal — quality matters more than speed.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best time of year to replace a roof?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Late spring and early fall offer the best conditions — moderate temperatures (45–85°F) and lower rain probability. Summer works but heat can affect shingle adhesive and crew productivity. Winter is possible in mild climates and often comes with shorter wait times and sometimes lower prices.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to be home during a roof replacement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You don\'t need to be home the entire time, but be available by phone. Plan to be home (or nearby) at the start for any questions, and at the end for a walkthrough. Keep pets indoors or at a friend\'s house — the noise and activity will stress them.',
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
            How Long Does a Roof Replacement Take?
          </h1>
          <p className="text-white/60 mt-2 text-sm">March 15, 2026 · 8 min read</p>
        </div>
      </section>

      <AdSlot position="top" className="max-w-3xl mx-auto mt-6 px-4" />

      <article className="max-w-3xl mx-auto px-4 py-12 prose prose-lg">
        <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-5 mb-8 not-prose">
          <p className="text-primary font-semibold mb-1">Quick answer:</p>
          <p className="text-gray-700 m-0">
            The actual installation takes <strong>1–3 days</strong> for most asphalt shingle roofs. The full process — from getting quotes to final inspection — typically takes <strong>2–8 weeks</strong>. Material type, roof complexity, and weather are the biggest variables.
          </p>
        </div>

        <p>
          When you&apos;re dealing with a leaking roof or planning ahead for replacement, the first question is usually &ldquo;how long is this going to take?&rdquo; You want to know what you&apos;re signing up for — days of noise, disrupted routines, and your house exposed to the elements.
        </p>
        <p>Here&apos;s the realistic timeline, broken down by every phase of the project.</p>

        <nav className="bg-gray-50 rounded-xl p-6 mb-10 not-prose">
          <h2 className="text-lg font-bold text-primary mb-3">In this guide:</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1 text-sm">
            <li><a href="#timelines" className="text-accent hover:text-accent-dark">Installation timelines by roof type</a></li>
            <li><a href="#phases" className="text-accent hover:text-accent-dark">Phase-by-phase breakdown</a></li>
            <li><a href="#delays" className="text-accent hover:text-accent-dark">Common delays and how to avoid them</a></li>
            <li><a href="#tips" className="text-accent hover:text-accent-dark">Tips for a smooth replacement</a></li>
            <li><a href="#faq" className="text-accent hover:text-accent-dark">FAQ</a></li>
          </ol>
        </nav>

        <h2 id="timelines">Roof Replacement Timelines by Type</h2>

        <div className="overflow-x-auto not-prose mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 pr-3 font-semibold text-primary">Roof Type</th>
                <th className="text-left py-3 pr-3 font-semibold text-primary">Installation Time</th>
                <th className="text-left py-3 font-semibold text-primary">Typical Crew</th>
              </tr>
            </thead>
            <tbody>
              {TIMELINES.map((row, i) => (
                <tr key={i} className="border-b border-gray-200">
                  <td className="py-3 pr-3 text-gray-700 text-sm">{row.type}</td>
                  <td className="py-3 pr-3 font-semibold text-primary text-sm">{row.duration}</td>
                  <td className="py-3 text-gray-600 text-sm">{row.crew}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          These are on-site installation times only. The full project timeline includes planning, permitting, and scheduling — which is where most of the calendar time actually goes.
        </p>

        <h2 id="phases">Phase-by-Phase Breakdown</h2>
        <p>Here&apos;s what happens from the moment you sign a contract to the final inspection:</p>

        <div className="not-prose space-y-4 mb-8">
          {PHASES.map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="font-semibold text-primary text-sm">{item.phase}</p>
                  <p className="text-gray-600 text-sm mt-1">{item.detail}</p>
                </div>
                <span className="bg-accent/10 text-accent-dark font-medium text-xs px-3 py-1 rounded-full whitespace-nowrap shrink-0">
                  {item.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <AdSlot position="sidebar" className="my-8 not-prose" />

        <h2 id="delays">Common Delays (and How to Avoid Them)</h2>

        <div className="overflow-x-auto not-prose mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 pr-3 font-semibold text-primary">Delay Cause</th>
                <th className="text-left py-3 pr-3 font-semibold text-primary">Impact</th>
                <th className="text-left py-3 font-semibold text-primary">How to Avoid</th>
              </tr>
            </thead>
            <tbody>
              {DELAYS.map((row, i) => (
                <tr key={i} className="border-b border-gray-200">
                  <td className="py-3 pr-3 font-medium text-primary text-sm">{row.cause}</td>
                  <td className="py-3 pr-3 text-gray-600 text-sm">{row.impact}</td>
                  <td className="py-3 text-gray-600 text-sm">{row.avoidance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="tips">Tips for a Smooth Roof Replacement</h2>
        <ul>
          <li><strong>Move vehicles out of the driveway.</strong> The crew needs space for the dumpster and material staging. Falling debris can also damage vehicles.</li>
          <li><strong>Remove wall decorations inside.</strong> The hammering vibrations can knock pictures and shelves off walls. Take down anything fragile on upper-floor walls.</li>
          <li><strong>Trim overhanging branches.</strong> Clear tree limbs within 6 feet of the roof before the crew arrives. This is your responsibility, not theirs.</li>
          <li><strong>Protect your attic.</strong> Cover stored items with tarps. Dust and small debris can fall through gaps during tear-off.</li>
          <li><strong>Plan for pets.</strong> The noise is extreme — hammering, air compressors, debris falling. Keep pets inside, away from windows, or at a friend&apos;s house.</li>
          <li><strong>Tell your neighbors.</strong> A quick heads-up about 1–3 days of noise goes a long way for neighborly relations.</li>
          <li><strong>Document everything.</strong> Take photos before, during (from the ground), and after. This protects you if warranty issues arise later.</li>
        </ul>

        <p>
          For help finding a reliable contractor who&apos;ll stick to the timeline, see our <Link href="/blog/how-to-choose-a-roofing-contractor">contractor selection guide</Link>. And for pricing context, check <Link href="/blog/how-much-does-a-new-roof-cost">what a new roof costs in 2026</Link>.
        </p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <div className="space-y-6 not-prose mb-8">
          <div>
            <h3 className="font-semibold text-primary">How long does it take to replace a roof?</h3>
            <p className="text-gray-700 mt-1">
              Most asphalt shingle roofs take 1–3 days on-site. Metal roofs take 3–5 days. Tile or slate: 5–10 days. The full process from signing to final inspection is 2–8 weeks.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">Can a roof be replaced in one day?</h3>
            <p className="text-gray-700 mt-1">
              Yes — small to mid-sized homes with simple roofs and asphalt shingles. A 5–6 person crew can complete tear-off and installation in 8–10 hours.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">What is the best time of year for roof replacement?</h3>
            <p className="text-gray-700 mt-1">
              Late spring and early fall — moderate temps, lower rain probability. Off-season (winter) often means faster scheduling and sometimes better prices.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">Do I need to be home during replacement?</h3>
            <p className="text-gray-700 mt-1">
              Not the whole time. Be available by phone, present at the start for questions, and at the end for a walkthrough.
            </p>
          </div>
        </div>
      </article>

      <section className="max-w-3xl mx-auto px-4 pb-12">
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-primary mb-2">Ready to Schedule Your Roof Replacement?</h2>
          <p className="text-gray-600 mb-4">
            Find available contractors in your area and compare timelines.
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
