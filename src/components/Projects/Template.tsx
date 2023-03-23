import { ReactNode } from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import AText from '@/ui/AText';
import LinkBar from '@/ui/LinkBar';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface Prop {
  title: string;
  children: ReactNode;
  web: StaticImageData;
  mobile: StaticImageData;
}

const Template: React.FC<Prop> = ({ title, children, web, mobile }) => {
  return (
    <div className='w-full h-144 flex'>
      <div className='w-6/12 mr-4 flex flex-col'>
        <div className='tracking-widest font-extrabold uppercase'>Project</div>
        <div className='mt-6 mb-2 text-7xl font-bold'>
          <AText>{title}</AText>
        </div>
        <div className='mt-2 [&>div]:mt-4'>{children}</div>
        <LinkBar>
          Link
          <BiLinkExternal />
        </LinkBar>
      </div>
      <div className='w-6/12 h-144 relative translate-y-16'>
        {/* <Image
          src='/static/alephweb.png'
          alt='alephweb'
          width={667}
          height={500}
        /> */}

        <Image
          className='absolute top-0 left-0 translate-x-8'
          src={web}
          alt='webSS'
        />
        <Image
          className='absolute top-0 left-0 -translate-x-1/3 scale-75 translate-y-8'
          src={mobile}
          alt='mobileSS'
        />
      </div>
    </div>
  );
};

export default Template;
