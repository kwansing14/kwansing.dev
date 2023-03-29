"use client";

import { useState } from "react";
import LinkBar from "@/ui/LinkBar";
import Link from "next/link";

const Links = () => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  const links = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/kwansing/" },
    { name: "GitHub", href: "https://github.com/kwansing14" },
  ];
  return (
    <LinkBar variant={2} v2State={isMouseEnter}>
      {links.map((link, index) => (
        <Link
          key={index}
          className="cursor-pointer transition-all duration-300 hover:text-black dark:hover:text-white"
          onMouseEnter={() => setIsMouseEnter(true)}
          onMouseLeave={() => setIsMouseEnter(false)}
          href={link.href}
          target="_blank"
        >
          {link.name}
        </Link>
      ))}
    </LinkBar>
  );
};

export default Links;
