"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

const KwanSingSVG: React.FC = () => {
  // Create a GreenSock timeline that will repeat infinitely
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
      <path
        d="M48 46.9c-3 4.9-19 29-6 28.1 7-1.6 10-8.1 13-12.9 5-5.1 5-11.9 9-17.4-5 9.2-14 21-10 31.8 7-.3 13-8.4 18-14.3 16-29.7-3-14.7 0 .1"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M103 53.1c-1-17.5-20-2.3-23 6.3-1 4.3-3 11.9 2 14.9 11 4.3 21-21.5 25-29.4-3 9.5-11 18-11 28.4 2 10.1 16-3.1 16-8.5"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M128 45.8c-7 8.7-12 19.1-14 30.1 2-6.3 5-12.1 10-17 1-1.9 18-18.6 18-11.2-2 7.2-7 13.6-9 21.2 0 1.7-1 3.6 0 5.3 5 8.4 14-3 16-9.2"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M207 46c24-29.4-24-20.3-24 2.7 1 9 12 11.3 16 18.1 5 17.5-24 8.7-28-1.6"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M227.3 38.8v-.1m-4 9.8c-3 4.5-4 9.6-6 14-2 3.2-4 6.5-4 10.5 0 1.8 1 3.1 3 2.8 7-.7 10-7.4 14-12.3"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M246.7 45.8c-7 8.7-12 19.1-14 30.1 2-6.3 5-12.1 10-17 1-1.9 18-18.6 18-11.2-2 7.2-7 13.6-9 21.2 0 1.7-1 3.6 0 5.3 5 8.4 14-3 16-9.2"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M292.7 57.5c0-5.1 1-17.5-7-12.2-8 4.8-19 15.6-17 25.3 13 10.4 25-17.4 29-26.2-3 4.9-31 78.3-36 54.9 2-22.1 35-18.2 41-36.9"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

export default KwanSingSVG;
