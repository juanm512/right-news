"use client";
import { m as motion } from "framer-motion";
import useHasMounted from "@/utils/hooks/useHasMounted";

type EntranceYProps = {
  children: React.ReactNode;
  direction?: "up" | "down";
  duration?: number;
  delay?: number;
  showInView?: boolean;
};

const variants = {
  up: {
    initial: {
      y: 100,
      opacity: 0,
    },
  },
  down: {
    initial: {
      y: -100,
      opacity: 0,
    },
  },
};

export default function EntranceY({
  children,
  direction = "down",
  duration = 0.5,
  delay = 0,
  showInView = false,
}: EntranceYProps) {
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return <div className="opacity-0">{children}</div>;
  }

  return (
    <motion.div
      variants={variants[direction]}
      initial="initial"
      animate={showInView ? false : { y: 0, opacity: 1 }}
      whileInView={showInView ? { y: 0, opacity: 1 } : undefined}
      viewport={{
        once: true,
        amount: "some",
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
