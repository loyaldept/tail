import type React from "react"
import { Space_Grotesk } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata = {
  title: "TAIL - AI Financial Intelligence",
  description: "The first ever autonomous financial intelligence to spend, track and improve your credit score.",
  icons: {
    icon: "/favicon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={spaceGrotesk.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
