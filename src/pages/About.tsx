export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-[#1a365d] py-24 border-b border-[#e5e0d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">About Our Firm</h1>
          <div className="w-16 h-1 bg-[#d4af37] mx-auto"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Mission & Vision Split */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-xs tracking-[0.2em] text-[#d4af37] uppercase font-semibold mb-4">Our Mission</h2>
            <h3 className="text-3xl font-serif text-[#1a365d] mb-6">Guiding wealth with unwavering integrity.</h3>
            <p className="text-slate-600 leading-relaxed">
              At Shwe Financial Solutions, our primary mission is to deliver elite, uncompromising financial guidance to Myanmar's businesses and private estates. We believe in crafting highly individualized strategies that protect assets against market volatility while capitalizing on the extraordinary growth opportunities emerging within the region.
            </p>
          </div>
          <div>
            <h2 className="text-xs tracking-[0.2em] text-[#d4af37] uppercase font-semibold mb-4">Our Vision</h2>
            <h3 className="text-3xl font-serif text-[#1a365d] mb-6">A benchmark of financial excellence.</h3>
            <p className="text-slate-600 leading-relaxed">
              We envision standing as the premier financial advisory institution in Myanmar, recognized globally for our ethical standards, deep market insight, and commitment to multi-generational wealth preservation. We are defining the future of financial consultancy in Southeast Asia.
            </p>
          </div>
        </div>

        {/* History Section */}
        <div className="bg-[#f5f2ed] border border-[#e5e0d8] p-10 md:p-16 mb-24 relative overflow-hidden">
           {/* Decorative elements */}
           <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-[#d4af37]/30 translate-x-4 -translate-y-4"></div>
           <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-[#d4af37]/30 -translate-x-4 translate-y-4"></div>
           
           <div className="max-w-4xl mx-auto">
             <div className="text-center mb-10">
               <h2 className="text-xs tracking-[0.2em] text-[#d4af37] uppercase font-semibold mb-4">Our Heritage</h2>
               <h3 className="text-3xl md:text-4xl font-serif text-[#1a365d]">A Legacy of Resilience</h3>
             </div>
             
             <div className="space-y-6 text-slate-600 leading-relaxed max-w-3xl mx-auto">
               <p>
                 Founded in 2012 amidst the unprecedented opening of Myanmar's economy, Shwe Financial Solutions was established in the heart of Yangon's historic Kyauktada Township. We began as an exclusive boutique advisory, entrusted with preserving the generational wealth of a select group of leading industrial families who sought to navigate the rapidly transforming financial landscape.
               </p>
               <p>
                 As foreign direct investment accelerated throughout the following years, the complexity of our clients' requirements evolved exponentially. Recognizing the need for international standards applied with precise local nuance, we strategically expanded our practice. Our firm played a pivotal role in facilitating landmark cross-border joint ventures, advising on critical infrastructure acquisitions, and executing complex debt restructuring for major local conglomerates.
               </p>
               <p>
                 Today, Shwe Financial Solutions stands as a pillar of stability. Through periods of extraordinary growth and challenging economic cycles alike, we have maintained our unwavering commitment to our clients' prosperity. We continue to build a resilient, forward-looking institution capable of securing capital, mitigating regulatory risks, and forging lasting value in Myanmar's dynamic market.
               </p>
             </div>
           </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-16">
          <div className="text-center mb-16">
            <h2 className="text-xs tracking-[0.2em] text-[#d4af37] uppercase font-semibold mb-4">Principles</h2>
            <h3 className="text-3xl font-serif text-[#1a365d]">Our Core Values</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Absolute Integrity", desc: "We operate with the highest ethical standards, ensuring complete transparency and confidentiality in every client engagement." },
              { title: "Local Insight, Global Standard", desc: "Combining a deep understanding of Myanmar's economic landscape with strictly adhered international financial protocols." },
              { title: "Generational Perspective", desc: "We plan not just for the next quarter, but for the next generation, focusing on sustainable, long-term wealth preservation." }
            ].map((value, i) => (
              <div key={i} className="bg-[#f5f2ed] border border-[#e5e0d8] p-10 text-center group hover:border-[#1a365d] transition-colors duration-300">
                <h4 className="text-xl font-serif text-[#1a365d] mb-4">{value.title}</h4>
                <div className="w-8 h-[1px] bg-[#d4af37] mx-auto mb-5 group-hover:w-16 transition-all duration-300"></div>
                <p className="text-sm text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
