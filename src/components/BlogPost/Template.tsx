import Link from "next/link";
import Image from "next/image";
import SofiaSans from "@/font/sofia-sans";
import Code from "@/ui/Code";

interface Prop {
  date: string;
  title: string;
  mins: number;
  children: React.ReactNode;
}

const CodeTemplate: React.FC<{ code: string }> = ({ code }) => {
  return <Code code={code} language="javascript" />;
};

const NumSpanTemplate: React.FC<{ num: number }> = ({ num }) => {
  return <span className="pr-4">{num}.</span>;
};

const LinkTemplate: React.FC<{ href: string }> = ({ href }) => {
  return (
    <Link className="underline" href={href} target="_blank">
      {href}
    </Link>
  );
};

const ImageTemplate: React.FC<{ src: string }> = ({ src }) => {
  return (
    <Image
      className="mt-4"
      src={src}
      width={608}
      height={360}
      alt={src.split("/").pop() || "img"}
    />
  );
};

const Template: React.FC<Prop> = ({ date, title, mins, children }) => {
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
          <div className="mt-8">{date}</div>
          <div className="mt-8 text-4xl font-bold">{title}</div>
          <div className="mt-2">{mins} mins read.</div>
          <div className="mt-8 h-0.5 w-full bg-white" />
          <div className="[&>div]:mt-4">{children}</div>
        </div>
      </div>
    </main>
  );
};

export const T = {
  Link: LinkTemplate,
  Image: ImageTemplate,
  NumSpan: NumSpanTemplate,
  Code: CodeTemplate,
};
export default Template;
