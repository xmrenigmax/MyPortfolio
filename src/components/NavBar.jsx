import { cn } from "../lib/utils"
import { useEffect, useState } from "react"

/**
 * Navigation items configuration
 * Defines the main sections of the portfolio
 */
const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
]

/**
 * Main navigation bar component
 * Handles scroll behavior and responsive styling
 */
export const NavBar = () => {
    // State to track scroll position for dynamic styling
    const [isScrolled, setIsScrolled] = useState(false)

    // Effect to handle scroll events and update state
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300",
            "bg-background/80 backdrop-blur-md",
            isScrolled ? "py-3 shadow-xs" : "py-6"  // Compact on scroll
        )}>
            <div className="container flex items-center justify-between">
                {/* Logo/Branding section */}
                <a href="#hero" className="flex items-center">
                    <span className="relative z-10 flex items-baseline gap-1">
                        <span className={cn(
                            "navbar-logo navbar-logo-dark font-extrabold tracking-tight",
                            "text-glow mr-3"  // Right margin for spacing
                        )}>
                            Riley
                        </span>
                        <span className={cn(
                            "text-primary navbar-logo font-extrabold tracking-tight"
                        )}>
                            Portfolio
                        </span>
                    </span>
                </a>
                
                {/* Main navigation links */}
                <div className="flex items-center nav-spacer">
                    {navItems.map((item, index) => (
                        <div key={index}>
                            <a 
                                href={item.href} 
                                className={cn(
                                    "navbar-link font-medium",
                                    "transition-colors duration-300"  // Smooth hover transitions
                                )}
                                aria-label={`Navigate to ${item.name} section`}
                            >
                                {item.name}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    )
}