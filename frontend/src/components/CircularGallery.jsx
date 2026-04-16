import { useEffect, useRef, useState } from 'react';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function CircularGallery({
  items,
  className,
  radius = 520,
  autoRotateSpeed = 0.02,
  cardWidth = 280,
  cardHeight = 360
}) {
  const galleryRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [flippedUrl, setFlippedUrl] = useState(null);
  const interactionTimeoutRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const el = galleryRef.current;
    if (!el) return undefined;

    const handleWheel = (event) => {
      const horizontalIntent = Math.abs(event.deltaX) > Math.abs(event.deltaY) || event.shiftKey;
      if (!horizontalIntent) {
        // Let normal vertical wheel continue to scroll the page.
        return;
      }

      const dominantDelta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      if (dominantDelta === 0) return;

      // Intercept only horizontal interaction so the section can rotate infinitely.
      event.preventDefault();
      setIsInteracting(true);
      if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);

      const sensitivity = 0.16;
      setRotation((prev) => prev + dominantDelta * sensitivity);

      interactionTimeoutRef.current = setTimeout(() => {
        setIsInteracting(false);
      }, 150);
    };

    el.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      el.removeEventListener('wheel', handleWheel);
      if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const autoRotate = () => {
      if (!isInteracting && !flippedUrl) {
        setRotation((prev) => prev + autoRotateSpeed);
      }
      animationFrameRef.current = requestAnimationFrame(autoRotate);
    };

    animationFrameRef.current = requestAnimationFrame(autoRotate);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isInteracting, autoRotateSpeed, flippedUrl]);

  if (!items?.length) return null;

  const anglePerItem = 360 / items.length;

  return (
    <div
      ref={galleryRef}
      role="region"
      aria-label="Circular 3D Gallery"
      className={cn('circular-gallery-root', className)}
      style={{ perspective: '1800px' }}
    >
      <div
        className="circular-gallery-stage"
        style={{
          transform: `rotateY(${rotation}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        {items.map((item, i) => {
          const itemAngle = i * anglePerItem;
          const totalRotation = rotation % 360;
          const relativeAngle = (itemAngle + totalRotation + 360) % 360;
          const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);
          const opacity = Math.max(0.25, 1 - normalizedAngle / 180);
          const isFlipped = flippedUrl === item.photo.url;

          const toggleFlip = () => {
            setFlippedUrl((prev) => (prev === item.photo.url ? null : item.photo.url));
          };

          const onCardKeyDown = (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              toggleFlip();
            }
          };

          return (
            <article
              key={item.photo.url}
              role="group"
              aria-label={item.common}
              className={cn('circular-gallery-item', isFlipped && 'is-selected')}
              style={{
                width: `${cardWidth}px`,
                height: `${cardHeight}px`,
                transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                left: '50%',
                top: '50%',
                marginLeft: `-${cardWidth / 2}px`,
                marginTop: `-${cardHeight / 2}px`,
                opacity
              }}
            >
              <div
                role="button"
                tabIndex={0}
                className={cn('circular-gallery-card', isFlipped && 'is-flipped')}
                onClick={toggleFlip}
                onKeyDown={onCardKeyDown}
                aria-pressed={isFlipped}
                aria-label={`${item.common}. ${isFlipped ? 'Hide details' : 'Show details'}`}
              >
                <span className="circular-gallery-face circular-gallery-front">
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    className="circular-gallery-image"
                    style={{ objectPosition: item.photo.pos || 'center' }}
                    loading="lazy"
                  />
                  <span className="circular-gallery-overlay">
                    <h3>{item.common}</h3>
                    <em>{item.binomial}</em>
                    <p>Tap card to flip</p>
                  </span>
                </span>

                <span className="circular-gallery-face circular-gallery-back">
                  <span className="circular-gallery-back-top">{item.backLabel || 'Photo Details'}</span>
                  <h3>{item.common}</h3>
                  <em>{item.binomial}</em>
                  <p className="circular-gallery-description">{item.photo.text}</p>
                  {item.photo.by && (
                    <p className="circular-gallery-credit">
                      {item.creditPrefix || 'Captured by'} {item.photo.by}
                    </p>
                  )}
                  {item.href && (
                    <a
                      className="circular-gallery-link"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {item.linkLabel || 'View credential'}
                    </a>
                  )}
                  <span className="circular-gallery-back-hint">Tap again to return</span>
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
