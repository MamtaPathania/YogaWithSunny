import React from 'react';
import { Link } from 'react-router-dom';
import YogaIcon from './YogaIcon';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-yoga-100 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link to="/" className="flex items-center gap-3">
            <YogaIcon className="shadow-sm p-1.5 rounded-2xl bg-emerald-50" />
            <span className="text-xl font-serif font-bold text-yoga-900 tracking-tight">Yoga With <span className="text-emerald-600">Sunny</span></span>
          </Link>
          <p className="text-yoga-600 text-sm text-center md:text-left max-w-sm">
            Helping you find peace, balance, and strength through mindful movement and breath.
          </p>
        </div>
        <div className="flex flex-col md:items-end gap-4 text-center md:text-right">
          <div className="flex gap-4 mb-2">
            <Link to="/" className="text-yoga-700 hover:text-yoga-500 transition-colors font-medium text-sm">Home</Link>
            <Link to="/about" className="text-yoga-700 hover:text-yoga-500 transition-colors font-medium text-sm">About</Link>
            <Link to="/gallery" className="text-yoga-700 hover:text-yoga-500 transition-colors font-medium text-sm">Gallery</Link>
            <Link to="/contact" className="text-yoga-700 hover:text-yoga-500 transition-colors font-medium text-sm">Contact</Link>
          </div>
          <p className="text-yoga-500/70 text-xs">
            © {new Date().getFullYear()} Yoga With Sunny. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
