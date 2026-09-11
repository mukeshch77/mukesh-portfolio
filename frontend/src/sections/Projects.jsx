import React from 'react';
import { ExternalLink } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import { projects, social } from '../data/portfolioData';

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeader
        label="Projects"
        title="What I've Built"
        subtitle="Selected projects demonstrating my skills in software development and AI/ML engineering."
      />

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* View more on GitHub */}
      <div className="flex justify-center">
        <a
          href={social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline group"
        >
          <ExternalLink size={16} className="group-hover:rotate-12 transition-transform" />
          View More Projects on GitHub
        </a>
      </div>
    </SectionWrapper>
  );
}
