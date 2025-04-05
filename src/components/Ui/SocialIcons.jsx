import React from "react";
import { FiGithub, FiFacebook, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";

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
    href: "https://wa.me/923001234567", // Replace with your actual WhatsApp number
    icon: <FaWhatsapp />,
    label: "WhatsApp",
  },
  {
    id: "email",
    href: "mailto:owaiszakir88@gmail.com", // Replace with your actual email
    icon: <FiMail />,
    label: "Email",
  },
];

function SocialIcons() {
  return (
    <div className="position-fixed top-50 end-0 translate-middle-y z-3 d-flex flex-column gap-3">
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-decoration-none"
        >
          <div className="d-flex align-items-center gap-2 bg-transparent px-3 py-2 rounded-start-pill text-white border border-2 border-end-0">
            <h4 className="mb-0">{link.icon}</h4>
            <h4 className="mb-0 fw-bold">{link.label}</h4>
          </div>
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;
