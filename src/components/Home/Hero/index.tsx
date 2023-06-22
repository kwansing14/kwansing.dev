import Link from "next/link";
import Links from "@/components/Home/Hero/Links";
import AText from "@/ui/AText";
import dynamic from "next/dynamic";
const Laptop = dynamic(() => import("@/ui/Laptop"), { ssr: false });

const Hero = () => {
  return (
    <div className="px-4 lg:px-14">
      <div className="flex flex-col items-end lg:flex-row">
        <div className="z-10 w-full lg:w-6/12">
          <div className="mt-0 text-4xl font-extrabold min-[300px]:text-6xl md:mt-24 md:text-9xl">
            KwanSing
          </div>
          <div className="flex flex-col">
            <div className="mt-8 lg:mt-32">
              <Link href="mailto:kwansing@hotmail.sg" className="underline ">
                kwansing@hotmail.sg
              </Link>
            </div>
            <div className="mt-6 text-2xl font-bold leading-tight md:text-4xl">
              <AText skew>/Software Developer</AText>
            </div>
            <div className="text-2xl font-bold leading-tight md:text-4xl">
              <AText skew delay={0.5}>
                /Frontend Developer
              </AText>
            </div>
            <div className="mt-4 lg:mt-12">
              <Links />
            </div>
          </div>
        </div>
        <div className="mt-4 h-80 w-full md:h-120 lg:mt-0 lg:w-6/12 xl:h-144">
          <Laptop src={"/mac/mac-portfolio2023.gltf"} />
        </div>
      </div>
      <div className="mt-16 h-1.5 w-full bg-black dark:bg-white" />
    </div>
  );
};

export default Hero;
