import AText from "@/ui/AText";

const Footer = () => {
  return (
    <div className="mt-8 flex flex-col justify-between bg-black py-8 px-4 text-white dark:bg-neutral-200 dark:text-neutral-800 md:mt-16 md:flex-row md:py-24 md:px-14">
      <div className="flex flex-col">
        <div className="text-5xl md:text-7xl">
          <AText>Contact Me</AText>
        </div>
        <div className="mt-8 text-slate-400 underline dark:text-neutral-700 md:mt-16">
          kwansing@hotmail.sg
        </div>
        <div className="mt-2 flex gap-8 text-slate-400 dark:text-neutral-700  md:mt-8">
          <div>LinkedIn</div> <div>Github</div> <div>SoureCode</div>
        </div>
      </div>
      <div className="mt-6 flex items-end text-slate-400 dark:text-neutral-700 md:mt-0">
        Built with Next13 RSC with Tailwind.
      </div>
    </div>
  );
};

export default Footer;
