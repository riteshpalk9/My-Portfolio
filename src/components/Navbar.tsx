import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme/ThemeToggle";
import { useTheme } from "./theme/ThemeProvider";
import { cn } from "@/lib/utils";
import { usePreload } from "@/hooks/usePreload";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const { theme } = useTheme();
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  
  const isDark = theme !== 'light';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/experience", label: "Experience" },
    { path: "/education", label: "Education" },
    { path: "/projects", label: "Projects" },
    { path: "/resume", label: "Resume" },
    { path: "/contact", label: "Contact" },
  ];

  usePreload(hoveredPath || '');

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? isDark 
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" 
            : "bg-white/90 backdrop-blur-md border-b border-border shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className={cn(
              "text-xl font-bold relative group",
              isDark ? "text-white" : "text-primary"
            )}
          >
            <span className="relative z-10">Ritesh Pal</span>
            <span className={cn(
              "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r",
              isDark ? "from-primary via-accent to-primary/40" : "from-primary via-accent to-primary/40",
              "group-hover:w-full transition-all duration-300"
            )}></span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onMouseEnter={() => setHoveredPath(link.path)}
                onMouseLeave={() => setHoveredPath(null)}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium relative group",
                  location.pathname === link.path
                    ? isDark 
                      ? "text-primary" 
                      : "text-primary"
                    : isDark 
                      ? "text-gray-300 hover:text-white" 
                      : "text-gray-600 hover:text-primary"
                )}
              >
                <span>{link.label}</span>
                <span className={cn(
                  "absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r",
                  isDark ? "from-primary to-accent" : "from-primary to-accent",
                  location.pathname === link.path ? "w-full" : "group-hover:w-full",
                  "transition-all duration-300"
                )}></span>
              </Link>
            ))}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>
          
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="ml-2" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div 
            ref={menuRef}
            className={cn(
              "md:hidden py-4 border-t",
              isDark 
                ? "border-gray-800 bg-background/95 backdrop-blur-md" 
                : "border-gray-200 bg-white/95 backdrop-blur-md"
            )}
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium",
                    location.pathname === link.path
                      ? isDark 
                        ? "bg-primary/10 text-primary" 
                        : "bg-primary/10 text-primary"
                      : isDark 
                        ? "text-gray-300 hover:bg-gray-800" 
                        : "text-gray-600 hover:bg-gray-100"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
