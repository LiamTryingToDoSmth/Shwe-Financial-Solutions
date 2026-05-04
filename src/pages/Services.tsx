import { Briefcase, LineChart, ShieldAlert, BadgeCent } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: "Investment Management",
      icon: <LineChart className="h-8 w-8 text-[#d4af37]" />,
      description: "We deploy sophisticated asset allocation models tailored to balance yield and capital preservation in dynamic markets. Our portfolio managers actively monitor regional equities, fixed income, and alternative investments, ensuring your capital is positioned optimally against inflation and currency fluctuations."
    },
    {
      title: "Corporate Finance & Advisory",
      icon: <Briefcase className="h-8 w-8 text-[#d4af37]" />,
      description: "Providing strategic counsel to Myanmar's expanding enterprises. Whether executing complex mergers and acquisitions, unearthing strategic joint-venture partners, or structuring private equity transactions, our team brings global deal-making expertise to the local market."
    },
    {
      title: "Risk Assessment & Mitigation",
      icon: <ShieldAlert className="h-8 w-8 text-[#d4af37]" />,
      description: "In emerging markets, risk management is paramount. We conduct rigorous operational, financial, and regulatory risk audits, implementing stress-tested frameworks that shield your business from unforeseen external shocks and compliance breaches."
    },
    {
      title: "Wealth & Estate Planning",
      icon: <BadgeCent className="h-8 w-8 text-[#d4af37]" />,
      description: "Securing your legacy requires foresight. We work confidentially with prominent families to structure trusts, navigate local inheritance laws, and develop tax-efficient succession plans that ensure wealth smoothly transfers to the next generation."
    }
  ];

  return (
    <div className="bg-[#f5f2ed] min-h-screen">
      {/* Page Header */}
       <div className="bg-[#1a365d] py-24 border-b border-[#e5e0d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Our Services</h1>
          <div className="w-16 h-1 bg-[#d4af37] mx-auto"></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <p className="text-lg text-slate-600 leading-relaxed">
            Shwe Financial Solutions provides a comprehensive suite of consulting and management services. We approach each client engagement with rigorous analytics, absolute discretion, and a commitment to long-term value creation.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 md:p-12 border border-[#e5e0d8] shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 p-4 bg-[#f5f2ed] border border-[#e5e0d8]">
                {service.icon}
              </div>
              <div>
                <h3 className="text-2xl font-serif text-[#1a365d] mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <p className="text-slate-600 mb-6 italic font-serif text-lg">Discuss a tailored financial strategy for your specific needs.</p>
            <Link to="/contact" className="inline-flex justify-center items-center px-8 py-4 text-xs tracking-widest uppercase font-semibold text-white bg-[#1a365d] hover:bg-[#2a4a7f] transition-colors duration-300">
                Contact an Advisor
            </Link>
        </div>
      </div>
    </div>
  );
}
