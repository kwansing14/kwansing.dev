import Seperator from "@/components/Home/Blogs/Seperator";
import { Roboto_Mono } from "next/font/google";
import AText from "@/ui/AText";

const RobotoMono = Roboto_Mono({ subsets: ["latin"] });

const Blogs = () => {
  const blogsList = [
    {
      index: "01",
      name: "WIP",
      content:
        "work in progress - placeholder for future blog post number one.",
    },
    {
      index: "02",
      name: "WIP2",
      content:
        "work in progress2 - placeholder for future blog post number two",
    },
    // {
    //   index: "03",
    //   name: "blog3",
    //   content: "lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    // },
  ];
  return (
    <div className="mt-8 px-4 md:mt-16 md:px-14">
      <div className="mb-4 text-5xl font-bold md:mb-8 md:text-7xl">
        <AText>Blogs</AText>
      </div>
      {blogsList.map((blog, index) => (
        <div key={index} className="flex h-16 md:h-32">
          <div
            className={
              "flex w-2/12 items-center justify-center pr-4 text-sm md:w-1/12 md:justify-start" +
              ` ${RobotoMono.className}`
            }
          >
            {blog.index}
          </div>
          <div className="w-10/12 md:w-11/12">
            <Seperator>
              <div className="flex h-full w-full items-center justify-start">
                <div
                  className={
                    "w-3/12 cursor-pointer text-xl text-slate-800 dark:text-neutral-200 md:text-3xl"
                  }
                >
                  {blog.name}
                </div>
                <div className="w-9/12">
                  <div className="w-auto cursor-pointer truncate text-slate-500 dark:text-neutral-400 md:w-128">
                    {blog.content}
                  </div>
                </div>
              </div>
            </Seperator>
          </div>
        </div>
      ))}
      <div className="mt-8 h-1.5 w-full bg-black dark:bg-neutral-200 md:mt-16" />
    </div>
  );
};

export default Blogs;
