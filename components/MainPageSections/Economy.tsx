import { Inter, Playfair_Display } from "next/font/google"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })

import EntranceClipPath from "../MotionWrappers/EntranceClipPath"
import EntranceOpacity from "../MotionWrappers/EntranceOpacity"

export default function Economy() {
  return (
    <>
      {/* encabezado */}
      <header className="w-full flex flex-row items-end justify-between dark:text-gray-100 pt-8 pb-2">
        <EntranceClipPath
          direction="right"
          showInView={true}
          delay={0.2}
          duration={0.7}
          className="w-full flex flex-row items-end justify-center"
        >
          <h2
            className={`${playfair.className} text-7xl leading-tight h-fit font-medium -skew-x-12`}
          >
            Economia
          </h2>
        </EntranceClipPath>
      </header>

      {/* Barra de separacion */}
      <EntranceClipPath
        direction="right"
        delay={0.2}
        duration={0.6}
        showInView={true}
        className="w-full"
      >
        <div className="w-full h-px bg-black dark:bg-gray-300/75 my-2" />
      </EntranceClipPath>

      {/* news */}
      <section className="basis-full flex flex-col gap-8 items-start justify-between dark:text-gray-100 py-16">
        <div className="flex flex-row justify-around gap-8">
          <div className="basis-1/3 flex flex-col justify-start">
            <div className=" aspect-video">
              <Image
                className="object-cover object-center z-0"
                src="/Milei-afjp.png"
                alt="placeholder"
                width={1920}
                height={1080}
              />
            </div>

            <div className="flex flex-row items-center justify-start py-2">
              <h4 className={playfair.className + " text-2xl font-semibold"}>
                Milei propone la privatización del sistema previsional
              </h4>
            </div>

            <div className="flex flex-row items-center justify-between py-4">
              <h4 className="text-sm font-medium">Hace 34 minutos</h4>
              <h4 className="text-sm font-medium">Por: Economia</h4>
            </div>
          </div>
          <div className="basis-1/3 flex flex-col-reverse justify-end">
            <div className="aspect-video">
              <Image
                className="object-cover object-center z-0"
                src="/ger-many.png"
                alt="placeholder"
                width={1920}
                height={1080}
              />
            </div>

            <div className="flex flex-row items-center justify-between py-4">
              <h4 className="text-sm font-medium">Hace 34 minutos</h4>
              <h4 className="text-sm font-medium">Por: Economia</h4>
            </div>

            <div className="flex flex-row items-center justify-start pb-2">
              <h4 className={playfair.className + " text-2xl font-semibold"}>
                Alemania rumbo a la recesión: Sigue cayendo el consumo y aumenta
                el déficit fiscal
              </h4>
            </div>
          </div>
          <div className="basis-1/3 flex flex-col justify-start">
            <div className=" aspect-video">
              <Image
                className="object-cover object-center z-0"
                src="/Lacalle-pou.png"
                alt="placeholder"
                width={1920}
                height={1080}
              />
            </div>

            <div className="flex flex-row items-center justify-start py-2">
              <h4 className={playfair.className + " text-2xl font-semibold"}>
                Se aprueba la reforma previsional de Lacalle Pou: Edad
                jubilatoria a 65
              </h4>
            </div>

            <div className="flex flex-row items-center justify-between py-4">
              <h4 className="text-sm font-medium">Hace 34 minutos</h4>
              <h4 className="text-sm font-medium">Por: Economia</h4>
            </div>
          </div>
        </div>

        <div className="flex flex-row-reverse justify-start gap-8">
          <div className="basis-1/2 aspect-video">
            <Image
              className="object-cover object-center z-0"
              src="/Kirchner-y-fernandez-1024x683.png"
              alt="placeholder"
              width={1920}
              height={1080}
            />
          </div>
          <div className="basis-1/2 flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between py-2">
              <h4 className="text-base font-medium">Carlos alberto Keygen</h4>
              <h4 className="text-sm font-medium">Hace 7 horas</h4>
            </div>

            <div className="flex flex-row items-center justify-start pb-4">
              <h4 className={playfair.className + " text-5xl font-semibold"}>
                La gestión que revivió la inflación en la economía argentina:
                Los fatídicos cuatro años de Néstor Kirchner
              </h4>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-around gap-8">
          <div className="basis-1/3 flex flex-col justify-start">
            <div className=" aspect-video">
              <Image
                className="object-cover object-center z-0"
                src="/SANCHEZZZZZZ-1024x682.png"
                alt="placeholder"
                width={1920}
                height={1080}
              />
            </div>

            <div className="flex flex-row items-center justify-start py-2">
              <h4 className={playfair.className + " text-2xl font-semibold"}>
                Desastre fiscal en España: El Gobierno socialista sigue subiendo
                los impuestos pero cae la recaudación y sube el déficit fiscal
              </h4>
            </div>

            <div className="flex flex-row items-center justify-between py-4">
              <h4 className="text-sm font-medium">Hace 34 minutos</h4>
              <h4 className="text-sm font-medium">Por: Economia</h4>
            </div>
          </div>
          <div className="basis-1/3 flex flex-col-reverse justify-end">
            <div className="aspect-video">
              <Image
                className="object-cover object-center z-0"
                src="/pesce-emision-1024x576.png"
                alt="placeholder"
                width={1920}
                height={1080}
              />
            </div>

            <div className="flex flex-row items-center justify-between py-4">
              <h4 className="text-sm font-medium">Hace 34 minutos</h4>
              <h4 className="text-sm font-medium">Por: Economia</h4>
            </div>

            <div className="flex flex-row items-center justify-start pb-2">
              <h4 className={playfair.className + " text-2xl font-semibold"}>
                Más emisión para cubrir el déficit fiscal: El Banco Central le
                tuvo que girar $100.000 millones al Tesoro en abril
              </h4>
            </div>
          </div>
          <div className="basis-1/3 flex flex-col justify-start">
            <div className=" aspect-video">
              <Image
                className="object-cover object-center z-0"
                src="/Biden-reading-1024x683.png"
                alt="placeholder"
                width={1920}
                height={1080}
              />
            </div>

            <div className="flex flex-row items-center justify-start py-2">
              <h4 className={playfair.className + " text-2xl font-semibold"}>
                Suenan las alarmas en EEUU: La economía creció menos de lo
                esperado y algunos sectores vuelven a caer en recesión
              </h4>
            </div>

            <div className="flex flex-row items-center justify-between py-4">
              <h4 className="text-sm font-medium">Hace 34 minutos</h4>
              <h4 className="text-sm font-medium">Por: Economia</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Pill button */}
      <div className="w-full flex flex-row items-center justify-center pb-10 pt-4 dark:text-gray-100">
        <EntranceOpacity
          delay={0.3}
          duration={1}
          showInView={true}
        >
          <button className="px-4 py-2 border rounded-full border-black dark:border-gray-300">
            <h4 className="text-sm font-medium">Ver más sobre economia</h4>
          </button>
        </EntranceOpacity>
      </div>
    </>
  )
}
