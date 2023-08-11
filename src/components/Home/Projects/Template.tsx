import { StaticImageData } from "next/image";
import { ReactNode } from "react";
// import { BiLinkExternal } from "react-icons/bi";
import AText from "@/ui/AText";
// import LinkBar from "@/ui/LinkBar";
import ProjectPic from "@/ui/ProjectPic";
// import Link from "next/link";
import Links from "@/ui/Links";

interface Prop {
  title: string;
  children: ReactNode;
  web: StaticImageData | string;
  mobile: StaticImageData | string;
  links: { name: string; href: string }[];
}

const Template: React.FC<Prop> = ({ title, children, web, mobile, links }) => {
  return (
    <div className="flex h-auto w-full flex-col-reverse lg:h-144 lg:flex-row">
      <div className="mt-8 flex w-full flex-col pr-4 lg:mt-0 lg:w-6/12">
        <div className="font-extrabold uppercase tracking-widest">Project</div>
        <div className="mt-6 mb-2 text-5xl font-bold lg:text-7xl">
          <AText>{title}</AText>
        </div>
        <div className="mt-2 [&>div]:mt-4">{children}</div>
        <nav className="flex gap-4">
          <Links links={links} />
        </nav>
      </div>
      <div className="relative h-64 w-full md:h-96 lg:h-144 lg:w-6/12">
        <ProjectPic web={web} mobile={mobile} />
      </div>
    </div>
  );
};

export default Template;
