'use client';

import { useEffect, useRef } from 'react';
import { annotate } from 'rough-notation';

export const Screen2Section = () => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const annotation = annotate(textRef.current, {
        type: 'highlight',
        color: '#e0c4c4',
        animationDuration: 800,
      });
      const timer = setTimeout(() => annotation.show(), 1000);
      return () => {
        clearTimeout(timer);
        annotation.remove();
      };
    }
  }, []);

  return (
    <section
      id="screen2"
      className="relative flex items-center justify-center"
      style={{ minHeight: '100vh', backgroundColor: '#ece6da', paddingLeft: '8vw', paddingRight: '8vw', paddingTop: '5rem', paddingBottom: '5rem' }}
    >
      <div>
        <a
          href="https://updit.co"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            width: '100%',
            maxWidth: '900px',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
          }}
          className="hover:scale-[1.02]"
        >
          <img src="/sc_updit.png" alt="updit" style={{ width: '100%', height: 'auto' }} />
        </a>
        <p
          className="mt-6"
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            color: '#b0a89c',
            textAlign: 'center',
            fontFamily: 'var(--font-sans)',
          }}
        >
          click → updit.co へ
        </p>
      </div>

      <span
        style={{
          position: 'absolute',
          bottom: '40px',
          right: 'calc(5% + 60px)',
          fontSize: '0.875rem',
          fontFamily: 'var(--font-sans)',
          color: '#000',
          fontWeight: 600,
          whiteSpace: 'nowrap',
        }}
      >
        <span ref={textRef}>webアプリも作れるよ！</span>
      </span>

      <img
        src="/kobo.png"
        alt=""
        style={{
          position: 'absolute',
          bottom: '-20px',
          right: '5%',
          width: '50px',
          height: 'auto',
        }}
      />
    </section>
  );
};
