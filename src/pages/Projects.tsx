import { ExternalLink, Github, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme/ThemeProvider";
import { cn } from "@/lib/utils";

const Projects = () => {
  const { theme } = useTheme();
  const isDark = theme !== 'light';

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <h1 className="page-title">
          Projects
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="content-tile">
            <h2 className={cn("text-2xl font-semibold mb-2", 
              isDark ? "text-white" : "text-gray-800"
            )}>
              Splitwise Debt Settler
            </h2>
            <p className={cn("text-sm mb-4", 
              isDark ? "text-gray-400" : "text-gray-500"
            )}>
              HTML, CSS, JavaScript, ReactJS, Algorithm
            </p>
            <div className={cn("space-y-3 mb-6", 
              isDark ? "text-gray-200" : "text-gray-600"
            )}>
              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Constructed a full-stack debt management app using graph and heap algorithms to automate tracking and settlement.</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Integrated graph-based algorithms for optimal transaction resolution and improved accuracy.</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Optimized expense tracking UI, reducing processing time by 25% and improving user efficiency.</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Introduced real-time notifications with WebSockets to alert users of new transactions.</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://github.com/riteshpalk9/DebtSettlerWebApp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
              <Button size="sm" asChild>
                <a 
                  href="https://debt-settler-web-app.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </div>
          </div>
          
          <div className="content-tile">
            <h2 className={cn("text-2xl font-semibold mb-2", 
              isDark ? "text-white" : "text-gray-800"
            )}>
              URL Shortener Web App
            </h2>
            <p className={cn("text-sm mb-4", 
              isDark ? "text-gray-400" : "text-gray-500"
            )}>
              NodeJS, ExpressJS, MongoDB, EJS
            </p>
            <div className={cn("space-y-3 mb-6", 
              isDark ? "text-gray-200" : "text-gray-600"
            )}>
              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Created a URL shortener with modular Node.js architecture, reducing URL length by 80%.</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Persisted URLs in MongoDB with activity logging for analytics.</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Used EJS for dynamic rendering and built RESTful APIs for interaction.</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Executed detailed link analytics and click tracking logic, capturing timestamp, and referrer for every redirect.</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://github.com/riteshpalk9/URL_Shortener" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
