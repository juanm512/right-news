import Image from "next/image"
import { Playfair_Display } from "next/font/google"

import EntranceClipPath from "../MotionWrappers/EntranceClipPath"
import EntranceScale from "../MotionWrappers/EntranceScale"
import EntranceOpacity from "../MotionWrappers/EntranceOpacity"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function PrincipalNews() {
  return (
    <>
      {/* encabezado */}
      <header className="basis-full flex flex-row items-end dark:text-gray-100">
        <div className="basis-6/12 flex flex-row gap-4 items-center justify-start text">
          <EntranceScale
            delay={2.5}
            duration={0.5}
          >
            <h4 className="opacity-full">
              {/* animate-[clipPathRight_1s_0.1s_ease-out] */}
              Destacados
            </h4>
          </EntranceScale>
          <EntranceScale
            delay={2.5}
            duration={0.5}
          >
            {/*  animate-[opacity_1s_0.1s_ease-out] */}
            <div className="w-px h-6 bg-black dark:bg-gray-300/75 mx-2" />
          </EntranceScale>
          <EntranceScale
            delay={2.5}
            duration={0.5}
          >
            <h4 className="opacity-50">
              {/*  animate-[clipPathRight_1s_0.1s_ease-out] */}
              Ultimos
            </h4>
          </EntranceScale>
        </div>
        <div className="basis-6/12 flex flex-row items-end justify-center">
          {/* animate-[clipPathRight_1s_0.1s_ease-out] */}
          <h2
            className={playfair.className + " text-7xl font-medium -skew-x-12"}
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
        <div className="w-full h-px bg-black dark:bg-gray-300/75 my-2" />
        {/* animate-[clipPathRight_1s_0.1s_ease-out] */}
      </EntranceClipPath>

      {/* main new */}
      <section className="basis-full flex flex-col items-start justify-between dark:text-gray-100 py-12">
        <EntranceClipPath
          direction="upRight"
          delay={1.5}
          duration={1.5}
          className="w-full flex flex-col items-end justify-end"
        >
          <div
            className={
              "w-full flex flex-col items-end justify-end"
              // + ` animate-[clipPathUpRight_1.5s_ease-in-out]`
            }
          >
            <Image
              className="w-full h-full object-contain object-center z-0"
              src="/dolar-FUEGO.png"
              alt="placeholder"
              width={1920}
              height={1080}
            />
          </div>
        </EntranceClipPath>

        <EntranceClipPath
          direction="upRight"
          showInView={true}
          delay={0.5}
          duration={1}
          className="w-full flex flex-col items-start justify-start"
        >
          <div
            className={
              "w-full flex flex-col items-end justify-end"
              // + ` animate-[clipPathUpRight_1.5s_ease-in-out]`
            }
          >
            {/* tags */}
            <div className="w-full flex flex-row items-center justify-between py-2">
              <div className="flex flex-row items-center justify-start gap-4">
                <h4 className="px-3 py-1 border rounded-full border-black dark:border-gray-300">
                  Economia
                </h4>
                <h4 className="px-3 py-1 border rounded-full border-black dark:border-gray-300">
                  Dolar
                </h4>
                <h4 className="px-3 py-1 border rounded-full border-black dark:border-gray-300">
                  Urgente
                </h4>
              </div>
              <div className="flex flex-row items-center justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    stroke="none"
                    d="M0 0h24v24H0z"
                    fill="none"
                  ></path>
                  <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M8.7 10.7l6.6 -3.4"></path>
                  <path d="M8.7 13.3l6.6 3.4"></path>
                </svg>
              </div>
            </div>

            {/* Title */}
            <div className="w-full flex flex-row items-center justify-between py-2">
              <div className="basis-9/12 flex flex-row items-center justify-start gap-4">
                <h4 className={playfair.className + " text-5xl font-bold"}>
                  El dolar se dispara a 475$ en el comienzo de la semana
                </h4>
              </div>
              <div className="basis-3/12 flex flex-row items-center justify-end">
                <div className="px-6 py-2 text-neutral-300 bg-neutral-800 dark:text-neutral-800 dark:bg-neutral-300 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      stroke="none"
                      d="M0 0h24v24H0z"
                      fill="none"
                    ></path>
                    <path d="M17 7l-10 10"></path>
                    <path d="M8 7l9 0l0 9"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-row items-center justify-between py-2">
              <div className="basis-full flex flex-row items-center justify-start gap-2">
                <h4 className="text-sm font-medium">Por: Juan Perez</h4>
                <div className="w-1 h-1 bg-black dark:bg-gray-300/75 mx-2 rounded-full" />
                <h4 className="text-sm font-medium">Hace 2 horas</h4>
              </div>
            </div>
          </div>
        </EntranceClipPath>
      </section>

      {/* trending/lastest news */}
      <section className="basis-full flex flex-row gap-8 items-start justify-between dark:text-gray-100 py-16">
        <div className="basis-1/2 flex flex-col justify-start">
          <Image
            className="h-fit w-full object-contain object-center z-0"
            src="/image-353-1024x535.png"
            alt="placeholder"
            width={1080}
            height={1920}
          />

          <div className="flex flex-row items-center text-sm justify-start gap-4 py-4">
            <h4 className="px-3 py-1 border rounded-full border-black dark:border-gray-300">
              Politica
            </h4>
            <h4 className="px-3 py-1 border rounded-full border-black dark:border-gray-300">
              Estados Unidos
            </h4>
          </div>

          <div className="flex flex-row items-center justify-start py-2">
            <h4 className={playfair.className + " text-3xl font-semibold"}>
              Kennedy Jr: Quién es el nuevo candidato a presidente en el Partido
              Demócrata
            </h4>
          </div>

          <div className="flex flex-row items-center justify-between py-4">
            <h4 className="text-sm font-medium">Hace 5 horas</h4>
            <h4 className="text-sm font-medium">
              Por: Redaccion Internacional
            </h4>
          </div>
        </div>

        <div className="basis-1/2 flex flex-col justify-start gap-8">
          <div className="basis-full flex flex-row justify-start gap-4">
            <div className="basis-1/2 flex flex-row">
              <Image
                className="h-full w-full object-contain object-center z-0"
                src="/image-347.png"
                alt="placeholder"
                width={1080}
                height={1920}
              />
            </div>
            <div className="basis-1/2 flex flex-col justify-between">
              <div className="basis-2/12 flex flex-row items-center text-sm justify-start gap-4">
                <h4 className="px-3 py-1 border rounded-full border-black dark:border-gray-300">
                  Argentina
                </h4>
                <h4 className="px-3 py-1 border rounded-full border-black dark:border-gray-300">
                  Economia
                </h4>
              </div>

              <div className="basis-8/12 flex flex-row items-start justify-start py-2 text-ellipsis">
                <h4
                  className={
                    playfair.className +
                    " text-2xl font-semibold max-h-32 overflow-hidden"
                  }
                >
                  Pérsico: “Massa me pidió que apretemos juntos a los
                  empresarios para que bajen los precios”
                </h4>
              </div>

              <div className="basis-2/12 flex flex-row items-center justify-between">
                <h4 className="text-sm font-normal">Hace 23 horas</h4>
                <h4 className="text-sm font-normal">
                  Por: Redaccion Argentiona
                </h4>
              </div>
            </div>
          </div>
          <div className="basis-full flex flex-row justify-start gap-4">
            <div className="basis-1/2 flex flex-row">
              <Image
                className="h-full w-full object-contain object-center z-0"
                src="/erdogabn.png"
                alt="placeholder"
                width={1080}
                height={1920}
              />
            </div>
            <div className="basis-1/2 flex flex-col justify-between">
              <div className="basis-2/12 flex flex-row items-center text-sm justify-start gap-4">
                <h4 className="px-3 py-1 border rounded-full border-black dark:border-gray-300">
                  Internacional
                </h4>
                <h4 className="px-3 py-1 border rounded-full border-black dark:border-gray-300">
                  Turquia
                </h4>
              </div>

              <div className="basis-8/12 flex flex-row items-start justify-start py-2 text-ellipsis">
                <h4
                  className={
                    playfair.className +
                    " text-2xl font-semibold max-h-32 overflow-hidden"
                  }
                >
                  Erdogan cancela sus apariciones electorales por motivos de
                  salud
                </h4>
              </div>

              <div className="basis-2/12 flex flex-row items-center justify-between">
                <h4 className="text-sm font-normal">Hace 1 día</h4>
                <h4 className="text-sm font-normal">
                  Por: Redaccion Internacional
                </h4>
              </div>
            </div>
          </div>
          <div className="basis-full flex flex-row justify-start gap-4">
            <div className="basis-1/2 flex flex-row">
              <Image
                className="h-full w-full object-contain object-center"
                src="/maratea.png"
                alt="placeholder"
                width={1080}
                height={1920}
              />
            </div>
            <div className="basis-1/2 flex flex-col justify-between">
              <div className="basis-2/12 flex flex-row items-center text-sm justify-start gap-4">
                <h4 className="px-3 py-1 border rounded-full border-black dark:border-gray-300">
                  Deportes
                </h4>
              </div>

              <div className="basis-8/12 flex flex-row items-start justify-start py-2 text-ellipsis">
                <h4
                  className={
                    playfair.className +
                    " text-2xl font-semibold max-h-32 overflow-hidden"
                  }
                >
                  Santi Maratea arranco la colecta para salvar a Independiente
                </h4>
              </div>

              <div className="basis-2/12 flex flex-row items-center justify-between">
                <h4 className="text-sm font-normal">Hace 2 horas</h4>
                <h4 className="text-sm font-normal">Por: Juan Perez</h4>
              </div>
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
            <h4 className="text-sm font-medium">Ver mas noticias</h4>
          </button>
        </EntranceOpacity>
      </div>
    </>
  )
}
