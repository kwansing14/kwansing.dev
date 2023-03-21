import ProjectCard from '@/ui/ProjectCard';
import AText from '@/ui/AText';

interface Prop {
  title: string;
  texts: string;
}

const Template: React.FC<Prop> = ({ title, texts }) => {
  console.log(texts);
  return (
    <ProjectCard laptopSrc='/mac/mac-portfolio2023.gltf'>
      <div className='mt-6 mb-2 text-7xl font-bold'>
        <AText>{title}</AText>
      </div>
      <div className='mt-4'>
        The portfolio project was built in 2022, utilizing the latest web
        technologies to provide a modern and optimized user experience. The
        project was created using NextJS, which provides numerous benefits such
        as improved performance, better SEO, and simplified development.
      </div>
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

export default Template;
