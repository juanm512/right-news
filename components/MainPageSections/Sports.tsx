import { Inter, Playfair_Display } from "next/font/google"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })

import EntranceClipPath from "../MotionWrappers/EntranceClipPath"
import EntranceOpacity from "../MotionWrappers/EntranceOpacity"

export default function Sports() {
  return (
    <>
      {/* encabezado */}
      <header className="w-full flex flex-row items-end justify-between dark:text-gray-100 pt-8 pb-2">
        <EntranceClipPath
          direction="right"
          showInView={true}
          delay={0.1}
          duration={0.7}
          className="w-full flex flex-row items-end justify-end"
        >
          <h2
            className={
              playfair.className +
              " text-7xl leading-tight h-fit font-medium -skew-x-12 pr-8"
            }
          >
            Deportes
          </h2>
        </EntranceClipPath>
      </header>

      {/* Barra de separacion */}
      <EntranceClipPath
        direction="right"
        showInView={true}
        delay={0.1}
        duration={0.7}
        className="w-full"
      >
        <div className="w-full h-px bg-black dark:bg-gray-300/75 my-2" />
      </EntranceClipPath>

      {/* trending/lastest news */}
      <section className="basis-full flex flex-row gap-8 items-start justify-around dark:text-gray-100 py-16">
        <div className="basis-7/12 flex flex-col justify-around gap-8">
          <div className="flex flex-col-reverse justify-start gap-4">
            <div className="aspect-video">
              <Image
                className="object-cover object-center z-0"
                src="/f12023leclerc.webp"
                alt="placeholder"
                width={1920}
                height={1080}
              />
            </div>

            <div className="flex flex-row items-center justify-between py-2">
              <h4 className="text-base font-medium">Juan Perez</h4>
              <h4 className="text-sm font-medium">Hace 3 días</h4>
            </div>

            <div className="flex flex-row items-center justify-start py-4">
              <h4 className={playfair.className + " text-3xl font-semibold"}>
                Leclerc da la campanada con la pole, Sainz es cuarto y Alonso,
                sin DRS, 6º
              </h4>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-start gap-4">
            <div className="aspect-video">
              <Image
                className="object-cover object-center z-0"
                src="/enzochelsea.png"
                alt="placeholder"
                width={1920}
                height={1080}
              />
            </div>

            <div className="flex flex-row items-center justify-between py-2">
              <h4 className="text-base font-medium">Juan Perez</h4>
              <h4 className="text-sm font-medium">Hace 3 días</h4>
            </div>

            <div className="flex flex-row items-center justify-start py-4">
              <h4 className={playfair.className + " text-3xl font-semibold"}>
                Frank Lampard salió a defender a Enzo Fernández: “Creo que es un
                talento fantástico, es el futuro del Chelsea”
              </h4>
            </div>
          </div>
        </div>

        <div className="basis-5/12 flex flex-col gap-8 justify-around">
          <div className="flex flex-col justify-start">
            <div className="aspect-square">
              <Image
                className="object-cover object-center z-0"
                src="/garnacho.png"
                alt="placeholder"
                width={1920}
                height={1080}
              />
            </div>

            <div className="flex flex-row items-center justify-start py-2">
              <h4 className={playfair.className + " text-2xl font-semibold"}>
                El desesperado pedido de Garnacho a su entrenador para poder
                jugar en la Selección Argentina
              </h4>
            </div>

            <div className="flex flex-row items-center justify-between py-4">
              <h4 className="text-sm font-medium">Hace 12 horas</h4>
              <h4 className="text-sm font-medium">Por: Redaccion Deportes</h4>
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <div className="aspect-square">
              <Image
                className="object-cover object-center z-0"
                src="/dibu.png"
                alt="placeholder"
                width={1920}
                height={1080}
              />
            </div>

            <div className="flex flex-row items-center justify-start py-2">
              <h4 className={playfair.className + " text-2xl font-semibold"}>
                Preocupación en Aston Villa, el Dibu Martinez no pudo terminar
                el partido frente al Bentford
              </h4>
            </div>

            <div className="flex flex-row items-center justify-between py-4">
              <h4 className="text-sm font-medium">Hace 12 horas</h4>
              <h4 className="text-sm font-medium">Por: Redaccion Deportes</h4>
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <div className="aspect-square">
              <Image
                className="object-cover object-center z-0"
                src="/sub20.png"
                alt="placeholder"
                width={1920}
                height={1080}
              />
            </div>

            <div className="flex flex-row items-center justify-start py-2">
              <h4 className={playfair.className + " text-2xl font-semibold"}>
                Ya están conformados los grupos para el Mundial Sub 20
              </h4>
            </div>

            <div className="flex flex-row items-center justify-between py-4">
              <h4 className="text-sm font-medium">Hace 12 horas</h4>
              <h4 className="text-sm font-medium">Por: Redaccion Deportes</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Pill button */}
      <div className="w-full flex flex-row items-center justify-center py-8 dark:text-gray-100">
        <EntranceOpacity
          delay={0.3}
          duration={1}
          showInView={true}
        >
          <button className="px-4 py-2 border rounded-full border-black dark:border-gray-300">
            <h4 className="text-sm font-medium">Ver mas acerca de deportes</h4>
          </button>
        </EntranceOpacity>
      </div>
    </>
  )
}
