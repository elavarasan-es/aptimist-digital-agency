// src/components/Navbar.tsx

import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import MobileNav from './MobileNav';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [openMenu, setOpenMenu] = useState(false);

  let navLinkClass;

  if (isHomePage) {
    navLinkClass = ({ isActive }: { isActive: boolean }) =>
      isActive
        ? 'text-[black] border-b-2 border-[black]'
        : 'text-grey hover:text-black';
  } else {
    navLinkClass = ({ isActive }: { isActive: boolean }) =>
      isActive
        ? 'text-[#005f85] border-b-2 border-[#005f85]'
        : 'text-grey hover:text-blue-300';
  }

  function handleOpenMenu() {
    setOpenMenu((prev) => !prev);
  }

  return (
    <nav
      className="bg-transparent py-4 sticky top-0 z-50 shadow-none"
      style={{ backgroundColor: isHomePage ? 'transparent' : 'white' }}
    >
      <div className="flex items-center justify-between px-8">
        <div className="flex-col items-center">
          <Link to={'/'}>
            <img
              src="https://aptimist-tech.com/wp-content/uploads/2019/02/web-logo.png"
              alt="Logo"
              className="h-14 w-auto mr-3"
            />
          </Link>

          <span
            className={`md:inline text-sm hidden font-medium ${isHomePage ? 'text-gray-800 ' : 'text-gray-400 '}font-mono pl-7`}
          >
            Optimize Your Dreams
          </span>
        </div>
        <ul
          className={`hidden md:flex space-x-6 text-sm font-medium ${isHomePage ? 'text-white' : 'text-gray-500'}`}
        >
          <li>
            <NavLink to="/" className={navLinkClass} end>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className={navLinkClass}>
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={navLinkClass}>
              PRODUCTS
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={navLinkClass}>
              SERVICES
            </NavLink>
          </li>
          <li>
            <NavLink to="/showcase" className={navLinkClass}>
              SHOWCASE
            </NavLink>
          </li>
          <li>
            <NavLink to="/careers" className={navLinkClass}>
              CAREERS
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" className={navLinkClass}>
              CONTACT US
            </NavLink>
          </li>
        </ul>

        <div className="md:hidden" onClick={handleOpenMenu}>
          <MobileNav openMenu={openMenu}/>
        </div>
       
      </div>
    </nav>
  );
};

export default Navbar;
