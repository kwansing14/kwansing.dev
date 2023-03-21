'use client';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AText: React.FC<{
  children: string;
  delay?: number;
}> = ({ children, delay }) => {
  // keyframe usage
  const ref = useRef(null);
  const t = { trigger: ref.current };
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
