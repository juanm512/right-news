import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

const PrincipalNews = dynamic(
  () => import("@/components/MainPageSections/PrincipalNews")
);
const Opinion = dynamic(() => import("@/components/MainPageSections/Opinion"));
const Sports = dynamic(() => import("@/components/MainPageSections/Sports"));
const International = dynamic(
  () => import("@/components/MainPageSections/International")
);
const Economy = dynamic(() => import("@/components/MainPageSections/Economy"));

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // wrap the page in a div with the dark mode class
    <main
      className={
        inter.className + " flex min-h-screen flex-col px-2 py-8 md:px-16"
      }
    >
      <PrincipalNews />
      <Opinion />
      <Sports />
      <Economy />
      <International />
    </main>
  );
}
