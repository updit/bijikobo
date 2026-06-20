'use client';

import { useEffect, useState } from 'react';
import type { CharacterState } from '@/types';

export const useCharacter = (): CharacterState => {
  const [isAwake, setIsAwake] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsAwake(true), 1500);

    const handleScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? window.scrollY / max : 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isAwake, scrollProgress };
};
