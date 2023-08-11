"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AText: React.FC<{
  children: string | React.ReactElement;
  delay?: number;
  skew?: boolean;
}> = ({ children, delay = 0, skew }) => {
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
        skewY: skew ? 5 : 0,
      },
      {
        translateY: "-5",
        opacity: 1,
        duration: 1,
        delay: 0.25 + delay,
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
