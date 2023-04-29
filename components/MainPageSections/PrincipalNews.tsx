import Image from "next/image";
import { Playfair_Display } from "next/font/google";

import EntranceClipPath from "../MotionWrappers/EntranceClipPath";
import EntranceScale from "../MotionWrappers/EntranceScale";
import EntranceOpacity from "../MotionWrappers/EntranceOpacity";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function PrincipalNews() {
  return (
    <>
      {/* encabezado */}
      <header className="flex w-full flex-row items-end dark:text-gray-100">
        <div className="flex w-full flex-row items-end justify-center md:justify-end">
          {/* animate-[clipPathRight_1s_0.1s_ease-out] */}
          <h2
            className={playfair.className + " -skew-x-12 text-7xl font-medium"}
          >
            Titulares
          </h2>
        </div>
      </header>

      {/* Barra de separacion */}
      <EntranceClipPath
        direction="right"
        delay={0.9}
        duration={2.1}
        className="w-full"
      >
        <div className="my-2 h-px w-full bg-black dark:bg-gray-300/75" />
        {/* animate-[clipPathRight_1s_0.1s_ease-out] */}
      </EntranceClipPath>

      {/* main new */}
      <section className="flex w-full flex-col items-start justify-between py-12 dark:text-gray-100">
        <EntranceClipPath
          direction="upRight"
          delay={1.5}
          duration={1.5}
          className="flex w-full flex-col items-end justify-end"
        >
          <div
            className={
              "flex w-full flex-col items-end justify-end"
              // + ` animate-[clipPathUpRight_1.5s_ease-in-out]`
            }
          >
            <Image
              className="z-0 h-full w-full object-contain object-center"
              src="/dolar-FUEGO.png"
              alt="placeholder"
              width={1920}
              height={1080}
            />
          </div>
        </EntranceClipPath>

        <EntranceOpacity
          showInView={true}
          delay={0.5}
          duration={1}
          className="flex w-full flex-col items-start justify-start"
        >
          <div
            className={
              "flex w-full flex-col items-end justify-end"
              // + ` animate-[clipPathUpRight_1.5s_ease-in-out]`
            }
          >
            {/* tags */}
            <div className="flex w-full flex-row items-center justify-between py-2">
              <div className="flex flex-row items-center justify-start gap-4">
                <h6 className="rounded-full border border-black px-3 py-1 dark:border-gray-300">
                  Economia
                </h6>
                <h6 className="rounded-full border border-black px-3 py-1 dark:border-gray-300">
                  Dolar
                </h6>
                <h6 className="rounded-full border border-black px-3 py-1 dark:border-gray-300">
                  Urgente
                </h6>
              </div>
              <div className="flex flex-row items-center justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
                  <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M8.7 10.7l6.6 -3.4"></path>
                  <path d="M8.7 13.3l6.6 3.4"></path>
                </svg>
              </div>
            </div>

            {/* Title */}
            <div className="flex w-full flex-row items-center justify-between py-2">
              <div className="flex basis-9/12 flex-row items-center justify-start gap-4">
                <h5 className={playfair.className + " text-5xl font-bold"}>
                  El dolar se dispara a 475$ en el comienzo de la semana
                </h5>
              </div>
              <div className="flex basis-3/12 flex-row items-center justify-end">
                <div className="rounded-full bg-neutral-800 px-6 py-2 text-neutral-300 dark:bg-neutral-300 dark:text-neutral-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
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
                    <path d="M17 7l-10 10"></path>
                    <path d="M8 7l9 0l0 9"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-row items-center justify-between py-2">
              <div className="flex basis-full flex-row items-center justify-start gap-2">
                <h6 className="text-sm font-medium">Por: Juan Perez</h6>
                <div className="mx-2 h-1 w-1 rounded-full bg-black dark:bg-gray-300/75" />
                <h6 className="text-sm font-medium">Hace 2 horas</h6>
              </div>
            </div>
          </div>
        </EntranceOpacity>
      </section>

      {/* trending/lastest news */}
      <section className="flex w-full flex-col items-start justify-between gap-8 py-16 dark:text-gray-100 md:flex-row">
        <div className="flex basis-1/2 flex-col justify-start">
          <Image
            className="z-0 h-fit w-full object-contain object-center"
            src="/image-353-1024x535.png"
            alt="placeholder"
            width={1080}
            height={1920}
          />

          <div className="flex flex-row items-center justify-start gap-4 py-4 text-sm">
            <h6 className="rounded-full border border-black px-3 py-1 dark:border-gray-300">
              Politica
            </h6>
            <h6 className="rounded-full border border-black px-3 py-1 dark:border-gray-300">
              Estados Unidos
            </h6>
          </div>

          <div className="flex flex-row items-center justify-start py-2">
            <h5 className={playfair.className + " text-3xl font-semibold"}>
              Kennedy Jr: Quién es el nuevo candidato a presidente en el Partido
              Demócrata
            </h5>
          </div>

          <div className="flex flex-row items-center justify-between py-4">
            <h6 className="text-sm font-medium">Hace 5 horas</h6>
            <h6 className="text-sm font-medium">
              Por: Redaccion Internacional
            </h6>
          </div>
        </div>

        <div className="flex basis-1/2 flex-col justify-start gap-8">
          <div className="flex basis-full flex-col justify-start gap-4 md:flex-row">
            <div className="flex basis-1/2 flex-row">
              <Image
                className="z-0 h-full w-full object-contain object-center"
                src="/image-347.png"
                alt="placeholder"
                width={1080}
                height={1920}
              />
            </div>
            <div className="flex basis-1/2 flex-col justify-between">
              <div className="flex basis-2/12 flex-row items-center justify-start gap-4 text-sm">
                <h6 className="rounded-full border border-black px-3 py-1 dark:border-gray-300">
                  Argentina
                </h6>
                <h6 className="rounded-full border border-black px-3 py-1 dark:border-gray-300">
                  Economia
                </h6>
              </div>

              <div className="flex basis-8/12 flex-row items-start justify-start text-ellipsis py-2">
                <h5
                  className={
                    playfair.className +
                    " max-h-32 overflow-hidden text-2xl font-semibold"
                  }
                >
                  Pérsico: “Massa me pidió que apretemos juntos a los
                  empresarios para que bajen los precios”
                </h5>
              </div>

              <div className="flex basis-2/12 flex-row items-center justify-between">
                <h6 className="text-sm font-normal">Hace 23 horas</h6>
                <h6 className="text-sm font-normal">
                  Por: Redaccion Argentiona
                </h6>
              </div>
            </div>
          </div>
          <div className="flex basis-full flex-col justify-start gap-4 md:flex-row">
            <div className="flex basis-1/2 flex-row">
              <Image
                className="z-0 h-full w-full object-contain object-center"
                src="/erdogabn.png"
                alt="placeholder"
                width={1080}
                height={1920}
              />
            </div>
            <div className="flex basis-1/2 flex-col justify-between">
              <div className="flex basis-2/12 flex-row items-center justify-start gap-4 text-sm">
                <h6 className="rounded-full border border-black px-3 py-1 dark:border-gray-300">
                  Internacional
                </h6>
                <h6 className="rounded-full border border-black px-3 py-1 dark:border-gray-300">
                  Turquia
                </h6>
              </div>

              <div className="flex basis-8/12 flex-row items-start justify-start text-ellipsis py-2">
                <h5
                  className={
                    playfair.className +
                    " max-h-32 overflow-hidden text-2xl font-semibold"
                  }
                >
                  Erdogan cancela sus apariciones electorales por motivos de
                  salud
                </h5>
              </div>

              <div className="flex basis-2/12 flex-row items-center justify-between">
                <h6 className="text-sm font-normal">Hace 1 día</h6>
                <h6 className="text-sm font-normal">
                  Por: Redaccion Internacional
                </h6>
              </div>
            </div>
          </div>
          <div className="flex basis-full flex-col justify-start gap-4 md:flex-row">
            <div className="flex basis-1/2 flex-row">
              <Image
                className="h-full w-full object-contain object-center"
                src="/maratea.png"
                alt="placeholder"
                width={1080}
                height={1920}
              />
            </div>
            <div className="flex basis-1/2 flex-col justify-between">
              <div className="flex basis-2/12 flex-row items-center justify-start gap-4 text-sm">
                <h6 className="rounded-full border border-black px-3 py-1 dark:border-gray-300">
                  Deportes
                </h6>
              </div>

              <div className="flex basis-8/12 flex-row items-start justify-start text-ellipsis py-2">
                <h5
                  className={
                    playfair.className +
                    " max-h-32 overflow-hidden text-2xl font-semibold"
                  }
                >
                  Santi Maratea arranco la colecta para salvar a Independiente
                </h5>
              </div>

              <div className="flex basis-2/12 flex-row items-center justify-between">
                <h6 className="text-sm font-normal">Hace 2 horas</h6>
                <h6 className="text-sm font-normal">Por: Juan Perez</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pill button */}
      <div className="flex w-full flex-row items-center justify-center py-8 dark:text-gray-100">
        <EntranceOpacity delay={0.3} duration={1} showInView={true}>
          <button className="rounded-full border border-black px-4 py-2 dark:border-gray-300">
            <h6 className="text-sm font-medium">Ver mas noticias</h6>
          </button>
        </EntranceOpacity>
      </div>
    </>
  );
}
