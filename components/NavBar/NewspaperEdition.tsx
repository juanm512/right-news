"use client";
import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useScroll } from "framer-motion";
import Link from "next/link";

export default function NewspaperEdition() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { scrollY }: any = useScroll();

  return (
    <DropdownMenu.Root
      modal={false}
      open={isMenuOpen}
      onOpenChange={() => {
        function updateHidden() {
          if (scrollY.current != scrollY.prev) {
            setIsMenuOpen(false);
          }
        }
        const unsubX = scrollY.on("change", updateHidden);
        return () => {
          unsubX();
        };
      }}
    >
      <DropdownMenu.Trigger asChild>
        <button
          className="flex flex-row items-center text-xs font-semibold tracking-wide"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Edición Argentina
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`ml-2 inline-block h-4 w-4 transition-transform duration-300 ${
              isMenuOpen ? "rotate-180" : ""
            }`}
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
            <path d="M6 9l6 6l6 -6"></path>
          </svg>
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-10 min-w-[100px] rounded-md bg-neutral-100 p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-[yDownOpacity_0.3s_ease-out] dark:bg-neutral-800 dark:text-white"
          sideOffset={5}
        >
          <DropdownMenu.Item
            asChild
            className="data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none"
          >
            <Link href="/othersite">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-1 top-1/2 h-4 w-4 -translate-y-1/2 transform"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                stroke-width={2}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M3.6 9h16.8"></path>
                <path d="M3.6 15h16.8"></path>
                <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                <path d="M12.5 3a17 17 0 0 1 0 18"></path>
              </svg>
              Internacional
              <div className="text-mauve11 group-data-[disabled]:text-mauve8 ml-auto pl-[20px] group-data-[highlighted]:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            asChild
            className="data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none"
          >
            <Link href="/othersite">
              <span className="absolute left-0.5 top-1/2 h-4 w-4 -translate-y-1/2 transform">
                <BrasilFlag />
              </span>
              Brasil
              <div className="text-mauve11 group-data-[disabled]:text-mauve8 ml-auto pl-[20px] group-data-[highlighted]:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="fill-white dark:fill-neutral-800" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

const BrasilFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
    <path
      fill="#009B3A"
      d="M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z"
    />
    <path fill="#FEDF01" d="M32.728 18L18 29.124 3.272 18 18 6.875z" />
    <circle fill="#002776" cx="17.976" cy="17.924" r="6.458" />
    <path
      fill="#CBE9D4"
      d="M12.277 14.887c-.332.621-.558 1.303-.672 2.023 3.995-.29 9.417 1.891 11.744 4.595.402-.604.7-1.28.883-2.004-2.872-2.808-7.917-4.63-11.955-4.614z"
    />
    <path fill="#88C9F9" d="M12 18.233h1v1h-1zm1 2h1v1h-1z" />
    <path
      fill="#55ACEE"
      d="M15 18.233h1v1h-1zm2 1h1v1h-1zm4 2h1v1h-1zm-3 1h1v1h-1zm3-6h1v1h-1z"
    />
    <path fill="#3B88C3" d="M19 20.233h1v1h-1z" />
  </svg>
);
