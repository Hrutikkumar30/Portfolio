"use client";

import { useEffect, useRef } from "react";
import { SOCIAL_LINKS } from "../constants";
import ElectricBorder from "./ElectricBorder";
import Picture from "../Images/picture.jpeg";

declare global {
  interface Window {
    Typed: any;
  }
}

const AnimatedBg = () => (
  <>
    <div id="stars" className="parallax-bg">
      {Array.from({ length: 10 }).map((_, i) => (
        <span key={i}></span>
      ))}
    </div>
    <div id="bubbles" className="parallax-bg">
      {Array.from({ length: 10 }).map((_, i) => (
        <span key={i}></span>
      ))}
    </div>
  </>
);

const Hero: React.FC = () => {
  const typedRef = useRef<any>(null);
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let checkInterval: NodeJS.Timeout | null = null;
    let timeoutId: NodeJS.Timeout | null = null;

    // Wait for Typed.js to load
    const initTyped = () => {
      if (
        el.current &&
        typeof window !== "undefined" &&
        (window as any).Typed
      ) {
        const options = {
          strings: ["Developer", "Designer"],
          loop: true,
          typeSpeed: 100,
          backSpeed: 80,
          backDelay: 2000,
        };

        typedRef.current = new (window as any).Typed(el.current, options);
      }
    };

    // Check if Typed is already loaded
    if (typeof window !== "undefined" && (window as any).Typed) {
      initTyped();
    } else {
      // Wait for the script to load
      checkInterval = setInterval(() => {
        if (typeof window !== "undefined" && (window as any).Typed) {
          if (checkInterval) clearInterval(checkInterval);
          initTyped();
        }
      }, 100);

      // Cleanup interval after 5 seconds if Typed doesn't load
      timeoutId = setTimeout(() => {
        if (checkInterval) clearInterval(checkInterval);
      }, 5000);
    }

    return () => {
      if (checkInterval) clearInterval(checkInterval);
      if (timeoutId) clearTimeout(timeoutId);
      if (typedRef.current && typedRef.current.destroy) {
        typedRef.current.destroy();
      }
    };
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/N_T_HRUTIKKUMAR_CV.pdf"; // Path to the CV file
    link.download = "N_T_HRUTIKKUMAR_CV.pdf"; // The filename for the user
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative" id="home">
      <AnimatedBg />
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center h-full px-[5vw] sm:px-[10vw] py-20 lg:py-0">
        <div className="featured-text flex justify-center flex-col w-full lg:w-1/2 lg:pl-5 order-2 lg:order-1 items-center lg:items-start text-center lg:text-left">
          <div className="featured-text-card">
            <span className="bg-third text-white-color py-1 px-2 text-xs rounded-md">
              HRUTIKKUMAR
            </span>
          </div>
          <div className="featured-name text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-second dark:text-gray-200 my-5">
            <p>
              I'm{" "}
              <span
                className="typedText capitalize text-text-third dark:text-cyan-400"
                ref={el}
              ></span>
            </p>
          </div>
          <div className="featured-text-info text-sm sm:text-base mb-6 sm:mb-8 text-text-second dark:text-gray-400 px-4 sm:px-0">
            <p>
              Experienced frontend developer with a passion for creating
              visually stunning and user-friendly websites.
            </p>
          </div>
          <div className="featured-text-btn flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto">
            <button
              onClick={(e) => handleScrollTo(e as any, "#contact")}
              className="btn font-medium py-3 px-6 bg-first-color text-white-color border-none rounded-xl cursor-pointer transition-all duration-400 hover:bg-first-color-hover w-full sm:w-auto"
            >
              Hire Me
            </button>
            <button
              onClick={handleDownloadCV}
              className="btn font-medium py-3 px-6 bg-[#efefef] dark:bg-gray-800 dark:text-gray-200 border-none rounded-xl cursor-pointer transition-all duration-400 hover:bg-second-color dark:hover:bg-indigo-600 hover:text-white-color w-full sm:w-auto"
            >
              Download CV <i className="uil uil-file-alt ml-2.5"></i>
            </button>
          </div>
          <div className="social_icons flex mt-8 lg:mt-12 gap-8">
            {SOCIAL_LINKS.map((social, index) => (
              <a
                href={social.href}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="icon flex justify-center items-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 text-text-second dark:text-gray-300 shadow-md cursor-pointer transition-colors duration-300 hover:text-first-color dark:hover:text-indigo-400"
              >
                <i className={`${social.icon} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="featured-image flex justify-center lg:justify-end items-center w-full lg:w-1/2 order-1 lg:order-2 mt-10 lg:mt-0 mb-8 lg:mb-0">
          <div className="image my-auto w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[380px] lg:h-[380px] animate-imgFloat">
            <ElectricBorder
              color="#ee202a"
              speed={1}
              chaos={0.5}
              thickness={2}
              className="w-full h-full"
              style={{ borderRadius: "50%" }}
            >
              <img
                src="/Images/picture.jpeg"
                alt="avatar"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  // Fallback to placeholder if image doesn't load
                  (e.target as HTMLImageElement).src = 'https://picsum.photos/380/380';
                }}
              />
            </ElectricBorder>
          </div>
        </div>
        <div className="scroll-icon-box absolute bottom-5 left-1/2 -translate-x-1/2 hidden lg:block z-10">
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, "#about")}
            className="scroll-btn flex justify-center items-center w-[150px] h-[50px] gap-1 text-decoration-none text-text-second dark:text-gray-300 bg-white-color dark:bg-gray-800 rounded-full shadow-md"
          >
            <i className="uil uil-mouse-alt text-xl"></i>
            <p>Scroll Down</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
