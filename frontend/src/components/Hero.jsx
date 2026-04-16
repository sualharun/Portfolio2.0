import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const lastDownInputRef = useRef(0);

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
    const onWheel = (event) => {
      const hero = heroRef.current;
      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      const heroIsActive = rect.top <= 96 && rect.bottom > window.innerHeight * 0.4;
      if (!heroIsActive) return;

      const scrollingDown = event.deltaY > 0;
      const scrollingUp = event.deltaY < 0;

      if ((scrollingDown && progress < 1) || (scrollingUp && progress > 0)) {
        event.preventDefault();
        const delta = Math.min(0.25, Math.abs(event.deltaY) / 400);
        if (scrollingDown) lastDownInputRef.current = performance.now();
        setProgress((prev) => {
          if (scrollingDown) return Math.min(1, prev + delta);
          return Math.max(0, prev - delta);
        });
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, [progress]);

  // Safety net: after any downward wheel input, keep advancing progress toward 1
  // so fast scrollers reliably see the animation complete.
  useEffect(() => {
    let raf;
    let prevTs = 0;
    const CATCHUP_WINDOW_MS = 1200;
    const COMPLETE_IN_SEC = 1.0;

    const tick = (ts) => {
      const dt = prevTs ? (ts - prevTs) / 1000 : 0;
      prevTs = ts;

      const sinceInput = performance.now() - lastDownInputRef.current;
      if (
        lastDownInputRef.current &&
        sinceInput < CATCHUP_WINDOW_MS
      ) {
        setProgress((prev) => {
          if (prev >= 1) return 1;
          return Math.min(1, prev + dt / COMPLETE_IN_SEC);
        });
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

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
