'use client';
import React, { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Button from '../ui/Button';

interface NavbarProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background-dark/95 backdrop-blur-sm border-b border-surface-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Name */}
          <a href="#hero" className="text-2xl font-bold text-primary-accent tracking-wider">
            Akber Hossin.dev
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-text-light/80 hover:text-primary-accent transition duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button variant="secondary" className="ml-4">
              Download Resume
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-text-light/80 focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <button onClick={toggleTheme} className="text-text-light/80 focus:outline-none">
              {isDark ? (
                <Sun className="w-6 h-6 text-yellow-400" />
              ) : (
                <Moon className="w-6 h-6 text-blue-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-background-dark/95 border-t border-surface-dark/50 pb-4">
          <div className="flex flex-col space-y-2 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-lg text-text-light/80 hover:text-primary-accent transition duration-200 border-b border-surface-dark/50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <Button className="w-full">
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
