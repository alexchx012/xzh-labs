import { useEffect, useRef } from 'react';

const useParallax = (speed = 0.3) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const scrolled = window.innerHeight - rect.top;
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const offset = scrolled * speed;
        el.style.transform = `translateY(${-offset}px)`;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return ref;
};

export default useParallax;
