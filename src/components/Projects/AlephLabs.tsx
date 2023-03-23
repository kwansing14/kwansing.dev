import Template from './Template';
import alephweb from '@public/static/alephweb.png';
import alephmobile from '@public/static/alephmobile.png';

const AlephLabs = () => {
  return (
    <Template title={'Aleph Labs Site'} web={alephweb} mobile={alephmobile}>
      <div>
        Set up the base file structure and library for Aleph sie. Contributed
        more than 50% of the codebase.
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

export default AlephLabs;
