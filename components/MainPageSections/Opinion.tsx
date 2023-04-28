import { Inter, Playfair_Display } from "next/font/google"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })

import EntranceClipPath from "../MotionWrappers/EntranceClipPath"
import EntranceOpacity from "../MotionWrappers/EntranceOpacity"

export default function Opinion() {
  return (
    <>
      {/* encabezado */}
      <header className="w-full flex flex-row items-end justify-between dark:text-gray-100 pt-8 pb-2">
        <EntranceClipPath
          direction="right"
          showInView={true}
          delay={1.5}
          duration={1.5}
          className="w-full flex flex-row items-end justify-start"
        >
          <h2
            className={
              playfair.className +
              " text-7xl leading-tight h-fit font-medium -skew-x-12"
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
        delay={0.9}
        duration={2.1}
        className="w-full"
      >
        <div className="w-full h-px bg-black dark:bg-gray-300/75 my-2" />
      </EntranceClipPath>

      {/* trending/lastest news */}
      <section className="basis-full flex flex-row-reverse gap-8 items-start justify-between dark:text-gray-100 py-16">
        <div className="basis-1/4 flex flex-col justify-start">
          <div className="aspect-w-9 aspect-h-12">
            <Image
              className="object-cover object-center z-0"
              src="/fernandez-fracaso-gobern.png"
              alt="placeholder"
              width={1920}
              height={1080}
            />
          </div>

          {/* <div className="flex flex-row items-center text-sm justify-start gap-4 py-4">
            <h4 className="px-3 py-1 border rounded-full border-black dark:border-gray-300">
              Politica
            </h4>
            <h4 className="px-3 py-1 border rounded-full border-black dark:border-gray-300">
              Fernandez
            </h4>
          </div> */}

          <div className="flex flex-row items-center justify-start py-2">
            <h4 className={playfair.className + " text-2xl font-semibold"}>
              El presidente anuncia un nuevo plan de vacunacion
            </h4>
          </div>

          <div className="flex flex-row items-center justify-between py-4">
            <h4 className="text-sm font-medium">Hace 2 horas</h4>
            <h4 className="text-sm font-medium">Por: Juan Perez</h4>
          </div>
        </div>

        <div className="basis-1/2 flex flex-col-reverse justify-start gap-2">
          <div className="aspect-w-12 aspect-h-9">
            <Image
              className="object-cover object-center z-0"
              src="/fernandez-fracaso-gobern.png"
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
              El presidente anuncia un nuevo plan de vacunacion
            </h4>
          </div>

          {/* <div className="flex flex-row items-center text-sm justify-start gap-4 py-4">
            <h4 className="px-3 py-1 border rounded-full border-black dark:border-gray-300">
              Politica
            </h4>
            <h4 className="px-3 py-1 border rounded-full border-black dark:border-gray-300">
              Fernandez
            </h4>
          </div> */}
        </div>

        <div className="basis-1/4 flex flex-col justify-start gap-4">
          <div className="aspect-w-9 aspect-h-12">
            <Image
              className="object-cover object-center z-0"
              src="/fernandez-fracaso-gobern.png"
              alt="placeholder"
              width={1920}
              height={1080}
            />
          </div>

          {/* <div className="flex flex-row items-center text-sm justify-start gap-4 py-4">
            <h4 className="px-3 py-1 border rounded-full border-black dark:border-gray-300">
              Politica
            </h4>
            <h4 className="px-3 py-1 border rounded-full border-black dark:border-gray-300">
              Fernandez
            </h4>
          </div> */}

          <div className="flex flex-row items-center justify-start py-2">
            <h4 className={playfair.className + " text-2xl font-semibold"}>
              El presidente anuncia un nuevo plan de vacunacion
            </h4>
          </div>

          <div className="flex flex-row items-center justify-between py-4">
            <h4 className="text-sm font-medium">Hace 2 horas</h4>
            <h4 className="text-sm font-medium">Por: Juan Perez</h4>
          </div>
        </div>
      </section>

      {/* Pill button */}
      <div className="w-full flex flex-row items-center justify-center py-8 dark:text-gray-100">
        <EntranceOpacity
          delay={2}
          duration={1}
          showInView={true}
        >
          <button className="px-4 py-2 border rounded-full border-black dark:border-gray-300">
            <h4 className="text-sm font-medium">Ver mas opiniones</h4>
          </button>
        </EntranceOpacity>
      </div>
    </>
  )
}
