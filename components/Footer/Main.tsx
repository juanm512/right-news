import Image from "next/image";

import EntranceClipPath from "../MotionWrappers/EntranceClipPath";
import Link from "next/link";
import EntranceOpacity from "../MotionWrappers/EntranceOpacity";

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between py-4">
      {/* Barra de separacion */}
      <EntranceClipPath
        direction="right"
        delay={0.2}
        duration={1.1}
        className="w-full"
        showInView={true}
      >
        <div className="mt-2 h-px w-full animate-[clipPathRight_2.1s_ease-out] bg-black dark:bg-gray-300" />
      </EntranceClipPath>
      <div className="container mx-auto px-6 py-12">
        <EntranceClipPath
          direction="right"
          delay={0.2}
          duration={1.1}
          className="w-full"
          showInView={true}
        >
          <div className="md:-mx-3 md:flex md:items-center md:justify-evenly">
            <h1 className="text-xl font-semibold tracking-tight text-gray-800 dark:text-white md:mx-3 xl:text-2xl">
              Suscríbete a nuestro newsletter para recibir las últimas noticias
            </h1>

            <div className="mt-6 shrink-0 md:mx-1 md:mt-0 md:w-auto">
              <Link
                href="/newsletter"
                className="group inline-flex w-full items-center justify-center gap-x-3 rounded-full bg-neutral-700 px-4 py-2 text-sm text-white duration-300 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
              >
                <span>Suscribirme ahora</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 transition-all duration-300 group-hover:translate-x-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </EntranceClipPath>
        <hr className="my-6 border-neutral-200 dark:border-neutral-700 md:my-10" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <EntranceOpacity showInView={true} duration={1} delay={0.4}>
            <p className="font-semibold text-gray-800 dark:text-white">
              Quick Link
            </p>

            <div className="mt-5 flex flex-col items-start space-y-2">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-neutral-500/80 hover:underline dark:text-gray-300 dark:hover:text-neutral-400"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-neutral-500/80 hover:underline dark:text-gray-300 dark:hover:text-neutral-400"
              >
                Who We Are
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-neutral-500/80 hover:underline dark:text-gray-300 dark:hover:text-neutral-400"
              >
                Our Philosophy
              </a>
            </div>
          </EntranceOpacity>
          <EntranceOpacity showInView={true} duration={1} delay={0.5}>
            <p className="font-semibold text-gray-800 dark:text-white">
              Industries
            </p>

            <div className="mt-5 flex flex-col items-start space-y-2">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-neutral-500/80 hover:underline dark:text-gray-300 dark:hover:text-neutral-400"
              >
                Retail & E-Commerce
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-neutral-500/80 hover:underline dark:text-gray-300 dark:hover:text-neutral-400"
              >
                Information Technology
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-neutral-500/80 hover:underline dark:text-gray-300 dark:hover:text-neutral-400"
              >
                Finance & Insurance
              </a>
            </div>
          </EntranceOpacity>
          <EntranceOpacity showInView={true} duration={1} delay={0.6}>
            <p className="font-semibold text-gray-800 dark:text-white">
              Services
            </p>

            <div className="mt-5 flex flex-col items-start space-y-2">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-neutral-500/80 hover:underline dark:text-gray-300 dark:hover:text-neutral-400"
              >
                Translation
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-neutral-500/80 hover:underline dark:text-gray-300 dark:hover:text-neutral-400"
              >
                Proofreading & Editing
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-neutral-500/80 hover:underline dark:text-gray-300 dark:hover:text-neutral-400"
              >
                Content Creation
              </a>
            </div>
          </EntranceOpacity>
          <EntranceOpacity showInView={true} duration={1} delay={0.7}>
            <p className="font-semibold text-gray-800 dark:text-white">
              Contact Us
            </p>

            <div className="mt-5 flex flex-col items-start space-y-2">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:text-neutral-500/80 hover:underline dark:text-gray-300 dark:hover:text-neutral-400"
              >
                +880 768 473 4978
              </a>
              <Link
                href="mailto:redaccion@derechadiario.com"
                target="_blank"
                className="group text-gray-600 transition-colors duration-300 hover:text-neutral-500/80 hover:underline dark:text-gray-300 dark:hover:text-neutral-400"
              >
                Redaccion
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 inline-block h-5 w-5 text-gray-500 transition-all duration-300 group-hover:ml-2 dark:text-gray-400"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path>
                  <path d="M3 6l9 6l9 -6"></path>
                  <path d="M15 18h6"></path>
                  <path d="M18 15l3 3l-3 3"></path>
                </svg>
              </Link>
              <Link
                href="mailto:info@derechadiario.com"
                target="_blank"
                className="group text-gray-600 transition-colors duration-300 hover:text-neutral-500/80 hover:underline dark:text-gray-300 dark:hover:text-neutral-400"
              >
                Publicidad e Informacion
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 inline-block h-5 w-5 text-gray-500 transition-all duration-300 group-hover:ml-2 dark:text-gray-400"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path>
                  <path d="M3 6l9 6l9 -6"></path>
                  <path d="M15 18h6"></path>
                  <path d="M18 15l3 3l-3 3"></path>
                </svg>
              </Link>
            </div>
          </EntranceOpacity>
        </div>

        <hr className="my-6 border-neutral-200 dark:border-neutral-700 md:my-10" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <EntranceOpacity duration={1} delay={0.5} showInView={true}>
            <Image
              src="/Logo-La-Derecha-Diario.png"
              alt="Logo La Derecha Diario"
              width={500}
              height={100}
              className="h-fit max-w-[200px] object-contain object-center brightness-[0.1] drop-shadow-sm dark:invert"
              style={{ imageRendering: "auto" }}
            />
          </EntranceOpacity>
          <EntranceOpacity duration={1} delay={0.7} showInView={true}>
            <ul className="flex flex-row justify-center gap-6 sm:justify-end">
              <li>
                <a
                  href="https://t.me/DifusionLaDerechaDiario"
                  rel="noreferrer"
                  target="_blank"
                  className="text-neutral-700 transition hover:text-neutral-800/75 dark:text-neutral-500/80 dark:hover:text-neutral-400/80"
                >
                  <span className="sr-only">Telegram</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/laderechadiario/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-neutral-700 transition hover:text-neutral-800/75 dark:text-neutral-500/80 dark:hover:text-neutral-400/80"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com/laderechadiario"
                  rel="noreferrer"
                  target="_blank"
                  className="text-neutral-700 transition hover:text-neutral-800/75 dark:text-neutral-500/80 dark:hover:text-neutral-400/80"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/channel/UCONsn2mRB7JypSlCZ451gaA"
                  rel="noreferrer"
                  target="_blank"
                  className="text-neutral-700 transition hover:text-neutral-800/75 dark:text-neutral-500/80 dark:hover:text-neutral-400/80"
                >
                  <span className="sr-only">Youtube</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
                    <path d="M10 9l5 3l-5 3z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="/podcast"
                  rel="noreferrer"
                  className="text-neutral-700 transition hover:text-neutral-800/75 dark:text-neutral-500/80 dark:hover:text-neutral-400/80"
                >
                  <span className="sr-only">Spotify</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527"></path>
                    <path d="M9 15c1.5 -1 4 -1 5 .5"></path>
                    <path d="M7 9c2 -1 6 -2 10 .5"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </EntranceOpacity>
          <EntranceOpacity duration={1} delay={0.9} showInView={true}>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-300 sm:mt-0">
              Copyright © 2023. La Derecha Diario
            </p>
          </EntranceOpacity>
        </div>
      </div>
    </footer>
  );
}
