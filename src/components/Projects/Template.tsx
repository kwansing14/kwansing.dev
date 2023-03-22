import { ReactNode } from 'react';
import AText from '@/ui/AText';
import LinkBar from '@/ui/LinkBar';
import { BiLinkExternal } from 'react-icons/bi';
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
      <div className='w-6/12 h-144 border'>empty</div>
    </div>
  );
};

export default Template;
