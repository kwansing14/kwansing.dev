"use client";
import { ThemeProvider } from "@wits/next-themes";

interface Prop {
  children: React.ReactNode;
}

const Provider: React.FC<Prop> = ({ children }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Provider;
