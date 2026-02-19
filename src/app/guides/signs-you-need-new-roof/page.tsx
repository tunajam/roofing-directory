import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { config } from '@/lib/config';
import AdSlot from '@/components/AdSlot';

const title = 'Signs You Need a New Roof: 10 Warning Signs to Watch For';
const description = '10 warning signs your roof needs replacement, plus an inspection checklist and a repair vs replace decision guide.';

export const metadata: Metadata = {
  title: `${title} | ${config.name}`,
  description,
  openGraph: { title, description, type: 'article' },
};

const faqData = [
  { q: 'How long does a typical roof last?', a: 'Asphalt shingles last 15–30 years, metal roofs 40–70 years, tile 50–100 years, and slate 75–150 years. Climate, ventilation, and maintenance all affect lifespan.' },
  { q: 'Can I just repair instead of replacing my roof?', a: 'Minor issues like a few missing shingles or a small leak can be repaired. But if damage covers more than 30% of the roof, the roof is over 20 years old, or you\'re seeing multiple warning signs, replacement is usually more cost-effective.' },
  { q: 'How much does a new roof cost?', a: 'Average residential roof replacement costs $8,000–$15,000 for asphalt shingles. Metal roofs run $15,000–$30,000. Size, pitch, and material all affect price.' },
  { q: 'Does homeowner\'s insurance cover a new roof?', a: 'Insurance typically covers roof damage from sudden events (storms, fallen trees) but not wear and tear. Document damage with photos and file promptly.' },
  { q: 'Should I get a roof inspection before buying a house?', a: 'Absolutely. A professional roof inspection ($150–$400) can reveal hidden damage and gives you negotiating power on the purchase price.' },
];

const signs = [
  { title: 'Your Roof Is 20+ Years Old', desc: 'Most asphalt shingle roofs last 20–30 years. If yours is approaching that age — even if it looks okay from the ground — it\'s time for a professional inspection. The materials are degrading whether you can see it or not.' },
  { title: 'Shingles Are Curling or Buckling', desc: 'Curling edges or buckling shingles mean the material is past its useful life. This happens from heat cycling, poor ventilation, or age. Once shingles curl, they can\'t seal properly against water.' },
  { title: 'Missing Shingles or Bare Spots', desc: 'A few missing shingles after a storm is a repair. Multiple missing shingles or growing bare patches signal systemic failure — the adhesive strip is failing across the roof.' },
  { title: 'Granules in Your Gutters', desc: 'Those gritty bits in your gutters are granules from your shingles. Some loss is normal on a new roof, but heavy granule loss on an older roof means the shingles are breaking down and losing UV protection.' },
  { title: 'Daylight Through the Roof Boards', desc: 'Go into your attic on a sunny day. If you see pinpoints of light through the roof deck, water is getting through too. This needs immediate attention.' },
  { title: 'Sagging Roof Deck', desc: 'A roof should have straight, level lines. Any sagging or dipping — especially in the middle — indicates structural damage from moisture. This is urgent; the decking is rotting.' },
  { title: 'Water Stains on Ceilings or Walls', desc: 'Brown spots or water marks on interior ceilings and walls usually mean roof leaks. The stain may be far from the actual leak point since water travels along rafters before dripping.' },
  { title: 'Moss or Algae Growth', desc: 'Moss holds moisture against shingles and accelerates deterioration. A little algae (dark streaks) is cosmetic, but thick moss growth means moisture is trapped and damage is happening underneath.' },
  { title: 'Rising Energy Bills', desc: 'A failing roof often means failing ventilation and insulation. If your heating or cooling bills are climbing without other explanation, your roof may not be doing its job.' },
  { title: 'Damaged or Missing Flashing', desc: 'Flashing seals the joints around chimneys, vents, and skylights. Cracked, rusted, or missing flashing is one of the most common leak sources and often signals broader roof deterioration.' },
];

export default function SignsYouNeedNewRoof() {
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
          <p className="text-white/60 mt-2 text-sm">February 2026 · 11 min read</p>
        </div>
      </section>

      <AdSlot position="top" className="max-w-3xl mx-auto mt-6 px-4" />

      <article className="max-w-3xl mx-auto px-4 py-12 prose prose-lg">
        <p>
          Most homeowners don&apos;t think about their roof until water is dripping onto the living room floor. By then, you&apos;re dealing with emergency repairs and water damage on top of the roof itself. Here are 10 signs that your roof needs attention — catch them early and you&apos;ll save thousands.
        </p>

        <h2>10 Warning Signs</h2>
        {signs.map((sign, i) => (
          <div key={i}>
            <h3>{i + 1}. {sign.title}</h3>
            <p>{sign.desc}</p>
          </div>
        ))}

        <h2>DIY Inspection Checklist</h2>
        <p>You can spot most of these signs yourself. Do this twice a year (spring and fall):</p>
        <div className="not-prose bg-primary/5 border border-primary/10 rounded-xl p-6 text-sm">
          <p className="font-bold mb-3">From the Ground (binoculars help):</p>
          <ul className="space-y-1 list-disc pl-5 mb-4">
            <li>Look for missing, curling, or buckled shingles</li>
            <li>Check for sagging along the ridge line</li>
            <li>Inspect flashing around chimneys and vents</li>
            <li>Look for moss or dark streaks</li>
            <li>Check gutters for granule buildup</li>
          </ul>
          <p className="font-bold mb-3">From the Attic:</p>
          <ul className="space-y-1 list-disc pl-5 mb-4">
            <li>Look for daylight through roof boards</li>
            <li>Check for water stains or damp insulation</li>
            <li>Feel for soft or spongy decking</li>
            <li>Look for mold or mildew smell</li>
            <li>Check that ventilation is clear and working</li>
          </ul>
          <p className="font-bold mb-3">Inside the Home:</p>
          <ul className="space-y-1 list-disc pl-5">
            <li>Inspect ceilings for water stains or bubbling paint</li>
            <li>Check walls near the roofline for moisture</li>
            <li>Monitor energy bills for unexplained increases</li>
          </ul>
        </div>

        <h2>Repair vs. Replace: Decision Guide</h2>
        <div className="overflow-x-auto not-prose">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-primary/5">
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Situation</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Repair</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-bold">Replace</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 px-4 py-2">Roof age under 15 years</td><td className="border border-gray-200 px-4 py-2">✅ Usually worth it</td><td className="border border-gray-200 px-4 py-2">Rarely needed</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Roof age 20+ years</td><td className="border border-gray-200 px-4 py-2">Temporary fix only</td><td className="border border-gray-200 px-4 py-2">✅ Better long-term value</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">Damage under 30% of roof</td><td className="border border-gray-200 px-4 py-2">✅ Cost-effective</td><td className="border border-gray-200 px-4 py-2">Overkill</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Damage over 30% of roof</td><td className="border border-gray-200 px-4 py-2">Patch on patch</td><td className="border border-gray-200 px-4 py-2">✅ Recommended</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">Selling within 2 years</td><td className="border border-gray-200 px-4 py-2">Maybe (if minor)</td><td className="border border-gray-200 px-4 py-2">✅ Recovers 60–70% at sale</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Sagging deck or structure</td><td className="border border-gray-200 px-4 py-2">Not sufficient</td><td className="border border-gray-200 px-4 py-2">✅ Required (urgent)</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">Single storm-damaged area</td><td className="border border-gray-200 px-4 py-2">✅ Targeted repair</td><td className="border border-gray-200 px-4 py-2">Only if roof is old</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Rule of thumb:</strong> If a repair costs more than 30% of a full replacement, replace the whole thing. You&apos;ll get a warranty, better energy efficiency, and peace of mind.
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
          <h2 className="text-xl font-bold text-primary mb-2">Get Roofing Estimates in Your City</h2>
          <p className="text-gray-600 mb-4">
            Compare top-rated {config.industry.companyNounPlural} near you.
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
