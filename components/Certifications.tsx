"use client";
import { CERTIFICATIONS } from "../constants";

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

interface CertificationsProps {
  onKnowMore: () => void;
}

const Certifications: React.FC<CertificationsProps> = ({ onKnowMore }) => {
  return (
    <section className="relative bg-transparent" id="certifications">
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-[10vw] py-8 lg:py-0">
        <div className="top-header text-center mb-10 mt-[120px]">
          <h1 className="text-3xl font-semibold text-text-second dark:text-gray-200 mb-2.5">
            Certifications
          </h1>
          <p className="text-[#999] dark:text-gray-400">
            My professional certifications and qualifications.
          </p>
        </div>
        <div className="certification-container flex flex-col w-full items-center gap-8">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={index}
              className="certification-card flex flex-col lg:flex-row items-center text-center lg:text-left p-6 w-full sm:w-4/5 lg:w-2/3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl dark:hover:shadow-indigo-500/20"
            >
              <div className="w-24 h-24 lg:w-28 lg:h-28 mb-4 lg:mb-0 lg:mr-6 flex-shrink-0 rounded-full overflow-hidden bg-white flex items-center justify-center border-4 border-gray-100 dark:border-gray-700">
                <img
                  src={cert.image}
                  alt={`${cert.issuer} logo`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-second dark:text-gray-200 mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-text-second dark:text-gray-400">
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={onKnowMore}
          className="btn mt-12 font-medium py-3 px-6 bg-transparent border-2 border-first-color text-first-color dark:text-indigo-400 dark:border-indigo-400 rounded-full cursor-pointer transition-all duration-400 hover:bg-first-color hover:text-white-color dark:hover:bg-indigo-400 dark:hover:text-gray-900"
        >
          View All Certifications <i className="uil uil-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};

export default Certifications;
