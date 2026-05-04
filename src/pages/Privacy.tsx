export default function Privacy() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#1a365d] py-16 border-b border-[#e5e0d8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <h1 className="text-3xl md:text-4xl font-serif text-white mb-2">Privacy Policy</h1>
          <p className="text-[#d4af37] text-sm tracking-widest uppercase">Effective Date: January 1, 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 prose prose-slate max-w-none">
        
        <p className="text-slate-600 leading-relaxed text-lg">
          Shwe Financial Solutions ("we," "us," or "our") respects your privacy and is legally committed to protecting your personal and financial information. This Privacy Policy details the meticulous manner in which we manage confidential data collected through your interactions with our firm.
        </p>

        <section>
          <h2 className="text-2xl font-serif text-[#1a365d] mb-4">1. Information We Collect</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Under the financial compliance standards we adhere to, we may collect the following data types:
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
            <li><strong>Personal Indentifiers:</strong> Full name, nationality, and contact details.</li>
            <li><strong>Financial Information:</strong> Income history, net worth, asset details, investment goals, tax residency status, and banking records (gathered securely during private consultations, not via this public website).</li>
            <li><strong>Due Diligence Data:</strong> Information required for mandatory KYC (Know Your Customer) and AML (Anti-Money Laundering) checks in accordance with local and international law.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-[#1a365d] mb-4">2. Application of Collected Information</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Information gathered is strictly utilized to:
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
            <li>Effectively process and manage your wealth portfolios.</li>
            <li>Execute corporate restructuring, mergers, or debt-advisory services.</li>
            <li>Ensure absolute compliance with the regulatory frameworks established by the Central Bank of Myanmar.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-[#1a365d] mb-4">3. Data Security and Internal Access</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            We implement bank-grade technical and organizational safeguards to protect your personal information against unauthorized access, theft, or breach. Data access is strictly compartmentalized; only authorized senior partners and designated compliance officers hold clearance to view specific client files on a rigorous need-to-know basis.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-[#1a365d] mb-4">4. Third-Party Disclosures</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Shwe Financial Solutions explicitly does not sell, rent, or lease client data to external marketers under any circumstances. We only share data with carefully vetted third-party service providers (such as legal counsel or custodial banks) involved directly in the execution of your financial strategy, and only upon securing Non-Disclosure Agreements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-[#1a365d] mb-4">5. Revisions and Contact Information</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Regulatory environments are fluid, and we may update this policy occasionally to remain compliant. For inquiries regarding data protection policies, please contact our Legal and Compliance desk at <span className="font-semibold text-[#1a365d]">compliance@shwefinancial.com.mm</span>.
          </p>
        </section>

      </div>
    </div>
  );
}
