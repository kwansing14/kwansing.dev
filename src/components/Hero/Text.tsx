'use client';
import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { a, useSpring, useInView } from '@react-spring/web';
import { gsap } from 'gsap';

const AText: React.FC<{
  children: string;
  delay?: number;
  height?: number;
}> = ({ children, delay, height = 20 }) => {
  // keyframe usage
  const ref = useRef(null);
  useLayoutEffect(() => {
    gsap.fromTo(
      ref.current,
      {
        translateY: '120%',
        opacity: 0,
        skewY: 8,
      },
      {
        translateY: '0',
        opacity: 1,
        duration: 1,
        delay: 0.5,
        skewY: 0,
        ease: 'power4',
      }
    );
  });

  return (
    <div className='overflow-hidden'>
      <div ref={ref}>{children}</div>
    </div>
  );
};

export default AText;
