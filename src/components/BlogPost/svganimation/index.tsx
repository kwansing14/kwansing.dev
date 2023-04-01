import Template, { T } from "@/components/BlogPost/Template";
import KwanSingSVG from "@/components/BlogPost/svganimation/svg";
import {
  JScode1,
  JScode2,
  JScode3,
} from "@/components/BlogPost/svganimation/JScode";

const SvgAnimation = () => {
  return (
    <Template date="30 Mar 2023" title="Creating animated SVG word." mins={5}>
      <div className="h-60 w-full bg-neutral-800">
        <KwanSingSVG />
      </div>
      <div>
        One of the simplest and fastest way to create fancy animated SVG words.
      </div>
      <div>
        <T.NumSpan num={1} />
        Use a text svg creator{" "}
        <T.Link href="https://www.templatemaker.nl/singlelinetext/" /> and it
        has to be single-stroke-font for this animation to work. Then download
        the svg file.
      </div>
      <T.Image src="/blogs/svganimation/1.png" />
      <div>
        <T.NumSpan num={2} /> Upload the downloaded svg file to{" "}
        <T.Link href="https://jakearchibald.github.io/svgomg/" /> to remove the
        unnecessary svg pathing. Untick merge path in svgomg, to split the
        pathing for each character.
      </div>
      <T.Image src="/blogs/svganimation/2.png" />
      <div>
        <T.NumSpan num={3} />
        Download and import the SVG file to vscode. Then copy the svg pathing
        for each character into a tsx file. In the svg tag, add "motion" as a
        classname to the svg tag.
      </div>
      <T.Code code={JScode1} />
      <div>
        <T.NumSpan num={4} />
        Now add the code to animate the svg path. We will have to install gsap
        library for the animation. Run `<code>npm install gsap</code>`. Then
        copy and paste the code below.
      </div>
      <T.Code code={JScode2} />
      <div>
        <T.NumSpan num={5} />
        Import the svg file into a component, and give it a height and width,
        and done.
      </div>
      <T.Code code={JScode3} />
      <div className="pt-8 text-left">
        Credit:{" "}
        <T.Link
          href="https://tympanus.net/codrops/2023/01/31/bringing-letters-to-life-coding-a-kinetic-svg-typography-animation/
                "
        />
      </div>
    </Template>
  );
};

export default SvgAnimation;
