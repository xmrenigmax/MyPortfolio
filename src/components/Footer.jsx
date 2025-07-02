import { ArrowUp } from "lucide-react"

// main footer
export const Footer = () => {

    return (<footer className="text-glow py-12 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center backdrop-blur-md"> 
        <p className="text-sm text-muted-foreground ">
            &copy;  {new Date().getFullYear()} xmrenigmax. All rights reserved.
        </p>

        <a href="#hero" className="p-2 rounded-full bg-primary-10 hover:bp-primary-20 text-primary transition-colors ">
            <ArrowUp size={20}/>
        </a>
    </footer>)
}