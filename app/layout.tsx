import "./globals.css"
import { Inter } from "next/font/google"

import Providers from "@/components/providers"
import ThemeBG from "@/components/themebg"

import DayInformation from "@/components/NavBar/DayInformation"
import MainNavBar from "@/components/NavBar/MainNavBar"
import SectionsMenu from "@/components/NavBar/SectionsMenu"
import EntranceClipPath from "@/components/MotionWrappers/EntranceClipPath"

const inter = Inter({ subsets: ["cyrillic"] })

export const metadata = {
  title: "La Derecha Diario",
  description: "gsdfgbniosdgsui"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/Logo-Simple-LDD.png"
        />
      </head>
      <body className={inter.className + " px-8"}>
        <Providers>
          <ThemeBG />
          <nav className="flex items-center justify-between flex-wrap py-4">
            {/* day information */}
            <DayInformation />

            {/* Barra de separacion */}
            <EntranceClipPath
              direction="right"
              delay={0.3}
              duration={2.7}
              className="w-full"
            >
              <div className="w-full h-2 bg-black/90 dark:bg-gray-300/90 my-2" />
            </EntranceClipPath>

            {/* donaciones | logo | (search, user, theme)  
            // this or the next one have to be sticky 
            and stay on the top of page.

            Important thing is that the logo is always visible, user, theme and search
            
            */}
            <MainNavBar />

            {/* Barra de separacion */}
            <EntranceClipPath
              direction="right"
              delay={0.6}
              duration={2.4}
              className="w-full"
            >
              <div className="w-full h-px bg-black dark:bg-gray-300/75 my-2" />
            </EntranceClipPath>

            {/* menu for more sections | sections...  */}
            <SectionsMenu />

            {/* Barra de separacion */}
            <EntranceClipPath
              direction="right"
              delay={0.9}
              duration={2.1}
              className="w-full"
            >
              <div className="w-full h-px bg-black dark:bg-gray-300/75 my-2" />
            </EntranceClipPath>
          </nav>

          {children}

          <footer className="flex items-center justify-between flex-wrap py-4">
            <div className="w-full h-px bg-black dark:bg-gray-300/75 my-2" />
            <DayInformation />
          </footer>
        </Providers>
      </body>
    </html>
  )
}
