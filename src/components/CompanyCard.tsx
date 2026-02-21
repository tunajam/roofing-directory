import Link from 'next/link';
import { Company } from '@/lib/data';
import { config } from '@/lib/config';
import { MapPin, Phone, Star, SealCheck } from '@phosphor-icons/react/dist/ssr';

const serviceLabels: Record<number, string> = {
  1: 'Inspection',
  2: 'Repair',
  3: 'Partial Re-roof',
  4: 'Full Replacement',
};

export default function CompanyCard({ company }: { company: Company }) {
  const lowestPrice = company.services[0]?.price_range.split('–')[0] || 'N/A';
  const isVerified = company.verified === true;
  const isPricingEstimated = company.pricing_estimated !== false;

  return (
    <Link
      href={`/company/${company.slug}`}
      className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-accent/50 transition-all duration-200 group"
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
            {company.name}
          </h3>
          {isVerified && (
            <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-xs font-medium">
              <SealCheck size={12} weight="fill" /> Verified
            </span>
          )}
        </div>
        <span className={`text-sm font-medium px-2 py-1 rounded-full whitespace-nowrap ${
          isPricingEstimated
            ? 'text-gray-600 bg-gray-100'
            : 'text-accent-dark bg-accent/10'
        }`}>
          {isPricingEstimated ? '~' : ''}From {lowestPrice}
        </span>
      </div>

      <div className="flex items-center gap-4 text-sm text-gray-500">
        <span className="inline-flex items-center gap-1">
          <MapPin size={14} weight="fill" className="text-gray-400" />
          {company.city}, {company.state}
        </span>
        {company.phone && (
          <span className="inline-flex items-center gap-1">
            <Phone size={14} weight="fill" className="text-gray-400" />
            {company.phone}
          </span>
        )}
        <span className="inline-flex items-center gap-1">
          <Star size={14} weight="fill" className="text-yellow-400" />
          {company.rating} ({company.review_count})
        </span>
      </div>

      <p className="text-sm text-gray-600 mt-3 line-clamp-2">{company.description}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {company.services.map((s) => (
          <span key={s.value} className="text-xs bg-accent/10 text-accent-dark px-2 py-1 rounded-full">
            {serviceLabels[s.value] || `Service ${s.value}`}
          </span>
        ))}
      </div>

      {isPricingEstimated && (
        <p className="text-xs text-gray-400 mt-3 italic">Pricing is estimated — contact for exact quotes</p>
      )}
    </Link>
  );
}
