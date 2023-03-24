import Template from './Template';
import alephweb from '@public/static/portfolioweb.png';
import alephmobile from '@public/static/portfoliomobile.png';

const Portfolio2022 = () => {
  return (
    <Template title={'Portfolio 2022'} web={alephweb} mobile={alephmobile}>
      <div>
        The portfolio project was built in 2022, and showcasing the projects
        that I had done. The project was created using NextJS, which provides
        numerous benefits such as improved performance, better SEO, and
        simplified development.
      </div>
      <div>
        EmotionJS, a CSS-in-JS library is used to create a scalable and
        maintainable styling solution for the project. EmotionJS enables
        developers to write CSS styles in JavaScript, allowing for more dynamic
        and responsive styling while also reducing the need for separate CSS
        files.
      </div>
      <div>
        Borders in the page are utilizing polygon clippath, to achieve a high
        degree of customization, allowing for each border to be unique and
        tailored to the specific content it is surrounding.
      </div>
    </Template>
  );
};

export default Portfolio2022;
