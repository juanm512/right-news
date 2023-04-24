"use client"
import { m as motion } from "framer-motion"
import useHasMounted from "@/utils/hooks/useHasMounted"

type EntranceYProps = {
  children: React.ReactNode
  direction?: "up" | "down"
  duration?: number
  delay?: number
}

const variants = {
  up: {
    initial: {
      y: 100,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1
    }
  },
  down: {
    initial: {
      y: -100,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1
    }
  }
}

export default function EntranceY({
  children,
  direction = "down",
  duration = 0.5,
  delay = 0
}: EntranceYProps) {
  const hasMounted = useHasMounted()
  if (!hasMounted) {
    return <div className="opacity-0">{children}</div>
  }

  return (
    <motion.div
      variants={variants[direction]}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  )
}
