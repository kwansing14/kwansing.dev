import { Sofia_Sans } from 'next/font/google';

import Hero from '@/components/Hero';
// import AboutMe from '@/components/AboutMe';
import Projects from '@/components/Projects';
import Blogs from '@/components/Blogs';
import Footer from '@/components/Footer';

const SofiaSans = Sofia_Sans({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={SofiaSans.className}>
      <Hero />
      {/* <Projects />
      <Blogs />
      <Footer /> */}
    </main>
  );
}
