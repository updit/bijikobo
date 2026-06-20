'use client';

import { Character } from '@/components/ui/Character';
import { useCharacter } from '@/hooks/useCharacter';

export const Screen1Section = () => {
  const { isAwake, scrollProgress } = useCharacter();

  return (
    <section
      id="screen1"
      className="relative flex flex-col justify-center pt-8 pb-16"
      style={{ minHeight: '100vh', backgroundColor: '#ffffff', paddingLeft: '8vw', paddingRight: '8vw' }}
    >
      <h1
        style={{
          fontSize: 'clamp(48px, 8vw, 96px)',
          fontWeight: 700,
          fontFamily: 'var(--font-serif)',
          lineHeight: 1.3,
        }}
      >
        コトバの<span style={{ color: '#800202' }}>チカラ</span>。
      </h1>

      <p
        className="mt-6"
        style={{
          fontSize: 'clamp(18px, 2.5vw, 28px)',
          fontFamily: 'var(--font-serif)',
          color: '#000',
        }}
      >
        「読んで伝わる」から、「見て解る」へ。
      </p>

      <p
        className="mt-10"
        style={{
          fontSize: '0.875rem',
          lineHeight: 2.2,
          color: '#6b6258',
          maxWidth: '480px',
          fontFamily: 'var(--font-sans)',
        }}
      >
        長く休んでいた事務所を、ひっそりと再開しました。
        <br />
        多言語対応・インバウンド向けのコトバとデザインで、
        <br />
        伝わりにくいものを、見える形に変えていきます。
      </p>

      <Character isAwake={isAwake} scrollProgress={scrollProgress} />
    </section>
  );
};
