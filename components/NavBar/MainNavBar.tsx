import Image from "next/image"
import { Playfair_Display } from "next/font/google"
import Link from "next/link"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function MainNavBar() {
  return (
    <div className="flex basis-full flex-row justify-between dark:text-gray-100 py-4">
      {/* donaciones */}
      <div className="basis-3/12 flex flex-col gap-4 items-start justify-between">
        <div>
          <p className={playfair.className + " text-lg font-medium"}>
            Apoyanos con una donación
          </p>
          <p className=" text-sm italic font-normal opacity-50">
            Independientes, sin censura, mantenido por la comunidad
          </p>
        </div>

        <Link
          href="/donar"
          className="flex flex-row items-center text-base border rounded-full border-black dark:border-gray-200 px-4 py-2"
        >
          Contribuir
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 inline-block ml-2"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            stroke-width={1.5}
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
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
            <path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25"></path>
            <path d="M12.5 15.5l2 2"></path>
            <path d="M15 13l2 2"></path>
          </svg>
        </Link>
      </div>

      {/* logo con selector de localizacion del diario */}
      <div className="basis-6/12 flex flex-col items-center justify-between select-none">
        <Image
          src="/Logo-La-Derecha-Diario.png"
          alt="Logo La Derecha Diario"
          width={1920}
          height={1080}
          className="max-w-md object-contain dark:invert object-center"
        />
        <div className="flex w-96 justify-end py-2">
          <button className="flex flex-row items-center text-xs font-semibold tracking-wide">
            Edición Argentina
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 inline-block ml-2"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              stroke-width={1.5}
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
              <path d="M6 9l6 6l6 -6"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* search, user, theme */}
      <div className="basis-3/12 flex flex-row items-center justify-end gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          stroke-width={1}
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
          <circle
            cx={10}
            cy={10}
            r={7}
          ></circle>
          <line
            x1={21}
            y1={21}
            x2={15}
            y2={15}
          ></line>
        </svg>
        {/* user picture if logged, else user icon */}
        <div
          className="flex justify-center items-center w-10 h-10 rounded-full border bg-black dark:bg-gray-200"
          style={{ shapeRendering: "auto" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 invert"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            stroke-width={1}
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
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}
