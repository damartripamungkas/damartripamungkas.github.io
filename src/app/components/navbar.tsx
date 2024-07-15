"use client"
import { useTheme } from "next-themes"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { FiMenu, FiMoon, FiSun } from "react-icons/fi"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects Me", href: "/projects-me" },
  { name: "Projects Client", href: "/projects-client" },
  { name: "Skills", href: "/skills" }
  // { name: "Contact", href: "/contact" }
]

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ")
}

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isClient, setIsClient] = useState(false)
  const pathName = usePathname()
  const antonymTheme = theme == `dark` ? `light` : `dark`
  const iconTheme = antonymTheme == `dark` ? <FiMoon size={22} /> : <FiSun size={22} />
  const onClickSetTheme = () => {
    setTheme(antonymTheme)
    document.body.setAttribute("data-theme", antonymTheme)
  }

  useEffect(() => {
    setIsClient(true)
  }, [])

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
          {navigation.map((item) => (
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

      <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
        <div className="flex">
          <div className="flex flex-shrink-0 items-center">
            {/* <button className="btn btn-circle btn-sm" onClick={onClickSetTheme}>
              {isClient ? iconTheme : <span className="loading loading-spinner"></span>}
            </button> */}
          </div>
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
              {[
                ...navigation.map((it, index: number) => (
                  <li key={index}>
                    <a href={it.href}>{it.name}</a>
                  </li>
                )),
                <li key={navigation.length} className="pt-3">
                  <a onClick={onClickSetTheme}>{isClient ? iconTheme : <span className="loading loading-spinner"></span>}</a>
                </li>
              ]}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
