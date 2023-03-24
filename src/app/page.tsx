import { Sofia_Sans } from 'next/font/google';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Blogs from '@/components/Blogs';
import Footer from '@/components/Footer';
import LenisWrapper from '@/components/LenisWrapper';

const SofiaSans = Sofia_Sans({ subsets: ['latin'] });

export default function Home() {
  return (
    // <Lenis root>
    <main className={SofiaSans.className}>
      <div className='max-w-screen-2xl mx-auto'>
        <LenisWrapper>
          <Hero />
          <Projects />
          <Blogs />
          <Footer />
        </LenisWrapper>
      </div>
    </main>
    // </Lenis>
  );
}
