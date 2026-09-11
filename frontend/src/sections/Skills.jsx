import React, { useState } from 'react';
import {
  Code2, Server, Database, Brain, BookOpen, Wrench
} from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';
import { skillGroups } from '../data/portfolioData';

const iconMap = { Code2, Server, Database, Brain, BookOpen, Wrench };

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState(null);

  return (
    <SectionWrapper id="skills">
      <SectionHeader
        label="Skills"
        title="Technical Skills"
        subtitle="A snapshot of my technical toolkit — from core languages to AI/ML frameworks."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group) => {
          const Icon = iconMap[group.icon] || Code2;
          const isActive = activeGroup === group.category;

          return (
            <div
              key={group.category}
              className={`card cursor-default select-none transition-all duration-300 ${
                isActive ? 'border-accent-blue/40 shadow-blue-500/10 shadow-lg' : ''
              }`}
              onMouseEnter={() => setActiveGroup(group.category)}
              onMouseLeave={() => setActiveGroup(null)}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-br from-blue-500 to-indigo-600 shadow-sm shadow-blue-500/30'
                    : 'bg-blue-500/10 border border-blue-500/20'
                }`}>
                  <Icon size={16} className={isActive ? 'text-white' : 'text-accent-blue'} />
                </div>
                <h3 className="text-sm font-semibold text-text-primary">{group.category}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-500/15 border border-blue-500/30 text-blue-300'
                        : 'bg-bg-primary/80 border border-border-subtle text-text-secondary hover:border-blue-500/30 hover:text-blue-300'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
