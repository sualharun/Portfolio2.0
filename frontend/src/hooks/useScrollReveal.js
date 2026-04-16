import { useEffect } from 'react';

export default function useScrollReveal(deps = []) {
  useEffect(() => {
    const targets = document.querySelectorAll(
      '.section-head, .exp-card, .tl-card, .proj-card, .cert-card, .extra-card, .tile, .skill'
    );
    targets.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity .7s ease, transform .7s ease';
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line
  }, deps);
}
