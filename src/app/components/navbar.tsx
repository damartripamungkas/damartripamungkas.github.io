"use client"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" }
]

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ")
}

export default function Navbar() {
  const pathName = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <nav className="flex h-16 justify-between">
      <div className="flex">
        <div className="flex flex-shrink-0 items-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className="text-gray-100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="100%" height="100%" rx="16" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                pathName === item.href
                  ? "border-base-content"
                  : "border-transparent hover:border-base-content",
                "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-shrink-0 items-center">
          <a
            href="#"
            className="text-sm btn btn-circle btn-sm"
            onClick={() => {
              setTheme(theme == "dark" ? "light" : "dark")
            }}
          >
            CT
          </a>
        </div>
      </div>

      {/* <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 pt-2 pb-3">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                pathname === item.href
                  ? "bg-slate-50 border-slate-500 text-slate-700"
                  : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              )}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
        <div className="border-t border-gray-200 pt-4 pb-3"></div>
      </Disclosure.Panel> */}
    </nav>
  )
}
