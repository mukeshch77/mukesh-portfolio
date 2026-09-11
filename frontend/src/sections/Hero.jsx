import React from 'react';
import { Github, Linkedin, Code2, ArrowDown, Download, Mail } from 'lucide-react';
import { profile, social } from '../data/portfolioData';

// Abstract AI/Developer SVG visual
// If profile.profileImage is set, shows the photo inside the card instead of the AI icon.
function DevVisual({ profileImage }) {
  return (
    <div className="relative w-full max-w-sm mx-auto lg:max-w-none">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-purple-500/20 blur-3xl" />
      
      <div className="relative rounded-3xl border border-blue-500/20 bg-bg-card/80 backdrop-blur-sm p-6 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
        
        {/* Central node */}
        <div className="relative flex flex-col items-center gap-6 py-4">
          {/* Profile photo OR AI icon cluster */}
          <div className="relative">
            {profileImage ? (
              <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-lg shadow-blue-500/20">
                <img
                  src={profileImage}
                  alt="Mukesh Choudhary"
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                  <circle cx="20" cy="12" r="6" stroke="white" strokeWidth="1.5" />
                  <circle cx="10" cy="26" r="5" stroke="white" strokeWidth="1.5" />
                  <circle cx="30" cy="26" r="5" stroke="white" strokeWidth="1.5" />
                  <line x1="20" y1="18" x2="10" y2="21" stroke="white" strokeWidth="1.2" strokeOpacity="0.7" />
                  <line x1="20" y1="18" x2="30" y2="21" stroke="white" strokeWidth="1.2" strokeOpacity="0.7" />
                  <line x1="10" y1="26" x2="30" y2="26" stroke="white" strokeWidth="1.2" strokeOpacity="0.7" />
                </svg>
              </div>
            )}
            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-cyan-400 flex items-center justify-center animate-pulse-slow">
              <span className="text-[8px] font-bold text-bg-primary">AI</span>
            </div>
          </div>

          {/* Code snippet */}
          <div className="w-full rounded-xl bg-bg-primary/80 border border-border-subtle p-4 font-mono text-xs">
            <div className="flex items-center gap-1.5 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
              <span className="ml-2 text-text-muted text-[10px]">main.java</span>
            </div>
            <div className="space-y-1 leading-relaxed">
              <p><span className="text-purple-400">class</span> <span className="text-cyan-300">Mukesh</span> <span className="text-text-muted">{'{'}</span></p>
              <p className="pl-3"><span className="text-blue-400">String</span> <span className="text-text-primary">role</span> = <span className="text-green-400">"Dev+AI"</span>;</p>
              <p className="pl-3"><span className="text-purple-400">void</span> <span className="text-yellow-300">build</span>() <span className="text-text-muted">{'{'}</span></p>
              <p className="pl-6 text-text-muted">// solve problems 🚀</p>
              <p className="pl-3"><span className="text-text-muted">{'}'}</span></p>
              <p><span className="text-text-muted">{'}'}</span></p>
            </div>
          </div>

          {/* Skill chips floating */}
          <div className="flex flex-wrap gap-2 justify-center">
            {["Java", "Python", "Spring Boot", "ML", "DSA"].map((s) => (
              <span key={s} className="px-3 py-1 text-xs font-medium rounded-full border border-blue-500/25 bg-blue-500/10 text-blue-300">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Decorative corner lines */}
        <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-blue-500/30" />
        <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-blue-500/30" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-blue-500/30" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-blue-500/30" />
      </div>
    </div>
  );
}

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-6">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/25 bg-green-500/5 text-green-400 text-sm font-medium w-fit">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              MCA Graduate · Open to opportunities
            </div>

            {/* Greeting & name */}
            <div>
              <p className="font-mono text-accent-blue text-sm mb-2 tracking-wide">Hi, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
                Mukesh<br />
                <span className="gradient-text">Choudhary</span>
              </h1>
            </div>

            {/* Role */}
            <p className="text-lg sm:text-xl font-semibold text-text-secondary">
              Software Developer · AI/ML Engineer
            </p>

            {/* Description */}
            <p className="text-text-secondary leading-relaxed max-w-lg">
              Building reliable software solutions and intelligent systems using{' '}
              <span className="text-text-primary font-medium">Java</span>,{' '}
              <span className="text-text-primary font-medium">Python</span>,{' '}
              <span className="text-text-primary font-medium">Spring Boot</span>,{' '}
              <span className="text-text-primary font-medium">Machine Learning</span>{' '}
              and modern backend technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleScroll('#projects')}
                className="btn-primary"
              >
                View My Work
              </button>
              <a
                href={profile.resumePath}
                download="Mukesh_Choudhary_Resume.pdf"
                className="btn-outline"
              >
                <Download size={16} />
                Download Resume
              </a>
              <button
                onClick={() => handleScroll('#contact')}
                className="btn-outline"
              >
                <Mail size={16} />
                Contact Me
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-text-muted text-sm">Find me on</span>
              <div className="flex gap-3">
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-border-subtle hover:border-accent-blue hover:text-accent-blue text-text-secondary transition-all duration-200 hover:bg-blue-500/5"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-border-subtle hover:border-accent-blue hover:text-accent-blue text-text-secondary transition-all duration-200 hover:bg-blue-500/5"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-border-subtle hover:border-accent-blue hover:text-accent-blue text-text-secondary transition-all duration-200 hover:bg-blue-500/5"
                  aria-label="LeetCode"
                >
                  <Code2 size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="lg:flex justify-end hidden lg:block">
            <DevVisual profileImage={profile.profileImage} />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 hidden sm:flex flex-col items-center gap-2 text-text-muted">
          <span className="text-xs font-mono">scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
