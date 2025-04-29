
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Code, GraduationCap, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="text-center space-y-6 px-4 relative z-10">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my journey through code, creativity, and innovation. 
            A showcase of my work in web development and engineering.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/projects">
              <Button size="lg">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Decorative circles */}
        <div className="absolute -right-40 top-40 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -left-40 bottom-40 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl"></div>
      </section>
      
      {/* About Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-r from-primary/20 to-accent/20 h-[400px] rounded-lg overflow-hidden flex items-center justify-center">
                <User className="h-32 w-32 text-primary/40" />
              </div>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
              <div className="absolute -left-20 -top-20 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl"></div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-lg text-gray-600">
                A dedicated web developer and mathematics engineer with a passion for creating elegant solutions to complex problems. 
                Experienced in full-stack development with a strong foundation in mathematical principles.
              </p>
              <Link to="/about">
                <Button variant="outline">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-24 px-4 bg-gray-50/50 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Professional Experience
              </h2>
              <p className="text-lg text-gray-600">
                Working with leading companies to develop innovative web solutions. Specialized in React, TypeScript, 
                and modern frontend frameworks to build responsive and accessible applications.
              </p>
              <Link to="/experience">
                <Button variant="outline">
                  View My Experience
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="bg-gradient-to-r from-accent/20 to-primary/20 h-[400px] rounded-lg overflow-hidden flex items-center justify-center">
                <Briefcase className="h-32 w-32 text-primary/40" />
              </div>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl"></div>
              <div className="absolute -left-20 -top-20 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-r from-primary/20 to-accent/20 h-[400px] rounded-lg overflow-hidden flex items-center justify-center">
                <GraduationCap className="h-32 w-32 text-primary/40" />
              </div>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
              <div className="absolute -left-20 -top-20 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl"></div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Educational Background
              </h2>
              <p className="text-lg text-gray-600">
                B.Tech in Mathematics and Computing Engineering, bringing a unique blend of analytical thinking 
                and technical expertise to software development.
              </p>
              <Link to="/education">
                <Button variant="outline">
                  Explore My Education
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-24 px-4 bg-gray-50/50 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-600">
                A collection of my best work showcasing my skills in web development, 
                user interface design, and problem-solving abilities.
              </p>
              <Link to="/projects">
                <Button variant="outline">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="bg-gradient-to-r from-accent/20 to-primary/20 h-[400px] rounded-lg overflow-hidden flex items-center justify-center">
                <Code className="h-32 w-32 text-primary/40" />
              </div>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl"></div>
              <div className="absolute -left-20 -top-20 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center space-y-8 max-w-3xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-600">
              Have a project in mind or want to discuss potential opportunities? 
              I'm always open to new connections and exciting collaborations.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Get in Touch
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute left-0 top-1/2 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </section>
    </div>
  );
};

export default Index;
