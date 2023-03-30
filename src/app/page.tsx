import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Blogs from "@/components/Home/Blogs";
import Footer from "@/components/Footer";
import LenisWrapper from "@/components/LenisWrapper";
import ThemeButton from "@/components/ThemeButton";

import { Sofia_Sans } from "next/font/google";
const SofiaSans = Sofia_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={
        `${SofiaSans.className}` + " dark:bg-neutral-900 dark:text-neutral-200"
      }
    >
      <div className="mx-auto max-w-screen-2xl">
        <LenisWrapper>
          <ThemeButton />
          <Hero />
          <Projects />
          <Blogs />
          <Footer />
        </LenisWrapper>
      </div>
    </main>
  );
}
