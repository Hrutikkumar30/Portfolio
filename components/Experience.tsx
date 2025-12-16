"use client";

import { EXPERIENCE } from "../constants";

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

interface ExperienceProps {
  onKnowMore: () => void;
}

const Experience: React.FC<ExperienceProps> = ({ onKnowMore }) => {
  return (
    <section className="relative bg-transparent" id="experience">
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-[5vw] lg:px-[10vw] py-8 lg:py-0">
        <div className="top-header text-center mt-[100px]">
          <h1 className="text-3xl font-semibold text-text-second dark:text-gray-200 mb-2.5">
            My Experience
          </h1>
          <p className="text-[#999] dark:text-gray-400">
            A timeline of my professional journey.
          </p>
        </div>

        <div className="w-full max-w-4xl timeline-container">
          {EXPERIENCE.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "right" : "left"}`}
            >
              <div className="timeline-icon">
                <i className={exp.icon}></i>
              </div>
              <div className="timeline-date">{exp.duration}</div>
              <div className="max-[768px]:ml-3 timeline-content">
                <span className="inline-block text-xs font-semibold px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-600 text-text-second dark:text-gray-300 mb-3">
                  {exp.mainTech}
                </span>
                <h3 className="font-bold text-text-second dark:text-gray-100 text-lg">
                  {exp.role}
                </h3>
                <p className="font-semibold text-sm text-text-third dark:text-cyan-400 my-1">
                  {exp.company}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-text-second dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onKnowMore}
          className="btn mt-12 font-medium py-3 px-6 bg-transparent border-2 border-first-color text-first-color dark:text-indigo-400 dark:border-indigo-400 rounded-full cursor-pointer transition-all duration-400 hover:bg-first-color hover:text-white-color dark:hover:bg-indigo-400 dark:hover:text-gray-900"
        >
          View Full Experience <i className="uil uil-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};

export default Experience;
