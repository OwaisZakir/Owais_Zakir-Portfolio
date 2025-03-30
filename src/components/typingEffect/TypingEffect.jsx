import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

function TypingEffect() {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const skills = [
      "Front-End Developer",
      "Linux Expert",
      "JavaScript Enthusiast",
      "React Developer",
      "Tech Innovator",
    ];

    let tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    skills.forEach((skill) => {
      tl.to(textRef.current, {
        text: skill,
        duration: 3, // ⏳ Typing speed (faster but readable)
        ease: "power3.out",
        delay: 0.5,
      })
        .to(textRef.current, {
          duration: 1, // ⏳ Pause for 3 seconds after typing
        })
        .to(textRef.current, {
          text: "",
          duration: 1.5, // 🔄 Smooth fade-out effect
          delay: 0.5,
          ease: "power3.in",
        });
    });
  }, []);

  return (
    <h1 className="fw-bold">
      A <span ref={textRef} className="text-primary"></span>
      <span ref={cursorRef} className="typing-cursor">
        |
      </span>
    </h1>
  );
}

export default TypingEffect;
