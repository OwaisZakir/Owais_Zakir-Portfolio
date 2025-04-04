import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./css.css";

const NotFound = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animate the title
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    // Animate the subtitle with delay
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1.5, ease: "power3.out", delay: 0.5 }
    );

    // Animate the button with delay
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 1,
      }
    );
  }, []);

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="text-center p-5 bg-white rounded shadow-lg">
        <h1 ref={titleRef} className="display-1 text-danger fw-bold">
          404
        </h1>
        <p ref={subtitleRef} className="h4 text-muted">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a ref={buttonRef} href="/" className="btn btn-primary btn-lg mt-4">
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
