import Link from "next/link"
// import EntranceScale from "../MotionWrappers/EntranceScale"

export default function SectionsMenu() {
  return (
    <div className="flex basis-full flex-row justify-between items-center dark:text-gray-100 py-1">
      {/* menu opener */}
      {/* <EntranceScale> */}
      <button className="w-full md:w-fit flex flex-row gap-1 items-center justify-center md:justify-start animate-[scaleOpacity_1s_0.05s_ease-in-out]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 inline-flex"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth={2}
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
          <path d="M4 6l16 0"></path>
          <path d="M4 12l16 0"></path>
          <path d="M4 18l16 0"></path>
        </svg>
        <span className="hidden md:inline-flex font-normal text-sm">
          Más secciones
        </span>
        <span className="md:hidden inline-flex font-normal text-base">
          Mostrar todas las secciones
        </span>
      </button>
      {/* </EntranceScale> */}

      {/* sections */}
      <div className="basis-10/12 hidden md:flex flex-row items-center justify-around gap-4">
        {/* <EntranceScale> */}{" "}
        <Link
          href="/noticias"
          className="text-base font-medium animate-[scaleOpacity_1.1s_0.075s_ease-in-out]"
        >
          Noticias
        </Link>
        {/* </EntranceScale> */}
        {/* <EntranceScale> */}{" "}
        <Link
          href="/noticias"
          className="text-base font-medium animate-[scaleOpacity_1.2s_0.1s_ease-in-out]"
        >
          Opiniones
        </Link>
        {/* </EntranceScale> */}
        {/* <EntranceScale> */}{" "}
        <Link
          href="/noticias"
          className="text-base font-medium animate-[scaleOpacity_1.3s_0.125s_ease-in-out]"
        >
          Deportes
        </Link>
        {/* </EntranceScale> */}
        {/* <EntranceScale> */}{" "}
        <Link
          href="/noticias"
          className="text-base font-medium animate-[scaleOpacity_1.4s_0.15s_ease-in-out]"
        >
          Economía
        </Link>
        {/* </EntranceScale> */}
        {/* <EntranceScale> */}{" "}
        <Link
          href="/noticias"
          className="text-base font-medium animate-[scaleOpacity_1.5s_0.175s_ease-in-out]"
        >
          Internacional
        </Link>
        {/* </EntranceScale> */}
      </div>

      {/* Search button */}
      {/* <div className="basis-1/12 flex flex-row items-center justify-end animate-[opacity_1s_0.05s_ease-in-out]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          strokeWidth={1}
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
      </div> */}
    </div>
  )
}
