"use client";
import React from "react";
import { useScroll, m as motion } from "framer-motion";

export default function Nav({ children }: { children: React.ReactNode }) {
  /** this hook gets the scroll y-axis **/
  const { scrollY, scrollYProgress }: any = useScroll();
  /** this hook manages state **/
  const [hidden, setHidden] = React.useState(false);
  const [backTop, setBackTop] = React.useState(false);

  React.useEffect(() => {
    function updateHidden() {
      if (scrollY.current < scrollY.prev) {
        setHidden(false);
      } else if (scrollY.current > 100 && scrollY.current > scrollY.prev) {
        setHidden(true);
      }
    }

    const unsubX = scrollY.on("change", updateHidden);
    const unsubY = scrollYProgress.on("change", (v: any) => {
      if (v > 0.5) {
        setBackTop(true);
      } else {
        setBackTop(false);
      }
    });

    return () => {
      unsubX();
    };
  }, [scrollY]);

  /** add this const **/
  const variants = {
    /** this is the "visible" key and it's correlating styles **/
    visible: { opacity: 1, y: 0 },
    /** this is the "hidden" key and it's correlating styles **/
    hidden: { opacity: 0, y: -25 },
  };

  return (
    <>
      <motion.nav
        className={`max-w-screen fixed left-1/2 top-0 flex w-full flex-wrap items-center justify-between px-1 pt-4 transition-transform duration-500 delay-100 md:max-w-screen-xl ${
          hidden ? "z-[-1]" : "z-10 backdrop-blur"
        }`}
        variants={variants}
        /** it's right here that we match our boolean state with these variant keys **/
        animate={hidden ? "hidden" : "visible"}
        /** I'm also going to add a custom easing curve and duration for the animation **/
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.3 }}
        style={{ x: "-50%" }}
      >
        {children}
      </motion.nav>

      <motion.button
        className="group fixed bottom-4 right-4 z-10 flex flex-row items-center justify-center rounded-full bg-neutral-300 px-2 py-2 shadow-md hover:bg-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-500 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        initial="hidden"
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        animate={backTop ? "visible" : "hidden"}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block h-6 w-6 stroke-current"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 13v-10"></path>
          <path d="M9 6l3 -3l3 3"></path>
          <path d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0 -4z"></path>
        </svg>
      </motion.button>
    </>
  );
}
