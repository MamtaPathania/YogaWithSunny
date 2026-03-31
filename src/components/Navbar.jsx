import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import YogaIcon from './YogaIcon';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    // Always close the mobile menu first
    setMobileMenuOpen(false);

    const performScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; // Height of the fixed navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    };

    if (location.pathname !== '/' && location.pathname !== '/home') {
      navigate('/');
      // Wait for navigation and layout to settle before scrolling
      setTimeout(performScroll, 150);
    } else {
      // Small timeout to allow state update (closing menu) to settle
      // so it doesn't conflict with the smooth scroll animation
      setTimeout(performScroll, 50);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-yoga-50'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 group">
          <YogaIcon className="group-hover:scale-110 transition-transform duration-300 shadow-sm p-1.5 rounded-2xl bg-emerald-50" />
          <span className="text-2xl font-serif font-bold text-yoga-900 tracking-tight">Yoga With <span className="text-emerald-600">Sunny</span></span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-yoga-800 hover:text-yoga-500 font-medium transition-colors"
            >
              {link.name}
            </button>
          ))}
          <a
            href="https://wa.me/918219112837?text=Hi%2C%20how%20can%20I%20help%20you%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Phone size={18} />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-yoga-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-yoga-100 flex flex-col shadow-2xl md:hidden overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-yoga-900 text-lg py-2 border-b border-yoga-100 font-medium text-left"
                >
                  {link.name}
                </button>
              ))}
              <a
                href="https://wa.me/918219112837?text=Hi%2C%20how%20can%20I%20help%20you%3F"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-xl font-medium mt-2 shadow-md"
              >
                <Phone size={20} />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
