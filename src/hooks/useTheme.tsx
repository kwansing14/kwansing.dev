"use client";
import { useLayoutEffect, useState } from "react";

export function useTheme() {
  const [output, setOuput] = useState<string>("");

  const setTheme = (input: string) => {
    const root = window.document.documentElement;
    if (input === "dark") {
      localStorage.setItem("theme", "dark");
      root.classList.add("dark");
      setOuput("dark");
    } else {
      localStorage.setItem("theme", "");
      root.classList.remove("dark");
      setOuput("light");
    }
  };

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const t = localStorage.getItem("theme") || "";
    setTheme(t);
  }, []);

  return [output, setTheme] as const;
}
