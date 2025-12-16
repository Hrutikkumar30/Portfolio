"use client";

import { SKILLS } from "../constants";

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

const SkillBadge: React.FC<{ name: string; icon: string }> = ({
  name,
  icon,
}) => (
  <span className="flex items-center gap-2 text-sm bg-first-color text-white-color py-1 px-3 rounded-md">
    <i className={`${icon} text-lg`}></i>
    {name}
  </span>
);

const SkillsSection: React.FC<{
  title: string;
  skills: { name: string; icon: string }[];
}> = ({ title, skills }) => (
  <div className="skills-box my-2.5">
    <div className="skills-header mb-4">
      <h3 className="text-xl font-semibold text-text-second dark:text-gray-200">
        {title}
      </h3>
    </div>
    <div className="skills-list flex flex-wrap gap-2">
      {skills.map((skill) => (
        <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
      ))}
    </div>
  </div>
);

interface AboutProps {
  onKnowMore: () => void;
}

const About: React.FC<AboutProps> = ({ onKnowMore }) => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/N_T_HRUTIKKUMAR_CV.pdf"; // Path to the CV file
    link.download = "N_T_HRUTIKKUMAR_CV.pdf"; // The filename for the user
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative bg-transparent" id="about">
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-[10vw]">
        <div className="top-header text-center mb-12">
          <h1 className="text-3xl font-semibold text-text-second dark:text-gray-200 mb-2.5">
            About Me
          </h1>
        </div>
        <div className="row flex flex-col lg:flex-row justify-between w-full gap-8 lg:gap-12">
          <div className="col flex w-full lg:w-1/2">
            <div className="about-info flex items-center flex-col justify-center text-center p-6 sm:p-8 w-full bg-white-color dark:bg-gray-800 shadow-2xl rounded-2xl">
              <h3 className="text-xl font-semibold text-text-second dark:text-gray-200 mb-4">
                My introduction
              </h3>
              <p className="text-base text-text-second dark:text-gray-400 mb-6">
                I am well-versed in HTML, CSS and JavaScript, and other cutting
                edge frameworks and libraries, which allows me to implement
                interactive features. Additionally, I have experience working
                with content management systems (CMS) like WordPress.
              </p>
              <div className="about-btn flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleDownloadCV}
                  className="btn font-medium py-3 px-6 bg-first-color text-white-color border-none rounded-full cursor-pointer transition-all duration-400 hover:bg-first-color-hover"
                >
                  Download CV <i className="uil uil-import"></i>
                </button>
                <button
                  onClick={onKnowMore}
                  className="btn font-medium py-3 px-6 bg-transparent border-2 border-first-color text-first-color dark:text-indigo-400 dark:border-indigo-400 rounded-full cursor-pointer transition-all duration-400 hover:bg-first-color hover:text-white-color dark:hover:bg-indigo-400 dark:hover:text-gray-900"
                >
                  Know More <i className="uil uil-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col flex w-full lg:w-1/2">
            <div className="w-full">
              <SkillsSection title="Frontend" skills={SKILLS.frontend} />
              <SkillsSection title="Backend" skills={SKILLS.backend} />
              <SkillsSection title="Database" skills={SKILLS.database} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
