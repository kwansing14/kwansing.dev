import Template from './Template';
import alephweb from '@public/static/alephweb.png';
import alephmobile from '@public/static/alephmobile.png';

const AlephLabs = () => {
  return (
    <Template title={'Aleph Labs Site'} web={alephweb} mobile={alephmobile}>
      <div>
        In 2022, I had the opportunity to contribute significantly to the
        redesign of the Aleph main website. As a main contributor to the
        project, I was responsible for more than 50% of the code that was
        developed.
      </div>
      <div>
        One of the key contributions I made was pushing the team to use the
        NextJS framework for the website redesign. I believed that NextJS could
        provide many benefits for the project, and by advocating for its use, I
        was able to help the team streamline the development process and make it
        easier to build the new website.
      </div>
      <div>
        Additionally, I was involved in setting up the base file structure for
        the project. This was a crucial task that laid the foundation for the
        rest of the development work. By doing this, I ensured that the project
        was well-organized and easy to work on and setting the proper direction
        for the project to be built on.
      </div>
    </Template>
  );
};

export default AlephLabs;
