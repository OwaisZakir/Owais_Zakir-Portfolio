import React, { useEffect, useRef } from "react";
import "../../styles/SideBar.css";
import {
  IoHomeOutline,
  IoHome,
  IoMailOutline,
  IoMailSharp,
} from "react-icons/io5";
import { FaUser, FaRegUser } from "react-icons/fa";
import { BsBriefcase, BsFillBriefcaseFill } from "react-icons/bs";
import { RiCodeBoxFill, RiCodeBoxLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { gsap } from "gsap";

function SideBar() {
  const { pathname } = useLocation(); // Get the current pathname
  const sidebarRef = useRef(null); // Ref for the sidebar
  const navItemsRef = useRef([]);

  const navItems = [
    { path: "/", icon: IoHomeOutline, activeIcon: IoHome, label: "Home" },
    { path: "/about", icon: FaRegUser, activeIcon: FaUser, label: "About" },
    {
      path: "/projects",
      icon: BsBriefcase,
      activeIcon: BsFillBriefcaseFill,
      label: "Projects",
    },
    {
      path: "/contact",
      icon: IoMailOutline,
      activeIcon: IoMailSharp,
      label: "Contact",
    },
    {
      path: "/skills",
      icon: RiCodeBoxLine,
      activeIcon: RiCodeBoxFill,
      label: "Skills",
    },
  ];

  useEffect(() => {
    // Animate Sidebar Appearance
    gsap.fromTo(
      sidebarRef.current,
      { opacity: 0, x: -200 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    );

    // Animate Nav Items
    navItemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
        }
      );
    });
  }, []);

  return (
    <aside
      ref={sidebarRef}
      className="sidebar shadow rounded-3 d-flex flex-column align-items-center"
    >
      <div className="logo">{/* Add your logo here if needed */}</div>
      <nav>
        <ul className="sidebar-list p-0 m-0 d-flex flex-column gap-4">
          {navItems.map((item, index) => (
            <li
              key={item.path}
              ref={(el) => (navItemsRef.current[index] = el)} // Store references to nav items
              className="sidebar-item fs-4 p-2 px-3"
            >
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>{item.label}</Tooltip>}
              >
                <Link
                  to={item.path}
                  title={item.label}
                  className={`nav-link ${
                    pathname === item.path ? "activeNav text-primary" : ""
                  }`}
                >
                  {React.createElement(
                    pathname === item.path ? item.activeIcon : item.icon
                  )}
                </Link>
              </OverlayTrigger>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
