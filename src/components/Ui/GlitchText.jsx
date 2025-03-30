import { useEffect, useRef } from "react";
import gsap from "gsap";

function GlitchText() {
  const glitchRef = useRef(null);

  useEffect(() => {
    const glitch = glitchRef.current;

    gsap
      .timeline({ repeat: -1, repeatDelay: 6 })
      .to(glitch, { x: 1, skewX: 10, duration: 0.3, ease: "power3.out" })
      .to(glitch, { x: -1, skewX: -10, duration: 0.3, ease: "power3.out" })
      .to(glitch, { x: 0, skewX: 0, duration: 0.3, ease: "power3.out" });

    gsap
      .timeline({ repeat: -1, repeatDelay: 4 })
      .to(glitch, { y: 1, duration: 0.06, ease: "power3.inOut", delay: 0.5 })
      .to(glitch, { y: -1, duration: 0.06, ease: "power3.inOut" })
      .to(glitch, { y: 0, duration: 0.06, ease: "power3.inOut" });
  }, []);

  return (
    <h1 className="font-monospace display-3 fw-semibold">
      Hello! I'm {"<"}
      <span className="text-primary glitch-effect" ref={glitchRef}>
        <span>Owais</span> <span>Zakir</span>
      </span>
      /{">"}
    </h1>
  );
}

export default GlitchText;
