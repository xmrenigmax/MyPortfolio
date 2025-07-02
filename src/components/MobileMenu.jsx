import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

export const MobileMenu = ({ navItems }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        className="p-2 rounded-md focus:outline-none z-50"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      
      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 z-40 bg-background/90 backdrop-blur-md transition-all duration-300",
        "flex flex-col items-center justify-center space-y-6",
        open ? "opacity-100 visible" : "opacity-0 invisible"
      )}>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-xl font-medium text-black dark:text-white hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};