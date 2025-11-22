"use client"
import { useState, useEffect } from 'react';

const logoPath = '/media/images/logo.png';

const navLinks = [
  { href: '/', label: 'Home', type: 'link' },
  { href: '/build', label: 'Build', type: 'link' },
  { href: '/analytics', label: 'Analytics', type: 'link' },
];

const MenuIcon = () => (
  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const XIcon = () => (
  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderLink = (link: typeof navLinks[0], mobile = false) => {
    const className = mobile 
      ? "text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
      : "text-white hover:text-gray-300 transition-colors";
      
    if (link.type === 'link') {
      return <a href={link.href} className={className} onClick={() => setIsOpen(false)}>{link.label}</a>;
    }
    return <a href={link.href} className={className} onClick={() => setIsOpen(false)}>{link.label}</a>;
  };

  const contactButtonClasses = "bg-transparent text-white border border-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-white hover:text-black transition-colors";

  return (
    <header className={`
      fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${isScrolled ? 'bg-black/50 backdrop-blur-lg' : 'bg-transparent'}
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center h-16">
          
          <div className="flex justify-start">
            <a href="/" className="flex items-center space-x-2">
              <img 
                src={logoPath} 
                width={40} 
                height={40} 
                alt="Logo" 
                className="rounded-lg w-10 h-10"
              />
              <span className="font-[beta] font-bold text-xl text-white">LUNAIREFINE</span>
            </a>
          </div>
          <nav className="hidden md:flex justify-self-center items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.label}>{renderLink(link)}</div>
            ))}
          </nav>
          <div className="flex items-center justify-end">
             <a href="https://t.me/lunairefine" target="_blank" rel="noopener noreferrer" className={`hidden md:block ${contactButtonClasses}`}>
              Contact
            </a>
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/50 backdrop-blur-lg" id="mobile-menu">
          <div className="flex flex-col items-center space-y-4 px-2 pt-2 pb-6">
            {navLinks.map((link) => (
              <div key={link.label}>{renderLink(link, true)}</div>
            ))}
            <a href="https://t.me/lunairefine" target="_blank" rel="noopener noreferrer" className={`mt-4 w-fit ${contactButtonClasses}`}>
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}