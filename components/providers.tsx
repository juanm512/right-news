"use client"

import { ThemeProvider } from "next-themes"
import { LazyMotion, domAnimation } from "framer-motion"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      enableColorScheme={false}
    >
      <LazyMotion features={domAnimation}>{children}</LazyMotion>
    </ThemeProvider>
  )
}
