import React from "react";
import "../../styles/SideBar.css";

import { MdHome, MdInfo, MdWork, MdContactPhone } from "react-icons/md"; // Importing icons

import { FaUser, FaRegUser } from "react-icons/fa";

import { Link } from "react-router-dom";
function SideBar() {
  const { pathname } = window.location;
  const navItems = [
    { path: "/", icon: MdHome, activeIcon: "icon1", label: "Home" },
    { path: "/about", icon: FaUser, activeIcon: FaRegUser, label: "About" },
    { path: "/projects", icon: MdWork, activeIcon: "icon3", label: "Projects" },
    {
      path: "/contact",
      icon: MdContactPhone,
      activeIcon: "icon4",
      label: "Contact",
    },
  ];

  return (
    <aside className="sidebar position-fixed shadow rounded-5 ">
      <ul className="sidebar-list p-0 d-flex flex-column justify-content-center align-items-center">
        {navItems.map((item) => {
          return (
            <li key={item.path} className="sidebar-item mb-3">
              <Link to={item.path} title={item.label}>
                {pathname === item.path ? <item.activeIcon /> : <item.icon />}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default SideBar;
