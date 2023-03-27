import { Sofia_Sans } from "next/font/google";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import LenisWrapper from "@/components/LenisWrapper";
import ThemeButton from "@/components/ThemeButton";

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
