import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function useStickyScroll() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Disconnect previous observer if exists
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create new observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Use requestAnimationFrame to ensure DOM is updated
    const rafId = requestAnimationFrame(() => {
      // Observe all sticky animation elements
      const stickyElements = document.querySelectorAll(
        '.sticky-fade-in, .sticky-scale-in, .sticky-slide-left, .sticky-slide-right'
      );
      
      stickyElements.forEach((el) => {
        observerRef.current?.observe(el);
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      
      // Cleanup observer
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [location.pathname]); // Re-run on route change
}
