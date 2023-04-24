export default function DayInformation() {
  const date1 = new Date()
  const dateTimeFormat2 = new Intl.DateTimeFormat("es-AR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
    timeZone: "America/Argentina/Buenos_Aires"
  })
  console.log(dateTimeFormat2.format(date1))
  return (
    <div className="flex basis-full flex-row items-center justify-between dark:text-gray-100 py-2">
      {/* day */}
      <p className="text-xs font-medium">
        {
          // remove "de" from date and set first letter to uppercase
          dateTimeFormat2
            .format(date1)
            .replaceAll(" de", "")
            .replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase())
        }
      </p>

      {/* Clima */}
      <div className="flex flex-row items-center gap-4 text-xs">
        {/* link a mas detalles del clima en: ciudad guardada */}
        <a
          target="_blank"
          href="https://www.google.com/search?q=clima+ciudad+guardada"
          className="flex flex-row items-center justify-between font-light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-1"
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
            <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
            <path d="M11 13l9 -9"></path>
            <path d="M15 4h5v5"></path>
          </svg>
          Pronóstico completo
        </a>
        {/* temperatura */}
        <p className="flex flex-row items-center justify-between font-normal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-1 inline-block"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            ></path>
            <path d="M14.468 10a4 4 0 1 0 -5.466 5.46"></path>
            <path d="M2 12h1"></path>
            <path d="M11 3v1"></path>
            <path d="M11 20v1"></path>
            <path d="M4.6 5.6l.7 .7"></path>
            <path d="M17.4 5.6l-.7 .7"></path>
            <path d="M5.3 17.7l-.7 .7"></path>
            <path d="M15 13h5a2 2 0 1 0 0 -4"></path>
            <path d="M12 16h5.714l.253 0a2 2 0 0 1 2.033 2a2 2 0 0 1 -2 2h-.286"></path>
          </svg>
          20°
        </p>
        {/* divisor */}
        <div className="w-px h-4 bg-black dark:bg-gray-300" />
        {/* ciudad */}
        <p className="flex flex-row items-center justify-between font-normal">
          Ciudad Guardada, <span className="opacity-50 ml-1">Provincia</span>
        </p>
      </div>
    </div>
  )
}
