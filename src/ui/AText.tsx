'use client';
import { useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AText: React.FC<{
  children: string;
  delay?: number;
}> = ({ children, delay }) => {
  // keyframe usage
  const ref = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const t = { trigger: ref.current };
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
        delay: delay || 0.5,
        skewY: 0,
        ease: 'power4',
        scrollTrigger: delay ? undefined : t,
      }
    );
  });

  return (
    <div className='overflow-hidden'>
      <div className='opacity-0' ref={ref}>
        {children}
      </div>
    </div>
  );
};

export default AText;
