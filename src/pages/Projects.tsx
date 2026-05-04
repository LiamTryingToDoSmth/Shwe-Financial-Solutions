import { FolderCheck, ArrowRight, TrendingUp, Building2, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const projects = [
    {
      sector: "Logistics & Supply Chain",
      title: "Restructuring of a Major Logistics Conglomerate",
      icon: <Building2 className="h-6 w-6 text-[#d4af37]" />,
      summary: "We advised a top-tier Myanmar logistics provider during a complex debt restructuring process. Our team successfully renegotiated terms with multiple creditors and engineered a capital injection from a regional private equity firm.",
      impact: "Preserved 1,200 local jobs and stabilized the firm's balance sheet, paving the way for a 15% capacity expansion the following year."
    },
    {
      sector: "Telecommunications",
      title: "Cross-Border Infrastructure Acquisition",
      icon: <Globe2 className="h-6 w-6 text-[#d4af37]" />,
      summary: "Shwe Financial Solutions acted as the exclusive financial advisor to a Singaporean consortium acquiring a significant stake in a local telecom tower operator. We handled valuation, due diligence, and regulatory compliance navigation.",
      impact: "Facilitated a $45M USD transaction while ensuring complete adherence to the Central Bank of Myanmar's foreign exchange regulations."
    },
    {
      sector: "Real Estate & Hospitality",
      title: "Real Estate Portfolio Optimization",
      icon: <TrendingUp className="h-6 w-6 text-[#d4af37]" />,
      summary: "A prominent local family office engaged our services to evaluate and optimize their expansive real estate portfolio across Yangon and Mandalay. We identified underperforming assets and structured tax-efficient divestments.",
      impact: "Increased the portfolio's overall yield by 3.2% and freed up capital for diversification into emerging tech sectors."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-[#1a365d] py-24 border-b border-[#e5e0d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Case Studies</h1>
          <div className="w-16 h-1 bg-[#d4af37] mx-auto"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <p className="text-lg text-slate-600 leading-relaxed">
            A selection of anonymized transactions showcasing our ability to navigate complexity, secure capital, and protect generational wealth in the Myanmar economy.
          </p>
        </div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#f5f2ed] border border-[#e5e0d8] p-8 md:p-12 hover:border-[#1a365d] transition-colors duration-300 group">
              <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-3 mb-4 text-[#1a365d]">
                     {project.icon}
                     <span className="text-xs tracking-widest uppercase font-semibold text-slate-500">{project.sector}</span>
                  </div>
                  <h3 className="text-2xl font-serif text-[#1a365d] mb-6 leading-snug">{project.title}</h3>
                  <div className="w-12 h-[1px] bg-[#d4af37]"></div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1a365d] mb-3">The Challenge</h4>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {project.summary}
                  </p>
                  <div className="bg-white p-6 border-l-2 border-[#d4af37] shadow-sm">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1a365d] mb-2">The Impact</h4>
                    <p className="text-slate-700 italic font-serif leading-relaxed">
                      "{project.impact}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Link to="/contact" className="inline-flex justify-center items-center px-8 py-4 text-xs tracking-widest uppercase font-semibold text-[#1a365d] bg-transparent border border-[#1a365d] hover:bg-[#1a365d] hover:text-white transition-colors duration-300">
            Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
