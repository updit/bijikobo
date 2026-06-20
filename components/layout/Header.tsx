'use client';

import Image from 'next/image';
import { useScrollTo } from '@/hooks/useScrollTo';

export const Header = () => {
  const { scrollTo } = useScrollTo();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center px-8"
      style={{ height: '56px', backgroundColor: '#ecebe4' }}
    >
      <button onClick={() => scrollTo('screen1')} aria-label="美字工房 トップへ">
        <Image
          src="/bijikobo.png"
          alt="美字工房"
          width={116}
          height={40}
          style={{ width: 'auto', height: '40px' }}
          priority
        />
      </button>
    </header>
  );
};
