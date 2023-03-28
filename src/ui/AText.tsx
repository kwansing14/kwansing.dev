"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AText: React.FC<{
  children: string;
  delay?: number;
  noskew?: boolean;
}> = ({ children, delay = 0, noskew }) => {
  // keyframe usage
  const ref = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const t = { trigger: ref.current };
    gsap.fromTo(
      ref.current,
      {
        translateY: "120%",
        opacity: 0,
        skewY: noskew ? 0 : 5,
      },
      {
        translateY: "-5",
        opacity: 1,
        duration: 1,
        delay: 0.5 + delay,
        skewY: 0,
        ease: "power4",
        scrollTrigger: delay ? undefined : t,
      }
    );
  }, [delay]);

  return (
    <div className="overflow-hidden">
      <div className="opacity-0" ref={ref}>
        {children}
      </div>
    </div>
  );
};

export default AText;
