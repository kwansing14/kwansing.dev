"use client";
import { ReactNode, useState } from "react";
import { DarkenBar } from "@/ui/LinkBar";

interface Prop {
  children: ReactNode;
}

const Seperator: React.FC<Prop> = ({ children }) => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsMouseEnter(true)}
      onMouseLeave={() => setIsMouseEnter(false)}
      className="h-full w-full"
    >
      <DarkenBar isMouseEnter={isMouseEnter} />
      {children}
    </div>
  );
};

export default Seperator;
