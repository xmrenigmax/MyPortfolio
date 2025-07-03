import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className='py-24 px-4 relative'> 
            {/* Main container with max width for better responsiveness */}
            <div className='container mx-auto max-w-5xl'>
                {/* Section heading with glow effect */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow">
                    About 
                    <span className='hero-name'> Me </span>
                </h2>

                {/* Two-column layout for desktop, single column on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
                    {/* Left column - Personal introduction */}
                    <div className="space-y-6 text-glow">
                        <h3 className="text-2xl font-semibold">Enthusiastic Software Engineer</h3>
                        <p>
                            With academic expertise in Python, object-oriented programming, and database systems,
                            I specialize in back-end development while creating responsive, accessible, and 
                            high-performance solutions for modern applications.
                        </p>

                        <p>
                            Currently a first-year Computer Science student at Bournemouth University, I hold multiple 
                            certifications in mathematics, Python, SQL, and data security. My commitment to learning 
                            is demonstrated by maintaining an 80% average in my first year. I actively seek new 
                            challenges and opportunities to expand my technical knowledge.
                        </p>
                        
                        {/* Call-to-action buttons */}
                        <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                            <a href='#contact' className="cosmic-button">
                                Contact Me 
                            </a>
                            <a href="/CV-1.pdf" className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* Right column - Skill cards */}
                    <div className="grid grid-cols-1 gap-6">
                        {/* Software Engineering Card */}
                        <div className="gradient-border p-6 card-hover text-glow">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary-10" >
                                    <Code className='h-6 w-6 navbar-logo'/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Software Engineering</h4>
                                    <p className="text-muted-foreground">
                                        Developing robust software solutions, tools, and modern data frameworks
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* UI/UX Design Card */}
                        <div className="gradient-border p-6 card-hover text-glow">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary-10" >
                                    <User className='h-6 w-6 navbar-logo'/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground">
                                        Crafting intuitive user interfaces with exceptional user experience
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Project Management Card */}
                        <div className="gradient-border p-6 card-hover text-glow">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary-10" >
                                    <Briefcase className='h-6 w-6 navbar-logo'/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">
                                        Leading 7-member teams using Agile methodologies for efficient project delivery
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}