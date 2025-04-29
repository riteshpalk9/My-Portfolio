import { Briefcase, Calendar, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const Experience = () => {
  const { theme } = useTheme();
  const isDark = theme !== 'light';

  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Bramer Pvt. Ltd.",
      duration: "June 2024 - July 2024",
      location: "Delhi, India",
      highlights: [
        "Spearheaded frontend optimization efforts, reducing component load time by 40% using lazy loading and code splitting.",
        "Developed and handled 10+ reusable UI components, ensuring a uniform design system across the application.",
        "Collaborated cross-functionally with UI/UX and backend teams to deliver responsive interfaces, increasing user satisfaction scores by 20%.",
        "Implemented efficient state management with React hooks, enhancing app responsiveness and minimizing re-renders."
      ]
    }
  ];

  const otherRoles = [
    {
      title: "Mentor",
      organization: "Desh Ke Mentor Programme",
      description: "Mentored 5+ Class X students, achieving 85% average grade improvement."
    },
    {
      title: "Management Head",
      organization: "Pratibimb (Dramatic Society)",
      description: "Led strategic planning and coordination of 10+ society events, increasing annual participation by 40%."
    },
    {
      title: "Chegg Mentor",
      organization: "Chegg",
      description: "Tutored Mathematics subjects on Chegg, maintaining a 4.8/5 average rating across 200+ question sessions."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <h1 className="page-title">
              Professional Experience
            </h1>
            <p className={cn(
              "text-lg md:max-w-3xl",
              isDark ? "text-gray-300" : "text-gray-600"
            )}>
              My journey in web development and technical leadership roles that have shaped my professional skills and expertise.
            </p>
          </header>
          
          {/* Timeline */}
          <div className="relative mb-16">
            {/* Timeline Line */}
            <div className={cn(
              "absolute left-0 md:left-[50%] top-0 bottom-0 w-0.5 md:transform md:-translate-x-1/2",
              isDark ? "bg-gradient-to-b from-primary via-accent to-primary" : "bg-gradient-to-b from-primary via-accent to-primary"
            )}></div>
            
            {/* Timeline Items */}
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12">
                {/* Timeline Dot */}
                <div className={cn(
                  "absolute left-[-9px] md:left-[50%] top-0 w-5 h-5 rounded-full md:transform md:-translate-x-1/2",
                  isDark ? "bg-primary shadow-glow" : "bg-primary"
                )}></div>
                
                {/* Content Card */}
                <div className={cn(
                  "ml-6 md:ml-0 md:w-[calc(50%-30px)]",
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                )}>
                  <div className={cn(
                    "content-tile rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1",
                    isDark ? "glass-card-dark shadow-premium" : "shadow-card hover:shadow-premium"
                  )}>
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row justify-between mb-4">
                        <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
                          <Briefcase className={cn(
                            "h-5 w-5",
                            isDark ? "text-primary-400" : "text-primary"
                          )} />
                          <span className={isDark ? "text-white" : "text-gray-800"}>{exp.title}</span>
                        </h2>
                      </div>
                      
                      <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 mb-6 text-sm">
                        <span className={cn(
                          "flex items-center gap-1.5",
                          isDark ? "text-gray-300" : "text-gray-600"
                        )}>
                          <MapPin className="h-4 w-4 text-accent-400" />
                          {exp.company}
                        </span>
                        <span className={cn(
                          "flex items-center gap-1.5",
                          isDark ? "text-gray-300" : "text-gray-600"
                        )}>
                          <Calendar className="h-4 w-4 text-accent-400" />
                          {exp.duration}
                        </span>
                        <span className={cn(
                          "flex items-center gap-1.5",
                          isDark ? "text-gray-300" : "text-gray-600"
                        )}>
                          <MapPin className="h-4 w-4 text-accent-400" />
                          {exp.location}
                        </span>
                      </div>
                      
                      <ul className="space-y-4">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className={cn(
                            "flex items-start gap-3",
                            isDark ? "text-gray-200" : "text-gray-600"
                          )}>
                            <CheckCircle className={cn(
                              "h-5 w-5 shrink-0 mt-0.5",
                              isDark ? "text-primary-400" : "text-primary"
                            )} />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Other Roles & Responsibilities */}
          <div className="mb-16">
            <h2 className={cn(
              "text-2xl font-bold mb-6",
              isDark ? "text-white" : "text-gray-800"
            )}>
              Other Responsibilities & Achievements
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {otherRoles.map((role, index) => (
                <div 
                  key={index}
                  className={cn(
                    "content-tile rounded-xl p-6 transition-all duration-300 hover:-translate-y-1",
                    isDark 
                      ? "glass-card-dark shadow-card hover:shadow-premium border border-gray-800" 
                      : "shadow-card hover:shadow-premium border border-gray-100"
                  )}
                >
                  <h3 className={cn(
                    "text-lg font-semibold mb-1",
                    isDark ? "text-primary-300" : "text-primary"
                  )}>
                    {role.title}
                  </h3>
                  <p className={cn(
                    "text-sm mb-3",
                    isDark ? "text-gray-400" : "text-gray-500"
                  )}>
                    {role.organization}
                  </p>
                  <p className={cn(
                    isDark ? "text-gray-200" : "text-gray-600"
                  )}>
                    {role.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className={cn(
              "text-2xl font-bold mb-6 text-center",
              isDark ? "text-white" : "text-gray-800"
            )}>
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className={cn(
              "border rounded-xl overflow-hidden",
              isDark ? "border-gray-800 bg-gray-900/50" : "border-gray-200"
            )}>
              <AccordionItem value="item-1" className={isDark ? "border-gray-800" : "border-gray-200"}>
                <AccordionTrigger className={cn(
                  "px-6 py-4",
                  isDark ? "hover:bg-gray-800/50" : "hover:bg-gray-50"
                )}>
                  <span className={isDark ? "text-white" : "text-gray-800"}>What technologies do you specialize in?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className={isDark ? "text-gray-200" : "text-gray-600"}>
                    I specialize in modern web technologies including React.js, TypeScript, and Node.js. I also have experience with Python, machine learning frameworks, and mathematics-driven programming approaches.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className={isDark ? "border-gray-800" : "border-gray-200"}>
                <AccordionTrigger className={cn(
                  "px-6 py-4",
                  isDark ? "hover:bg-gray-800/50" : "hover:bg-gray-50"
                )}>
                  <span className={isDark ? "text-white" : "text-gray-800"}>Are you available for freelance projects?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className={isDark ? "text-gray-200" : "text-gray-600"}>
                    Yes, I'm available for freelance projects, particularly those involving web development, data visualization, and algorithm design. Feel free to reach out via the contact page to discuss your project needs.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className={isDark ? "border-gray-800" : "border-gray-200"}>
                <AccordionTrigger className={cn(
                  "px-6 py-4",
                  isDark ? "hover:bg-gray-800/50" : "hover:bg-gray-50"
                )}>
                  <span className={isDark ? "text-white" : "text-gray-800"}>How do you approach new projects?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className={isDark ? "text-gray-200" : "text-gray-600"}>
                    I begin with a thorough understanding of requirements, followed by research and planning. I believe in iterative development with regular feedback loops to ensure the final product aligns perfectly with the client's vision and user needs.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="mt-10 text-center">
              <Button 
                variant={isDark ? "default" : "outline"}
                size="lg"
                className={cn(
                  "group",
                  isDark 
                    ? "bg-gradient-to-r from-primary to-accent hover:opacity-90" 
                    : "border-primary hover:bg-primary hover:text-white"
                )}
                asChild
              >
                <a href="/contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
