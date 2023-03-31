"use client";
import React, { useEffect } from "react";
import Prism from "prismjs";
import "./night-owl.css";

interface Prop {
  code: string;
  language: string;
}
const Code: React.FC<Prop> = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="w-full ">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default Code;
