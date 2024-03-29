import "./globals.css";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";

import Providers from "@/components/providers";
import ThemeBG from "@/components/themebg";

import DayInformation from "@/components/NavBar/DayInformation";
import MainNavBar from "@/components/NavBar/MainNavBar";
import SectionsMenu from "@/components/NavBar/SectionsMenu";
import Nav from "@/components/MotionWrappers/Nav";
import NavHiddenOnScroll from "@/components/MotionWrappers/NavHiddenOnScroll";
const Footer = dynamic(() => import("@/components/Footer/Main"));
// import EntranceClipPath from "@/components/MotionWrappers/EntranceClipPath"

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata = {
  title: "La Derecha Diario",
  description: "gsdfgbniosdgsui",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo-Simple-LDD.png" />
      </head>
      <body
        className={
          inter.className +
          " mt-96 max-w-screen-sm px-0 md:mx-auto md:mt-72 md:max-w-screen-xl md:px-8"
        }
      >
        <Providers>
          <ThemeBG />
          <Nav>
            {/* day information */}
            <DayInformation />

            {/* Barra de separacion */}
            {/* <EntranceClipPath
              direction="right"
              delay={0.3}
              duration={2.7}
              className="w-full"
            > */}
            <NavHiddenOnScroll
              hiddenClass={["h-px my-1", "h-2 my-2"]}
              className=" w-full animate-[clipPathRight_2.1s_ease-out] bg-black/90 dark:bg-gray-300/90"
            />
            {/* </EntranceClipPath> */}

            {/* donaciones | logo | (search, user, theme)  
            // this or the next one have to be sticky 
            and stay on the top of page.

            Important thing is that the logo is always visible, user, theme and search
            
            */}
            <MainNavBar />

            {/* Barra de separacion */}
            {/* <EntranceClipPath
              direction="right"
              delay={0.6}
              duration={2.4}
              className="w-full"
            > */}
            <div className="my-2 h-px w-full animate-[clipPathRight_2.1s_ease-out] bg-black dark:bg-gray-300" />
            {/* </EntranceClipPath> */}

            {/* menu for more sections | sections...  */}
            <SectionsMenu />

            {/* Barra de separacion */}
            {/* <EntranceClipPath
              direction="right"
              delay={0.9}
              duration={2.1}
              className="w-full"
            > */}
            <div className="mt-2 h-px w-full animate-[clipPathRight_2.1s_ease-out] bg-black dark:bg-gray-300" />
            {/* </EntranceClipPath> */}
          </Nav>

          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
