import { Metadata } from 'next';
import Link from 'next/link';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'Signs You Need a Roof Replacement (Don\'t Ignore These) | RoofCompare',
  description:
    '12 warning signs your roof needs replacing — from missing shingles to sagging decking. Know when to repair vs replace and avoid costly water damage.',
  keywords:
    'signs you need a new roof, roof replacement signs, when to replace roof, roof damage signs, old roof warning signs',
  alternates: {
    canonical: 'https://roofcompare.com/blog/signs-you-need-a-roof-replacement',
  },
  openGraph: {
    title: 'Signs You Need a Roof Replacement (Don\'t Ignore These)',
    description: '12 warning signs that your roof needs replacing — and what to do about each one.',
    type: 'article',
    url: 'https://roofcompare.com/blog/signs-you-need-a-roof-replacement',
  },
};

const SIGNS = [
  { sign: 'Your roof is 20+ years old', severity: 'High', detail: 'Asphalt shingles last 15–30 years depending on quality. If yours are 20+, start planning — even if they look okay from the ground. Degradation accelerates in the final years.' },
  { sign: 'Shingles are curling or buckling', severity: 'High', detail: 'Curling edges or buckled shingles mean the waterproofing layer is compromised. This isn\'t cosmetic — water gets underneath and rots the decking.' },
  { sign: 'Missing shingles after storms', severity: 'Medium', detail: 'A few missing shingles can be repaired. But if you\'re losing shingles regularly, the adhesive strip has failed across the roof.' },
  { sign: 'Granules in your gutters', severity: 'Medium', detail: 'Those dark granules on asphalt shingles are the UV protection. When they wash off into gutters, the shingle is exposed and deteriorates rapidly.' },
  { sign: 'Daylight through roof boards', severity: 'Critical', detail: 'If you can see light through your roof decking from the attic, water is getting through too. This needs immediate attention.' },
  { sign: 'Sagging roof deck', severity: 'Critical', detail: 'A sagging roofline means structural damage — rotted decking, failed rafters, or excessive weight from multiple shingle layers. Don\'t wait on this.' },
  { sign: 'Water stains on ceilings or walls', severity: 'High', detail: 'Interior water stains mean water is already penetrating your roof. The leak source is often far from the stain — water travels along rafters before dripping down.' },
  { sign: 'Moss or algae growth', severity: 'Low', detail: 'Moss itself doesn\'t destroy a roof, but it holds moisture against shingles, accelerating decay. Algae is mostly cosmetic. Both indicate moisture retention.' },
  { sign: 'Flashing is cracked or missing', severity: 'High', detail: 'Flashing around chimneys, vents, and skylights is a top leak source. Cracked or missing flashing = active leak path.' },
  { sign: 'Rising energy bills', severity: 'Low', detail: 'A failing roof lets conditioned air escape through the attic. If your heating/cooling costs are climbing without explanation, your roof\'s insulation value may be compromised.' },
  { sign: 'Neighbors are replacing their roofs', severity: 'Medium', detail: 'Homes in the same neighborhood are often built around the same time with the same materials. If your neighbors are replacing, yours is likely due.' },
  { sign: 'Failed home inspection', severity: 'High', detail: 'If you\'re buying or selling and the inspector flags the roof, take it seriously. This is a professional assessment with your investment on the line.' },
];

export default function SignsYouNeedRoofReplacementPost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Signs You Need a Roof Replacement',
    description: '12 warning signs your roof needs replacing.',
    datePublished: '2026-03-15',
    dateModified: '2026-03-15',
    author: { '@type': 'Organization', name: 'RoofCompare' },
    publisher: { '@type': 'Organization', name: 'RoofCompare', url: 'https://roofcompare.com' },
    mainEntityOfPage: 'https://roofcompare.com/blog/signs-you-need-a-roof-replacement',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I know if my roof needs to be replaced?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Key signs include: roof age over 20 years, curling or missing shingles, granules in gutters, daylight visible through roof boards, sagging roofline, water stains on interior ceilings, and cracked flashing. If you see multiple signs, get a professional inspection.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does a roof last before it needs replacing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Asphalt shingles: 15–30 years. Architectural shingles: 25–30 years. Metal: 40–70 years. Tile: 50–100 years. Slate: 75–150 years. Climate, installation quality, and maintenance all affect actual lifespan.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I just repair my roof instead of replacing it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Repairs make sense when damage is localized and the roof is under 15 years old. If the roof is 20+ years old, has widespread issues, or repair costs exceed 30% of replacement cost, full replacement is the smarter investment.',
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
            Signs You Need a Roof Replacement (Don&apos;t Ignore These)
          </h1>
          <p className="text-white/60 mt-2 text-sm">March 15, 2026 · 8 min read</p>
        </div>
      </section>

      <AdSlot position="top" className="max-w-3xl mx-auto mt-6 px-4" />

      <article className="max-w-3xl mx-auto px-4 py-12 prose prose-lg">
        <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-5 mb-8 not-prose">
          <p className="text-primary font-semibold mb-1">Quick check:</p>
          <p className="text-gray-700 m-0">
            If your roof is <strong>20+ years old</strong> and you&apos;re seeing <strong>curling shingles, granule loss, or water stains</strong>, it&apos;s time to get quotes. Catching a failing roof early saves thousands in water damage repairs.
          </p>
        </div>

        <p>
          Most homeowners don&apos;t think about their roof until something goes wrong — a leak during a rainstorm, shingles in the yard after wind, or a home inspector flagging problems during a sale. By then, damage that could have been a $8,000 roof replacement has become a $15,000+ project with water damage repairs.
        </p>

        <p>
          Here are the 12 signs that your roof is telling you it&apos;s time. Some are urgent. Some give you time to plan. All of them deserve attention.
        </p>

        <nav className="bg-gray-50 rounded-xl p-6 mb-10 not-prose">
          <h2 className="text-lg font-bold text-primary mb-3">In this guide:</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1 text-sm">
            <li><a href="#signs" className="text-accent hover:text-accent-dark">12 warning signs</a></li>
            <li><a href="#inspection" className="text-accent hover:text-accent-dark">DIY roof inspection checklist</a></li>
            <li><a href="#repair-replace" className="text-accent hover:text-accent-dark">Repair vs replace decision guide</a></li>
            <li><a href="#faq" className="text-accent hover:text-accent-dark">FAQ</a></li>
          </ol>
        </nav>

        <h2 id="signs">12 Warning Signs Your Roof Needs Replacing</h2>

        <div className="not-prose space-y-4 mb-8">
          {SIGNS.map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="bg-accent text-primary font-bold text-sm w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-primary text-sm">{item.sign}</p>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                      item.severity === 'Critical' ? 'bg-red-100 text-red-700' :
                      item.severity === 'High' ? 'bg-orange-100 text-orange-700' :
                      item.severity === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>{item.severity}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p>
          <strong>The pattern to watch for:</strong> One sign in isolation might mean a repair. Three or more signs happening at once almost always means replacement. And if you see any &ldquo;Critical&rdquo; signs, don&apos;t wait — get a professional up there this week.
        </p>

        <AdSlot position="sidebar" className="my-8 not-prose" />

        <h2 id="inspection">DIY Roof Inspection Checklist</h2>
        <p>
          You can catch most problems without climbing on your roof. Here&apos;s a safe ground-level and attic inspection you can do twice a year:
        </p>

        <h3>From the Ground (Binoculars Help)</h3>
        <ul>
          <li>Look for missing, cracked, or curling shingles</li>
          <li>Check flashing around chimneys, vents, and skylights</li>
          <li>Look for sagging or uneven roofline</li>
          <li>Check gutters for shingle granules (dark grit)</li>
          <li>Look for moss or algae growth (especially north-facing slopes)</li>
        </ul>

        <h3>From the Attic</h3>
        <ul>
          <li>Look for daylight coming through roof boards</li>
          <li>Check for water stains, streaks, or dark spots on decking</li>
          <li>Feel for moisture or soft spots in the decking</li>
          <li>Look for mold or mildew (indicates moisture intrusion)</li>
          <li>Check that insulation is dry and intact</li>
        </ul>

        <p>
          Do this inspection in spring (after winter damage) and fall (before winter weather). It takes 20 minutes and can catch problems before they become emergencies.
        </p>

        <h2 id="repair-replace">Repair vs Replace: A Simple Decision Framework</h2>
        <p>Not every roof problem means full replacement. Here&apos;s how to decide:</p>

        <div className="not-prose space-y-3 mb-8">
          <div className="bg-green-50 rounded-lg p-4">
            <p className="font-semibold text-green-800 text-sm">✓ REPAIR when:</p>
            <ul className="text-green-700 text-sm mt-2 space-y-1 list-disc list-inside">
              <li>Damage is limited to a small area (less than 30% of roof)</li>
              <li>Roof is under 15 years old</li>
              <li>Problem is isolated (one leak source, storm damage to one slope)</li>
              <li>Repair cost is less than 30% of replacement cost</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <p className="font-semibold text-red-800 text-sm">✗ REPLACE when:</p>
            <ul className="text-red-700 text-sm mt-2 space-y-1 list-disc list-inside">
              <li>Roof is 20+ years old with widespread deterioration</li>
              <li>Multiple leaks from different sources</li>
              <li>Sagging deck or structural damage</li>
              <li>Repair costs exceed 30% of replacement cost</li>
              <li>You&apos;re selling and need to pass inspection</li>
              <li>Already has 2 layers of shingles (code maximum in most areas)</li>
            </ul>
          </div>
        </div>

        <p>
          When in doubt, get two professional opinions. A reputable contractor will tell you honestly whether repair is viable or whether you&apos;re throwing money at a dying roof. See our <Link href="/blog/how-to-choose-a-roofing-contractor">contractor selection guide</Link> for tips on finding honest roofers.
        </p>

        <p>
          Ready to see what a replacement would cost? Check our <Link href="/blog/how-much-does-a-new-roof-cost">2026 roof cost guide</Link> for real pricing.
        </p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <div className="space-y-6 not-prose mb-8">
          <div>
            <h3 className="font-semibold text-primary">How do I know if my roof needs to be replaced?</h3>
            <p className="text-gray-700 mt-1">
              Look for: age over 20 years, curling or missing shingles, granules in gutters, daylight through roof boards, sagging, water stains inside, and cracked flashing. Multiple signs together strongly suggest replacement.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">How long does a roof last?</h3>
            <p className="text-gray-700 mt-1">
              Asphalt shingles: 15–30 years. Architectural shingles: 25–30 years. Metal: 40–70 years. Tile: 50–100 years. Slate: 75–150 years.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">Can I repair instead of replacing?</h3>
            <p className="text-gray-700 mt-1">
              Yes, if damage is localized and the roof is under 15 years old. Replace if it&apos;s 20+ years old, has widespread issues, or repairs would cost more than 30% of replacement.
            </p>
          </div>
        </div>
      </article>

      <section className="max-w-3xl mx-auto px-4 pb-12">
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-primary mb-2">Get a Professional Roof Inspection</h2>
          <p className="text-gray-600 mb-4">
            Connect with licensed local contractors for a thorough roof assessment.
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
