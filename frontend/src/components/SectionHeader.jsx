import React from 'react';

export default function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="mb-12 sm:mb-16">
      {label && (
        <p className="font-mono text-xs font-medium text-accent-blue uppercase tracking-widest mb-3">
          {label}
        </p>
      )}
      <h2 className="section-heading">{title}</h2>
      {subtitle && <p className="section-subheading">{subtitle}</p>}
    </div>
  );
}
