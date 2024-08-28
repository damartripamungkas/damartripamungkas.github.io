"use client"
import { usePathname } from "next/navigation"
import { FiMenu } from "react-icons/fi"
const { path_route } = require(`~/config/config.json`)

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ")
}

export default function Navbar() {
  const pathName = usePathname()
  return (
    <nav className="flex h-16 justify-between">
      <div className="flex">
        <div className="flex flex-shrink-0 items-center">
          <a href="/">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-neutral-content" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" rx="16" fill="currentColor" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
        <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
          {path_route.map((item: any) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                pathName === item.href ? "border-base-content" : "border-transparent hover:border-base-content",
                "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      <div className="-mr-2 flex items-center sm:hidden">
        <div className="drawer z-50">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer" role="button" className="btn btn-sm">
              <FiMenu size={19} />
            </label>
          </div>
          <div className="drawer-side overflow-hidden">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-5 w-8/12 min-h-full bg-base-200 text-base-content">
              {path_route.map((it: any, index: number) => (
                <li key={index}>
                  <a href={it.href}>{it.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
