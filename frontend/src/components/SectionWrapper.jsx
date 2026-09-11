import React from 'react';
import { useIntersection } from '../hooks/useIntersection';

export default function SectionWrapper({ id, className = '', children }) {
  const [ref, isVisible] = useIntersection();

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 lg:py-28 px-4 sm:px-6 lg:px-8 ${className} transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
}
