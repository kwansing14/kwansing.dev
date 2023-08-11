"use client";

import { useState } from "react";
import LinkBar from "@/ui/LinkBar";
import Link from "next/link";

interface Props {
  links: { name: string; href: string }[];
}

const Links: React.FC<Props> = ({ links }) => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  return (
    <LinkBar variant={2} v2State={isMouseEnter}>
      {links.map((link, index) => (
        <Link
          key={index}
          className="cursor-pointer pr-6 transition-all duration-300 hover:text-black dark:hover:text-white"
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
