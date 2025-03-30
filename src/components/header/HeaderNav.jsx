import { IoHomeOutline } from "react-icons/io5";
import { IoHome } from "react-icons/io5";

import { FaRegUser } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";

import { IoBriefcaseOutline } from "react-icons/io5";
import { IoBriefcase } from "react-icons/io5";

import { TbMailOpened } from "react-icons/tb";
import { TbMailOpenedFilled } from "react-icons/tb";

import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", icon: <IoHomeOutline />, activeIcon: <IoHome />, path: "/" },
  {
    name: "About",
    icon: <FaRegUser />,
    activeIcon: <FaUser />,
    path: "/about",
  },
  {
    name: "Portfolio",
    icon: <IoBriefcaseOutline />,
    activeIcon: <IoBriefcase />,
    path: "/portfolio",
  },
  {
    name: "Contact",
    icon: <TbMailOpened />,
    activeIcon: <TbMailOpenedFilled />,
    path: "/contact",
  },
];

function HeaderNav() {
  const location = useLocation(); // Hook to get the current route

  return (
    <header>
      <nav>
        <ul className="header-nav position-fixed bottom-0 start-50 translate-middle-x d-flex justify-content-center align-items-center gap-5 rounded-4">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path; // Check if the item is the active one

            return (
              <li
                key={index}
                className={`nav-item ${isActive ? "active" : ""}`} // Apply 'active' class if it's the current path
                id={item.name}
                title={item.name}
              >
                <Link to={item.path}>
                  <span>{isActive ? item.activeIcon : item.icon}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default HeaderNav;
