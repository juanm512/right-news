import { Inter, Playfair_Display } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

import EntranceClipPath from "../MotionWrappers/EntranceClipPath";
import EntranceOpacity from "../MotionWrappers/EntranceOpacity";

export default function Opinion() {
  return (
    <>
      {/* encabezado */}
      <header className="flex w-full flex-row items-end justify-between pb-2 pt-8 dark:text-gray-100">
        <EntranceClipPath
          direction="right"
          showInView={true}
          delay={0.2}
          duration={1.1}
          className="flex w-full flex-row items-end justify-start"
        >
          <h2
            className={
              playfair.className +
              " h-fit -skew-x-12 text-5xl font-medium leading-tight md:text-7xl"
            }
          >
            Opiniones
          </h2>
        </EntranceClipPath>
      </header>

      {/* Barra de separacion */}
      <EntranceClipPath
        direction="right"
        showInView={true}
        delay={0.5}
        duration={1.1}
        className="w-full"
      >
        <div className="my-2 h-px w-full bg-black dark:bg-gray-300/75" />
      </EntranceClipPath>

      {/* trending/lastest news */}
      <section className="flex w-full flex-col items-start justify-between gap-8 py-16 dark:text-gray-100 md:flex-row-reverse">
        <EntranceClipPath
          direction="downLeft"
          showInView={true}
          delay={0.7}
          duration={1}
          className="flex basis-1/4 flex-col justify-start"
        >
          <div className="aspect-h-12 aspect-w-9">
            <Image
              className="z-0 object-cover object-center"
              src="/op1.jpg"
              alt="placeholder"
              width={1920}
              height={1080}
            />
          </div>

          <div className="flex flex-row items-center justify-start py-2">
            <h4 className={playfair.className + " text-2xl font-semibold"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h4>
          </div>

          <div className="flex flex-row items-center justify-between py-4">
            <h4 className="text-sm font-medium">Hace 1 horas</h4>
            <h4 className="text-sm font-medium">Por: Juan Perez</h4>
          </div>
        </EntranceClipPath>

        <EntranceClipPath
          direction="upRight"
          showInView={true}
          delay={0.7}
          duration={1}
          className="flex basis-1/2 flex-col-reverse justify-start gap-2"
        >
          <div className="aspect-h-9 aspect-w-12">
            <Image
              className="z-0 object-cover object-center"
              src="/op2.jpg"
              alt="placeholder"
              width={1920}
              height={1080}
            />
          </div>

          <div className="flex flex-row items-center justify-between py-2">
            <h4 className="text-base font-medium">Juan Perez</h4>
            <h4 className="text-sm font-medium">Hace 2 horas</h4>
          </div>

          <div className="flex flex-row items-center justify-start pb-4">
            <h4 className={playfair.className + " text-5xl font-semibold"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h4>
          </div>
        </EntranceClipPath>

        <EntranceClipPath
          direction="left"
          showInView={true}
          delay={0.7}
          duration={1}
          className="flex basis-1/4 flex-col justify-start gap-4"
        >
          <div className="aspect-h-12 aspect-w-9">
            <Image
              className="z-0 object-cover object-center"
              src="/op3.jpg"
              alt="placeholder"
              width={1920}
              height={1080}
            />
          </div>

          <div className="flex flex-row items-center justify-start py-2">
            <h4 className={playfair.className + " text-2xl font-semibold"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h4>
          </div>

          <div className="flex flex-row items-center justify-between py-4">
            <h4 className="text-sm font-medium">Hace 3 horas</h4>
            <h4 className="text-sm font-medium">Por: Juan Perez</h4>
          </div>
        </EntranceClipPath>
      </section>

      {/* Pill button */}
      <div className="flex w-full flex-row items-center justify-center py-8 dark:text-gray-100">
        <EntranceOpacity delay={0.3} duration={1} showInView={true}>
          <button className="rounded-full border border-black px-4 py-2 dark:border-gray-300">
            <h4 className="text-sm font-medium">Ver mas opiniones</h4>
          </button>
        </EntranceOpacity>
      </div>
    </>
  );
}
