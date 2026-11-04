import { useEffect, useRef } from 'react';

export function useStickyScroll() {
  const elementsRef = useRef<Element[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    // Observe all sticky animation elements
    const stickyElements = document.querySelectorAll(
      '.sticky-fade-in, .sticky-scale-in, .sticky-slide-left, .sticky-slide-right'
    );
    
    stickyElements.forEach((el) => {
      observer.observe(el);
      elementsRef.current.push(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        observer.unobserve(el);
      });
      elementsRef.current = [];
    };
  }, []);
}
