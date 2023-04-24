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
  className = ""
}: EntranceClipPathProps) {
  const hasMounted = useHasMounted()
  if (!hasMounted) {
    return <div className="opacity-0">{children}</div>
  }

  return (
    <motion.div
      initial={variants[direction]}
      animate={{
        clipPath: "inset(0 0 0 0)"
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
