import Portfolio2022 from '@/components/Projects/Portfolio2022';
import AlephLabs from './AlephLabs';
import KnoxDao from './KnoxDao';

const GreyBorder = () => {
  return <div className='h-0.5 bg-slate-200 my-12' />;
};

const Projects = () => {
  return (
    <div className='mt-16 px-14'>
      <Portfolio2022 />
      <GreyBorder />
      <AlephLabs />
      <GreyBorder />
      <KnoxDao />
      <div className='bg-black h-1.5 mt-16 w-full' />
    </div>
  );
};

export default Projects;
