"use client"
import React from "react"
import { useTheme } from "next-themes"
import useHasMounted from "@/utils/hooks/useHasMounted"

const Button = () => {
  const { theme, setTheme } = useTheme()

  const hasMounted = useHasMounted()
  if (!hasMounted) {
    return null
  }

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
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
        {theme === "light" ? (
          <>
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            ></path>
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
          </>
        ) : (
          <>
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            ></path>
            <circle
              cx={12}
              cy={12}
              r={5}
            />
            <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
          </>
        )}
      </svg>
    </button>
  )
}

export default Button
