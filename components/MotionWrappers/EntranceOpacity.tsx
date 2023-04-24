"use client"
import { m as motion } from "framer-motion"

import useHasMounted from "@/utils/hooks/useHasMounted"

type EntranceOpacityProps = {
  children: React.ReactNode
  duration?: number
  delay?: number
  className?: string
}

export default function EntranceOpacity({
  children,
  duration = 0.75,
  delay = 0,
  className
}: EntranceOpacityProps) {
  const hasMounted = useHasMounted()
  if (!hasMounted) {
    return <div className="opacity-0">{children}</div>
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  )
}
