import { Landmark, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#111827] pt-20 pb-10 border-t border-[#1f2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Landmark className="h-8 w-8 text-[#d4af37]" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-tight text-white leading-none">Shwe</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-slate-400 font-medium">Financial Solutions</span>
              </div>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed text-sm mb-8">
              A premier financial advisory firm dedicated to preserving and growing the wealth of Myanmar's most distinguished individuals and corporations.
            </p>
            <div className="space-y-3">
              <div className="flex items-start text-slate-400 text-sm">
                <MapPin className="h-4 w-4 mr-3 mt-0.5 text-[#d4af37]" />
                <span>Level 7, Sakura Tower<br/>Bogyoke Aung San Road, Kyauktada Township,<br/>Yangon, Myanmar</span>
              </div>
              <div className="flex items-center text-slate-400 text-sm">
                <Phone className="h-4 w-4 mr-3 text-[#d4af37]" />
                <span>+95 1 255 131</span>
              </div>
              <div className="flex items-center text-slate-400 text-sm">
                <Mail className="h-4 w-4 mr-3 text-[#d4af37]" />
                <span>contact@shwefinancial.com.mm</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-serif text-lg mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4 text-xs uppercase tracking-wider text-slate-400">
              <li><Link to="/about" className="hover:text-[#d4af37] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#d4af37] transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-[#d4af37] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-serif text-lg mb-6 tracking-wide">Services</h4>
            <ul className="space-y-4 text-xs uppercase tracking-wider text-slate-400">
              <li><Link to="/services" className="hover:text-[#d4af37] transition-colors">Investment Management</Link></li>
              <li><Link to="/services" className="hover:text-[#d4af37] transition-colors">Corporate Finance</Link></li>
              <li><Link to="/services" className="hover:text-[#d4af37] transition-colors">Risk Assessment</Link></li>
              <li><Link to="/services" className="hover:text-[#d4af37] transition-colors">Estate Planning</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Shwe Financial Solutions. All rights reserved. Registered in Yangon, Myanmar.
          </div>
          <div className="flex gap-6 text-slate-500 text-xs">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <a href="#" className="hover:text-white transition-colors">Regulatory Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
