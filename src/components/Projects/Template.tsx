import ProjectCard from '@/ui/ProjectCard';
import AText from '@/ui/AText';
import { ReactNode } from 'react';

interface Prop {
  title: string;
  children: ReactNode;
  pic: string;
}

const Template: React.FC<Prop> = ({ title, children, pic }) => {
  return (
    <ProjectCard laptopSrc={pic}>
      <div className='mt-6 mb-2 text-7xl font-bold'>
        <AText>{title}</AText>
      </div>
      <div className='mt-2 [&>div]:mt-4'>{children}</div>
    </ProjectCard>
  );
};

export default Template;
