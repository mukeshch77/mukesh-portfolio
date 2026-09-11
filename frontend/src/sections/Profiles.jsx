import React from 'react';
import { Github, Linkedin, Code2, ExternalLink } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';
import { social } from '../data/portfolioData';

const profiles = [
  {
    name: "GitHub",
    handle: "@mukeshch77",
    url: social.github,
    icon: Github,
    description: "Source code, projects, and contributions — explore what I've built.",
    color: { bg: 'from-gray-700/30 to-gray-800/30', border: 'border-gray-600/30', text: 'text-gray-300', hover: 'hover:border-gray-400/40' },
  },
  {
    name: "LinkedIn",
    handle: "mukeshch77",
    url: social.linkedin,
    icon: Linkedin,
    description: "Professional background, education, and internship experience.",
    color: { bg: 'from-blue-600/20 to-blue-700/20', border: 'border-blue-500/30', text: 'text-blue-400', hover: 'hover:border-blue-400/50' },
  },
  {
    name: "LeetCode",
    handle: "mukeshch77",
    url: social.leetcode,
    icon: Code2,
    description: "Algorithmic problem solving and data structures practice.",
    color: { bg: 'from-yellow-500/15 to-orange-500/15', border: 'border-yellow-500/25', text: 'text-yellow-400', hover: 'hover:border-yellow-400/40' },
  },
];

export default function Profiles() {
  return (
    <SectionWrapper id="profiles" className="bg-bg-secondary/30">
      <SectionHeader
        label="Profiles"
        title="Coding Profiles"
        subtitle="Find my work, practice, and professional presence across developer platforms."
      />

      <div className="grid sm:grid-cols-3 gap-5">
        {profiles.map((p) => {
          const Icon = p.icon;
          return (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`card group flex flex-col gap-4 no-underline ${p.color.hover} transition-all duration-300`}
              aria-label={`Visit ${p.name} profile`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color.bg} border ${p.color.border} flex items-center justify-center`}>
                <Icon size={22} className={p.color.text} />
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-text-primary">{p.name}</h3>
                  <ExternalLink size={14} className="text-text-muted group-hover:text-text-secondary transition-colors" />
                </div>
                <p className={`text-sm font-mono mb-2 ${p.color.text}`}>{p.handle}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{p.description}</p>
              </div>

              <div className={`text-xs font-medium ${p.color.text} flex items-center gap-1`}>
                Visit Profile
                <ExternalLink size={11} />
              </div>
            </a>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
