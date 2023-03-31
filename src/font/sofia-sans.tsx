import { Sofia_Sans } from "next/font/google";

const SofiaSans = Sofia_Sans({
  subsets: ["latin"],
  fallback: ["system-ui", "arial"],
});

export default SofiaSans;
