import Link from "next/link"
import ThemeButton from "../ThemeButton"

export default function SectionsMenu() {
  return (
    <div className="flex basis-full flex-row justify-between items-center dark:text-gray-100 py-1">
      {/* menu opener */}
      <button className="flex flex-row gap-1 items-center justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 inline-flex"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          stroke-width={2}
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
        <span className="inline-flex font-normal text-sm">Más secciones</span>
      </button>
      {/* sections */}
      <div className="basis-8/12 flex flex-row items-center justify-between gap-4">
        <Link
          href="/noticias"
          className="text-base font-medium"
        >
          Noticias
        </Link>
        <Link
          href="/noticias"
          className="text-base font-medium"
        >
          Opiniones
        </Link>
        <Link
          href="/noticias"
          className="text-base font-medium"
        >
          Deportes
        </Link>
        <Link
          href="/noticias"
          className="text-base font-medium"
        >
          Economía
        </Link>
        <Link
          href="/noticias"
          className="text-base font-medium"
        >
          Internacional
        </Link>
      </div>
      {/* theme change */}
      <div className="basis-1/12 flex flex-row items-center justify-end">
        <ThemeButton />
      </div>
    </div>
  )
}
