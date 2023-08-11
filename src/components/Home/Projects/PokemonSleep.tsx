import Template from "./Template";
import web from "@public/static/pokemonsleep-web.png";
import mobile from "@public/static/pokemonsleep-mobile.png";
import AText from "@/ui/AText";

const PokemonSleepProject = () => {
  const links = [
    {
      name: "Site",
      href: "https://pokemonsleep.kwansing.dev/",
    },
    {
      name: "Github",
      href: "https://github.com/kwansing14/pokemonsleep.kwansing.dev",
    },
  ];

  return (
    <Template
      title="Pokemon Sleep Research Community"
      web={web}
      mobile={mobile}
      links={links}
    >
      <AText>
        Pokemon Sleep Research Community a place to share their ID and add each
        other.
      </AText>
      <AText>
        <>
          The aim of this project is a:
          <p>1. A place to find other researchers easily.</p>
          <p>2. Easy to copy and paste Pokemon Sleeper IDs. </p>
          <p>3. Keeping track of the id you have copied.</p>
        </>
      </AText>
      <AText>Over 100 users has shared their IDs on this site.</AText>
    </Template>
  );
};

export default PokemonSleepProject;
