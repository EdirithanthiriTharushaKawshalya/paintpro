"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { User, ShoppingCart, Heart, Menu, X } from "lucide-react"
import { useRouter } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/colors", label: "See All Colours" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About US" },
    { href: "/support", label: "Get Support" },
  ]

  return (
    <nav className="sticky top-4 z-50 mx-4">
      <motion.div
        className="max-w-6xl mx-auto backdrop-blur-md bg-white/50 rounded-full px-6 py-3 shadow-lg border border-white/20"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl pl-5 font-bold text-gray-900">
            <img src="/nav/logo.png" alt="Logo" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center pr-2 space-x-3">
            <Button variant="ghost" size="sm" className="hidden sm:flex" onClick={() => router.push("/profile")}>
              <User className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hidden sm:flex" onClick={() => router.push("/cart")}>
              <ShoppingCart className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hidden sm:flex" onClick={() => router.push("/favorites")}>
              <Heart className="w-4 h-4" />
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pt-4 border-t border-gray-200"
            >
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex items-center space-x-3 pt-3">
                  <Button variant="ghost" size="sm">
                    <User className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  )
}
