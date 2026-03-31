import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import YogaIcon from './YogaIcon';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-yoga-50'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <YogaIcon className="group-hover:scale-110 transition-transform duration-300 shadow-sm p-1.5 rounded-2xl bg-emerald-50" />
          <span className="text-2xl font-serif font-bold text-yoga-900 tracking-tight">Yoga With <span className="text-emerald-600">Sunny</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-yoga-800 hover:text-yoga-500 font-medium transition-colors">Home</Link>
          <Link to="/about" className="text-yoga-800 hover:text-yoga-500 font-medium transition-colors">About</Link>
          <Link to="/gallery" className="text-yoga-800 hover:text-yoga-500 font-medium transition-colors">Gallery</Link>
          <Link to="/contact" className="text-yoga-800 hover:text-yoga-500 font-medium transition-colors">Contact</Link>
          <a
            href="https://wa.me/918219112837?text=Hi%2C%20how%20can%20I%20help%20you%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Phone size={18} />
            <span>WhatsApp Us</span>
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
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-t border-yoga-100 p-6 flex flex-col gap-4 shadow-2xl md:hidden"
        >
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-yoga-900 text-lg py-2 border-b border-yoga-100 font-medium">Home</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-yoga-900 text-lg py-2 border-b border-yoga-100 font-medium">About</Link>
          <Link to="/gallery" onClick={() => setMobileMenuOpen(false)} className="text-yoga-900 text-lg py-2 border-b border-yoga-100 font-medium">Gallery</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-yoga-900 text-lg py-2 border-b border-yoga-100 font-medium">Contact</Link>
          <a
            href="https://wa.me/918219112837?text=Hi%2C%20how%20can%20I%20help%20you%3F"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-xl font-medium mt-2 shadow-md"
          >
            <Phone size={20} />
            <span>WhatsApp Us</span>
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
