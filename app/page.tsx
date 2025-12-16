'use client'

import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ThemeSwitcher from '../components/ThemeSwitcher'
import { PROJECTS, CERTIFICATIONS, EXPERIENCE } from '../constants'

export default function Home() {
  const [theme, setTheme] = useState('light')
  const [view, setView] = useState('main')
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    if (view === 'main') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [view])
  
  useEffect(() => {
    const handleMainScroll = (e: Event) => {
      const target = e.target as HTMLElement
      if (!target) return
      
      const scrollTop = target.scrollTop
      
      document.querySelectorAll('.parallax-bg').forEach(el => {
        if (el.closest('#home')) {
          (el as HTMLElement).style.transform = `translateY(${scrollTop * 0.5}px)`
        }
      })

      setShowBackToTop(scrollTop > window.innerHeight * 0.8)
    }

    const handleDetailScroll = () => {
      setShowBackToTop(window.scrollY > window.innerHeight * 0.8)
    }

    if (view === 'main') {
      const wrapper = document.querySelector('.wrapper')
      if (wrapper) {
        wrapper.addEventListener('scroll', handleMainScroll)
        return () => {
          wrapper.removeEventListener('scroll', handleMainScroll)
          setShowBackToTop(false)
        }
      }
    } else {
      window.scrollTo(0, 0)
      window.addEventListener('scroll', handleDetailScroll)
      return () => {
        window.removeEventListener('scroll', handleDetailScroll)
        setShowBackToTop(false)
      }
    }
  }, [view])

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  const goBackToMain = () => {
    setView('main')
  }

  const handleScrollToTop = () => {
    if (view === 'main') {
      document.querySelector('.wrapper')?.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const getDetailsTitle = () => {
    switch(view) {
      case 'about': return "More About Me"
      case 'experience': return "My Professional Journey"
      case 'projects': return "My Portfolio"
      case 'certifications': return "My Certifications"
      default: return ""
    }
  }

  const renderDetailsContent = () => {
    switch(view) {
      case 'about':
        return <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-6 xl:space-y-8 2xl:space-y-10 leading-relaxed">
          <p className="animate-slideUpFadeIn animation-delay-100 text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-lg">I am well-versed in HTML, CSS and JavaScript, and other cutting edge frameworks and libraries, which allows me to implement interactive features. Additionally, I have experience working with content management systems (CMS) like WordPress. My journey into web development started with a curiosity for how things worked on the internet, and it has since grown into a full-fledged passion.</p>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-bold pt-3 sm:pt-4 md:pt-4 lg:pt-4 xl:pt-5 2xl:pt-6 border-t border-gray-200 dark:border-gray-700 text-text-second dark:text-gray-200 animate-slideUpFadeIn animation-delay-200 flex items-center gap-2 sm:gap-3"><i className="uil uil-lightbulb-alt text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl text-first-color dark:text-indigo-400"></i>My Development Philosophy</h3>
          <p className="animate-slideUpFadeIn animation-delay-300 text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-lg">I believe in writing clean, maintainable, and efficient code. For me, development is not just about making things work, but also about making them work well and making them easy for other developers to understand and build upon. I am a strong advocate for user-centered design and always strive to create web experiences that are not only beautiful but also intuitive and accessible to everyone.</p>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-bold pt-3 sm:pt-4 md:pt-4 lg:pt-4 xl:pt-5 2xl:pt-6 border-t border-gray-200 dark:border-gray-700 text-text-second dark:text-gray-200 animate-slideUpFadeIn animation-delay-400 flex items-center gap-2 sm:gap-3"><i className="uil uil-wrench text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl text-first-color dark:text-indigo-400"></i>Skills & Expertise</h3>
          <p className="animate-slideUpFadeIn animation-delay-500 text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-lg">While the main page gives a snapshot of my skills, I have deeper experience in various areas. My frontend expertise is centered around the React ecosystem, including state management with Redux and building complex UIs with component libraries. On the backend, I am comfortable with Node.js and Express for building RESTful APIs, and I have worked with both SQL and NoSQL databases to manage application data effectively.</p>
        </div>
      case 'experience':
        return <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-12 xl:space-y-14 2xl:space-y-16">
          {EXPERIENCE.map((exp, index) => (
            <div key={index} className="border-l-4 border-first-color dark:border-indigo-500 pl-4 sm:pl-5 md:pl-6 lg:pl-6 xl:pl-8 2xl:pl-10 animate-slideUpFadeIn" style={{ animationDelay: `${index * 150}ms` }}>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-bold text-text-second dark:text-gray-100 flex items-center gap-2 sm:gap-3 mb-2"><i className="uil uil-briefcase-alt text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl"></i>{exp.role}</h3>
              <p className="text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-lg font-semibold text-text-third dark:text-cyan-400 my-1 sm:my-2 flex items-center gap-2 sm:gap-3"><i className="uil uil-building text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl"></i>{exp.company}</p>
              <p className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base text-gray-500 dark:text-gray-400 mb-2 sm:mb-3 flex items-center gap-2 sm:gap-3"><i className="uil uil-calendar-alt text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl"></i>{exp.duration}</p>
              <p className="text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-lg leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      case 'projects':
        return <div className="flex flex-col gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-18 2xl:gap-20">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8 lg:gap-8 xl:gap-10 2xl:gap-12 items-center animate-slideUpFadeIn" style={{ animationDelay: `${index * 150}ms` }}>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="overflow-hidden rounded-lg shadow-lg block">
                <img src={project.image} alt={project.title} className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105" />
              </a>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-bold mb-2 sm:mb-3 md:mb-3 lg:mb-4 text-text-second dark:text-gray-100">{project.title}</h3>
                <p className="mb-3 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-5 2xl:mb-6 text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-lg">{project.description}</p>
                <div className="flex flex-wrap gap-2 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-3 2xl:gap-3 mb-3 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-5 2xl:mb-6">
                  {project.technologies.map(tech => <span key={tech} className="bg-gray-200 dark:bg-gray-700 text-text-second dark:text-gray-300 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base font-medium px-2 sm:px-3 md:px-3 lg:px-3 xl:px-4 2xl:px-4 py-1 sm:py-1 md:py-1 lg:py-1 xl:py-1.5 2xl:py-2 rounded-full">{tech}</span>)}
                </div>
                <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-5 2xl:gap-6 mt-4 sm:mt-5 md:mt-6 lg:mt-6 xl:mt-7 2xl:mt-8">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn flex items-center justify-center font-medium py-2 sm:py-2.5 md:py-3 lg:py-3 xl:py-3.5 2xl:py-4 px-4 sm:px-5 md:px-5 lg:px-5 xl:px-6 2xl:px-7 text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-lg bg-first-color text-white-color border-none rounded-xl cursor-pointer transition-all duration-400 hover:bg-first-color-hover">
                    Live Demo <i className="uil uil-external-link-alt ml-2 text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-xl"></i>
                  </a>
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn flex items-center justify-center font-medium py-2 sm:py-2.5 md:py-3 lg:py-3 xl:py-3.5 2xl:py-4 px-4 sm:px-5 md:px-5 lg:px-5 xl:px-6 2xl:px-7 text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-lg bg-gray-600 dark:bg-gray-700 text-white-color border-none rounded-xl cursor-pointer transition-all duration-400 hover:bg-gray-700 dark:hover:bg-gray-600">
                    GitHub Repo <i className="uil uil-github ml-2 text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      case 'certifications':
        return <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-8 2xl:gap-10">
          {CERTIFICATIONS.map((cert, index) => (
            <div key={index} className="flex items-center gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-8 2xl:gap-10 p-3 sm:p-4 md:p-4 lg:p-4 xl:p-5 2xl:p-6 bg-white/50 dark:bg-gray-800/50 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 animate-slideUpFadeIn" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="flex-shrink-0 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 bg-white rounded-full flex items-center justify-center p-2 sm:p-2 md:p-2 lg:p-2 xl:p-3 2xl:p-3">
                <img src={cert.image} alt={cert.issuer} className="w-full h-full object-contain" />
              </div>
              <div className="flex-grow">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl font-semibold text-text-second dark:text-gray-200 flex items-center gap-2 mb-1"><span>{cert.title}</span> <i className="uil uil-check-circle text-green-500 text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl"></i></h3>
                <p className="text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-lg text-text-second dark:text-gray-400">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      default: return null
    }
  }

  return (
    <div className="container w-full relative">
      <Header setView={setView} view={view}/>
      {view === 'main' ? (
        <main className="wrapper">
          <Hero />
          <About onKnowMore={() => setView('about')} />
          <Experience onKnowMore={() => setView('experience')} />
          <Projects onKnowMore={() => setView('projects')} />
          <Certifications onKnowMore={() => setView('certifications')} />
          <Contact />
        </main>
      ) : (
        <div className="flex flex-col min-h-screen">
          <section className="flex-grow pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36 2xl:pt-40 px-4 sm:px-6 md:px-8 lg:px-[8vw] xl:px-[10vw] 2xl:px-[12vw] pb-8 sm:pb-10 md:pb-12 lg:pb-12 xl:pb-14 2xl:pb-16 bg-body dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-4xl sm:max-w-5xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-7xl mx-auto">
              <button onClick={goBackToMain} className="flex items-center gap-2 mb-6 sm:mb-7 md:mb-8 lg:mb-8 xl:mb-10 2xl:mb-12 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-text-second dark:text-gray-300 hover:text-first-color dark:hover:text-indigo-400 transition-colors duration-300 font-medium">
                <i className="uil uil-arrow-left text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl"></i>
                Back to Home
              </button>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-text-second dark:text-gray-100 mb-6 sm:mb-8 md:mb-9 lg:mb-10 xl:mb-12 2xl:mb-14 border-b-2 border-first-color dark:border-indigo-500 pb-3 sm:pb-3 md:pb-4 lg:pb-4 xl:pb-5 2xl:pb-6">{getDetailsTitle()}</h1>
              <div className="text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-lg text-text-second dark:text-gray-400 leading-relaxed">
                {renderDetailsContent()}
              </div>
            </div>
          </section>
          <Footer setView={setView} />
        </div>
      )}
      <button
        onClick={handleScrollToTop}
        className={`fixed bottom-20 right-5 z-[60] w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-800 dark:text-gray-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ${showBackToTop ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <i className="uil uil-arrow-up text-2xl"></i>
      </button>
      <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
    </div>
  )
}

