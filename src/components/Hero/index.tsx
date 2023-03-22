import Link from 'next/link';
import Links from '@/components/Hero/Links';
import AText from '@/ui/AText';

const Hero = () => {
  return (
    <div className='w-full mt-72 px-14'>
      <div className='text-9xl font-extrabold'>KwanSing</div>
      <div className='mt-40 justify-between flex'>
        <div>
          <Link href='mailto:kwansing@hotmail.sg' className='underline'>
            kwansing@hotmail.sg
          </Link>
          <div className='mt-6 text-4xl font-bold leading-tight'>
            <AText>/Software Developer</AText>
          </div>
          <div className='text-4xl font-bold leading-tight'>
            <AText>/Frontend Developers</AText>
          </div>
        </div>
        <div className='mr-8 flex flex-col justify-between'>
          <div className='whitespace-pre-line'>
            {'Full stack developer.\n' +
              'Loves bleeding edge technology.\n' +
              'But bleed responsibly.'}
          </div>
          <Links />
        </div>
      </div>
      <div className='bg-black w-full h-1.5 mt-16' />
    </div>
  );
};

export default Hero;
