"use client";
import { useEffect, useState } from "react";

export function useTheme() {
  const t = localStorage.getItem("theme") || "";
  const [theme, setTheme] = useState<string>(t);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
      root.classList.add("dark");
    } else {
      localStorage.setItem("theme", "");
      root.classList.remove("dark");
    }
  }, [theme]);

  return [theme, setTheme] as const;
}
