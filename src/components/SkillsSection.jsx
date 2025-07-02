import { useState } from "react";
import { cn } from "../lib/utils"

 
const skills = [
    //Mathematic related
    {name: 'Linear Algebra', level: '80%', categories: 'Mathematics'},
    {name: 'Probability & Statistics', level: '75%', categories: 'Mathematics'},
    {name: 'Discrete Mathematics', level: '70%', categories: 'Mathematics'},
    {name: 'Calculus', level: '80%', categories: 'Mathematics'},

    //Front-end related
    {name: 'React', level: '70%', categories: 'Frontend'},
    {name: 'JavaScript', level: '85%', categories: 'Frontend'},
    {name: 'HTML/CSS', level: '90%', categories: 'Frontend'},
    {name: 'TypeScript', level: '75%', categories: 'Frontend'},
    {name: 'Tailwind CSS', level: '60%', categories: 'Frontend'},

    //Back-end related
    {name: 'Node.js', level: '65%', categories: 'Backend'},
    {name: 'Python', level: '90%', categories: 'Backend'},
    {name: 'SQL (Oracle)', level: '85%', categories: 'Backend'},

    //Tool related
    {name: 'Git & GitHub', level: '90%', categories: 'Tools'},
    {name: 'Docker', level: '72', categories: 'Tools'},
    {name: 'VS Code', level: '100%', categories: 'Tools'},
    {name: 'Matlab', level: '85%', categories: 'Tools'},
    {name: 'Teams', level: '100%', categories: 'Tools'},

    //General skills
    {name: 'Problem Solving', level: '80%', categories: 'General'},
    {name: 'Data Structures & Algorithms', level: '75%', categories: 'General'},
    {name: 'Agile/Scrum', level: '95%', categories: 'General'},
    {name: 'Communication', level: '100%', categories: 'General'},
    {name: 'Technical Writing', level: '70%', categories: 'General'},

    //Cybersecurity skills
    {name: 'Network Security', level: '65%', categories: 'Cybersecurity'},
    {name: 'Ethical Hacking', level: '65%', categories: 'Cybersecurity'},
    {name: 'Penetration Testing', level: '80%', categories: 'Cybersecurity'},
    {name: 'Cryptography', level: '55%', categories: 'Cybersecurity'},
    {name: 'SIEM Tools', level: '60%', categories: 'Cybersecurity'}
];
 
 const categories = ["all", "Mathematics", "Frontend", "Backend", "Tools", "General", "Cybersecurity"] 
 
 
 export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const filteredSkills = skills.filter((skill) => activeCategory === 'all' || skill.categories === activeCategory);
    
    return (
    <section id='skills' className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow">
                My&nbsp; 
                <span className="hero-name">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12 text-glow">
                {categories.map((category,key) => (
                    <button key={key} onClick={() => setActiveCategory(category)}
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground " : "bg-secondary/70 text-foreground hover:bg-secondary")}>
                        {category}
                    </button>
                ))}
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filteredSkills.map((skill,key) => (
                    <div key={key} className="gradient-border p-6 shadow-xs card-hover text-glow"> 
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                            style={{width: skill.level}}/>
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}</span>
                        </div>
                    </div>

                ))}
            </div>

        </div>

    </section>
    )
 }