"use client"
import { m as motion } from "framer-motion"
import useHasMounted from "@/utils/hooks/useHasMounted"

type EntranceClipPathProps = {
  children: React.ReactNode
  direction?:
    | "up"
    | "down"
    | "left"
    | "right"
    | "upLeft"
    | "upRight"
    | "downLeft"
    | "downRight"
  duration?: number
  delay?: number
  className?: string
  showInView?: boolean
}

const variants = {
  up: {
    clipPath: "inset(100% 0 0 0)"
  },
  down: {
    clipPath: "inset(0 0 100% 0)"
  },
  left: {
    clipPath: "inset(0 0 0 100%)"
  },
  right: {
    clipPath: "inset(0 100% 0 0)"
  },
  upLeft: {
    clipPath: "inset(100% 0 0 100%)"
  },
  upRight: {
    clipPath: "inset(100% 100% 0 0)"
  },
  downLeft: {
    clipPath: "inset(0 0 100% 100%)"
  },
  downRight: {
    clipPath: "inset(0 100% 100% 0)"
  }
}

export default function EntranceClipPath({
  children,
  direction = "down",
  duration = 0.5,
  delay = 0,
  className = "",
  showInView = false
}: EntranceClipPathProps) {
  // const hasMounted = useHasMounted()
  if (!showInView) {
    return (
      <div
        className={
          className +
          ` animate-[clipPath${
            direction.slice(0, 1).toUpperCase() + direction.slice(1)
          }_${duration}s_ease-in-out]`
        }
      >
        {children}
      </div>
    )
  }

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={showInView ? { clipPath: "inset(0 0 0 0)" } : undefined}
      animate={
        showInView
          ? false
          : {
              clipPath: "inset(0 0 0 0)"
            }
      }
      // exit={variants[direction]}
      viewport={{
        once: true,
        amount: "some"
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
