
import { Github, Linkedin, Mail, ExternalLink, Download, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTheme } from "@/components/theme/ThemeProvider";
import { useState, useRef, useEffect } from 'react';

const Home = () => {
  const { theme } = useTheme();
  
  const isDark = theme !== 'light';

  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleImageClick = () => {
    console.log("Image clicked"); // Add debug logging
    setShowVideo(true);
    
    if (videoRef.current) {
      console.log("Video ref exists, attempting to play"); // Add debug logging
      videoRef.current.muted = true; // Keep muted to allow autoplay
      videoRef.current.play()
        .then(() => console.log("Video playback started successfully"))
        .catch(error => {
          console.error("Video playback failed:", error);
          // Fallback to showing the image if video fails to play
          setShowVideo(false);
        });
    } else {
      console.error("Video ref is null"); // Add debug logging
    }
  };

  // Preload the video to make the transition smoother
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      console.log("Video preloaded");
    }
  }, []);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <section className="pt-20 md:pt-32 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Profile Image with gradient border */}
              <div className={`relative ${isDark ? 'glass-card-dark' : 'glass-card'} rounded-full p-1.5 shadow-premium`}>
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/10">
                  {/* Video and image container */} 
                  <div className="absolute inset-0">
                    {/* Video element */}
                    <video
                      ref={videoRef}
                      src="/home_video.mp4"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      style={{ display: showVideo ? 'block' : 'none' }}
                      muted
                      playsInline
                      onEnded={() => {
                        console.log("Video has ended.");
                        // Add any action you want to take when the video ends, e.g., reset or hide the video.
                        setShowVideo(false);
                      }}
                    />
              
                    {/* Image (shown until clicked) */}
                    {!showVideo && (
                      <div 
                        className="absolute inset-0 cursor-pointer" 
                        onClick={handleImageClick}
                        style={{ zIndex: 10 }} // Ensure it's above other elements
                      >
                        <img
                          src="/home_img.png"
                          alt="Click to Play"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    )}
                  </div>

                  {/* Glow effect */}
                  <div className={`absolute inset-0 ${isDark ? 'bg-gradient-radial from-primary-500/20 to-transparent' : 'bg-gradient-radial from-white/40 to-transparent'} opacity-75`}></div>
                </div>
              </div>
              
              {/* Name and intro */}
              <div className="text-center md:text-left space-y-6">
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Ritesh Pal</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-600 dark-purple:text-gray-300 dark-blue:text-gray-300 dark-neon:text-gray-300 font-light">
                    Web Developer & Mathematics Engineer
                  </p>
                </div>
                
                <div className="max-w-2xl">
                  <p className="text-gray-600 dark-purple:text-gray-300 dark-blue:text-gray-300 dark-neon:text-gray-300">
                    Creating elegant digital experiences through the perfect blend of mathematical precision and creative design.
                  </p>
                </div>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <Button 
                    size="lg"
                    className={`relative group overflow-hidden shadow-premium hover:shadow-premium-hover transition-all ${
                      isDark ? 'bg-gradient-to-r from-primary to-accent text-white' : ''
                    }`}
                    asChild
                  >
                    <Link to="/projects">
                      <span className="relative z-10">View Projects</span>
                      <span className={`absolute inset-0 w-full h-full ${isDark ? 'bg-black/10' : 'bg-primary/90'} transform translate-y-full group-hover:translate-y-0 transition-transform duration-300`}></span>
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="outline"
                    size="lg"
                    className={`relative group overflow-hidden ${
                      isDark ? 'border-gray-700 text-gray-300 hover:text-white' : 'border-gray-200 hover:bg-gray-50'
                    }`}
                    asChild
                  >
                    <Link to="/resume">
                      <span className="relative z-10 flex items-center">
                        Resume <Download className="ml-1.5 h-4 w-4" />
                      </span>
                    </Link>
                  </Button>
                </div>
                
                <div className="flex justify-center md:justify-start gap-6 pt-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      isDark 
                        ? 'text-gray-400 hover:text-primary transition-colors' 
                        : 'text-gray-600 hover:text-primary transition-colors'
                    } transform hover:scale-110 transition-transform`}
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      isDark 
                        ? 'text-gray-400 hover:text-primary transition-colors' 
                        : 'text-gray-600 hover:text-primary transition-colors'
                    } transform hover:scale-110 transition-transform`}
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="mailto:riteshpal533@gmail.com"
                    className={`${
                      isDark 
                        ? 'text-gray-400 hover:text-primary transition-colors' 
                        : 'text-gray-600 hover:text-primary transition-colors'
                    } transform hover:scale-110 transition-transform`}
                  >
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Expertise</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className={`${isDark ? 'glass-card-dark' : 'glass-card'} rounded-xl p-6 shadow-card backdrop-blur-lg transform hover:-translate-y-1 transition-all duration-300 hover:shadow-premium group`}>
                <div className={`h-12 w-12 rounded-lg mb-4 flex items-center justify-center ${isDark ? 'bg-primary-900/30' : 'bg-primary-100'} text-primary-500 group-hover:scale-110 transition-transform`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-gray-100' : 'text-gray-800'} group-hover:text-primary transition-colors`}>Experience</h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Web Developer Intern at Bramer Pvt. Ltd.</p>
                <div className="mt-4 pt-4 border-t border-gray-700/20">
                  <Link to="/experience" className={`inline-flex items-center text-sm ${isDark ? 'text-primary-400' : 'text-primary-600'} hover:underline`}>
                    Learn more <ChevronRight className="h-3.5 w-3.5 ml-1" />
                  </Link>
                </div>
              </div>
              
              <div className={`${isDark ? 'glass-card-dark' : 'glass-card'} rounded-xl p-6 shadow-card backdrop-blur-lg transform hover:-translate-y-1 transition-all duration-300 hover:shadow-premium group`}>
                <div className={`h-12 w-12 rounded-lg mb-4 flex items-center justify-center ${isDark ? 'bg-primary-900/30' : 'bg-primary-100'} text-primary-500 group-hover:scale-110 transition-transform`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14v10" />
                  </svg>
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-gray-100' : 'text-gray-800'} group-hover:text-primary transition-colors`}>Education</h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>B.Tech in Mathematics and Computing Engineering</p>
                <div className="mt-4 pt-4 border-t border-gray-700/20">
                  <Link to="/education" className={`inline-flex items-center text-sm ${isDark ? 'text-primary-400' : 'text-primary-600'} hover:underline`}>
                    Learn more <ChevronRight className="h-3.5 w-3.5 ml-1" />
                  </Link>
                </div>
              </div>
              
              <div className={`${isDark ? 'glass-card-dark' : 'glass-card'} rounded-xl p-6 shadow-card backdrop-blur-lg transform hover:-translate-y-1 transition-all duration-300 hover:shadow-premium group`}>
                <div className={`h-12 w-12 rounded-lg mb-4 flex items-center justify-center ${isDark ? 'bg-primary-900/30' : 'bg-primary-100'} text-primary-500 group-hover:scale-110 transition-transform`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-gray-100' : 'text-gray-800'} group-hover:text-primary transition-colors`}>Skills</h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>ReactJS, NodeJS, Python, Machine Learning</p>
                <div className="mt-4 pt-4 border-t border-gray-700/20">
                  <Link to="/about" className={`inline-flex items-center text-sm ${isDark ? 'text-primary-400' : 'text-primary-600'} hover:underline`}>
                    Learn more <ChevronRight className="h-3.5 w-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className={`${isDark ? 'glass-card-dark' : 'glass-card'} rounded-2xl overflow-hidden relative`}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10"></div>
              <div className="relative p-8 md:p-12 z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Let's collaborate</span>
                    </h2>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-lg`}>
                      Interested in working together? I'm always open to discussing product design work or partnership opportunities.
                    </p>
                  </div>
                  <Button 
                    size="lg"
                    className={`relative group overflow-hidden shadow-premium hover:shadow-premium-hover transition-all ${
                      isDark ? 'bg-gradient-to-r from-accent to-primary text-white' : ''
                    }`}
                    asChild
                  >
                    <Link to="/contact">
                      <span className="relative z-10">Get in Touch</span>
                      <span className={`absolute inset-0 w-full h-full ${isDark ? 'bg-black/10' : 'bg-accent/90'} transform translate-y-full group-hover:translate-y-0 transition-transform duration-300`}></span>
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -left-12 -top-12 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
