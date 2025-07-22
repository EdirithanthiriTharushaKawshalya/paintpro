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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-white relative">
          {/* Enhanced purple glass morphism background elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-300/25 rounded-full blur-3xl transform translate-x-1/2" />
            <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white/40 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2" />
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
