import Seperator from "@/components/Home/Blogs/Seperator";
import { Roboto_Mono } from "next/font/google";
import AText from "@/ui/AText";
import Link from "next/link";

const RobotoMono = Roboto_Mono({ subsets: ["latin"], fallback: ["system-ui"] });

const Blogs = () => {
  const blogsList = [
    {
      index: "01",
      name: "Journal GPT",
      content: "Integrated GPT into Daily Journals for Alephians.",
      href: "/blog/journal-gpt",
    },
    {
      index: "02",
      name: "Animated SVG",
      content: "Creating animated SVG with any word using GSAP.",
      href: "/blog/svg-animation",
    },
  ];
  return (
    <div className="mt-8 px-4 md:mt-16 md:px-14">
      <div className="mb-4 text-5xl font-bold md:mb-8 md:text-6xl lg:text-7xl">
        <AText>Blogs</AText>
      </div>
      {blogsList.map((blog, index) => (
        <Link
          key={index}
          className="flex h-auto lg:h-32"
          href={blog.href ? blog.href : "#"}
        >
          <div
            className={
              "flex w-2/12 items-center justify-center pr-4 text-sm md:w-1/12 md:justify-start md:py-0" +
              ` ${RobotoMono.className}`
            }
          >
            {blog.index}
          </div>
          <div className="w-10/12">
            <Seperator>
              <div className="my-6 flex h-full w-full flex-col lg:my-0 lg:flex-row lg:items-center">
                <div
                  className={
                    "w-full cursor-pointer text-xl text-slate-800 dark:text-neutral-200 md:w-3/12 md:text-2xl lg:text-3xl"
                  }
                >
                  {blog.name}
                </div>
                <div className="w-full md:w-9/12">
                  <div className="w-auto cursor-pointer truncate text-slate-500 dark:text-neutral-400 md:w-128">
                    {blog.content}
                  </div>
                </div>
              </div>
            </Seperator>
          </div>
        </Link>
      ))}
      <div className="mt-8 h-1.5 w-full bg-black dark:bg-neutral-200 md:mt-16" />
    </div>
  );
};

export default Blogs;
