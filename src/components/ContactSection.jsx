import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";

export const ContactSection = () => {

    const handleSubmit = (e) => {
        e.preventDefault()

        setTimeout(() => {
            
        },1500)
    }
    return (
        <section id='contact' className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">
                        Get In&nbsp;
                        <span className="hero-name">Touch</span>
                    </h2>
                    <p className="text-glow text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind? Want to collaborate? Interested in my portfolio?
                        Contact me! I'm always open to discussing new opportunities.
                    </p>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-glow text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>
                        
                        <div className="space-y-6">
                            {/* Email Contact */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="hero-name w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-xs text-muted-foreground text-glow text-left">Email</h4>
                                    <a 
                                        href="mailto:RileyJordan21@hotmail.com" 
                                        className="navbar-link font-medium transition-colors duration-300 hover:text-primary"
                                    >
                                        RileyJordan21@hotmail.com
                                    </a>
                                </div>
                            </div>
                            {/* Phone Number */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="hero-name w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-xs text-muted-foreground text-glow text-left">Call</h4>
                                    <a 
                                        href="tel:+44 77831 358596" 
                                        className="navbar-link font-medium transition-colors duration-300 hover:text-primary"
                                    >
                                        +44 77831 358596
                                    </a>
                                </div>
                            </div>
                            {/* Location */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="hero-name w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-xs text-muted-foreground text-glow text-left">Location</h4>
                                    <a 
                                        className="navbar-link font-medium transition-colors duration-300 hover:text-primary"
                                    >
                                        Bournemouth, United Kingdom
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8 text-glow mx-auto">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/mrrileyjordan/" target="_blank">
                                    <Linkedin/>
                                </a>
                                <a href="https://www.instagram.com/xmr.engimax" target="_blank">
                                    <Instagram/>
                                </a>
                                <a href="https://github.com/xmrenigmax" target="_blank">
                                    <Github/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs text-glow gradient-border">
                        <h3 className="text-2xl font-semibold mb-6 "> Send a message</h3>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
                                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Riley Jordan...">
                                </input>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email</label>
                                <input type="text" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Riley Jordan@email.com...">
                                </input>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message</label>
                                <textarea id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Hello lets discuss..">
                                </textarea>
                            </div>
                            <button type="submit"   className={cn("cosmic-button w-full flex items-center justify-center gap-2 relative overflow-hidden", 
                                "px-6 py-3 rounded-full font-medium bg-[hsl(250,65%,65%)] dark:bg-[hsl(250,47%,60%)]",
                                "hover:scale-105 hover:shadow-[0_0_15px_3px_hsla(250,65%,65%,0.5)] dark:hover:shadow-[0_0_15px_3px_hsla(250,47%,60%,0.5)]",
                            )}>
                                Send
                                <Send size={20}/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}