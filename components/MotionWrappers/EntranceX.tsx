"use client"
import { m as motion } from "framer-motion"
import useHasMounted from "@/utils/hooks/useHasMounted"

type EntranceXProps = {
  children: React.ReactNode
  direction?: "left" | "right"
  duration?: number
  delay?: number
  className?: string
}

const variants = {
  left: {
    initial: {
      x: 100,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1
    }
  },
  right: {
    initial: {
      x: -100,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1
    }
  }
}

export default function EntranceX({
  children,
  direction = "left",
  duration = 0.5,
  delay = 0,
  className = ""
}: EntranceXProps) {
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
      className={className}
    >
      {children}
    </motion.div>
  )
}
