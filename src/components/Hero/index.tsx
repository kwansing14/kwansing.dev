import Link from "next/link";
import Links from "@/components/Hero/Links";
import AText from "@/ui/AText";
import dynamic from "next/dynamic";

const Hero = () => {
  const Laptop = dynamic(() => import("@/ui/Laptop"), { ssr: false });
  return (
    <div className="px-14">
      <div className="flex items-end">
        <div className="z-10 w-6/12">
          <div className="mt-24 text-9xl font-extrabold">KwanSing</div>
          <div className="flex flex-col">
            <div className="mt-32">
              <Link href="mailto:kwansing@hotmail.sg" className="underline ">
                kwansing@hotmail.sg
              </Link>
            </div>
            <div className="mt-6 text-4xl font-bold leading-tight">
              <AText>/Software Developer</AText>
            </div>
            <div className="text-4xl font-bold leading-tight">
              <AText delay={0.5}>/Frontend Developer</AText>
            </div>
            <div className="mt-12">
              <Links />
            </div>
          </div>
        </div>
        <div className="h-144 w-6/12">
          <Laptop src={"/mac/mac-portfolio2023.gltf"} />
        </div>
      </div>
      <div className="mt-16 h-1.5 w-full bg-black dark:bg-white" />
    </div>
  );
};

export default Hero;
