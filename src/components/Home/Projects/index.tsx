import Portfolio2022 from "@/components/Home/Projects/Portfolio2022";
import AlephLabs from "@/components/Home/Projects/AlephLabs";
// import KnoxDao from "./KnoxDao";

const GreyBorder = () => {
  return <div className="my-12 h-0.5 bg-neutral-200 dark:bg-neutral-500" />;
};

const Projects = () => {
  return (
    <div className="mt-8 px-4 md:mt-16 md:px-14 ">
      <Portfolio2022 />
      <GreyBorder />
      <AlephLabs />
      {/* <GreyBorder /> */}
      {/* <KnoxDao /> */}
      <div className="mt-8 h-1.5 w-full bg-black dark:bg-neutral-200 md:mt-16" />
    </div>
  );
};

export default Projects;
