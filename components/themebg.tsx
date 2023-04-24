"use client"
import { AnimatePresence, motion } from "framer-motion"
import { useTheme } from "next-themes"

export default function ThemeBG() {
  const { theme } = useTheme()

  return (
    <AnimatePresence mode="wait">
      {theme === "dark" && (
        <motion.div
          className="bg-neutral-900 fixed inset-0"
          initial={{ clipPath: "inset(0 0 100% 0)", zIndex: 100 }}
          animate={{ clipPath: "inset(0 0 0 0)", zIndex: -1 }}
          exit={{ clipPath: "inset(100% 0 0 0)", zIndex: 100 }}
          transition={{
            duration: 0.7,
            ease: [0.6, -0.05, 0.01, 0.99]
          }}
        />
      )}
    </AnimatePresence>
  )
}
