import { KwanSingSVG3 } from "@/components/BlogsPost/Svg/kwansingSVG";
import { Sofia_Sans } from "next/font/google";
const SofiaSans = Sofia_Sans({ subsets: ["latin"] });

const SvgAnimation = () => {
  return (
    <main
      className={
        `${SofiaSans.className}` + " dark:bg-neutral-900 dark:text-neutral-200"
      }
    >
      <div className="mx-auto max-w-screen-sm tracking-wide [word-spacing:1.5px]">
        <div className="px-4 pt-16">
          <div className="cursor-pointer">{"< Back to home"}</div>
          <div className="mt-8">30 Mar 2023</div>
          <div className="mt-8 text-4xl font-bold">
            Creating animated SVG with any word.
          </div>
          <div>5 mins read.</div>
          <div className="mt-8 h-0.5 w-full bg-white" />
          <div className="mt-4 h-60 w-full">
            <KwanSingSVG3 />
          </div>
          <div className="mt-4">
            I always wanted to create fancy animated words.
          </div>
          <div>
            Learning svg can be quite difficult. Learning the kinetic svg
            typography
          </div>
          <div>Create the text svg from here</div>
          <div>https://www.templatemaker.nl/singlelinetext/</div>
          <div>this website has seperate characters</div>
          <div>to clear unnecessary svg pathing</div>
          <div>*untick merge path in svgomg</div>
          <div>https://jakearchibald.github.io/svgomg/</div>

          <div>
            credits to tympanus.net for the tutorial:
            https://tympanus.net/codrops/2023/01/31/bringing-letters-to-life-coding-a-kinetic-svg-typography-animation/
          </div>
        </div>
      </div>
    </main>
  );
};

export default SvgAnimation;
