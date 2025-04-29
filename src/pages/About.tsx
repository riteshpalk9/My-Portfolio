
import { Briefcase, BookOpen, Layers, User, School, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTheme } from "@/components/theme/ThemeProvider";
import { cn } from "@/lib/utils";

const About = () => {
  const { theme } = useTheme();
  const isDark = theme !== 'light';

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <h1 className="page-title">
          About Me
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className={cn(
              "content-tile rounded-lg", 
              isDark ? "glass-morphism" : ""
            )}>
              <div className={cn(
                "aspect-square rounded-lg overflow-hidden mb-4 flex items-center justify-center",
                isDark ? "bg-gradient-to-r from-primary/30 to-accent/30" : "bg-gradient-to-r from-primary/20 to-accent/20"
              )}>
                <img 
                  src="/Screenshot_2025-03-04_012602-removebg-preview.png" 
                  alt="Ritesh Pal" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className={cn("text-2xl font-bold text-center mb-2", 
                isDark ? "text-white" : ""
              )}>
                Ritesh Pal
              </h2>
              <p className={cn("text-center mb-4", 
                isDark ? "text-gray-300" : "text-gray-600"
              )}>
                Web Developer & Mathematics Engineer
              </p>
              <div className="flex justify-center">
                <Link to="/contact">
                  <Button>Get In Touch</Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-8">
            <div className="content-tile">
              <h2 className={cn("text-2xl font-semibold mb-4 flex items-center gap-2",
                isDark ? "text-white" : ""
              )}>
                <User className="h-6 w-6 text-primary" />
                About Me
              </h2>
              <div className={cn("space-y-4", 
                isDark ? "text-gray-200" : "text-gray-600"
              )}>
                <p>
                  Hi, I'm Ritesh — an Engineering student with a passion for building meaningful digital experiences. With a strong foundation in computer science and a growing skill set in both front-end and back-end development, I'm always seeking opportunities to learn, solve real-world problems, and contribute to impactful projects.
                </p>
                <p>
                  I've previously worked as a Front-End Developer Intern at Bramer Pvt Ltd, where I honed my skills in web technologies and UI/UX design. I'm currently exploring full-stack development, and have been actively working on backend technologies like Node.js and FastAPI, integrating them with databases such as MySQL for scalable and efficient applications.
                </p>
                <p>
                  I'm also a creative thinker with a background in dramatics and filmmaking, having been a part of Pratibimb, the dramatics society of DTU. This has helped me develop strong communication, storytelling, and teamwork skills—qualities that I bring to every project I work on.
                </p>
                <p>
                  In addition to development, I've been working on enhancing my problem-solving skills through competitive programming and algorithm challenges on platforms like LeetCode and HackerRank. I love diving into problems involving data structures, dynamic programming, and real-world applications like debt settlement optimization and user authentication systems.
                </p>
                <p>
                  I'm currently seeking opportunities where I can grow as a developer, collaborate with passionate teams, and build products that make a difference.
                </p>
              </div>
            </div>

            <div className="content-tile">
              <h2 className={cn("text-2xl font-semibold mb-4 flex items-center gap-2",
                isDark ? "text-white" : ""
              )}>
                <Briefcase className="h-6 w-6 text-primary" />
                Professional Experience
              </h2>
              <div className={isDark ? "text-gray-200" : "text-gray-600"}>
                <h3 className="font-semibold text-lg">Web Developer Intern — Bramer Pvt. Ltd.</h3>
                <p className={cn("text-sm italic mb-2", 
                  isDark ? "text-gray-400" : "text-gray-500"
                )}>
                  June 2024 - July 2024
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>Spearheaded frontend optimization efforts, reducing component load time by 40% using lazy loading and code splitting.</li>
                  <li>Developed and handled 10+ reusable UI components, ensuring a uniform design system across the application.</li>
                  <li>Collaborated cross-functionally with UI/UX and backend teams to deliver responsive interfaces, increasing user satisfaction scores by 20%.</li>
                  <li>Implemented efficient state management with React hooks, enhancing app responsiveness and minimizing re-renders.</li>
                </ul>
              </div>
            </div>

            <div className="content-tile">
              <h2 className={cn("text-2xl font-semibold mb-4 flex items-center gap-2",
                isDark ? "text-white" : ""
              )}>
                <Layers className="h-6 w-6 text-primary" />
                Technical Skills
              </h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className={cn("font-semibold", 
                    isDark ? "text-gray-200" : ""
                  )}>
                    Languages:
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["C", "C++", "Python", "HTML", "CSS", "JavaScript", "MySQL"].map((skill) => (
                      <span key={skill} className={cn(
                        "px-3 py-1 rounded-full text-sm",
                        isDark ? "bg-primary/20 text-white" : "bg-primary/10"
                      )}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className={cn("font-semibold", 
                    isDark ? "text-gray-200" : ""
                  )}>
                    Frameworks and Tools:
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "TailwindCSS", "Git", "GitHub"].map((skill) => (
                      <span key={skill} className={cn(
                        "px-3 py-1 rounded-full text-sm",
                        isDark ? "bg-accent/20 text-white" : "bg-accent/10"
                      )}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className={cn("font-semibold", 
                    isDark ? "text-gray-200" : ""
                  )}>
                    Areas of Interest:
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["Machine Learning", "Artificial Intelligence", "System Design"].map((skill) => (
                      <span key={skill} className={cn(
                        "px-3 py-1 rounded-full text-sm",
                        isDark ? "bg-secondary/20 text-white" : "bg-secondary/10"
                      )}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="content-tile">
              <h2 className={cn("text-2xl font-semibold mb-4 flex items-center gap-2",
                isDark ? "text-white" : ""
              )}>
                <Code className="h-6 w-6 text-primary" />
                Coding Profile
              </h2>
              <ul className={cn("list-disc list-inside space-y-2 pl-2", 
                isDark ? "text-gray-200" : "text-gray-600"
              )}>
                <li>Ranked 1669 in Contests on LeetCode; solved 550+ DSA problems on LeetCode.</li>
                <li>Sustained 200+ day problem-solving streak, showcasing consistency and dedication to algorithmic mastery.</li>
                <li>Designation of Level 3 Coder on Naukri.com (former CodeStudio).</li>
                <li>Solved 700+ DSA problems across LeetCode, CodeChef, GFG, and Codeforces.</li>
              </ul>
            </div>

            <div className="flex justify-center">
              <Link to="/resume">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                  View My Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
