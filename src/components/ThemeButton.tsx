"use client";
import { useTheme } from "@/hooks/useTheme";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const ThemeSwitch = () => {
  const [theme, setTheme] = useTheme();

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex justify-end">
      <button
        className="flex items-center gap-2 pr-4 pt-8"
        onClick={handleClick}
      >
        {theme === "dark" ? "Dark" : "Light"}
        {theme === "dark" ? <MdDarkMode /> : <MdLightMode />}
      </button>
    </div>
  );
};

export default ThemeSwitch;
