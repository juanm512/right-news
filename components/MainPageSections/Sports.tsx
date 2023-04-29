import { Inter, Playfair_Display } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

import EntranceClipPath from "../MotionWrappers/EntranceClipPath";
import EntranceOpacity from "../MotionWrappers/EntranceOpacity";

export default function Sports() {
  return (
    <>
      {/* encabezado */}
      <header className="flex w-full flex-row items-end justify-between pb-2 pt-8 dark:text-gray-100">
        <EntranceClipPath
          direction="right"
          showInView={true}
          delay={0.1}
          duration={0.7}
          className="flex w-full flex-row items-end justify-end"
        >
          <h2
            className={
              playfair.className +
              " h-fit -skew-x-12 pr-8 text-5xl font-medium leading-tight md:text-7xl"
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
        <div className="my-2 h-px w-full bg-black dark:bg-gray-300/75" />
      </EntranceClipPath>

      {/* trending/lastest news */}
      <section className="flex w-full flex-col items-start justify-around gap-8 py-16 dark:text-gray-100 md:flex-row">
        <div className="flex basis-7/12 flex-col justify-around gap-8">
          <div className="flex flex-col-reverse justify-start gap-4">
            <div className="aspect-video">
              <Image
                className="z-0 object-cover object-center"
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
                className="z-0 object-cover object-center"
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

        <div className="flex basis-5/12 flex-col justify-around gap-8">
          <div className="flex flex-col justify-start">
            <div className="aspect-square">
              <Image
                className="z-0 object-cover object-center"
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
                className="z-0 object-cover object-center"
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
                className="z-0 object-cover object-center"
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
      <div className="flex w-full flex-row items-center justify-center py-8 dark:text-gray-100">
        <EntranceOpacity delay={0.3} duration={1} showInView={true}>
          <button className="rounded-full border border-black px-4 py-2 dark:border-gray-300">
            <h4 className="text-sm font-medium">Ver mas acerca de deportes</h4>
          </button>
        </EntranceOpacity>
      </div>
    </>
  );
}
