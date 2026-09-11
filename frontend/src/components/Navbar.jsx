import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { navLinks, profile } from '../data/portfolioData';
import { useScrollSpy } from '../hooks/useScrollSpy';

const sectionIds = navLinks.map(l => l.href.replace('#', ''));

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/90 backdrop-blur-md border-b border-border-subtle shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="font-mono text-lg font-semibold text-accent-blue tracking-tight"
          aria-label="Mukesh Choudhary - Home"
        >
          Mukesh<span className="text-text-secondary">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-accent-blue bg-blue-500/10'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-hover'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Resume button */}
        <a
          href={profile.resumePath}
          download="Mukesh_Choudhary_Resume.pdf"
          className="hidden lg:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-accent-blue border border-accent-blue/40 rounded-lg hover:bg-blue-500/10 hover:border-accent-blue transition-all duration-200"
          aria-label="Download Resume"
        >
          <Download size={15} />
          Resume
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 z-40 transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-bg-primary/95 backdrop-blur-lg" onClick={() => setMenuOpen(false)} />
        <nav className="relative z-10 flex flex-col px-4 pt-6 pb-8 gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'text-accent-blue bg-blue-500/10 border border-blue-500/20'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-hover'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href={profile.resumePath}
            download="Mukesh_Choudhary_Resume.pdf"
            className="mt-4 flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-accent-blue border border-accent-blue/40 rounded-xl hover:bg-blue-500/10 transition-all duration-200"
          >
            <Download size={16} />
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
