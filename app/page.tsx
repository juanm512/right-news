import Image from "next/image"
import { Inter } from "next/font/google"
import ThemeButton from "@/components/ThemeButton"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    // wrap the page in a div with the dark mode class
    <main
      className={
        inter.className +
        "flex min-h-screen flex-col items-center justify-between p-24"
      }
    ></main>
  )
}
