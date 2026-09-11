import React, { useState } from 'react';
import { Award, Calendar, ExternalLink, X } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';
import { certifications } from '../data/portfolioData';

const badgeColors = {
  AWS:       { bg: 'from-orange-500/20 to-yellow-500/20', border: 'border-orange-500/25', text: 'text-orange-400', dot: 'bg-orange-400' },
  ISRO:      { bg: 'from-blue-600/20 to-indigo-600/20',   border: 'border-blue-500/25',   text: 'text-blue-400',   dot: 'bg-blue-400' },
  HackerRank:{ bg: 'from-green-500/20 to-emerald-500/20', border: 'border-green-500/25',  text: 'text-green-400',  dot: 'bg-green-400' },
  Hackathon: { bg: 'from-purple-500/20 to-fuchsia-500/20',border: 'border-purple-500/25', text: 'text-purple-400', dot: 'bg-purple-400' },
};
const defaultColors = { bg: 'from-slate-500/20 to-slate-600/20', border: 'border-slate-500/25', text: 'text-slate-400', dot: 'bg-slate-400' };

export default function Certifications() {
  const [lightbox, setLightbox] = useState(null); // holds image path when open

  return (
    <SectionWrapper id="certifications">
      <SectionHeader
        label="Certifications"
        title="Certifications"
        subtitle="Industry-recognized credentials validating my skills in AI/ML, space technology, and software engineering."
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {certifications.map((cert) => {
          const colors = badgeColors[cert.badge] || defaultColors;

          return (
            <article key={cert.id} className="card group relative overflow-hidden">
              {/* Background gradient accent on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

              <div className="relative">
                {/* Badge/issuer row */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border ${colors.border} bg-bg-primary/50`}>
                    <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
                    <span className={`text-xs font-semibold ${colors.text}`}>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-text-muted">
                    <Calendar size={12} />
                    {cert.date}
                  </div>
                </div>

                {/* Certificate image — only shown when cert.image is set */}
                {cert.image && (
                  <button
                    onClick={() => setLightbox(cert.image)}
                    className="block w-full mb-4 rounded-xl overflow-hidden border border-border-subtle hover:border-accent-blue/40 transition-colors cursor-zoom-in"
                    aria-label={`View ${cert.title} certificate image`}
                  >
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      className="w-full h-36 object-cover object-top"
                    />
                  </button>
                )}

                {/* Award icon — only shown when no image */}
                {!cert.image && (
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.bg} border ${colors.border} flex items-center justify-center mb-4`}>
                    <Award size={22} className={colors.text} />
                  </div>
                )}

                {/* Title */}
                <h3 className="text-base font-bold text-text-primary mb-4 leading-tight">{cert.title}</h3>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.topics.map((topic) => (
                    <span key={topic} className="px-2.5 py-1 text-xs font-medium rounded-lg bg-bg-primary/80 border border-border-subtle text-text-muted">
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Credential link */}
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-medium ${colors.text} hover:underline`}
                    aria-label={`View ${cert.title} credential`}
                  >
                    <ExternalLink size={12} />
                    View Certificate
                  </a>
                ) : (
                  <p className="text-xs text-text-muted italic">Credential link coming soon</p>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {/* Lightbox for certificate images */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate image viewer"
        >
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full bg-bg-card border border-border-subtle flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Close image viewer"
            >
              <X size={16} />
            </button>
            <img
              src={lightbox}
              alt="Certificate"
              className="w-full rounded-xl border border-border-subtle shadow-2xl"
            />
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
