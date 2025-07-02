import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { NavBar } from "../components/NavBar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import TestBreakpoint from "../components/TestBreakpoint"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"

export const Home = () => {

    return (
        <div className="min-h-screen theme-colours bg-colour-background text-colour-foreground overflow-x-hidden">
            {/* Theme Toggler */}
            <ThemeToggle />
            {/* Background SFX */}
            <StarBackground />
            {/* Navigation Bar */}
            <NavBar />
            {/* Main Content */}
            <main>
                <HeroSection/>
                <AboutSection/>
                <SkillsSection/>
                <ProjectsSection/>
                <ContactSection/>
            </main>
            {/* Footer */}
            <Footer/>
        </div>
    )
}