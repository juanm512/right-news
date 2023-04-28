import { Inter, Playfair_Display } from "next/font/google"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })

import EntranceClipPath from "../MotionWrappers/EntranceClipPath"
import EntranceOpacity from "../MotionWrappers/EntranceOpacity"

export default function International() {
  return (
    <>
      {/* encabezado */}
      <header className="w-full flex flex-row items-end justify-between dark:text-gray-100 pt-8 pb-2">
        <EntranceClipPath
          direction="right"
          showInView={true}
          delay={0.4}
          duration={0.7}
          className="w-full flex flex-row items-end justify-start"
        >
          <h2
            className={
              playfair.className +
              " text-7xl leading-tight h-fit font-medium -skew-x-12 pl-16"
            }
          >
            Internacional
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
      <section className="basis-full flex flex-col gap-8 items-start justify-between dark:text-gray-100 py-16">
        <div className="basis-full flex flex-row-reverse gap-8 items-start justify-between ">
          <div className="basis-1/4 flex flex-col justify-start self-end ">
            <div className="aspect-video">
              <Image
                className="object-cover object-center z-0"
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
              <h4 className="text-sm font-medium text-right">
                Por: Redacción Norteamérica
              </h4>
            </div>
          </div>

          <div className="basis-1/2 flex flex-col justify-start gap-2">
            <div className="aspect-w-12 aspect-h-9">
              <Image
                className="object-cover object-center z-0"
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
              <h4 className="text-base font-medium text-right">
                Redacción Internacional
              </h4>
              <h4 className="text-sm font-medium">Hace 2 semanas</h4>
            </div>
          </div>

          <div className="basis-1/4 flex flex-col-reverse justify-start gap-4 self-start ">
            <div className="aspect-w-9 aspect-h-10">
              <Image
                className="object-cover object-center z-0"
                src="/egipto.png"
                alt="placeholder"
                width={1920}
                height={1080}
              />
            </div>

            <div className="w-full flex flex-row items-center justify-between py-4">
              <h4 className="text-sm font-medium">Hace 1 semana</h4>
              <h4 className="text-sm font-medium text-right">
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
        <div className="basis-full flex flex-row gap-8 items-start justify-between ">
          <div className="basis-3/12 flex flex-col-reverse justify-start self-start ">
            <div className="aspect-w-9 aspect-h-9">
              <Image
                className="object-cover object-center z-0"
                src="/Mitso-privatizacion.png"
                alt="placeholder"
                width={1920}
                height={1080}
              />
            </div>

            <div className="flex flex-row items-center justify-between py-4">
              <h4 className="text-sm font-medium">Hace 2 horas</h4>
              <h4 className="text-sm font-medium text-right">
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

          <div className="basis-6/12 flex flex-col justify-start gap-2">
            <div className="aspect-w-12 aspect-h-9">
              <Image
                className="object-cover object-center z-0"
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
              <h4 className="text-base font-medium text-right">
                Redacción Internacional
              </h4>
              <h4 className="text-sm font-medium">Hace 2 horas</h4>
            </div>
          </div>

          <div className="basis-3/12 flex flex-col justify-start gap-4 self-center ">
            <div className="aspect-w-9 aspect-h-7">
              <Image
                className="object-cover object-center z-0"
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
              <h4 className="text-sm font-medium text-right">
                Por: Redacción Internacional
              </h4>
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
            <h4 className="text-sm font-medium">Ver más internacional</h4>
          </button>
        </EntranceOpacity>
      </div>
    </>
  )
}
