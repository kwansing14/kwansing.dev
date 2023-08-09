"use client";
import { useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Prop {
  web: StaticImageData | string;
  mobile: StaticImageData | string;
}

const ProjectPic: React.FC<Prop> = ({ web, mobile }) => {
  const mobileRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: mobileRef.current,
        start: "bottom bottom",
        end: "center top",
        scrub: 2,
      },
    });
    tl2.to(mobileRef.current, {
      translateY: "-40px",
      ease: "none",
    });
  }, []);

  return (
    <>
      <Image
        className="absolute top-0 left-0 right-0 mx-auto h-full w-10/12 shrink-0 object-contain md:w-auto lg:top-24 lg:left-24 lg:h-auto lg:w-96 xl:w-120 2xl:w-144"
        src={web}
        alt="webSS"
        priority
      />
      <Image
        ref={mobileRef}
        className="absolute left-4 top-14 h-2/3 w-auto sm:left-24 md:left-5 lg:left-14 lg:top-32 lg:h-auto lg:w-24 xl:left-5 xl:w-32 2xl:w-40"
        src={mobile}
        alt="mobileSS"
        priority
      />
    </>
  );
};

export default ProjectPic;
