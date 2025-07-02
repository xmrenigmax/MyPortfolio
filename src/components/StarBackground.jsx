import { useState, useEffect } from "react";

/**
 * StarBackground Component
 * 
 * Creates an animated starfield background with shooting meteors.
 * Features:
 * - 600 randomly positioned twinkling stars
 * - Continuous meteor shower with natural fade effects
 * - Responsive regeneration on window resize
 * - Performance-optimized animations
 */
export const StarBackground = () => {
  // State for storing star and meteor data
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  /**
   * Generates random star positions and properties
   * - Creates 600 stars with random sizes, positions, and twinkle speeds
   * - Stars are evenly distributed across the viewport
   */
  const generateStars = () => {
    const starCount = 600;
    const newStars = [];
    
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 4 + 2,       // Random size between 2-6px
        x: Math.random() * 100,            // Random horizontal position (0-100%)
        y: Math.random() * 100,            // Random vertical position (0-100%)
        opacity: 1,                        // Base opacity
        twinkleSpeed: Math.random() * 3 + 2 // Twinkle animation speed (2-5s)
      });
    }
    setStars(newStars);
  };

  /**
   * Generates initial meteor batch
   * - Creates 4 meteors with random trajectories and speeds
   * - Each meteor has unique angle, position, and animation timing
   */
  const generateMeteors = () => {
    const initialMeteors = Array.from({ length: 4 }, () => ({
      id: Date.now() + Math.random(),      // Unique ID with timestamp
      angle: Math.random() * 25 + 200,     // Shooting angle (200-225 degrees)
      startX: Math.random() * 50 + 10,     // Start position X (10-60%)
      startY: Math.random() * 30,          // Start position Y (0-30%)
      length: Math.random() * 80 + 40,     // Tail length (40-120px)
      speed: Math.random() * 6 + 6,        // Animation duration (6-12s)
      delay: Math.random() * 2             // Start delay (0-2s)
    }));
    setMeteors(initialMeteors);
  };

  useEffect(() => {
    // Initial generation of stars and meteors
    generateStars();
    generateMeteors();

    /**
     * Meteor Spawning System
     * Continuously adds new meteors at random intervals
     */
    let meteorTimer;
    const startMeteorSpawner = () => {
      const addMeteor = () => {
        const newMeteor = {
          id: Date.now() + Math.random(),
          angle: Math.random() * 25 + 200,
          startX: Math.random() * 50 + 10,
          startY: Math.random() * 30,
          length: Math.random() * 80 + 40,
          speed: Math.random() * 6 + 6,
          delay: Math.random() * 2
        };
        
        setMeteors(prev => [...prev, newMeteor]);
        
        // Schedule next meteor with random delay (0.5-3 seconds)
        meteorTimer = setTimeout(addMeteor, Math.random() * 2500 + 500);
      };
      
      // Initial meteor spawn delay (1-4 seconds)
      meteorTimer = setTimeout(addMeteor, Math.random() * 3000 + 1000);
    };

    /**
     * Meteor Cleanup System
     * Removes old meteors that have completed their animation
     * Runs every 5 seconds to maintain performance
     */
    const meteorCleanupInterval = setInterval(() => {
      setMeteors(prev => prev.filter(m => {
        // Keep meteors that are still animating (animation time + delay + 2s buffer)
        return Date.now() - m.id < (m.speed + m.delay + 2) * 1000;
      }));
    }, 5000);

    // Start the continuous meteor spawner
    startMeteorSpawner();

    /**
     * Window Resize Handler
     * Debounced regeneration of stars and meteors on resize
     */
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        // Regenerate both stars and meteors
        generateStars();
        generateMeteors();
        
        // Restart meteor spawner after reset
        clearTimeout(meteorTimer);
        startMeteorSpawner();
      }, 200); // 200ms debounce time
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    /**
     * Cleanup Function
     * Removes event listeners and clears all timers/intervals
     */
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(meteorTimer);
      clearInterval(meteorCleanupInterval);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <div 
      className="star-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      {/* Star Elements */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="star"
          style={{
            position: 'absolute',
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            backgroundColor: 'white',
            borderRadius: '50%',
            boxShadow: '0 0 10px white',
            opacity: star.opacity,
            animation: `twinkle ${star.twinkleSpeed}s infinite alternate`,
            transform: 'translateZ(0)' // Enable GPU acceleration
          }}
          aria-hidden="true" // Hide from screen readers
        />
      ))}

      {/* Meteor Elements */}
      {meteors.map((meteor) => (
        <div
          key={`meteor-${meteor.id}`}
          className="meteor"
          style={{
            position: 'absolute',
            left: `${meteor.startX}%`,
            top: `${meteor.startY}%`,
            width: `${meteor.length}px`,
            height: '3px',
            transform: `rotate(${meteor.angle}deg)`,
            transformOrigin: 'left center',
            animation: `meteor ${meteor.speed}s linear ${meteor.delay}s forwards`,
            opacity: 0,
            willChange: 'transform, opacity' // Performance hint
          }}
          aria-hidden="true" // Hide from screen readers
        />
      ))}
    </div>
  );
};