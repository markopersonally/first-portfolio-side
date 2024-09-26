import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUserNinja } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  return (
    <>
      <nav className="navigation">
        <div className="navigation-overlay"></div>
        <div className="navigation-box">
          <div className="navigation-logo">
            <div className="navigation-logo-box-img">
              <FontAwesomeIcon
                className="navigation-logo-img"
                icon={faUserNinja}
              />
            </div>
            <h2 className="navigation-logo-title">Portfolio</h2>
          </div>
          <ul className="menu">
            <li className="menu-links">
              <a className="menu-text" href="/">
                home
              </a>
            </li>
            <li className="menu-links">
              <a className="menu-text" href="#sectionSkills">
                skills
              </a>
            </li>
            <li className="menu-links">
              <a className="menu-text" href="#sectionSlider">
                projects
              </a>
            </li>
            <li className="menu-links">
              <a className="menu-text" href="#sectionContact">
                contact
              </a>
            </li>
          </ul>
          <button
            className="mobile-menu"
            onClick={() => setIsOpenMobileMenu(() => !isOpenMobileMenu)}
          >
            {isOpenMobileMenu ? "x" : <FontAwesomeIcon icon={faBars} />}
          </button>
        </div>
        {isOpenMobileMenu && (
          <MobileMenu
            isOpenMobileMenu={isOpenMobileMenu}
            setIsOpenMobileMenu={setIsOpenMobileMenu}
          />
        )}
      </nav>
    </>
  );
};

export default Navigation;
