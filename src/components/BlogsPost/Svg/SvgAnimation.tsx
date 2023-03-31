import Link from "next/link";
import Image from "next/image";
import KwanSingSVG from "@/components/BlogsPost/Svg/kwansingSVG";
import SofiaSans from "@/font/sofia-sans";
import Code from "@/ui/Code";
import { JScode1, JScode2, JScode3 } from "@/components/BlogsPost/Svg/JScode";

const SvgAnimation = () => {
  return (
    <main
      className={
        `${SofiaSans.className}` + " dark:bg-neutral-900 dark:text-neutral-200"
      }
    >
      <div className="mx-auto max-w-screen-sm tracking-wide [word-spacing:1.5px]">
        <div className="px-4 py-16">
          <Link className="cursor-pointer" href="/">
            {"< Back to home"}
          </Link>
          <div className="mt-8">30 Mar 2023</div>
          <div className="mt-8 text-4xl font-bold">
            Creating animated SVG with any word.
          </div>
          <div>5 mins read.</div>
          <div className="mt-8 h-0.5 w-full bg-white" />
          <div className="[&>div]:mt-4">
            <div className="h-60 w-full bg-neutral-800">
              <KwanSingSVG />
            </div>
            <div>
              One of the simplest and fastest way to create fancy animated SVG
              words.
            </div>
            <div>
              <span className="pr-4">1.</span>Use a text svg creator{" "}
              <Link
                className="underline"
                href="https://www.templatemaker.nl/singlelinetext/"
                target="_blank"
              >
                https://www.templatemaker.nl/singlelinetext/
              </Link>
              , and it has to be single-stroke-font for this animation to work.
              Then download the svg file.
            </div>
            <Image
              className="mt-4"
              src="/blogs/svganimation/1.png"
              width={608}
              height={360}
              alt="svganimation1"
            />
            <div>
              <span className="pr-4">2.</span>Upload the downloaded svg file to{" "}
              <Link
                className="underline"
                href="https://jakearchibald.github.io/svgomg/"
                target="_blank"
              >
                https://jakearchibald.github.io/svgomg/
              </Link>{" "}
              to remove the unnecessary svg pathing. Untick merge path in
              svgomg, to split the pathing for each character.
            </div>
            <Image
              className="mt-4"
              src="/blogs/svganimation/2.png"
              width={608}
              height={400}
              alt="svganimation1"
            />
            <div>
              <span className="pr-4">3.</span>Download and import the SVG file
              to vscode. Then copy the svg pathing for each character into a tsx
              file. In the svg tag, add "motion" as a classname to the svg tag.
            </div>
            <Code code={JScode1} language="javascript" />
            <div>
              <span className="pr-4">4.</span>Now add the code to animate the
              svg path. We will have to install gsap library for the animation.
              Run `<code>npm install gsap</code>`. Then copy and paste the code
              below.
            </div>
            <Code code={JScode2} language="javascript" />
            <div>
              <span className="pr-4">5.</span>Import the svg file into a
              component, and give it a height and width, and done.
            </div>
            <Code code={JScode3} language="javascript" />
            <div className="pt-8">
              Credit:{" "}
              <Link
                className="underline"
                href="https://tympanus.net/codrops/2023/01/31/bringing-letters-to-life-coding-a-kinetic-svg-typography-animation/
                "
                target="_blank"
              >
                https://tympanus.net/codrops/2023/01/31/bringing-letters-to-life-coding-a-kinetic-svg-typography-animation/
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SvgAnimation;
