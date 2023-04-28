"use client"
import React from "react"
import { useScroll, m as motion } from "framer-motion"

export default function NavHiddenOnScroll({
  children,
  className = "",
  hiddenClass
}: {
  children?: React.ReactNode
  className?: string
  hiddenClass: [string, string]
}) {
  /** this hook gets the scroll y-axis **/
  const { scrollYProgress }: any = useScroll()
  const [hidden, setHidden] = React.useState(false)

  React.useEffect(() => {
    function updateHidden() {
      if (scrollYProgress.current.toFixed(2) <= 0.1) {
        setHidden(false)
      } else {
        setHidden(true)
      }
    }

    const unsubX = scrollYProgress.on("change", updateHidden)

    return () => {
      unsubX()
    }
  }, [scrollYProgress])

  return (
    <motion.div
      className={(hidden ? hiddenClass[0] : hiddenClass[1]) + className}
    >
      {children || null}
    </motion.div>
  )
}
