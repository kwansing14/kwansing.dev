import Seperator from "@/components/Blogs/Seperator";
import { Roboto_Mono } from "next/font/google";
import AText from "@/ui/AText";

const RobotoMono = Roboto_Mono({ subsets: ["latin"] });

const Blogs = () => {
  const blogsList = [
    {
      index: "01",
      name: "blog1",
      content: "lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    {
      index: "02",
      name: "blog2",
      content:
        "lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum m lorem ipsum lorem ipsum lorem ipsum",
    },
    {
      index: "03",
      name: "blog3",
      content: "lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
  ];
  return (
    <div className="mt-16 px-14">
      <div className="mb-8 text-7xl font-bold">
        <AText>Blogs</AText>
      </div>
      {blogsList.map((blog, index) => (
        <div key={index} className="flex h-32">
          <div
            className={
              "flex w-1/12 items-center justify-start text-sm" +
              ` ${RobotoMono.className}`
            }
          >
            {blog.index}
          </div>
          <div className="w-11/12">
            <Seperator>
              <div className="flex h-full w-full items-center justify-start">
                <div
                  className={
                    "w-3/12 cursor-pointer text-3xl text-slate-800 dark:text-neutral-200"
                  }
                >
                  {blog.name}
                </div>
                <div className="w-9/12">
                  <div className="w-128 cursor-pointer text-slate-500 dark:text-neutral-400">
                    {blog.content}
                  </div>
                </div>
              </div>
            </Seperator>
          </div>
        </div>
      ))}
      <div className="mt-16 h-1.5 w-full bg-black dark:bg-neutral-200" />
    </div>
  );
};

export default Blogs;
