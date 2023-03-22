import Link from 'next/link';
import Links from '@/components/Hero/Links';
import AText from '@/ui/AText';
import Laptop from '@/ui/Laptop';

const Hero = () => {
  return (
    <div className='px-14'>
      <div className='flex items-end'>
        <div className='w-6/12 z-10'>
          <div className='text-9xl font-extrabold mt-40'>KwanSing</div>
          <div className='flex flex-col'>
            <Link href='mailto:kwansing@hotmail.sg' className='underline mt-32'>
              kwansing@hotmail.sg
            </Link>
            <div className='mt-6 text-4xl font-bold leading-tight'>
              <AText>/Software Developer</AText>
            </div>
            <div className='text-4xl font-bold leading-tight'>
              <AText delay={0.5}>/Frontend Developer</AText>
            </div>
            <div className='mt-12'>
              <Links />
            </div>
          </div>
        </div>
        <div className='w-6/12 h-144'>
          <Laptop src={'/mac/mac-portfolio2023.gltf'} />
        </div>
      </div>
      <div className='bg-black w-full h-1.5 mt-16' />
    </div>
  );
};

export default Hero;
