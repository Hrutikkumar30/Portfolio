"use client";

import { NAV_LINKS, SOCIAL_LINKS } from "../constants";

interface FooterProps {
  setView?: (view: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      const targetId = href.substring(1);

      // If setView is provided, switch to main view first
      if (setView) {
        setView("main");

        // Wait for view to switch, then scroll
        setTimeout(() => {
          const targetElement = document.getElementById(targetId);
          const wrapper = document.querySelector(".wrapper") as HTMLElement;
          const header = document.getElementById("header");
          const headerHeight = header ? header.offsetHeight : 100;

          if (targetElement && wrapper) {
            const elementPosition = targetElement.offsetTop;
            const offsetPosition = Math.max(0, elementPosition - headerHeight);

            wrapper.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          } else if (targetElement) {
            const elementPosition =
              targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = Math.max(0, elementPosition - headerHeight);

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 150);
      } else {
        // Fallback: try to scroll directly
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  // Filter out Home and Contact from footer navigation
  const footerNavLinks = NAV_LINKS.filter(
    (link) => link.href !== "#home" && link.href !== "#contact"
  );
  // First row: first 3 items (for mobile)
  const firstRowLinks = footerNavLinks.slice(0, 3);
  // Second row: remaining items (centered, for mobile)
  const secondRowLinks = footerNavLinks.slice(3);

  return (
    <footer className="relative z-10 w-full overflow-hidden flex justify-center items-center flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8 bg-[#F8F8F8] dark:bg-gray-950 py-4 sm:py-6 md:py-7 lg:py-8 xl:py-10 2xl:py-12 mt-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
      <div className="top-footer w-full text-center">
        <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl font-semibold text-text-second dark:text-gray-200 break-words">
          N T HRUTIKKUMAR.
        </p>
      </div>
      <div className="middle-footer w-full max-w-full mx-auto px-2">
        {/* Mobile (default): First row - 3 items */}
        <ul className="flex md:hidden flex-wrap justify-center items-center gap-2 sm:gap-3 mb-2">
          {firstRowLinks.map((link) => (
            <li key={link.href} className="footer_menu_list list-none">
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="text-xs sm:text-sm text-text-second dark:text-gray-400 font-medium hover:text-first-color dark:hover:text-indigo-400 transition-colors duration-300 px-1.5 sm:px-2 whitespace-nowrap"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile (default): Second row - remaining items centered */}
        {secondRowLinks.length > 0 && (
          <ul className="flex md:hidden flex-wrap justify-center items-center gap-2 sm:gap-3">
            {secondRowLinks.map((link) => (
              <li key={link.href} className="footer_menu_list list-none">
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-xs sm:text-sm text-text-second dark:text-gray-400 font-medium hover:text-first-color dark:hover:text-indigo-400 transition-colors duration-300 px-1.5 sm:px-2 whitespace-nowrap"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Tablet (md): All items in one row with smaller spacing */}
        <ul className="hidden md:flex lg:hidden justify-center items-center flex-wrap gap-2 md:gap-3 px-2">
          {footerNavLinks.map((link) => (
            <li key={link.href} className="footer_menu_list list-none">
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="text-xs sm:text-sm md:text-sm text-text-second dark:text-gray-400 font-medium mx-1 md:mx-2 hover:text-first-color dark:hover:text-indigo-400 transition-colors duration-300 whitespace-nowrap"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop (lg+): All items in one row */}
        <ul className="hidden lg:flex justify-center items-center flex-wrap gap-3 xl:gap-4 2xl:gap-5 px-2">
          {footerNavLinks.map((link) => (
            <li key={link.href} className="footer_menu_list list-none">
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="text-sm lg:text-sm xl:text-base 2xl:text-base text-text-second dark:text-gray-400 font-medium mx-2 lg:mx-3 xl:mx-4 2xl:mx-5 hover:text-first-color dark:hover:text-indigo-400 transition-colors duration-300 whitespace-nowrap"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-social-icons w-full flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 px-2">
        {SOCIAL_LINKS.map((social, index) => (
          <a
            href={social.href}
            key={index}
            className="icon flex justify-center items-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11 2xl:w-12 2xl:h-12 rounded-full bg-white dark:bg-gray-800 text-text-second dark:text-gray-300 shadow-md cursor-pointer transition-all duration-300 hover:text-first-color dark:hover:text-indigo-400 hover:scale-110 flex-shrink-0"
          >
            <i
              className={`${social.icon} text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl`}
            ></i>
          </a>
        ))}
      </div>
      <div className="bottom-footer w-full text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-base mt-1 sm:mt-1.5 md:mt-2 lg:mt-2 xl:mt-3 2xl:mt-3 text-text-second dark:text-gray-500 text-center px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-8 break-words">
        <p className="leading-tight">
          Copyright &copy;{" "}
          <a
            href="#home"
            onClick={handleLinkClick}
            className="text-decoration-none hover:text-first-color dark:hover:text-indigo-400 transition-colors duration-300 inline-block"
          >
            Hrutikkuamr
          </a>{" "}
          - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
