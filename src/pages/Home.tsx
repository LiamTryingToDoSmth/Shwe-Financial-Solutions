import { ChevronRight, TrendingUp, ShieldCheck, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex-1 flex items-center bg-[#1a365d] min-h-[85vh] overflow-hidden">
        {/* Abstract background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full border-[1px] border-[#d4af37] opacity-30"></div>
          <div className="absolute top-[10%] -right-[20%] w-[80%] h-[80%] rounded-full border-[1px] border-[#d4af37] opacity-20"></div>
          <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-radial from-[#d4af37] to-transparent opacity-10 blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20 lg:py-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-[1px] bg-[#d4af37]"></div>
               <span className="text-[#d4af37] text-xs font-semibold tracking-[0.2em] uppercase">Yangon &bull; Singapore</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-8">
              Empowering Myanmar's <span className="text-[#d4af37] inline-block mt-2">Financial Future</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed font-light max-w-2xl border-l-[3px] border-[#d4af37]/50 pl-6">
              Shwe Financial Solutions provides bespoke wealth management, corporate advisory, and strategic investment services tailored for the local nuances of the Myanmar economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 relative z-20 pointer-events-auto">
              <Link to="/contact" className="group inline-flex justify-center items-center px-8 py-4 text-xs tracking-[0.15em] uppercase font-semibold text-[#1a365d] bg-[#d4af37] border border-[#d4af37] hover:bg-transparent hover:text-[#d4af37] transition-all duration-300">
                Schedule Consultation
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="inline-flex justify-center items-center px-8 py-4 border border-white/20 text-xs tracking-[0.15em] uppercase font-semibold text-white hover:border-[#d4af37] hover:text-[#d4af37] hover:bg-white/5 transition-all duration-300">
                Explore Services
              </Link>
            </div>
            
            {/* Added statistics for trust & authority */}
            <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-8 text-white/60">
               <div>
                  <div className="text-3xl font-serif text-white mb-1">$1.2B+</div>
                  <div className="text-[10px] tracking-widest uppercase">Assets Advised</div>
               </div>
               <div>
                  <div className="text-3xl font-serif text-white mb-1">10+</div>
                  <div className="text-[10px] tracking-widest uppercase">Years Excellence</div>
               </div>
               <div className="hidden md:block">
                  <div className="text-3xl font-serif text-white mb-1">CBM</div>
                  <div className="text-[10px] tracking-widest uppercase">Fully Compliant</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-[#f5f2ed]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#1a365d] mb-6 leading-tight">
                A tradition of trust, built for the modern era.
              </h2>
              <div className="w-12 h-0.5 bg-[#d4af37] mb-8"></div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Navigating the financial landscape in Myanmar requires a deep understanding of local regulatory frameworks combined with global financial acumen. At Shwe Financial Solutions, we bridge this gap.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Since our inception, we have partnered with leading corporate entities and high net-worth individuals across Yangon and Mandalay to restructure debt, optimize capital, and secure generational wealth.
              </p>
              <Link to="/about" className="inline-flex items-center text-[#1a365d] text-sm uppercase tracking-widest font-semibold hover:text-[#d4af37] transition-colors">
                Read our story <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="relative w-full aspect-[4/3] bg-[#1a365d] flex items-center justify-center p-8 overflow-hidden group shadow-lg">
              {/* Abstract elements */}
              <div className="absolute top-0 right-0 w-64 h-64 border-[1px] border-[#d4af37]/20 rounded-full translate-x-1/3 -translate-y-1/3 transition-transform duration-700 group-hover:scale-110"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 border-[1px] border-[#d4af37]/20 rounded-full -translate-x-1/3 translate-y-1/3 transition-transform duration-700 group-hover:scale-110"></div>
              
              <div className="z-10 text-center relative pointer-events-none">
                <Landmark className="h-24 w-24 text-[#d4af37] mx-auto mb-8 opacity-90 transition-transform duration-700 group-hover:scale-105" strokeWidth={1} />
                <div className="flex gap-4 justify-center items-end h-16">
                  <div className="w-1.5 bg-[#d4af37]/40 rounded-t h-8 group-hover:h-12 transition-all duration-700 delay-100"></div>
                  <div className="w-1.5 bg-[#d4af37] rounded-t h-16 group-hover:h-14 transition-all duration-700 delay-75"></div>
                  <div className="w-1.5 bg-[#d4af37]/60 rounded-t h-10 group-hover:h-16 transition-all duration-700 delay-150"></div>
                  <div className="w-1.5 bg-[#d4af37]/80 rounded-t h-14 group-hover:h-10 transition-all duration-700 delay-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Specialties */}
      <section className="py-24 bg-white border-t border-[#e5e0d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs tracking-[0.2em] text-[#d4af37] uppercase font-semibold mb-4">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-[#1a365d]">Comprehensive Financial Strategies</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 border border-[#e5e0d8] group hover:border-[#1a365d] transition-colors duration-300">
              <TrendingUp className="h-10 w-10 text-[#d4af37] mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-xl font-serif text-[#1a365d] mb-4">Investment Management</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                Strategic asset allocation and portfolio management focused on maximizing returns within the emerging Southeast Asian markets.
              </p>
            </div>
            
            <div className="p-10 border border-[#e5e0d8] group hover:border-[#1a365d] transition-colors duration-300">
              <Landmark className="h-10 w-10 text-[#d4af37] mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-xl font-serif text-[#1a365d] mb-4">Corporate Advisory</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                Expert guidance on M&A, capital restructuring, and joint ventures tailored for local businesses scaling operations.
              </p>
            </div>
            
            <div className="p-10 border border-[#e5e0d8] group hover:border-[#1a365d] transition-colors duration-300">
              <ShieldCheck className="h-10 w-10 text-[#d4af37] mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-xl font-serif text-[#1a365d] mb-4">Risk & Compliance</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                Rigorous assessment of regulatory risks and implementation of robust compliance frameworks compliant with Central Bank directives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#f5f2ed] border-t border-[#e5e0d8]">
         <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-serif text-[#1a365d] mb-6">Ready to secure your financial objectives?</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">Contact our Yangon office to arrange a private consultation with one of our senior partners.</p>
            <Link to="/contact" className="inline-flex justify-center items-center px-8 py-4 text-xs tracking-widest uppercase font-semibold text-white bg-[#1a365d] hover:bg-[#2a4a7f] transition-colors duration-300">
                Contact Our Firm
            </Link>
         </div>
      </section>
    </div>
  );
}
