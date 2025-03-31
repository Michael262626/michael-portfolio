"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="text-gray-300 hover:text-purple-400 hover:bg-purple-500/5"
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" onClick={closeMenu}>
          {/* Menu container */}
          <div
            className="fixed right-0 top-0 h-full w-64 bg-[#0a0a0a] border-l border-[#222] p-6 shadow-xl transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={closeMenu}
                className="text-gray-300 hover:text-purple-400 hover:bg-purple-500/5"
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>

            <nav className="space-y-6">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block py-2 px-4 text-lg font-medium text-gray-300 hover:text-purple-400 hover:bg-purple-500/5 rounded-md transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-[#222]">
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href="#contact" onClick={closeMenu}>
                    Hire Me
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}

