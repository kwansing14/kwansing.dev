import { ReactNode } from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import AText from '@/ui/AText';
import LinkBar from '@/ui/LinkBar';
import Image from 'next/image';

import alephweb from '@public/static/portfolio2022web.png';
import alephmobile from '@public/static/portfolio2022mobile.png';

interface Prop {
  title: string;
  children: ReactNode;
}

const Template: React.FC<Prop> = ({ title, children }) => {
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
      <div className='w-6/12 h-144 border relative translate-y-16'>
        {/* <Image
          src='/static/alephweb.png'
          alt='alephweb'
          width={667}
          height={500}
        /> */}
        <Image
          className='absolute top-0 left-0 -translate-x-64'
          src={alephmobile}
          alt='alephmobile'
        />
        <Image
          className='absolute top-0 left-0 translate-x-16'
          src={alephweb}
          alt='alephweb'
        />
      </div>
    </div>
  );
};

export default Template;
