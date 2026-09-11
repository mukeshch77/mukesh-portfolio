import React from 'react';
import { Download, Eye } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { profile } from '../data/portfolioData';

export default function Resume() {
  return (
    <SectionWrapper id="resume">
      <div className="flex flex-col items-center text-center">
        <p className="font-mono text-xs font-medium text-accent-blue uppercase tracking-widest mb-3">Resume</p>
        <h2 className="section-heading mb-4">My Resume</h2>
        <p className="text-text-secondary max-w-md mb-10">
          Download my resume for a complete overview of my experience, education, and technical skills.
        </p>

        <div className="card max-w-2xl w-full">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-2">
            <div className="text-left">
              <p className="font-semibold text-text-primary mb-1">Mukesh Choudhary — Resume</p>
              <p className="text-sm text-text-muted">Software Developer & AI/ML Engineer · PDF Format</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm py-2.5"
                aria-label="View resume in browser"
              >
                <Eye size={15} />
                View
              </a>
              <a
                href={profile.resumePath}
                download="Mukesh_Choudhary_Resume.pdf"
                className="btn-primary text-sm py-2.5"
                aria-label="Download resume PDF"
              >
                <Download size={15} />
                Download
              </a>
            </div>
          </div>
        </div>

        <p className="text-xs text-text-muted mt-4">
          File: <code className="font-mono text-accent-blue">resume.pdf</code>
          {' · '}
          <span className="text-text-muted/60">Also available at /assets/resume/Mukesh-Choudhary-Resume.pdf</span>
        </p>
      </div>
    </SectionWrapper>
  );
}
