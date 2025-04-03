import { useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { FaHandshake } from "react-icons/fa";
import gsap from "gsap";

function ConnectBtn() {
  const buttonRef = useRef(null);

  useEffect(() => {
    const btn = buttonRef.current;

    gsap.fromTo(
      btn,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" }
    );

    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, { scale: 1.1, duration: 0.2, ease: "power1.out" });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { scale: 1, duration: 0.2, ease: "power1.out" });
    });

    btn.addEventListener("mousedown", () => {
      gsap.to(btn, { scale: 0.95, duration: 0.1, ease: "power1.inOut" });
    });

    btn.addEventListener("mouseup", () => {
      gsap.to(btn, { scale: 1.1, duration: 0.1, ease: "power1.inOut" });
    });
  }, []);

  const handleClick = () => {
    window.open("https://www.linkedin.com/in/owaiszakir", "_blank");
  };

  return (
    <Button
      ref={buttonRef}
      onClick={handleClick}
      className="linkBtn text-black shadow rounded-5 border-0 px-4 py-2 fs-6 fw-semibold d-flex align-items-center gap-2"
    >
      <FaHandshake /> Let's Connect
    </Button>
  );
}

export default ConnectBtn;
