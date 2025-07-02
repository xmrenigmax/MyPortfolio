import { cn } from "../lib/utils"
import { useEffect, useState } from "react"

/**
 * Navigation items configuration
 * Defines the sections of the portfolio to be displayed in the navbar
 */
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

/**
 * NavBar component
 * Renders a responsive navigation bar with scroll-based styling
 * and a mobile hamburger menu toggle
 */
export const NavBar = () => {
  // State: tracks if user has scrolled down for dynamic styling
  const [isScrolled, setIsScrolled] = useState(false)

  // State: tracks whether the mobile dropdown menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Effect: sets up scroll listener to update isScrolled state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)

    // Cleanup listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Toggles the mobile menu open/closed
  const toggleMenu = () => setIsMenuOpen((open) => !open)

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 bg-background/80 backdrop-blur-md",
        isScrolled ? "py-3 shadow-xs" : "py-6"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo/Branding */}
        <a href="#hero" className="flex items-center">
          <span className="relative z-10 flex items-baseline gap-1">
            <span
              className={cn(
                "navbar-logo navbar-logo-dark font-extrabold tracking-tight",
                "text-glow mr-3"
              )}
            >
              Riley
            </span>
            <span
              className={cn(
                "text-primary navbar-logo font-extrabold tracking-tight"
              )}
            >
              Portfolio
            </span>
          </span>
        </a>

        {/* Desktop navigation links: visible on md and larger */}
        <div className="hidden md:flex items-center nav-spacer gap-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={cn(
                "navbar-link font-medium",
                "transition-colors duration-300"
              )}
              aria-label={`Navigate to ${item.name} section`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile hamburger button: visible below md */}
        <button
          onClick={toggleMenu}
          className="text-glow md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {/* Hamburger / Close icon SVG */}
          <svg
            className="h-6 w-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              // Close icon (X)
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon (three lines)
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown menu: visible only when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/90 backdrop-blur-md shadow-md rounded-b-md py-4">
          <div className="flex flex-col items-center gap-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)} // Close menu when link is clicked
                className={cn(
                  "navbar-link font-medium",
                  "transition-colors duration-300"
                )}
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
