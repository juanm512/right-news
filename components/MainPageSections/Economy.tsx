import { Inter, Playfair_Display } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

import EntranceClipPath from "../MotionWrappers/EntranceClipPath";
import EntranceOpacity from "../MotionWrappers/EntranceOpacity";

export default function Economy() {
  return (
    <>
      {/* encabezado */}
      <header className="flex w-full flex-row items-end justify-between pb-2 pt-8 dark:text-gray-100">
        <EntranceOpacity
          showInView={true}
          delay={0.1}
          duration={0.7}
          className="flex w-full flex-row items-end justify-center"
        >
          <h2
            className={`${playfair.className} h-fit -skew-x-12 text-5xl font-medium leading-tight md:text-7xl`}
          >
            Economía
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

      {/* news */}
      <section className="flex w-full flex-col items-start justify-between gap-8 py-16 dark:text-gray-100">
        <div className="flex flex-col justify-around gap-8 md:flex-row">
          <div className="flex basis-1/3 flex-col justify-start">
            <div className=" aspect-video">
              <Image
                className="z-0 object-cover object-center"
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
          <div className="flex basis-1/3 flex-col-reverse justify-end">
            <div className="aspect-video">
              <Image
                className="z-0 object-cover object-center"
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
          <div className="flex basis-1/3 flex-col justify-start">
            <div className=" aspect-video">
              <Image
                className="z-0 object-cover object-center"
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

        <div className="flex flex-col justify-start gap-8 md:flex-row-reverse">
          <div className="aspect-video basis-1/2">
            <Image
              className="z-0 object-cover object-center"
              src="/Kirchner-y-fernandez-1024x683.png"
              alt="placeholder"
              width={1920}
              height={1080}
            />
          </div>
          <div className="flex basis-1/2 flex-col gap-4">
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

        <div className="flex flex-col justify-around gap-8 md:flex-row">
          <div className="flex basis-1/3 flex-col justify-start">
            <div className=" aspect-video">
              <Image
                className="z-0 object-cover object-center"
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
          <div className="flex basis-1/3 flex-col-reverse justify-end">
            <div className="aspect-video">
              <Image
                className="z-0 object-cover object-center"
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
          <div className="flex basis-1/3 flex-col justify-start">
            <div className=" aspect-video">
              <Image
                className="z-0 object-cover object-center"
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
      <div className="flex w-full flex-row items-center justify-center pb-10 pt-4 dark:text-gray-100">
        <EntranceOpacity delay={0.3} duration={1} showInView={true}>
          <button className="rounded-full border border-black px-4 py-2 dark:border-gray-300">
            <h4 className="text-sm font-medium">Ver más sobre economia</h4>
          </button>
        </EntranceOpacity>
      </div>
    </>
  );
}
