'use client';

import Image from 'next/image';
import type { CharacterState } from '@/types';

export const Character = ({ isAwake, scrollProgress }: CharacterState) => {
  return (
    <div
      className="absolute"
      style={{
        bottom: '60px',
        right: '60px',
        opacity: isAwake ? 1 : 0,
        transform: `translateY(${isAwake ? -scrollProgress * 20 : 20}px)`,
        transition: 'all 1.2s ease',
      }}
    >
      <Image src="/kobo.png" alt="" width={70} height={70} style={{ width: '70px', height: 'auto' }} />
    </div>
  );
};
