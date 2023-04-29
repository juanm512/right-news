import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import dynamic from "next/dynamic";

// import EntranceScale from "../MotionWrappers/EntranceScale"
// import EntranceClipPath from "../MotionWrappers/EntranceClipPath"
// import EntranceOpacity from "../MotionWrappers/EntranceOpacity"

import NavHiddenOnScroll from "../MotionWrappers/NavHiddenOnScroll";
const SettingsButton = dynamic(() => import("./SettingsButton"));
const NewspaperEdition = dynamic(() => import("./NewspaperEdition"));

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function MainNavBar() {
  return (
    <div className="flex basis-full flex-row justify-between gap-2 py-4 dark:text-gray-100">
      {/* donaciones */}
      <div className="hidden basis-3/12 flex-col items-start justify-between gap-4 md:flex">
        <NavHiddenOnScroll hiddenClass={["hidden", "block"]}>
          {/* <EntranceOpacity delay={0.75}> */}
          <div className="flex animate-[clipPathDown_1s_0.1s_ease-out] flex-col items-start gap-2">
            <p className={playfair.className + " text-lg font-medium"}>
              Apoyanos con una donación
            </p>
            <p className="text-sm font-normal italic opacity-[0.6]">
              Independientes, sin censura, sin pauta del estado
            </p>
          </div>
          {/* </EntranceOpacity> */}
        </NavHiddenOnScroll>

        {/* <EntranceScale
          delay={0.75}
          duration={1}
        > */}
        <Link
          href="/donar"
          className="flex animate-[scale_1s_0.1s_ease-out] flex-row items-center rounded-full border border-black px-4 py-2 text-base dark:border-gray-200 "
        >
          Contribuir
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 inline-block h-5 w-5"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
            <path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25"></path>
            <path d="M12.5 15.5l2 2"></path>
            <path d="M15 13l2 2"></path>
          </svg>
        </Link>
        {/* </EntranceScale> */}
      </div>

      {/* logo con selector de localizacion del diario */}
      <div className="flex basis-6/12 animate-[clipPathUpRight_1s_0.1s_ease-out] select-none flex-col items-center justify-between">
        {/* <EntranceClipPath
          delay={0.75}
          duration={1.5}
          direction="upRight"
        > */}
        <NavHiddenOnScroll
          className=" transition-all duration-500 ease-in-out"
          hiddenClass={["h-10", "h-fit"]}
        >
          <Image
            src="/Logo-La-Derecha-Diario.png"
            alt="Logo La Derecha Diario"
            width={1606}
            height={310}
            className="h-full max-w-xs object-contain object-center brightness-[0.2] drop-shadow-sm dark:invert md:max-w-md"
            style={{ imageRendering: "auto" }}
          />
        </NavHiddenOnScroll>
        {/* </EntranceClipPath> */}
        <NavHiddenOnScroll hiddenClass={["hidden", "block"]}>
          {/* <EntranceScale delay={0.75}> */}
          <NewspaperEdition />
          {/* </EntranceScale> */}
        </NavHiddenOnScroll>
      </div>

      {/* search, user, theme */}
      <div className="flex basis-3/12 flex-row items-center justify-end gap-4">
        {/* user picture if logged, else user icon */}
        {/* <EntranceScale delay={0.75}> */}
        <div className="flex animate-[scaleOpacity_1.5s_0.1s_ease-in-out] items-center justify-center">
          <SettingsButton />
        </div>
        {/* </EntranceScale> */}
      </div>
    </div>
  );
}
