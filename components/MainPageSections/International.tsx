import { Inter, Playfair_Display } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

import EntranceClipPath from "../MotionWrappers/EntranceClipPath";
import EntranceOpacity from "../MotionWrappers/EntranceOpacity";

export default function International() {
  return (
    <>
      {/* encabezado */}
      <header className="flex w-full flex-row items-end justify-between pb-2 pt-8 dark:text-gray-100">
        <EntranceOpacity
          showInView={true}
          delay={0.1}
          duration={0.7}
          className="flex w-full flex-row items-end justify-start"
        >
          <h2
            className={
              playfair.className +
              " h-fit -skew-x-12 pl-2 text-5xl font-medium leading-tight md:pl-16 md:text-7xl"
            }
          >
            Internacional
          </h2>
        </EntranceOpacity>
      </header>

      {/* Barra de separacion */}
      <EntranceOpacity
        showInView={true}
        delay={0.1}
        duration={0.7}
        className="w-full"
      >
        <div className="my-2 h-px w-full bg-black dark:bg-gray-300/75" />
      </EntranceOpacity>

      {/* trending/lastest news */}
      <section className="flex w-full flex-col items-start justify-between gap-8 py-16 dark:text-gray-100">
        <div className="flex basis-full flex-col items-start justify-between gap-8 md:flex-row-reverse ">
          <div className="flex basis-1/4 flex-col justify-start self-end ">
            <div className="aspect-video">
              <Image
                className="z-0 object-cover object-center"
                src="/tuckercarlson.png"
                alt="placeholder"
                width={1920}
                height={1080}
              />
            </div>

            <div className="flex flex-row items-center justify-start py-2">
              <h4 className={playfair.className + " text-2xl font-semibold"}>
                El Pentágono se manda a opinar de política y celebra que Tucker
                Carlson haya sido sacado del aire
              </h4>
            </div>

            <div className="flex flex-row items-center justify-between py-4">
              <h4 className="text-sm font-medium">Hace 24 horas</h4>
              <h4 className="text-right text-sm font-medium">
                Por: Redacción Norteamérica
              </h4>
            </div>
          </div>

          <div className="flex basis-1/2 flex-col justify-start gap-2">
            <div className="aspect-h-9 aspect-w-12">
              <Image
                className="z-0 object-cover object-center"
                src="/ukraine.png"
                alt="placeholder"
                width={1920}
                height={1080}
              />
            </div>

            <div className="flex flex-row items-center justify-start pb-4">
              <h4 className={playfair.className + " text-5xl font-semibold"}>
                Ucrania y Rusia intercambian más de 200 prisioneros de guerra:
                Putin alega tener el control sobre más del 75% de Bakhmut
              </h4>
            </div>

            <div className="flex flex-row items-center justify-between py-2">
              <h4 className="text-right text-base font-medium">
                Redacción Internacional
              </h4>
              <h4 className="text-sm font-medium">Hace 2 semanas</h4>
            </div>
          </div>

          <div className="flex basis-1/4 flex-col-reverse justify-start gap-4 self-start ">
            <div className="aspect-h-10 aspect-w-9">
              <Image
                className="z-0 object-cover object-center"
                src="/egipto.png"
                alt="placeholder"
                width={1920}
                height={1080}
              />
            </div>

            <div className="flex w-full flex-row items-center justify-between py-4">
              <h4 className="text-sm font-medium">Hace 1 semana</h4>
              <h4 className="text-right text-sm font-medium">
                Por: Redacción Internacional
              </h4>
            </div>

            <div className="flex flex-row items-center justify-start py-2">
              <h4 className={playfair.className + " text-2xl font-semibold"}>
                Los “Discord Leaks” revelan que Egipto ha ordenado el suministro
                de cohetes a Rusia traicionando a Biden
              </h4>
            </div>
          </div>
        </div>
        <div className="flex basis-full flex-col items-start justify-between gap-8 md:flex-row ">
          <div className="flex basis-3/12 flex-col-reverse justify-start self-start ">
            <div className="aspect-h-9 aspect-w-9">
              <Image
                className="z-0 object-cover object-center"
                src="/Mitso-privatizacion.png"
                alt="placeholder"
                width={1920}
                height={1080}
              />
            </div>

            <div className="flex flex-row items-center justify-between py-4">
              <h4 className="text-sm font-medium">Hace 2 horas</h4>
              <h4 className="text-right text-sm font-medium">
                Por: Redacción Internacional
              </h4>
            </div>

            <div className="flex flex-row items-center justify-start py-2">
              <h4 className={playfair.className + " text-2xl font-semibold"}>
                El gobierno de grecia lanza una nueva ola de privatizaciones
                para terminar de eliminar el déficit fiscal
              </h4>
            </div>
          </div>

          <div className="flex basis-6/12 flex-col justify-start gap-2">
            <div className="aspect-h-9 aspect-w-12">
              <Image
                className="z-0 object-cover object-center"
                src="/rusialatam.png"
                alt="placeholder"
                width={1920}
                height={1080}
              />
            </div>

            <div className="flex flex-row items-center justify-start pb-4">
              <h4 className={playfair.className + " text-5xl font-semibold"}>
                El canciller de Rusia culminó su gira por Latinoamérica: Se
                reunió con todos los dictadores de la región
              </h4>
            </div>

            <div className="flex flex-row items-center justify-between py-2">
              <h4 className="text-right text-base font-medium">
                Redacción Internacional
              </h4>
              <h4 className="text-sm font-medium">Hace 2 horas</h4>
            </div>
          </div>

          <div className="flex basis-3/12 flex-col justify-start gap-4 self-center ">
            <div className="aspect-h-7 aspect-w-9">
              <Image
                className="z-0 object-cover object-center"
                src="/ORBANN.png"
                alt="placeholder"
                width={1920}
                height={1080}
              />
            </div>

            <div className="flex flex-row items-center justify-start py-2">
              <h4 className={playfair.className + " text-2xl font-semibold"}>
                Fuerte baja de impuestos en Hungría: Orbán reorganizó el sistema
                tributario para favorecer la natalidad
              </h4>
            </div>
            <div className="flex flex-row items-center justify-between py-4">
              <h4 className="text-sm font-medium">Hace 2 horas</h4>
              <h4 className="text-right text-sm font-medium">
                Por: Redacción Internacional
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Pill button */}
      <div className="flex w-full flex-row items-center justify-center py-8 dark:text-gray-100">
        <EntranceOpacity delay={0.3} duration={1} showInView={true}>
          <button className="rounded-full border border-black px-4 py-2 dark:border-gray-300">
            <h4 className="text-sm font-medium">Ver más internacional</h4>
          </button>
        </EntranceOpacity>
      </div>
    </>
  );
}
