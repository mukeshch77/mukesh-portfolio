import React from 'react';
import { Github, ExternalLink, Calendar } from 'lucide-react';

export default function ProjectCard({ project }) {
  // Support both `live` (new) and `demo` (legacy) field names
  const { title, description, tech, duration, github, live, demo, image } = project;
  const liveUrl = live || demo || null;

  return (
    <article className="card group flex flex-col h-full">
      {/* Project image or placeholder */}
      <div className="relative h-44 rounded-xl mb-5 overflow-hidden bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-border-subtle flex items-center justify-center">
        {image ? (
          <img src={image} alt={`${title} screenshot`} className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-3 text-text-muted">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <span className="text-xl font-bold text-blue-400">{title.charAt(0)}</span>
            </div>
            <span className="text-xs font-mono">Project Preview</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card/40 to-transparent" />
      </div>

      {/* Duration */}
      <div className="flex items-center gap-1.5 text-text-muted text-xs mb-3">
        <Calendar size={12} />
        <span className="font-mono">{duration}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-text-primary mb-3 group-hover:text-accent-blue transition-colors">
        {title}
      </h3>

      {/* Description */}
      <ul className="flex-1 space-y-1.5 mb-5">
        {description.map((point, i) => (
          <li key={i} className="text-sm text-text-secondary leading-relaxed flex gap-2">
            <span className="text-accent-blue mt-1.5 flex-shrink-0">
              <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                <circle cx="3" cy="3" r="3" />
              </svg>
            </span>
            {point}
          </li>
        ))}
      </ul>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {tech.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 pt-4 border-t border-border-subtle">
        {github ? (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex-1 justify-center text-xs py-2"
            aria-label={`View ${title} on GitHub`}
          >
            <Github size={15} />
            GitHub
          </a>
        ) : (
          <button
            disabled
            className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-medium text-text-muted border border-border-subtle rounded-xl cursor-not-allowed opacity-50"
            title="GitHub link not available"
          >
            <Github size={15} />
            GitHub
          </button>
        )}

        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 justify-center text-xs py-2"
            aria-label={`View ${title} live demo`}
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        ) : null}
      </div>
    </article>
  );
}
