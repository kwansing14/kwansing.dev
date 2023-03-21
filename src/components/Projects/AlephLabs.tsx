import ProjectCard from '@/ui/ProjectCard';
import AText from '@/ui/AText';

const AlephLabs = () => {
  return (
    <ProjectCard laptopSrc='/mac/mac-draco.gltf'>
      <div className='mt-6 text-7xl font-bold'>
        <AText>Aleph Labs Site</AText>
      </div>
      <div className='mt-6'>Contributed more than 50% of the codebase.</div>
      <div className='mt-4'>
        EmotionJS, a CSS-in-JS library is used to create a scalable and
        maintainable styling solution for the project. EmotionJS enables
        developers to write CSS styles in JavaScript, allowing for more dynamic
        and responsive styling while also reducing the need for separate CSS
        files.
      </div>
      <div className='mt-4'>
        Borders in the page are utilizing polygon clippath, to achieve a high
        degree of customization, allowing for each border to be unique and
        tailored to the specific content it is surrounding.
      </div>
    </ProjectCard>
  );
};

export default AlephLabs;
