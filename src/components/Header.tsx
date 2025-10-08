"use client"

import logo from "../../public/logo.svg"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import ThemeToggle from "./ThemeToggle"
import { useCart } from "@/contexts/CartContext"
import { useFavorites } from "@/contexts/FavoritesContext"
import { ShoppingBag, Heart, Search, Menu, X } from "lucide-react"
import SearchBar from "./SearchBar"

const navLinks = [
  { name: "Products", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "contact", href: "/contact" },
  { name: "Service", href: "/services" },
]



export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [width, setWidth] = useState(0)
  const { cartCount } = useCart()
  const { favoritesCount } = useFavorites()

  useEffect(() => {
    setWidth(window.innerWidth)
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      {/* Main Header */}
      <div className="w-full h-16 md:h-20 flex items-center bg-background px-4 md:px-6 lg:px-12 relative justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src={logo}
            alt="Nike Logo"
            className="h-14 w-14 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain select-none"
          />
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 xl:gap-8 font-medium text-foreground text-sm xl:text-base">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group" // add group here
            >
              <span className="group-hover:text-red-600 transition-colors">
                {link.name}
              </span>

              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>



        {/* Right: Search + Icons */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center mr-9 bg-muted rounded-full px-4 py-2">
            <SearchBar />
          </div>


          {/* Ye icons sirf tab dikhenge jab width > 425 */}
          {width > 425 && (
            <>
              <ThemeToggle />
              <Link href="/favorites" className="relative hover:opacity-70 transition-opacity">
                <Heart className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                {favoritesCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                    {favoritesCount}
                  </span>
                )}
              </Link>

              <Link href="/addtocard" className="relative hover:opacity-70 transition-opacity">
                <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </Link>
            </>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-foreground hover:opacity-70 transition-opacity"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Fullscreen Dropdown (Mobile/Tablet) */}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-background z-50 flex flex-col animate-slideDown">
          {/* Close Button */}
          <div className="flex justify-end items-center px-4 py-4 border-b border-border">
            <button onClick={() => setMobileMenuOpen(false)}>
              <X className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Mobile Search (Full Width) */}
          {width <= 768 && mobileMenuOpen && (
            <div className="flex items-center bg-muted rounded-full px-4 py-2 mt-4 w-full">
              <SearchBar />
            </div>
          )}



          {/* Links */}
          <nav className="flex flex-col px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 font-medium text-foreground hover:opacity-70 transition-opacity"
              >
                {link.name}
              </Link>
            ))}

            {/* Ye icons 425px tak sidebar ke andar aa jayenge */}
            {width <= 425 && (
              <div className="mt-6 flex gap-6 items-center border-t border-border pt-4">
                <ThemeToggle />
                <Link
                  href="/favorites"
                  onClick={() => setMobileMenuOpen(false)}
                  className="relative hover:opacity-70 transition-opacity"
                >
                  <Heart className="w-6 h-6 md:w-6 md:h-6 text-red-500" />
                  {favoritesCount > 0 && (
                    <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                      {favoritesCount}
                    </span>
                  )}
                </Link>

                <Link
                  href="/addtocard"
                  onClick={() => setMobileMenuOpen(false)}  // <-- add this too
                  className="relative hover:opacity-70 transition-opacity"
                >
                  <ShoppingBag className="w-6 h-6 md:w-6 md:h-6 text-blue-600" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                      {cartCount}
                    </span>
                  )}
                </Link>

              </div>
            )}
          </nav>
        </div>
      )}
    </>
  )
}
