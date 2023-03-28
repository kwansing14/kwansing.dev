import AText from "@/ui/AText";

const Footer = () => {
  return (
    <div className="mt-16 flex justify-between bg-black py-24 px-14 text-white dark:bg-neutral-200 dark:text-neutral-800">
      <div className="flex flex-col">
        <div className="text-7xl">
          <AText>Contact Me</AText>
        </div>
        <div className="mt-16 text-slate-400 underline dark:text-neutral-700">
          kwansing@hotmail.sg
        </div>
        <div className="mt-8 flex gap-8 text-slate-400  dark:text-neutral-700">
          <div>LinkedIn</div> <div>Github</div> <div>SoureCode</div>
        </div>
      </div>
      <div className="flex items-end text-slate-400  dark:text-neutral-700">
        Built with Next13 RSC with Tailwind.
      </div>
    </div>
  );
};

export default Footer;
