import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-bg-secondary/30">
      <SectionHeader
        label="Experience"
        title="Work Experience"
        subtitle="Professional experience building real-world AI/ML systems."
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-indigo-500/50 to-transparent" />

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={exp.id} className="relative pl-12 sm:pl-20">
              {/* Timeline dot */}
              <div className="absolute left-2 sm:left-6 top-5 w-5 h-5 rounded-full bg-accent-blue border-2 border-bg-primary shadow-md shadow-blue-500/30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              {/* Card */}
              <article className="card">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-2">
                      {exp.type}
                    </span>
                    <h3 className="text-lg font-bold text-text-primary">{exp.role}</h3>
                    <p className="text-accent-blue font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col gap-1.5 text-text-muted text-sm sm:text-right">
                    <span className="flex items-center gap-1.5 sm:justify-end">
                      <Calendar size={13} />
                      {exp.duration}
                    </span>
                    {/* Location — uncomment the block below to show it again
                    <span className="flex items-center gap-1.5 sm:justify-end">
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                    */}
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                      <span className="text-accent-blue mt-1.5 flex-shrink-0">
                        <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
