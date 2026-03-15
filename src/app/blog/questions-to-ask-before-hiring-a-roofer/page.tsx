import { Metadata } from 'next';
import Link from 'next/link';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'Questions to Ask Before Hiring a Roofer (2026 Checklist) | RoofCompare',
  description:
    '15 essential questions to ask any roofing contractor before signing. Covers licensing, insurance, warranties, payment terms, and red flags to watch for.',
  keywords:
    'questions to ask roofer, hiring a roofer checklist, roofing contractor questions, what to ask roofing company, roofer interview questions',
  alternates: {
    canonical: 'https://roofcompare.com/blog/questions-to-ask-before-hiring-a-roofer',
  },
  openGraph: {
    title: 'Questions to Ask Before Hiring a Roofer (2026 Checklist)',
    description: '15 must-ask questions that separate great roofing contractors from the ones who\'ll waste your money.',
    type: 'article',
    url: 'https://roofcompare.com/blog/questions-to-ask-before-hiring-a-roofer',
  },
};

const QUESTIONS = [
  {
    q: 'Are you licensed in this state?',
    why: 'Most states require contractor licensing. An unlicensed contractor can\'t pull permits, may lack insurance, and gives you zero legal protection if things go wrong.',
    goodAnswer: 'Yes, and provides the license number for you to verify online.',
    badAnswer: '"We don\'t need a license for this type of work" or refuses to share the number.',
  },
  {
    q: 'Do you carry general liability and workers\' comp insurance?',
    why: 'Without these, YOU are liable if a worker falls off your roof or a neighbor\'s property is damaged. This isn\'t optional.',
    goodAnswer: 'Provides a Certificate of Insurance (COI) and encourages you to call the insurer to verify.',
    badAnswer: '"We\'re covered" without documentation, or only carries liability without workers\' comp.',
  },
  {
    q: 'Can I see your Certificate of Insurance?',
    why: 'Verbal confirmation isn\'t enough. Insurance policies lapse. A COI proves active coverage on the date of your project.',
    goodAnswer: 'Emails you a current COI within 24 hours with your name listed as certificate holder.',
    badAnswer: 'Delays, makes excuses, or provides an expired document.',
  },
  {
    q: 'Will you pull the building permit?',
    why: 'Permits protect you — they ensure work meets code and trigger an inspection. Unpermitted work can void your homeowner\'s insurance and create problems when selling.',
    goodAnswer: '"Absolutely, permits are included in the quote and we handle the application."',
    badAnswer: '"We can skip the permit to save you money." (This is a massive red flag.)',
  },
  {
    q: 'What is your payment schedule?',
    why: 'Paying too much upfront gives you no leverage if quality is poor. Industry standard is 10–30% deposit, balance on completion.',
    goodAnswer: '"10% deposit to secure materials, 40% at tear-off, 50% on completion and your approval."',
    badAnswer: '"We need 50%+ upfront" or "Full payment before we start."',
  },
  {
    q: 'Who will be on-site supervising the work?',
    why: 'The person who sold you the job is rarely the one installing. You need to know who\'s managing quality on your roof.',
    goodAnswer: 'Names a specific project manager or crew lead and gives you their contact info.',
    badAnswer: '"Our guys know what they\'re doing" with no named supervisor.',
  },
  {
    q: 'What brand and product line of shingles will you use?',
    why: 'Not all shingles are equal. You need to know the exact product to verify quality and warranty coverage.',
    goodAnswer: '"GAF Timberline HDZ in Charcoal" — specific brand, line, and color.',
    badAnswer: '"Architectural shingles" with no brand or product specified.',
  },
  {
    q: 'What underlayment do you use?',
    why: 'Underlayment is your roof\'s last line of defense against water. Synthetic is better than felt — longer lasting, more tear-resistant, and lies flatter.',
    goodAnswer: '"Synthetic underlayment (GAF FeltBuster or equivalent)" — names the product.',
    badAnswer: '"Standard felt paper" or doesn\'t know what underlayment they use.',
  },
  {
    q: 'How do you handle unexpected deck damage?',
    why: 'Rotted plywood is found on ~25% of tear-offs. You need to know the cost per sheet and approval process BEFORE work starts.',
    goodAnswer: '"$75–$100 per sheet of OSB. We\'ll call you for approval if more than 5 sheets need replacing."',
    badAnswer: '"We\'ll figure it out when we get there" or an unreasonably high per-sheet price.',
  },
  {
    q: 'What warranties do I get?',
    why: 'Manufacturer warranty (materials) and workmanship warranty (labor) are separate. Both matter.',
    goodAnswer: '"25-year manufacturer warranty on the shingles, 10-year workmanship warranty from us, both in writing."',
    badAnswer: 'Vague promises without specifics or written documentation.',
  },
  {
    q: 'How long have you been in business locally?',
    why: 'Local presence = accountability. A company that\'s been in the community 5+ years can\'t disappear when you have a warranty claim.',
    goodAnswer: '"12 years in [your city]. Here\'s our office address."',
    badAnswer: 'Vague about history or admits to being from out of the area.',
  },
  {
    q: 'Can you provide 3 recent references?',
    why: 'Talking to actual customers tells you more than any review website.',
    goodAnswer: 'Provides names and phone numbers of customers from the past 6 months.',
    badAnswer: '"Check our Google reviews" without offering direct references.',
  },
  {
    q: 'What does your cleanup process look like?',
    why: 'Roofing generates serious debris — nails, shingle pieces, packaging. Poor cleanup means nails in your tires and shingle debris in your landscaping.',
    goodAnswer: '"Tarps laid before tear-off, daily cleanup, magnetic nail sweep of entire yard and driveway, final walkthrough with you."',
    badAnswer: '"We clean up when we\'re done" with no specifics.',
  },
  {
    q: 'What happens if it rains during the project?',
    why: 'A half-stripped roof in the rain = water damage inside your home. You need to know their contingency plan.',
    goodAnswer: '"We monitor weather closely. If rain threatens, we tarp the exposed sections. We carry emergency tarps on every job."',
    badAnswer: '"It probably won\'t rain" or no contingency plan.',
  },
  {
    q: 'Do you use subcontractors or your own crews?',
    why: 'Subcontracted crews may lack the same training, accountability, and quality standards as in-house teams.',
    goodAnswer: '"We use our own W-2 employees, trained and supervised by our company."',
    badAnswer: '"We hire crews as needed" — indicating day laborers or unknown subcontractors.',
  },
];

export default function QuestionsToAskRooferPost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Questions to Ask Before Hiring a Roofer (2026 Checklist)',
    description: '15 essential questions to ask any roofing contractor before signing.',
    datePublished: '2026-03-15',
    dateModified: '2026-03-15',
    author: { '@type': 'Organization', name: 'RoofCompare' },
    publisher: { '@type': 'Organization', name: 'RoofCompare', url: 'https://roofcompare.com' },
    mainEntityOfPage: 'https://roofcompare.com/blog/questions-to-ask-before-hiring-a-roofer',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What questions should I ask a roofing contractor?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The most important questions: Are you licensed? Do you have liability and workers\' comp insurance? Will you pull the permit? What\'s the payment schedule? What specific materials will you use? What warranties do you offer? How long have you been in business locally? Can you provide recent references?',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I know if a roofer is trustworthy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Trustworthy roofers: provide license numbers you can verify, share Certificates of Insurance proactively, offer detailed written contracts, have a local office and 5+ year history, provide references willingly, and never pressure you to sign immediately or pay large amounts upfront.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should a roofing contract include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A complete roofing contract should include: full scope of work, specific materials (brand and product), payment schedule with milestones, start and completion dates, permit responsibility, warranty terms (both manufacturer and workmanship), change order process, and cleanup expectations.',
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
            Questions to Ask Before Hiring a Roofer (2026 Checklist)
          </h1>
          <p className="text-white/60 mt-2 text-sm">March 15, 2026 · 10 min read</p>
        </div>
      </section>

      <AdSlot position="top" className="max-w-3xl mx-auto mt-6 px-4" />

      <article className="max-w-3xl mx-auto px-4 py-12 prose prose-lg">
        <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-5 mb-8 not-prose">
          <p className="text-primary font-semibold mb-1">The point:</p>
          <p className="text-gray-700 m-0">
            The right questions protect you from bad contractors, surprise costs, and voided warranties. <strong>Ask all 15 before signing anything.</strong> A good contractor will answer every one without hesitation.
          </p>
        </div>

        <p>
          Hiring a roofing contractor is one of the biggest purchases most homeowners make — and one of the easiest to get wrong. The difference between a great contractor and a terrible one often isn&apos;t visible until the first heavy rain, when it&apos;s too late.
        </p>
        <p>
          These 15 questions are your defense. They&apos;re designed to quickly separate professionals from amateurs, and honest contractors from scam artists. Print this list. Bring it to every estimate.
        </p>

        <nav className="bg-gray-50 rounded-xl p-6 mb-10 not-prose">
          <h2 className="text-lg font-bold text-primary mb-3">The 15 questions:</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1 text-sm">
            {QUESTIONS.map((item, i) => (
              <li key={i}><a href={`#q${i + 1}`} className="text-accent hover:text-accent-dark">{item.q}</a></li>
            ))}
          </ol>
        </nav>

        {QUESTIONS.map((item, i) => (
          <div key={i} className="mb-8">
            <h2 id={`q${i + 1}`} className="text-lg">
              {i + 1}. &ldquo;{item.q}&rdquo;
            </h2>
            <p><strong>Why it matters:</strong> {item.why}</p>
            <div className="not-prose space-y-2 mb-4">
              <div className="bg-green-50 rounded-lg p-3">
                <p className="text-green-800 text-sm"><span className="font-semibold">✓ Good answer:</span> {item.goodAnswer}</p>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <p className="text-red-800 text-sm"><span className="font-semibold">✗ Red flag:</span> {item.badAnswer}</p>
              </div>
            </div>
            {i === 4 && <AdSlot position="sidebar" className="my-8 not-prose" />}
            {i === 9 && <AdSlot position="sidebar" className="my-8 not-prose" />}
          </div>
        ))}

        <h2>How to Use This Checklist</h2>
        <p>
          Don&apos;t just ask these questions — <strong>compare the answers across 3–5 contractors</strong>. You&apos;ll quickly see who&apos;s transparent, who&apos;s evasive, and who genuinely knows their craft.
        </p>
        <p>
          A contractor who answers all 15 questions confidently, with specifics, is probably worth hiring — even if they&apos;re not the cheapest quote. The cheapest quote often becomes the most expensive project when corners get cut.
        </p>
        <p>
          For more on evaluating contractors, read our <Link href="/blog/how-to-choose-a-roofing-contractor">complete guide to choosing a roofing contractor</Link>. And to understand what a fair price looks like, check our <Link href="/blog/how-much-does-a-new-roof-cost">2026 roof cost breakdown</Link>.
        </p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <div className="space-y-6 not-prose mb-8">
          <div>
            <h3 className="font-semibold text-primary">What questions should I ask a roofing contractor?</h3>
            <p className="text-gray-700 mt-1">
              Start with licensing, insurance (liability + workers&apos; comp), permits, payment schedule, specific materials, warranties, local history, and references. See the full 15-question checklist above.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">How do I know if a roofer is trustworthy?</h3>
            <p className="text-gray-700 mt-1">
              Trustworthy roofers provide verifiable license numbers, share insurance certificates proactively, offer detailed written contracts, have local presence for 5+ years, and never pressure you to sign immediately.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">What should a roofing contract include?</h3>
            <p className="text-gray-700 mt-1">
              Full scope of work, specific materials (brand and product line), payment schedule with milestones, start/completion dates, permit responsibility, warranty terms, change order process, and cleanup expectations.
            </p>
          </div>
        </div>
      </article>

      <section className="max-w-3xl mx-auto px-4 pb-12">
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-primary mb-2">Find Contractors Worth Hiring</h2>
          <p className="text-gray-600 mb-4">
            Search vetted roofing contractors in your area and start comparing quotes.
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
