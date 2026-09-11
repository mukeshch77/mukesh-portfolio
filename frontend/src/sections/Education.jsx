import React from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <SectionWrapper id="education" className="bg-bg-secondary/30">
      <SectionHeader
        label="Education"
        title="Academic Background"
        subtitle="A foundation in Computer Science, deepened by specialization in Artificial Intelligence."
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-blue-500/50 to-transparent" />

        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu.id} className="relative pl-12 sm:pl-20">
              {/* Dot */}
              <div className={`absolute left-2 sm:left-6 top-5 w-5 h-5 rounded-full border-2 border-bg-primary flex items-center justify-center shadow-md ${
                edu.current
                  ? 'bg-indigo-500 shadow-indigo-500/30'
                  : 'bg-blue-500/60 shadow-blue-500/20'
              }`}>
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              <article className="card">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    {edu.graduated && (
                      <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-green-500/10 border border-green-500/25 text-green-400 mb-2">
                        Graduated July 2026
                      </span>
                    )}
                    {edu.current && !edu.graduated && (
                      <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 mb-2">
                        Currently Pursuing
                      </span>
                    )}
                    <h3 className="text-base font-bold text-text-primary leading-tight">{edu.degree}</h3>
                    {edu.specialization && (
                      <p className="text-sm text-accent-blue font-medium">{edu.specialization}</p>
                    )}
                    <div className="flex items-center gap-1.5 mt-1">
                      <GraduationCap size={13} className="text-text-muted" />
                      <p className="text-sm text-text-secondary">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 text-text-muted text-sm sm:text-right">
                    <span className="flex items-center gap-1.5 sm:justify-end">
                      <Calendar size={13} />
                      {edu.duration}
                    </span>
                    <span className="flex items-center gap-1.5 sm:justify-end">
                      <MapPin size={13} />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1.5 sm:justify-end text-green-400">
                      <Award size={13} />
                      {edu.score}
                    </span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
