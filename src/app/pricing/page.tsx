import { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/config';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: `Roofing Prices Guide — Typical Costs by Material & Service | ${config.name}`,
  description: 'See typical roofing costs by material type: asphalt shingles, metal, tile, slate, flat roofing, repairs, and more. Know what to expect before hiring a roofer.',
};

const pricingData = [
  { category: 'Asphalt Shingles', note: 'Most popular residential option — covers ~1,500–2,000 sq ft roof', items: [
    { item: '3-Tab Shingles', range: '$5,500–$8,500' },
    { item: 'Architectural / Dimensional', range: '$7,000–$12,000' },
    { item: 'Premium / Designer', range: '$10,000–$16,000' },
  ]},
  { category: 'Metal Roofing', note: '40–70 year lifespan, energy efficient', items: [
    { item: 'Standing Seam', range: '$12,000–$25,000' },
    { item: 'Corrugated Metal', range: '$8,000–$16,000' },
    { item: 'Metal Shingles / Tiles', range: '$10,000–$20,000' },
  ]},
  { category: 'Tile & Slate', note: 'Premium materials with 50–100+ year lifespan', items: [
    { item: 'Clay Tile', range: '$15,000–$30,000' },
    { item: 'Concrete Tile', range: '$12,000–$25,000' },
    { item: 'Natural Slate', range: '$20,000–$45,000' },
  ]},
  { category: 'Flat Roofing', note: 'Commercial and low-slope residential', items: [
    { item: 'TPO (Thermoplastic)', range: '$5,000–$12,000' },
    { item: 'EPDM (Rubber)', range: '$4,000–$10,000' },
    { item: 'Modified Bitumen', range: '$4,500–$11,000' },
  ]},
  { category: 'Repairs', note: 'Common repair jobs — prices vary by severity', items: [
    { item: 'Leak Repair', range: '$200–$1,000' },
    { item: 'Flashing Repair / Replacement', range: '$300–$1,500' },
    { item: 'Shingle Replacement (small area)', range: '$150–$500' },
    { item: 'Gutter Repair', range: '$200–$800' },
  ]},
  { category: 'Additional Services', note: 'Add-ons and project extras', items: [
    { item: 'Roof Inspection', range: '$150–$400' },
    { item: 'Tear-Off & Disposal', range: '$1,000–$3,000' },
    { item: 'Permits & Engineering', range: '$200–$500' },
    { item: 'Skylight Installation', range: '$1,500–$3,500' },
  ]},
];

const faqData = [
  {
    question: 'How much does a new roof cost on average?',
    answer: 'The average new roof costs between $7,000 and $12,000 for a typical 1,500–2,000 sq ft home with architectural asphalt shingles. Premium materials like metal or slate can push costs to $20,000–$45,000+.',
  },
  {
    question: 'How much does it cost to replace a roof per square foot?',
    answer: 'Asphalt shingle roofing runs $3.50–$5.50 per sq ft installed. Metal roofing costs $6–$14 per sq ft, tile $8–$16, and slate $12–$25+ per sq ft including labor and materials.',
  },
  {
    question: 'Is it cheaper to repair or replace a roof?',
    answer: 'Repairs are almost always cheaper short-term ($200–$1,500 for common fixes). However, if your roof is over 20 years old or has widespread damage, replacement is usually more cost-effective. A good rule: if repairs would cost more than 30% of a new roof, replace it.',
  },
  {
    question: 'What factors affect roofing cost the most?',
    answer: 'The biggest factors are material choice, roof size and pitch (steeper = more expensive), number of layers to tear off, local labor rates, and complexity (dormers, valleys, chimneys). Geographic location can cause 20–40% price swings.',
  },
  {
    question: 'Does homeowners insurance cover roof replacement?',
    answer: 'Insurance typically covers roof damage from storms, hail, fire, and fallen trees — but not normal wear and tear. Most policies pay replacement cost minus your deductible. Get a professional inspection to document damage before filing a claim.',
  },
];

export default function PricingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Roofing Prices Guide — Typical Costs by Material & Service',
    description: metadata.description,
    publisher: { '@type': 'Organization', name: config.name },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="bg-primary text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-accent text-sm font-medium mb-2">
            <Link href="/" className="hover:underline">Home</Link> / Pricing Guide
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold">Roofing Prices Guide</h1>
          <p className="text-white/70 mt-2">Typical costs by material and service — updated for 2025</p>
        </div>
      </section>

      <AdSlot position="top" className="max-w-4xl mx-auto mt-6 px-4" />

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 mb-8">
            <p className="text-sm text-accent-dark">
              <strong>💡 Note:</strong> Prices are for a typical 1,500–2,000 sq ft roof unless noted. 
              Costs vary by location, roof pitch, layers to remove, and contractor. 
              Always <Link href="/" className="underline font-medium">get 2–3 quotes</Link> for the best deal.
            </p>
          </div>

          <div className="space-y-10">
            {pricingData.map((cat) => (
              <div key={cat.category}>
                <h2 className="text-2xl font-bold text-primary mb-1">{cat.category}</h2>
                {cat.note && <p className="text-sm text-gray-500 mb-3">{cat.note}</p>}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">Type / Service</th>
                        <th className="text-right px-4 py-3 text-sm font-medium text-gray-700">Typical Price Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cat.items.map((item, i) => (
                        <tr key={item.item} className={i % 2 ? 'bg-gray-50' : ''}>
                          <td className="px-4 py-3 text-gray-800">{item.item}</td>
                          <td className="px-4 py-3 text-right font-semibold text-primary">{item.range}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <AdSlot position="sidebar" className="mt-8" />

          <div className="mt-12 bg-primary text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Compare Local Roofers & Get Free Estimates</h2>
            <p className="text-white/70 mb-6">See ratings, reviews, and pricing from trusted roofing contractors in your area.</p>
            <Link
              href="/"
              className="inline-block bg-accent text-primary font-semibold px-6 py-3 rounded-lg hover:bg-accent-light transition-colors"
            >
              Find Roofers Near You →
            </Link>
          </div>

          <div className="mt-12 prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-primary">What Affects Roofing Cost?</h2>
            <ul className="text-gray-700 space-y-2 mt-4">
              <li><strong>Material:</strong> Asphalt is cheapest ($3.50–$5.50/sq ft), slate is most expensive ($12–$25+/sq ft).</li>
              <li><strong>Roof size & pitch:</strong> Steeper roofs require more safety equipment and labor time, increasing costs 20–30%.</li>
              <li><strong>Tear-off layers:</strong> Removing existing shingles adds $1,000–$3,000. Some codes prohibit layering over old roofs.</li>
              <li><strong>Complexity:</strong> Dormers, valleys, chimneys, and skylights add labor and flashing costs.</li>
              <li><strong>Location:</strong> Urban areas and regions with extreme weather (hurricane/hail zones) tend to cost more.</li>
              <li><strong>Season:</strong> Late summer and fall are peak roofing season — scheduling off-peak can save 5–10%.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8">Tips to Save on Roofing</h2>
            <ol className="text-gray-700 space-y-2 mt-4">
              <li>Get at least 3 quotes — roofing estimates can vary by 30% or more for the same job.</li>
              <li>Schedule in winter or early spring when contractors have lighter schedules.</li>
              <li>Ask about manufacturer rebates and energy-efficiency tax credits for metal or cool roofs.</li>
              <li>Check if your insurance covers any of the cost (storm damage, hail, fallen trees).</li>
              <li>Consider architectural shingles over 3-tab — the 10–15 year longer lifespan often pays for itself.</li>
            </ol>

            <p className="mt-6 text-gray-600">
              Want to learn more? Check out our{' '}
              <Link href="/guides" className="text-accent-dark underline font-medium">roofing guides</Link>{' '}
              for in-depth advice on choosing materials, hiring contractors, and planning your project.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq) => (
                <details key={faq.question} className="border border-gray-200 rounded-xl p-4 group">
                  <summary className="font-semibold text-gray-800 cursor-pointer group-open:mb-2">{faq.question}</summary>
                  <p className="text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
