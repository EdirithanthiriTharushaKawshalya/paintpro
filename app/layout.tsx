import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PaintPro - Premium Paints & Accessories",
  description: "Transform your space with high-quality paints and professional tools",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-50 to-purple-50 relative">
          {/* Enhanced purple glass morphism background elements with more intensity */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/40 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-400/35 rounded-full blur-3xl transform translate-x-1/2" />
            <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-300/40 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-purple-200/50 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-3/4 left-1/4 w-56 h-56 bg-purple-400/25 rounded-full blur-3xl" />
            <div className="absolute top-1/4 right-1/3 w-40 h-40 bg-purple-500/30 rounded-full blur-2xl" />
          </div>

          <div className="relative z-10">
            <Navigation />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
