import { Link, useLocation } from 'react-router-dom';
import { Landmark, Menu, X } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/projects' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-[#f5f2ed] border-b border-[#e5e0d8] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            <Landmark className="h-8 w-8 text-[#1a365d]" />
            <div className="flex flex-col">
              <span className="font-serif font-semibold text-2xl tracking-tight text-[#1a365d] leading-none">Shwe</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-slate-500 font-medium">Financial Solutions</span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  "text-xs uppercase tracking-widest font-semibold transition-colors duration-300 py-2",
                  location.pathname === link.path 
                    ? "text-[#1a365d] border-b-[2px] border-[#1a365d]" 
                    : "text-slate-500 hover:text-[#1a365d]"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex">
             <Link to="/contact" className="bg-[#1a365d] text-white px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-[#2a4a7f] transition-colors">
               Client Portal
             </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1a365d] hover:text-[#2a4a7f] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#f5f2ed] border-b border-[#e5e0d8]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  "block px-3 py-4 text-xs uppercase tracking-widest font-semibold",
                  location.pathname === link.path
                    ? "text-[#1a365d] bg-[#e5e0d8]/50"
                    : "text-slate-600 hover:bg-[#e5e0d8]/30"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
