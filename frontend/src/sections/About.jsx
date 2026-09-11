import React from 'react';
import { MapPin, Mail, Phone, GraduationCap, Briefcase } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';
import { profile } from '../data/portfolioData';

const highlights = [
  { icon: GraduationCap, label: "MCA in Artificial Intelligence", sub: "UPES · Graduated July 2026 · CGPA 8.3" },
  { icon: Briefcase, label: "AI/ML Developer Intern", sub: "Xebia IT Architects · 2026" },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-bg-secondary/30">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: text */}
        <div>
          <SectionHeader
            label="About Me"
            title="Who I Am"
            subtitle="A developer who believes great software starts with solid fundamentals and clean thinking."
          />

          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              I'm <span className="text-text-primary font-semibold">Mukesh Choudhary</span>, a Software Developer
              and AI/ML Engineer from Jaipur, Rajasthan. I hold an{' '}
              <span className="text-text-primary font-medium">MCA in Artificial Intelligence</span> from UPES,
              Dehradun (Graduated July 2026), where I built deep expertise in both software engineering and intelligent systems.
            </p>
            <p>
              My technical foundation spans <span className="text-text-primary font-medium">Java</span> and{' '}
              <span className="text-text-primary font-medium">Python</span> development, with hands-on experience
              in <span className="text-text-primary font-medium">Spring Boot</span> backend development,
              RESTful APIs, and strong problem-solving through Data Structures & Algorithms.
            </p>
            <p>
              On the AI/ML front, I've built real projects — including a multimodal emotion recognition
              system using PyTorch, BERT, and ResNet — and gained industry exposure through my internship at{' '}
              <span className="text-text-primary font-medium">Xebia IT Architects</span>, where I worked
              on ML-powered financial intelligence systems.
            </p>
            <p>
              I care about writing clean, maintainable code, thinking through problems carefully before
              implementing them, and continuously pushing my understanding deeper.
            </p>
          </div>
        </div>

        {/* Right: info card */}
        <div className="space-y-6">
          {/* Contact details */}
          <div className="card space-y-4">
            <h3 className="text-sm font-mono text-text-muted uppercase tracking-widest mb-5">Contact Info</h3>
            {[
              { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
              { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
              { icon: MapPin, label: "Location", value: profile.location, href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={15} className="text-accent-blue" />
                </div>
                <div>
                  <p className="text-xs text-text-muted mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm text-text-primary hover:text-accent-blue transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-text-primary">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="space-y-3">
            {highlights.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="card flex items-center gap-4 py-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-accent-blue" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">{label}</p>
                  <p className="text-xs text-text-muted">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
