import "./globals.css"
import type { Metadata } from "next"
import ProviderTheme from "./providerTheme"
import { Inter } from "next/font/google"
const { meta } = require("~/config/config.json")

const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = meta

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* <ProviderTheme>{children}</ProviderTheme> */}
        {children}
      </body>
    </html>
  )
}
