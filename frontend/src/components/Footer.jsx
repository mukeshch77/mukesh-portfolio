import React from 'react';
import { Github, Linkedin, Code2 } from 'lucide-react';
import { profile, social } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-bg-secondary/50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-accent-blue font-semibold">Mukesh.</span>
          <span className="text-text-muted text-sm">
            © {year} {profile.name}. All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-blue transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-blue transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={social.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-blue transition-colors"
            aria-label="LeetCode"
          >
            <Code2 size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
