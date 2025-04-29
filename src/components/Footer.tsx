
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/components/theme/ThemeProvider";
import { cn } from "@/lib/utils";
import { useCounter } from "@/hooks/useCounter";

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme !== 'light';
  const { count: visitorCount } = useCounter('visitors');
  
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/experience", label: "Experience" },
    { to: "/education", label: "Education" },
    { to: "/projects", label: "Projects" },
    { to: "/resume", label: "Resume" },
    { to: "/contact", label: "Contact" }
  ];

  const socialLinks = [
    { href: "https://github.com/riteshpalk9", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/ritesh-pal-8b7082225/", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:riteshpal333@gmail.com", icon: Mail, label: "Email" },
  ];

  return (
    <footer className={cn(
      "mt-auto border-t transition-colors duration-300",
      isDark 
        ? "bg-background/30 backdrop-blur-md border-gray-800" 
        : "bg-white/50 backdrop-blur-sm border-gray-100"
    )}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <h3 className={cn(
                "text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
                isDark ? "from-primary via-accent to-primary/70" : "from-primary to-accent"
              )}>
                Ritesh Pal
              </h3>
            </Link>
            <p className={cn(
              "mb-4",
              isDark ? "text-gray-300" : "text-gray-600"
            )}>
              Web Developer & Mathematics Engineer
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "transition-transform hover:scale-110",
                    isDark 
                      ? "text-gray-400 hover:text-primary" 
                      : "text-gray-500 hover:text-primary"
                  )}
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className={cn(
              "text-lg font-semibold mb-4",
              isDark ? "text-gray-200" : "text-primary"
            )}>Contact</h3>
            <div className="space-y-3">
              <p className={cn(
                "flex items-center gap-2",
                isDark ? "text-gray-300" : "text-gray-600"
              )}>
                <Mail className="h-4 w-4 text-primary" />
                riteshpal333@gmail.com
              </p>
              <p className={cn(
                "flex items-center gap-2",
                isDark ? "text-gray-300" : "text-gray-600"
              )}>
                <Phone className="h-4 w-4 text-primary" />
                +91 9289279272
              </p>
              <p className={cn(
                "flex items-center gap-2",
                isDark ? "text-gray-300" : "text-gray-600"
              )}>
                <MapPin className="h-4 w-4 text-primary" />
                Delhi, India
              </p>
            </div>
          </div>
          
          <div>
            <h3 className={cn(
              "text-lg font-semibold mb-4",
              isDark ? "text-gray-200" : "text-primary"
            )}>Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {links.map((link) => (
                <Link 
                  key={link.to} 
                  to={link.to} 
                  className={cn(
                    "inline-flex items-center hover:translate-x-1 transition-transform",
                    isDark 
                      ? "text-gray-300 hover:text-primary" 
                      : "text-gray-600 hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className={cn(
              "text-lg font-semibold mb-4",
              isDark ? "text-gray-200" : "text-primary"
            )}>Newsletter</h3>
            <p className={cn(
              "mb-3",
              isDark ? "text-gray-300" : "text-gray-600"
            )}>
              Subscribe to receive updates on new projects and articles.
            </p>
            <div className="flex mt-3">
              <input
                type="email"
                placeholder="Email address"
                className={cn(
                  "flex-1 px-4 py-2 rounded-l-lg focus:outline-none",
                  isDark 
                    ? "bg-gray-800 text-white border-gray-700" 
                    : "bg-white text-gray-800 border-gray-200"
                )}
              />
              <button 
                type="button" 
                className={cn(
                  "flex items-center gap-1 px-4 py-2 rounded-r-lg font-medium",
                  isDark 
                    ? "bg-primary hover:bg-primary/90 text-white" 
                    : "bg-primary hover:bg-primary/90 text-white"
                )}
              >
                <span>Join</span>
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        
        <div className={cn(
          "mt-12 pt-6 border-t flex flex-wrap justify-between items-center text-sm",
          isDark ? "border-gray-800 text-gray-400" : "border-gray-200 text-gray-500"
        )}>
          <p>&copy; {new Date().getFullYear()} Ritesh Pal. All rights reserved.</p>
          <div className="flex items-center gap-1 mt-2 sm:mt-0">
            <span className="font-medium">{visitorCount}</span> visitors
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
