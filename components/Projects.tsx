"use client";

import { useState, useEffect } from "react";
import { PROJECTS, ProjectType } from "../constants";

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

const ProjectModal: React.FC<{ project: ProjectType; onClose: () => void }> = ({
  project,
  onClose,
}) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-3xl z-10"
          aria-label="Close project details"
        >
          &times;
        </button>
        <div className="p-5 md:p-8">
          <h2
            id="modal-title"
            className="text-3xl font-bold text-text-second dark:text-gray-100 mb-4"
          >
            {project.title}
          </h2>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover rounded-md mb-6"
            loading="lazy"
          />
          <h3 className="text-xl font-semibold text-text-second dark:text-gray-200 mb-2">
            About this project
          </h3>
          <p className="text-text-second dark:text-gray-400 mb-6">
            {project.description}
          </p>
          <h3 className="text-xl font-semibold text-text-second dark:text-gray-200 mb-3">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-gray-200 dark:bg-gray-700 text-text-second dark:text-gray-300 text-sm font-medium px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn flex items-center justify-center font-medium py-3 px-5 bg-first-color text-white-color border-none rounded-xl cursor-pointer transition-all duration-400 hover:bg-first-color-hover"
            >
              Live Demo <i className="uil uil-external-link-alt ml-2"></i>
            </a>
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn flex items-center justify-center font-medium py-3 px-5 bg-gray-600 dark:bg-gray-700 text-white-color border-none rounded-xl cursor-pointer transition-all duration-400 hover:bg-gray-700 dark:hover:bg-gray-600"
            >
              GitHub Repo <i className="uil uil-github ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: ProjectType; onClick: () => void }> = ({
  project,
  onClick,
}) => (
  <div
    onClick={onClick}
    className="project-box group relative w-full sm:w-4/5 lg:w-[30%] h-64 bg-white-color dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl dark:hover:shadow-indigo-500/30"
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
      <h3 className="text-2xl font-bold text-white-color text-center p-4">
        {project.title}
      </h3>
    </div>
  </div>
);

interface ProjectsProps {
  onKnowMore: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onKnowMore }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  const openModal = (project: ProjectType) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [selectedProject]);

  return (
    <>
      <section className="relative bg-transparent" id="projects">
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-[10vw] py-8 lg:py-0">
          <div className="top-header text-center mb-12">
            <h1 className="text-3xl font-semibold text-text-second dark:text-gray-200 mb-2.5">
              Projects
            </h1>
            <p className="text-[#999] dark:text-gray-400">
              Here are some of the projects I've worked on.
            </p>
          </div>
          <div className="project-container flex w-full justify-center items-center gap-8 flex-wrap">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => openModal(project)}
              />
            ))}
          </div>
          <button
            onClick={onKnowMore}
            className="btn mt-12 font-medium py-3 px-6 bg-transparent border-2 border-first-color text-first-color dark:text-indigo-400 dark:border-indigo-400 rounded-full cursor-pointer transition-all duration-400 hover:bg-first-color hover:text-white-color dark:hover:bg-indigo-400 dark:hover:text-gray-900"
          >
            View All Projects <i className="uil uil-arrow-right"></i>
          </button>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </>
  );
};

export default Projects;
