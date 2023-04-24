"use client"
import { m as motion } from "framer-motion"

import useHasMounted from "@/utils/hooks/useHasMounted"

type EntranceScaleProps = {
  children: React.ReactNode
  duration?: number
  delay?: number
  className?: string
}

export default function EntranceScale({
  children,
  duration = 0.75,
  delay = 0,
  className
}: EntranceScaleProps) {
  const hasMounted = useHasMounted()
  if (!hasMounted) {
    return <div className="opacity-0">{children}</div>
  }
  return (
    <motion.div
      className={className}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration, delay, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  )
}
