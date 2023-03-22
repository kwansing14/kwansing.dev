'use client';

import { useState } from 'react';
import LinkBar from '@/ui/LinkBar';

const Links = () => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  const links = [{ name: 'LinkedIn' }, { name: 'GitHub' }];
  return (
    <LinkBar variant={2} v2State={isMouseEnter}>
      {links.map((link, index) => (
        <div
          key={index}
          className='cursor-pointer hover:text-black transition-all duration-300'
          onMouseEnter={() => setIsMouseEnter(true)}
          onMouseLeave={() => setIsMouseEnter(false)}
        >
          {link.name}
        </div>
      ))}
    </LinkBar>
  );
};

export default Links;
