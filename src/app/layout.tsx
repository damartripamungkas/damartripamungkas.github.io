import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
const { meta } = require("~/config/config.json")

const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = Object.assign(structuredClone(meta), {
  metadataBase: meta?.domain,
  title: {
    default: meta?.title,
    template: `%s | ${meta?.title}`
  },
  openGraph: {
    title: `${meta?.title}`,
    description: meta?.description,
    url: meta?.domain,
    siteName: `${meta?.title}`,
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  twitter: {
    title: meta?.title,
    card: "summary_large_image"
  },
  verification: {
    google: "",
    yandex: ""
  }
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}
