import React, { useRef } from "react";
import { FiGithub, FiFacebook, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const socialLinks = [
  {
    id: "github",
    href: "https://github.com/owaiszakir",
    icon: <FiGithub />,
    label: "GitHub",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/owaiszakir",
    icon: <SlSocialLinkedin />,
    label: "LinkedIn",
  },
  {
    id: "facebook",
    href: "https://www.facebook.com/OwaisZakirDev/",
    icon: <FiFacebook />,
    label: "Facebook",
  },
  {
    id: "whatsapp",
    href: "https://wa.me/923001234567",
    icon: <FaWhatsapp />,
    label: "WhatsApp",
  },
  {
    id: "email",
    href: "mailto:owais@example.com",
    icon: <FiMail />,
    label: "Email",
  },
];

function SocialIcons() {
  const itemRefs = useRef([]);

  useGSAP(() => {
    itemRefs.current.forEach((ref) => {
      if (!ref) return;

      const tl = gsap.timeline({ paused: true });

      tl.to(ref, {
        x: 0,
        duration: 0.4,
        ease: "power2.out",
      });

      ref.addEventListener("mouseenter", () => tl.play());
      ref.addEventListener("mouseleave", () => tl.reverse());
    });
  }, []);

  return (
    <div
      className="position-fixed top-50 translate-middle-y z-3 d-flex flex-column gap-2"
      style={{ right: 0 }}
    >
      {socialLinks.map((link, index) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-decoration-none"
        >
          <div
            ref={(el) => (itemRefs.current[index] = el)}
            className="d-flex align-items-center gap-2 bg-dark text-white px-3 py-2 rounded-start-pill border border-end-0"
            style={{
              transform: "translateX(70%)", // Adjust this based on how hidden you want it
              cursor: "pointer",
              minWidth: "fit-content",
              position: "relative",
              right: 0, // fixed, not pushing it manually
            }}
          >
            <span style={{ fontSize: "1.25rem" }}>{link.icon}</span>
            <span className="fw-bold">{link.label}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;
