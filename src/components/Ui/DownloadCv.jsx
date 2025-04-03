import { useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import gsap from "gsap";

function DownloadCv() {
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

  return (
    <a href="/public/Owais_Zakir_CV .pdf" download>
      <Button
        ref={buttonRef}
        className="linkBtn text-black shadow rounded-5 border-0 px-4 py-2 fs-6 fw-semibold d-flex align-items-center gap-2"
      >
        <FaDownload /> Download CV
      </Button>
    </a>
  );
}

export default DownloadCv;
