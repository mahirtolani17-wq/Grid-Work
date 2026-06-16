import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Why Us', href: '/why-us' },
    { name: 'Inquire Us', href: 'https://wa.me/919773499223', external: true },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <nav 
        className={`pointer-events-auto flex items-center gap-5 sm:gap-8 px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/[0.08] backdrop-blur-xl border border-white/[0.15] shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]' 
            : 'bg-white/[0.03] backdrop-blur-md border border-white/[0.05]'
        }`}
      >
        {navLinks.map((link) => {
          const isActive = location.pathname === link.href;
          
          if (link.external) {
            return (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm font-medium text-[#f8f7f2]/80 hover:text-[#f8f7f2] transition-colors whitespace-nowrap"
                target="_blank"
                rel="noreferrer"
              >
                {link.name}
              </a>
            );
          }

          return (
            <Link
              key={link.name}
              to={link.href}
              className={`text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                isActive ? 'text-[#f8f7f2]' : 'text-[#f8f7f2]/80 hover:text-[#f8f7f2]'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </motion.header>
  );
}
