import { useEffect, useRef, useState } from 'react';

function Arrow({ dir }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {dir === 'left' ? (
        <>
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </>
      ) : (
        <>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </>
      )}
    </svg>
  );
}

export default function ProjectCarousel({ items }) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateState = () => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanPrev(scrollLeft > 4);
    setCanNext(scrollLeft + clientWidth < scrollWidth - 4);

    const slides = Array.from(el.querySelectorAll('.pc-slide'));
    if (!slides.length) return;
    const mid = scrollLeft + clientWidth / 2;
    let nearest = 0;
    let nearestDist = Infinity;
    slides.forEach((s, i) => {
      const center = s.offsetLeft + s.offsetWidth / 2;
      const d = Math.abs(center - mid);
      if (d < nearestDist) { nearestDist = d; nearest = i; }
    });
    setActiveIndex(nearest);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return undefined;
    updateState();
    el.addEventListener('scroll', updateState, { passive: true });
    window.addEventListener('resize', updateState);
    return () => {
      el.removeEventListener('scroll', updateState);
      window.removeEventListener('resize', updateState);
    };
  }, [items]);

  const scrollToIndex = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const slide = el.querySelectorAll('.pc-slide')[i];
    if (!slide) return;
    const target = slide.offsetLeft - (el.clientWidth - slide.offsetWidth) / 2;
    el.scrollTo({ left: target, behavior: 'smooth' });
  };

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const slide = el.querySelector('.pc-slide');
    const step = slide ? slide.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  if (!items?.length) return null;

  return (
    <div className="pc-wrap">
      <div className="pc-controls">
        <button
          type="button"
          className="pc-btn"
          onClick={() => scrollBy(-1)}
          disabled={!canPrev}
          aria-label="Previous project"
        >
          <Arrow dir="left" />
        </button>
        <button
          type="button"
          className="pc-btn"
          onClick={() => scrollBy(1)}
          disabled={!canNext}
          aria-label="Next project"
        >
          <Arrow dir="right" />
        </button>
      </div>

      <div className="pc-track" ref={trackRef}>
        {items.map((item) => (
          <article className="pc-slide" key={item.id}>
            <a
              className="pc-card"
              href={item.href || '#'}
              target={item.href ? '_blank' : undefined}
              rel={item.href ? 'noreferrer noopener' : undefined}
            >
              <div className="pc-media">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="pc-gradient" />
                <div className="pc-copy">
                  <h3 className="pc-title">{item.title}</h3>
                  <p className="pc-desc">{item.description}</p>
                  {item.tech && <p className="pc-tech">{item.tech}</p>}
                  <span className="pc-more">
                    Read more <Arrow dir="right" />
                  </span>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>

      <div className="pc-dots">
        {items.slice(1, -1).map((_, i) => {
          const realIndex = i + 1;
          return (
          <button
            key={realIndex}
            type="button"
            className={`pc-dot ${activeIndex === realIndex ? 'is-active' : ''}`}
            onClick={() => scrollToIndex(realIndex)}
            aria-label={`Go to slide ${realIndex + 1}`}
          />
          );
        })}
      </div>
    </div>
  );
}
