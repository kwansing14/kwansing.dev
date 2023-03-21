import Laptop from '@/ui/Laptop';
import LinkBar from '@/ui/LinkBar';
import { BiLinkExternal } from 'react-icons/bi';

interface Prop {
  laptopSrc: string;
  children: React.ReactNode;
}

const Title = () => {
  return (
    <div className='tracking-widest font-extrabold uppercase'>Project</div>
  );
};

const ProjectCard: React.FC<Prop> = ({ children, laptopSrc }) => {
  return (
    <div className='w-full h-144 flex'>
      <div className='w-6/12 mr-4 flex flex-col'>
        <Title />
        {children}
        <LinkBar>
          Link
          <BiLinkExternal />
        </LinkBar>
      </div>
      <div className='w-6/12 h-144'>
        <Laptop src={laptopSrc} />
      </div>
    </div>
  );
};

export default ProjectCard;
