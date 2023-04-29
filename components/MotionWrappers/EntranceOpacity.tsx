"use client";
import { m as motion } from "framer-motion";

import useHasMounted from "@/utils/hooks/useHasMounted";

type EntranceOpacityProps = {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
  showInView?: boolean;
};

export default function EntranceOpacity({
  children,
  duration = 0.75,
  delay = 0,
  className = "",
  showInView = false,
}: EntranceOpacityProps) {
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return <div className="opacity-0">{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={
        showInView
          ? false
          : {
              opacity: 1,
            }
      }
      whileInView={showInView ? { opacity: 1 } : undefined}
      viewport={{
        once: true,
        amount: "some",
      }}
      transition={{ duration: duration, delay: delay, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
