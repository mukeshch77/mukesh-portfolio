import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export function useActiveSection(sections) {
  const activeSection = useRef('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.current = entry.target.id;
            document.querySelectorAll('.nav-link').forEach((link) => {
              link.classList.remove('nav-link-active');
              if (link.getAttribute('href') === `#${entry.target.id}`) {
                link.classList.add('nav-link-active');
              }
            });
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -80px 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return activeSection;
}
