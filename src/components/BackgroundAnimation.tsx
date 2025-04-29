import { useEffect, useState, useMemo, useCallback } from "react";
import { useTheme } from "./theme/ThemeProvider";

const BackgroundAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const { theme } = useTheme();
  const [rotation, setRotation] = useState(0);

  // Optimize scroll handler using useCallback
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY * 0.3);
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    let lastTimestamp = 0;

    const rotateAnimation = (timestamp: number) => {
      // Optimize animation by limiting updates based on time passed
      if (timestamp - lastTimestamp > 50) { // Only update every 50ms (slower blink)
        setRotation(prev => (prev + 0.2) % 360);
        lastTimestamp = timestamp;
      }
      animationFrameId = requestAnimationFrame(rotateAnimation);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    animationFrameId = requestAnimationFrame(rotateAnimation);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [handleScroll]);

  // Generate random positions for stars/particles
  const starPositions = useMemo(() => {
    return Array.from({ length: 20 }).map(() => ({  // Reduced from 30 to 20 for performance
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      animationDuration: Math.random() * 5 + 4,  // Slower animation: 4-9s instead of 2-5s
    }));
  }, []);

  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden transition-colors duration-500 ${
      theme === 'light' ? 'bg-[#fefefe]' : 
      theme === 'dark-purple' ? 'bg-[#0f0a19]' : 
      theme === 'dark-blue' ? 'bg-[#070d1a]' : 
      'bg-[#080808]'
    }`}>
      {/* Animated glowing orbs with particle trails for light and dark themes */}
      {(theme === 'light' || theme === 'dark-purple' || theme === 'dark-blue') && (
        <>
          <div className="relative w-full h-full">
            {/* Background gradient overlay */}
            <div 
              className={`absolute inset-0 opacity-30 ${
                theme === 'light' 
                  ? 'bg-gradient-radial from-primary-200/20 via-transparent to-transparent' 
                  : theme === 'dark-purple' 
                  ? 'bg-gradient-radial from-primary-900/30 via-primary-900/5 to-transparent'
                  : 'bg-gradient-radial from-secondary-900/30 via-secondary-800/10 to-transparent'
              }`}
            />
            
            {/* Stars/distant particles (not in light theme) */}
            {theme !== 'light' && (
              <div className="absolute inset-0 overflow-hidden">
                {starPositions.map((star, i) => (
                  <div
                    key={i}
                    className={`absolute rounded-full animate-pulse-slow ${
                      theme === 'dark-purple' ? 'bg-primary-300/70' : 'bg-blue-300/70'
                    }`}
                    style={{
                      left: `${star.x}%`,
                      top: `${star.y}%`,
                      width: `${star.size}px`,
                      height: `${star.size}px`,
                      animationDuration: `${star.animationDuration}s`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}
              </div>
            )}

            {/* First orb */}
            <div 
              className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full filter blur-3xl animate-blob ${
                theme === 'light' ? 'bg-primary/30' : 
                theme === 'dark-purple' ? 'bg-purple-600/20' : 
                'bg-blue-500/20'
              }`}
              style={{ 
                transform: `translate(${scrollY * 0.02}px, ${-scrollY * 0.01}px) rotate(${rotation}deg) scale(${1 + scrollY * 0.0005})`,
                boxShadow: theme === 'light' 
                  ? '0 0 80px 40px rgba(139, 92, 246, 0.15)' 
                  : theme === 'dark-purple'
                  ? '0 0 80px 40px rgba(139, 92, 246, 0.1)'
                  : '0 0 80px 40px rgba(59, 130, 246, 0.1)',
              }}
            >
              {/* Reduced particle trails for performance */}
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-2 h-2 rounded-full animate-particle-trail blur-sm ${
                    theme === 'light' ? 'bg-primary/60' :
                    theme === 'dark-purple' ? 'bg-purple-400/40' :
                    'bg-blue-400/40'
                  }`}
                  style={{
                    left: '50%',
                    top: '50%',
                    '--rotation': `${i * 60}deg`,
                    transform: `rotate(${i * 60}deg) translateX(${150 + Math.sin(rotation / 50) * 30}px)`,
                  } as React.CSSProperties}
                />
              ))}
            </div>

            {/* Second orb */}
            <div 
              className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full filter blur-3xl animate-blob animation-delay-2000 ${
                theme === 'light' ? 'bg-accent/30' : 
                theme === 'dark-purple' ? 'bg-indigo-600/20' : 
                'bg-cyan-500/20'
              }`}
              style={{ 
                transform: `translate(${-scrollY * 0.01}px, ${scrollY * 0.02}px) rotate(${-rotation}deg) scale(${1 + scrollY * 0.0003})`,
                boxShadow: theme === 'light' 
                  ? '0 0 80px 40px rgba(217, 70, 239, 0.15)' 
                  : theme === 'dark-purple'
                  ? '0 0 80px 40px rgba(99, 102, 241, 0.1)'
                  : '0 0 80px 40px rgba(6, 182, 212, 0.1)',
              }}
            >
              {/* Reduced particle trails for performance */}
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-2 h-2 rounded-full animate-particle-trail blur-sm ${
                    theme === 'light' ? 'bg-accent/60' :
                    theme === 'dark-purple' ? 'bg-indigo-400/40' :
                    'bg-cyan-400/40'
                  }`}
                  style={{
                    left: '50%',
                    top: '50%',
                    '--rotation': `${i * 60}deg`,
                    transform: `rotate(${i * 60}deg) translateX(${150 + Math.cos(rotation / 50) * 30}px)`,
                  } as React.CSSProperties}
                />
              ))}
            </div>
            
            {/* Third smaller orb (adds complexity) */}
            <div 
              className={`absolute top-1/2 left-2/3 w-64 h-64 rounded-full filter blur-3xl animate-blob animation-delay-4000 ${
                theme === 'light' ? 'bg-secondary/20' : 
                theme === 'dark-purple' ? 'bg-violet-600/15' : 
                'bg-indigo-500/15'
              }`}
              style={{ 
                transform: `translate(${scrollY * 0.015}px, ${scrollY * 0.025}px) rotate(${rotation * 0.7}deg) scale(${1 + scrollY * 0.0002})`,
              }}
            >
              {/* Fewer particle trails for smaller orb */}
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-1.5 h-1.5 rounded-full animate-particle-trail blur-sm ${
                    theme === 'light' ? 'bg-secondary/40' :
                    theme === 'dark-purple' ? 'bg-violet-400/30' :
                    'bg-indigo-400/30'
                  }`}
                  style={{
                    left: '50%',
                    top: '50%',
                    '--rotation': `${i * 90}deg`,
                    transform: `rotate(${i * 90}deg) translateX(${100 + Math.sin(rotation / 40) * 20}px)`,
                  } as React.CSSProperties}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BackgroundAnimation;
