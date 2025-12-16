"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS, CONTACT_INFO } from "../constants";

interface HeaderProps {
  setView: (view: string) => void;
  view: string;
}

const Header: React.FC<HeaderProps> = ({ setView, view }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const scrollableElement =
      view === "main" ? document.querySelector(".wrapper") : window;
    if (!scrollableElement) return;

    const handleScroll = () => {
      const scrollTop =
        view === "main"
          ? (scrollableElement as HTMLElement).scrollTop
          : window.scrollY;

      setIsScrolled(scrollTop > 50);

      if (view !== "main") {
        setActiveLink("");
        return;
      }

      const sections = document.querySelectorAll("main > section[id]");
      const header = document.getElementById("header");
      const headerHeight = header ? header.offsetHeight : 80;

      let currentSection = "#home";
      sections.forEach((section) => {
        const sectionEl = section as HTMLElement;
        // Check if the section's top has scrolled past the header
        if (sectionEl.offsetTop <= scrollTop + headerHeight + 1) {
          currentSection = `#${section.getAttribute("id")}`;
        }
      });
      setActiveLink(currentSection);
    };

    scrollableElement.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => {
      scrollableElement.removeEventListener("scroll", handleScroll);
    };
  }, [view]);

  const navHeight = isScrolled
    ? "h-[80px] leading-[80px]"
    : "h-[100px] leading-[100px]";
  const navShadow = isScrolled
    ? "shadow-md shadow-first-shadow-color dark:bg-gray-900/80 dark:backdrop-blur-sm"
    : "";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      const targetId = href.substring(1);

      setActiveLink(href); // Set active link immediately on click

      setView("main");

      setTimeout(() => {
        const scrollToSection = () => {
          const targetElement = document.getElementById(targetId);
          const wrapper = document.querySelector(".wrapper") as HTMLElement;
          const header = document.getElementById("header");
          const headerHeight = header ? header.offsetHeight : 100;

          if (targetElement && wrapper) {
            // Calculate the scroll position accounting for header height
            const elementPosition = targetElement.offsetTop;
            const offsetPosition = Math.max(0, elementPosition - headerHeight);

            // Scroll the wrapper container
            wrapper.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          } else if (targetElement) {
            // Fallback for non-wrapper scroll
            const elementPosition =
              targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = Math.max(0, elementPosition - headerHeight);

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        };

        // Try immediately
        scrollToSection();

        // Also try after a short delay to ensure DOM is ready
        setTimeout(scrollToSection, 150);
      }, 100);
    } else if (href) {
      // For Download CV link
      window.open(href, "_blank");
    }
    closeMenu();
  };

  return (
    <nav
      id="header"
      className={`fixed flex justify-between items-center w-full bg-body dark:bg-gray-900 px-4 sm:px-[9vw] transition-all duration-300 z-[100] ${navHeight} ${navShadow}`}
    >
      <a href="#home" onClick={handleLinkClick} className="nav-logo relative">
        <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-text-third dark:text-cyan-400">
          N T HRUTIKKUMAR
          <span className="absolute -top-2 sm:-top-4 -right-3 sm:-right-5 text-3xl sm:text-4xl lg:text-5xl text-text-second dark:text-gray-400">
            .
          </span>
        </p>
      </a>

      <div
        className={`nav-menu fixed lg:static top-[80px] ${
          isMenuOpen ? "left-0" : "-left-full"
        } lg:left-auto flex-col lg:flex-row justify-center items-center bg-body/95 dark:bg-gray-900/95 lg:bg-transparent dark:lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none w-full lg:w-auto min-h-[450px] lg:min-h-0 h-[calc(100vh-80px)] lg:h-auto transition-all duration-300 lg:transition-none z-40`}
      >
        <ul className="nav_menu_list flex flex-col lg:flex-row items-center">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="nav_list list-none relative">
              <a
                href={link.href}
                onClick={handleLinkClick}
                className={`nav-link text-decoration-none text-text-second dark:text-gray-300 font-medium px-0 mx-5 transition-colors duration-300 hover:text-first-color dark:hover:text-indigo-400 ${
                  activeLink === link.href
                    ? "text-first-color dark:text-indigo-400"
                    : ""
                }`}
              >
                {link.label}
                {activeLink === link.href && (
                  <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-1.5 h-1.5 bg-first-color dark:bg-indigo-400 rounded-full"></div>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden lg:flex items-center gap-2">
          <i className="uil uil-phone text-xl text-text-second dark:text-gray-300"></i>
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="text-text-second dark:text-gray-300 font-medium hover:text-first-color dark:hover:text-indigo-400 transition-colors duration-300"
          >
            {CONTACT_INFO.phone}
          </a>
        </div>
        <div className="nav-menu-btn lg:hidden flex items-center justify-center">
          <i
            className={`uil ${
              isMenuOpen ? "uil-times" : "uil-bars"
            } text-2xl cursor-pointer text-text-second dark:text-gray-300`}
            onClick={toggleMenu}
          ></i>
        </div>
      </div>
    </nav>
  );
};

export default Header;
