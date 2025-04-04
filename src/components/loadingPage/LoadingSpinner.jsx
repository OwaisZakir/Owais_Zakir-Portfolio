import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap'; // GSAP library for animation
import './LoadingSpinner.css'; // Import CSS for the loader

const Loader = () => {
  const loaderSquares = useRef([]); // Array to hold references to each loader square

  // GSAP Animation effect
  useEffect(() => {
    const squares = loaderSquares.current;

    // GSAP animation for each square
    gsap.to(squares, {
      x: 50,
      y: 50,
      rotation: 360,
      duration: .2,
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
      ease: 'power1.inOut',
    });
  }, []);

  return (
    <div className="loader-container">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          ref={(el) => (loaderSquares.current[index] = el)}
          className="loader-square"
        ></div>
      ))}
    </div>
  );
};

export default Loader;
