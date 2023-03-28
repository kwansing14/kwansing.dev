"use client";
import { useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
interface Prop {
  web: StaticImageData;
  mobile: StaticImageData;
}

const ProjectPic: React.FC<Prop> = ({ web, mobile }) => {
  const macRef = useRef(null);
  const mobileRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: macRef.current,
        start: "bottom bottom",
        end: "center top",
        scrub: true,
      },
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: mobileRef.current,
        start: "bottom bottom",
        end: "center top",
        scrub: true,
      },
    });

    tl.to(macRef.current, {
      translateY: "-25px",
      ease: "none",
    });

    tl2.to(mobileRef.current, {
      translateY: "-40px",
      ease: "none",
    });
  }, []);

  return (
    <div className="relative aspect-video w-full -translate-y-8 lg:h-144 lg:w-6/12 lg:translate-y-16">
      <Image
        ref={macRef}
        className="absolute top-0 left-0 translate-x-2 lg:translate-x-8"
        src={web}
        alt="webSS"
      />
      <Image
        ref={mobileRef}
        className="absolute top-0 left-0 -translate-x-20 translate-y-16 scale-75 min-[300px]:-translate-x-1/3"
        src={mobile}
        alt="mobileSS"
      />
    </div>
  );
};

export default ProjectPic;
