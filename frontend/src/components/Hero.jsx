import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const extraScrollRef = useRef(0);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [introUnlocked, setIntroUnlocked] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onMeta = () => {
      if (!Number.isNaN(video.duration) && Number.isFinite(video.duration)) {
        setDuration(video.duration);
      }
      video.pause();
      video.currentTime = 0;
    };

    video.addEventListener('loadedmetadata', onMeta);
    video.addEventListener('loadeddata', onMeta);
    return () => {
      video.removeEventListener('loadedmetadata', onMeta);
      video.removeEventListener('loadeddata', onMeta);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !duration) return;
    const target = progress * duration;
    if (Math.abs(video.currentTime - target) > 0.02) {
      video.currentTime = target;
    }
  }, [progress, duration]);

  useEffect(() => {
    if (introUnlocked) return undefined;

    const onWheel = (event) => {
      const hero = heroRef.current;
      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      const heroIsActive = rect.top <= 96 && rect.bottom >= window.innerHeight * 0.6;
      if (!heroIsActive) return;

      // Lock page scrolling while the intro animation is unfinished.
      event.preventDefault();

      if (progress < 1 && event.deltaY > 0) {
        const delta = Math.min(0.22, Math.abs(event.deltaY) / 420);
        setProgress((prev) => Math.min(1, prev + delta));
        return;
      }

      // After the video completes, require extra downward scroll input
      // before unlocking to create a smoother handoff into the page.
      if (progress >= 1 && event.deltaY > 0) {
        const unlockThreshold = window.innerWidth <= 560 ? 520 : 760;
        extraScrollRef.current += Math.abs(event.deltaY);
        if (extraScrollRef.current >= unlockThreshold) {
          setIntroUnlocked(true);
          setProgress(1);
          extraScrollRef.current = 0;
          const nudge = Math.max(120, Math.round(window.innerHeight * 0.18));
          window.scrollBy({ top: nudge, behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, [introUnlocked, progress]);

  return (
    <header id="home" ref={heroRef} className="hero">
      <div className="hero-shell" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero-video"
          muted
          playsInline
          preload="auto"
        >
          <source src="/assets/Transition-web.mp4" type="video/mp4" />
        </video>
      </div>
    </header>
  );
}
