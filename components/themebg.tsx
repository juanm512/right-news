"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";

import useHasMounted from "@/utils/hooks/useHasMounted";

export default function ThemeBG() {
  const { theme } = useTheme();
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return (
      <div className="fixed inset-0 animate-[clipPathDown_0.5s_0.1s] dark:bg-neutral-900" />
    );
  }

  return (
    <AnimatePresence mode="wait">
      {/* {theme === "dark" && ( */}
      <motion.div
        className="fixed inset-0 z-[-1] bg-neutral-900"
        initial={false} //{ clipPath: "inset(0 0 100% 0)", zIndex: -1 }
        animate={{
          clipPath: theme === "dark" ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
        }}
        // exit={{ clipPath: "inset( 0 0 100% 0)", zIndex: -1 }}
        transition={{
          duration: 0.5,
          ease: [0.6, -0.05, 0.01, 0.99],
          // zIndex: { duration: 0.5, delay: 0.5 }
        }}
      />
      {/* )} */}
    </AnimatePresence>
  );
}
