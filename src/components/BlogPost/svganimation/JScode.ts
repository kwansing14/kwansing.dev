const code1 = `const SvgAnimation = () => {
  return (
    <svg
      className="motion" // add motion className here
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeWidth="4"
      viewBox="-5 0 312.7 150"
    >
      <path
        d="M45 25.1C37 39.3 22 48.4 8 55.2c7 3.1 10 13.4 11 21.1m3-51C10 40.2 4 58.5-1 76.2"
        vectorEffect="non-scaling-stroke"
      />
      ...
      // rest of the path for each character.
      ...
    </svg>
  );
};`;

const code2 = `import { useEffect } from "react";
import { gsap } from "gsap";

const SvgAnimation = () => {
  const tl = gsap.timeline({
    id: "Timeline",
    repeat: -1,
    repeatDelay: 0.5,
    repeatRefresh: true,
  });

  const colors = ["#e97777", "#ffc777", "#fffad7"];
  const tween = (node: any) => {
    let path = node;
    const delay = Math.random() * 1;
    const length = path.getTotalLength();
    colors.forEach((color, index) => {
      if (index !== 0) {
        path = path.cloneNode();
        node.parentNode.appendChild(path);
      }
      path.setAttribute("stroke", color);
      tl.set(
        path,
        {
          strokeDasharray: length * 2 + 0.5,
          strokeDashoffset: length * 2 + 0.6,
          autoRound: "false",
        },
        0
      );
      tl.to(
        path,
        {
          strokeDashoffset: 0,
          autoRound: false,
          duration: 1.7,
          ease: "power4",
        },
        index * 0.25 + delay
      );
    });
  };

  useEffect(() => {
    const lines = document.querySelectorAll(".motion path, .motion line");
    lines.forEach((p) => tween(p));
  }, []);

  return (
    <svg
      className="motion" // add motion className here
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeWidth="4"
      viewBox="-5 0 312.7 150"
    >
      <path
        d="M45 25.1C37 39.3 22 48.4 8 55.2c7 3.1 10 13.4 11 21.1m3-51C10 40.2 4 58.5-1 76.2"
        vectorEffect="non-scaling-stroke"
      />
      ...
      // rest of the code
      ...
    </svg>
  );
};`;

const code3 = `import KwanSingSVG from "@/components/BlogsPost/Svg/kwansingSVG";

  return (
    <div className="h-60 w-full bg-neutral-800">
      <KwanSingSVG />
    </div>
  );
};`;

export const JScode1 = code1;
export const JScode2 = code2;
export const JScode3 = code3;
