import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { config } from '@/lib/config';
import AdSlot from '@/components/AdSlot';

const title = 'How to Get Roofing Quotes: 7 Steps to the Best Deal';
const description = 'A step-by-step guide to getting roofing quotes the right way — what to ask, how to compare bids, red flags to watch for, and how to negotiate like a pro.';

export const metadata: Metadata = {
  title: `${title} | ${config.name}`,
  description,
  openGraph: { title, description, type: 'article' },
};

const faqData = [
  { q: 'How many roofing quotes should I get?', a: 'Get at least three quotes, ideally five. Three is the minimum for meaningful comparison. Five gives you a strong sense of the market rate and helps identify outliers — both suspiciously cheap and unnecessarily expensive.' },
  { q: 'Should I go with the cheapest roofing quote?', a: 'Almost never. The cheapest quote usually means corners will be cut — thinner underlayment, skip the ice/water shield, reuse old flashing, or use a less experienced crew. Compare scope and materials, not just price.' },
  { q: 'What should a roofing quote include?', a: 'A proper quote should detail: materials (brand, product, color), scope (tear-off vs. overlay), underlayment, flashing plan, ventilation, cleanup, timeline, payment schedule, and warranty terms. If it\'s a single line item, it\'s not a real quote.' },
  { q: 'How long is a roofing quote valid?', a: 'Most quotes are valid for 30–60 days. Material prices fluctuate, so don\'t expect a quote from 6 months ago to be honored. If you\'re not ready to commit, ask the contractor to confirm pricing before you proceed.' },
  { q: 'Can I negotiate a roofing quote?', a: 'Yes. Contractors expect some negotiation, especially during slow seasons. Your leverage comes from having multiple quotes and being flexible on timing. Don\'t negotiate on materials or scope — negotiate on price or ask for extras (gutter cleaning, extended warranty).' },
];

export default function HowToGetRoofingQuotes() {
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
          Getting roofing quotes isn&apos;t hard. Getting <em>useful</em> roofing quotes that you can actually compare — that takes a system. Most homeowners call two contractors, get two wildly different numbers, and have no idea which one is the better deal. Here&apos;s how to do it right.
        </p>

        <h2>Step 1: Know What You Need Before You Call</h2>
        <p>
          You don&apos;t need to be a roofing expert, but having basic info ready makes you a better customer and gets you more accurate quotes.
        </p>
        <ul>
          <li><strong>Your roof size:</strong> Check your property records or measure your home&apos;s footprint and multiply by 1.3 (average roof-to-floor ratio). A 1,500 sq ft home typically has about 1,950 sq ft of roof area.</li>
          <li><strong>Current material:</strong> Asphalt shingles? Metal? Tile? This affects tear-off costs.</li>
          <li><strong>Roof age:</strong> Check closing documents or permit records. &quot;I don&apos;t know&quot; is fine — the contractor will assess it.</li>
          <li><strong>Known issues:</strong> Leaks, missing shingles, interior stains? Note their locations.</li>
          <li><strong>What you want:</strong> Same material or an upgrade? Any additions (skylights, ventilation, gutters)?</li>
        </ul>
        <p>
          Not sure about the condition? Start with a <Link href="/guides/roof-inspection-guide">professional roof inspection</Link> before getting replacement quotes.
        </p>

        <h2>Step 2: Get at Least 3–5 Quotes</h2>
        <p>
          Three is the minimum for comparison. Five is ideal. Here&apos;s where to find contractors:
        </p>
        <ul>
          <li><strong>Our <Link href="/">contractor directory</Link>:</strong> Search by city to find licensed, reviewed contractors near you.</li>
          <li><strong>Personal referrals:</strong> Ask neighbors, especially those who got roofs done recently. You can see the finished work.</li>
          <li><strong>Manufacturer certified installer lists:</strong> GAF Master Elite, CertainTeed SELECT ShingleMaster, Owens Corning Platinum. These contractors meet manufacturer training and volume requirements.</li>
          <li><strong>Google Maps reviews:</strong> Filter for 4+ stars with 50+ reviews. Read the negative reviews — they&apos;re more informative than the positive ones.</li>
        </ul>
        <p>
          <strong>Avoid:</strong> Door-to-door roofers who show up after a storm, Craigslist/Facebook marketplace ads with no verifiable business, and anyone who gives a quote without visiting your property.
        </p>

        <h2>Step 3: Ask the Right Questions</h2>
        <p>
          When a contractor visits for the estimate, ask these questions. Their answers (and willingness to answer) tell you a lot.
        </p>
        <ul>
          <li><strong>&quot;Are you licensed and insured?&quot;</strong> — Get their license number and verify it. Ask for a Certificate of Insurance and call to confirm it&apos;s current. See our <Link href="/guides/how-to-choose-roofing-contractor">contractor vetting guide</Link> for details.</li>
          <li><strong>&quot;Will you pull permits?&quot;</strong> — The answer should be yes. Always. A contractor who suggests skipping permits is a contractor who cuts other corners too.</li>
          <li><strong>&quot;What material do you recommend and why?&quot;</strong> — A good contractor explains the tradeoffs. A bad one pushes whatever they have in stock. See our <Link href="/guides/types-of-roofing-materials">roofing materials guide</Link> so you can evaluate their recommendation.</li>
          <li><strong>&quot;What&apos;s included in your quote?&quot;</strong> — Tear-off? Underlayment? Flashing replacement? Drip edge? Cleanup? Permit fees? If they seem annoyed by this question, that&apos;s a red flag.</li>
          <li><strong>&quot;What if you find rotted decking?&quot;</strong> — Get a per-sheet price upfront. This is the most common &quot;surprise&quot; cost, and a good contractor addresses it proactively.</li>
          <li><strong>&quot;What warranty do you offer on workmanship?&quot;</strong> — Material warranties come from the manufacturer. Workmanship warranties come from the contractor. Get both in writing.</li>
          <li><strong>&quot;Who will be on-site supervising?&quot;</strong> — Large companies sometimes send crews without a supervisor. You want a named project lead.</li>
          <li><strong>&quot;What&apos;s your payment schedule?&quot;</strong> — Never more than 30% upfront. Typical: 10–30% at signing, balance upon completion and your inspection.</li>
        </ul>

        <AdSlot position="sidebar" className="my-8" />

        <h2>Step 4: Make Sure Quotes Are Comparable</h2>
        <p>
          The biggest mistake: comparing a $9,000 quote that includes everything to a $7,000 quote that excludes tear-off, flashing, and ice/water shield. You need apples-to-apples.
        </p>
        <p>Every quote should specify:</p>
        <div className="not-prose bg-primary/5 border border-primary/10 rounded-xl p-6 text-sm">
          <ul className="space-y-2 list-disc pl-5">
            <li><strong>Material:</strong> Brand, product line, color (e.g., &quot;GAF Timberline HDZ, Charcoal&quot;)</li>
            <li><strong>Scope:</strong> Full tear-off or overlay</li>
            <li><strong>Underlayment:</strong> Synthetic vs. felt, ice/water shield in valleys and eaves</li>
            <li><strong>Flashing:</strong> New flashing around all penetrations, or reuse existing?</li>
            <li><strong>Ventilation:</strong> Ridge vent, box vents, soffit intake assessment</li>
            <li><strong>Drip edge:</strong> New on all edges</li>
            <li><strong>Cleanup:</strong> Magnetic sweep for nails, debris hauling, dump fees</li>
            <li><strong>Permits:</strong> Included or extra</li>
            <li><strong>Timeline:</strong> Start date and estimated completion</li>
            <li><strong>Payment terms:</strong> Schedule and method</li>
            <li><strong>Warranties:</strong> Manufacturer warranty type + workmanship warranty duration</li>
          </ul>
        </div>
        <p>
          If a quote doesn&apos;t include these details, ask for them in writing before comparing. A vague quote is not a competitive advantage — it&apos;s a setup for change orders.
        </p>

        <h2>Step 5: Spot Red Flags</h2>
        <p>Walk away if you see any of these:</p>
        <ul>
          <li><strong>Quote given without a roof visit:</strong> No legitimate contractor quotes a job from Google Street View. They need to see the roof, measure, and assess condition.</li>
          <li><strong>Extreme low-ball:</strong> If one quote is 30%+ below the others, something is missing from the scope. Ask what&apos;s excluded.</li>
          <li><strong>Pressure to sign immediately:</strong> &quot;This price is only good today&quot; is a sales tactic, not a business practice. Legitimate contractors give you time to compare.</li>
          <li><strong>Cash-only or large upfront payment:</strong> More than 30% upfront is a risk. Cash-only means no paper trail.</li>
          <li><strong>No written contract:</strong> Everything — scope, price, timeline, warranties — must be in writing before work starts.</li>
          <li><strong>They suggest inflating an insurance claim:</strong> This is insurance fraud. It&apos;s illegal, and you&apos;re the one who faces consequences.</li>
          <li><strong>No references or bad reviews:</strong> A contractor with zero online presence and no willingness to provide references is hiding something.</li>
        </ul>

        <h2>Step 6: Compare and Negotiate</h2>
        <p>
          Spread your quotes side by side. Once they&apos;re apples-to-apples, here&apos;s how to evaluate:
        </p>
        <ul>
          <li><strong>Throw out the lowest and highest:</strong> The middle range is your market rate. If one is dramatically higher, they may be padding or not interested. If dramatically lower, scope is likely incomplete.</li>
          <li><strong>Weight quality over price:</strong> A contractor with great reviews, proper insurance, and a certified installer designation is worth 10–15% more than an unknown.</li>
          <li><strong>Negotiate on timing, not materials:</strong> &quot;I can be flexible on start date if that helps with scheduling&quot; is more effective than &quot;Can you use cheaper shingles?&quot; Off-season scheduling (late fall/winter) can save 5–15%.</li>
          <li><strong>Ask about manufacturer rebates:</strong> Contractors sometimes have access to promotions or volume pricing that they can pass along.</li>
          <li><strong>Bundle extras:</strong> Gutter replacement, attic insulation, or skylight installation done at the same time saves on setup costs.</li>
        </ul>

        <h2>Step 7: Lock It In With a Written Contract</h2>
        <p>
          Before any work starts, you should have a signed contract that includes:
        </p>
        <ul>
          <li>Complete scope of work (everything from the quote)</li>
          <li>Total price and payment schedule</li>
          <li>Start and estimated completion dates</li>
          <li>Change order process (how are surprises like rotted decking handled?)</li>
          <li>Warranty terms — both manufacturer and workmanship</li>
          <li>Permit responsibility (contractor pulls and pays)</li>
          <li>Cleanup standards</li>
          <li>Lien waiver upon final payment</li>
        </ul>
        <p>
          Read it. All of it. If something from the verbal discussion isn&apos;t in the contract, ask for it to be added. Verbal promises don&apos;t hold up when things go wrong.
        </p>

        <h2>Bonus: Timing Your Project</h2>
        <ul>
          <li><strong>Best prices:</strong> Late fall and winter (November–February in temperate climates). Contractors are slower and more willing to deal.</li>
          <li><strong>Best weather:</strong> Late spring through early fall. Ideal for installation but also peak demand and peak prices.</li>
          <li><strong>Worst time to need a roof:</strong> Right after a major storm. Every contractor is booked, prices spike, and storm chasers flood the market. If you can wait 2–3 months, conditions normalize.</li>
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
          <h2 className="text-xl font-bold text-primary mb-2">Start Getting Quotes Today</h2>
          <p className="text-gray-600 mb-4">
            Find top-rated {config.industry.companyNounPlural} in your city and request estimates.
          </p>
          <Link
            href="/"
            className="inline-block bg-accent text-primary font-semibold px-6 py-3 rounded-lg hover:bg-accent-dark transition-colors"
          >
            Find Contractors Near You →
          </Link>
        </div>
      </section>
    </>
  );
}
