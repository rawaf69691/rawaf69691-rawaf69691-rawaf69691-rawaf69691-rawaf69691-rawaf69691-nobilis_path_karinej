import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-luxury-gold/25 backdrop-blur-md bg-white/80">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 shrink-0">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg sm:text-2xl font-heading font-bold tracking-tighter text-luxury-blue"
          >
            NOBILIS PATH <span className="text-luxury-gold">ADVISORY</span>
          </motion.span>
        </Link>
        
        {/* Desktop Navbar Menu - Only shown on medium screens and up */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link 
            to="/about" 
            className="text-xs lg:text-sm font-semibold text-luxury-blue hover:text-luxury-gold transition-colors"
          >
            About Us
          </Link>
          <Link 
            to="/credit-repair" 
            className="text-xs lg:text-sm font-semibold text-luxury-blue hover:text-luxury-gold transition-colors"
          >
            Take Roadmap Quiz
          </Link>
          <Link 
            to="/services" 
            className="text-xs lg:text-sm font-semibold text-luxury-blue hover:text-luxury-gold transition-colors"
          >
            Begin Portal Enrollment
          </Link>
          <a 
            href="tel:18332280181"
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-luxury-gold/10 text-luxury-blue border border-luxury-gold/30 hover:bg-luxury-gold hover:text-luxury-blue transition-all cursor-pointer animate-pulse-subtle font-semibold text-[10px] lg:text-xs uppercase tracking-widest shrink-0"
          >
            Listen to Our Program Overview
          </a>
        </nav>

        {/* Mobile Header Actions and Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 px-1.5 text-luxury-blue hover:text-luxury-gold transition-all rounded cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-luxury-ivory/95 border-b border-luxury-gold/25 shadow-xl select-none overflow-hidden"
          >
            <div className="container mx-auto px-5 py-6 flex flex-col space-y-4">
              <Link 
                to="/about" 
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold text-luxury-blue hover:text-luxury-gold transition-colors py-2 border-b border-luxury-gold/10 pr-4"
              >
                About Us
              </Link>
              <Link 
                to="/credit-repair" 
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold text-luxury-blue hover:text-luxury-gold transition-colors py-2 border-b border-luxury-gold/10 pr-4"
              >
                Take Roadmap Quiz
              </Link>
              <Link 
                to="/services" 
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold text-luxury-blue hover:text-luxury-gold transition-colors py-2 border-b border-luxury-gold/10 pr-4"
              >
                Begin Portal Enrollment
              </Link>
              <a 
                href="tel:18332280181"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center space-x-2 py-3.5 rounded-2xl bg-luxury-blue text-luxury-ivory hover:bg-luxury-gold hover:text-luxury-blue transition-all text-xs font-bold uppercase tracking-widest text-center shadow-md"
              >
                <PhoneCall className="w-4 h-4 text-luxury-gold" />
                <span>Listen to Our Program Overview</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
