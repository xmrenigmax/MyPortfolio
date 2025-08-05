/**
 * ProjectsSection Component
 * 
 * TODO: Before deployment:
 * 1. Replace all '#' placeholders with actual URLs
 * 2. Add proper aria-labels to icon buttons for accessibility
 * 3. Consider lazy-loading images for performance
 * 4. Update GitHub icon import if needed (currently using lucide-react)
 */

import { ArrowRight, ExternalLink, Github } from "lucide-react";

/**
 * Project data array containing details for each portfolio project
 * @type {Array<{
 *   id: number,
 *   title: string,
 *   description: string,
 *   image: string,
 *   tags: string[],
 *   demoURL: string,
 *   githubURL: string
 * }>}
 */
const project = [
    {
        id: 1, 
        title: "Agile Task Manager (Scrum Board)", 
        description: "A Jira-like task management system with user stories, sprints, and burndown charts.", 
        image: "/projects/project1.jpeg", 
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'SQL (Oracle)', 'Docker', 'Git & GitHub', 'Agile/Scrum'], 
        demoURL: "https://agile-task-manager-client.vercel.app/home",
        githubURL: 'https://github.com/xmrenigmax/AgileTaskManager' 
    },
    {
        id: 2, 
        title: "Readme Generator", 
        description: "Automates GitHub README.md creation with a form (project name, badges, etc.).", 
        image: "/projects/project2.jpeg", 
        tags: ['React', 'JavaScript', 'Node.js', 'HTML/CSS', 'Git & GitHub', 'VS Code'], 
        demoURL: "#", // TODO: Replace with actual demo URL
        githubURL: '#' // TODO: Replace with actual GitHub URL
    },
    {
        id: 3, 
        title: "Dev Job Tracker", 
        description: "Track job applications, interviews, and follow-ups with auto-import from LinkedIn/Indeed.", 
        image: "/projects/project3.jpeg", 
        tags: ['React', 'Tailwind CSS', 'Node.js', 'JavaScript', 'SQL', 'Problem Solving'], 
        demoURL: "#", // TODO: Replace with actual demo URL
        githubURL: '#' // TODO: Replace with actual GitHub URL
    }
];

/**
 * Displays a section showcasing portfolio projects
 * @returns {JSX.Element} The projects section component
 */
export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 relative">
            {/* Container for responsive layout */}
            <div className="container mx-auto max-w-5xl">
                {/* Section header */}
                <header className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-glow">
                        Featured&nbsp;
                        <span className="hero-name">Projects</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-glow">
                        Here are some of my recent projects, to show my level of skill. 
                        Each project created with a purpose of improving user's experience.
                    </p>
                </header>

                {/* Projects grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {project.map((projectItem) => (
                        <article 
                            key={projectItem.id} 
                            className="gradient-border group bg-card rounded-lg overflow-hidden shadow-xs card-hover text-glow"
                        >
                            {/* Project image with hover effect */}
                            <figure className="h-48 overflow-hidden group">
                                <img 
                                    src={projectItem.image} 
                                    alt={`Screenshot of ${projectItem.title}`} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                            </figure>

                            {/* Project details */}
                            <div className="p-6">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {projectItem.tags.map((tag, index) => (
                                        <span 
                                            key={`${projectItem.id}-${index}`}
                                            className="border px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Project info */}
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">{projectItem.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">{projectItem.description}</p>
                                    
                                    {/* Action links */}
                                    <div className="flex justify-between items-center navbar-logo">
                                        <div className="flex space-x-3">
                                            <a 
                                                href={projectItem.demoURL} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                aria-label={`View ${projectItem.title} demo`}
                                            >
                                                <ExternalLink size={20}/>
                                            </a>
                                            <a 
                                                href={projectItem.githubURL} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                aria-label={`View ${projectItem.title} source code`}
                                            >
                                                <Github size={20}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                {/* Github Account Button */}
                <div className="text-center m-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/xmrenigmax">
                        Check My Github <ArrowRight/>
                    </a>
                </div>
            </div>
        </section>
    );
};