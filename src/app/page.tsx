"use client";

import { useEffect, useRef, useState } from 'react';

const sections = [
  {
    title: "Centralize your team's strategy",
    description: "Easily view real-time analytics built on human-collected data.",
    buttonText: "Get Mashkif Dashboard",
    imageUrl: "/all-teams.png",
  },
  {
    title: "Real-time collaboration tools",
    description: "Work together seamlessly with your team, no matter where they are.",
    buttonText: "Try Collaboration Features",
    imageUrl: "/scouting-form.png",
  },
  {
    title: "Advanced Analytics Dashboard",
    description: "Get insights that matter with our powerful analytics engine.",
    buttonText: "Explore Analytics",
    imageUrl: "/specific-team.png",
  },
  {
    title: "Custom Reporting Tools",
    description: "Create and share reports that tell your data's story.",
    buttonText: "Start Reporting",
    imageUrl: "/comparison.png",
  },
];

const Home = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [scrollPastSections, setScrollPastSections] = useState(false); // To track if we scrolled past the sections

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    const handleScroll = () => {
      if (!container || !content) return;
      const scrollPosition = window.scrollY;
      content.style.transform = `translateY(${-scrollPosition / (sections.length - 1)}px)`;

      const sectionHeight = window.innerHeight;
      const currentSection = Math.floor((scrollPosition + sectionHeight / 2) / sectionHeight);

      // If the scroll position exceeds the last section, allow dots to scroll up naturally
      if (scrollPosition > (sections.length - 1) * sectionHeight) {
        setScrollPastSections(true); // Dots will scroll with the page after last section
      } else {
        setScrollPastSections(false); // Dots will stay fixed within sections
      }

      if (currentSection !== activeSection) {
        setFadeIn(false);
        setTimeout(() => {
          setActiveSection(Math.min(currentSection, sections.length - 1));
          setFadeIn(true);
        }, 300);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const scrollToSection = (index: number) => {
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <main className="relative bg-[#111217]" style={{ minHeight: `${sections.length * 100}vh` }}>
        {/* Dot Navigation */}
        <div
          className={`${
            scrollPastSections ? "fixed top-[-100vh]" : "fixed top-1/2 -translate-y-1/2"
          } right-8 flex flex-col gap-4 z-50`}
          style={scrollPastSections ? { transition: "top 1s ease-in-out" } : { transition: "top 0.3s ease-in-out" }}
        >
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === index ? "bg-[#e74c3c] scale-125" : "bg-gray-400 hover:bg-[#e74c3c] hover:scale-110"
              }`}
              aria-label={`Scroll to section ${index + 1}`}
            />
          ))}
        </div>

        <div ref={containerRef} className="sticky top-0 h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div className="w-1/2 text-white space-y-6 z-10">
              <div className="h-[160px] relative">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    className={`absolute top-0 left-0 transition-all duration-500 ${
                      activeSection === index ? "opacity-100 transform-none" : "opacity-0 -translate-y-4"
                    }`}
                  >
                    <h1 style={{fontFamily: 'Gilroy-ExtraBold'}} className="text-6xl font-bold leading-tight">{section.title}</h1>
                  </div>
                ))}
              </div>

              <div className="h-[80px] relative">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    className={`absolute top-0 left-0 transition-all duration-500 ${
                      activeSection === index ? "opacity-100 transform-none" : "opacity-0 -translate-y-4"
                    }`}
                  >
                    <p className="text-lg text-gray-300">{section.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6 pt-4">
                <button className="bg-[#e74c3c] text-white px-6 py-3 rounded-md font-medium hover:bg-[#c0392b] transition-colors">
                  {sections[activeSection].buttonText}
                </button>
                <a href="#" className="text-[#e74c3c] hover:text-[#c0392b] transition-colors flex items-center gap-2">
                  Stay updated
                  <span className="text-xl">→</span>
                </a>
              </div>
            </div>

            <div className="absolute right-40 bottom-20 w-[42vw] h-[42vw] preserve-3d">
              <div
                style={{
                  transform: "rotateX(30deg) rotateY(-20deg) rotateZ(12deg)",
                  transformOrigin: "bottom",
                  perspective: "1000px",
                  height: "100%",
                  width: "100%",
                  overflow: "hidden",
                  borderRadius: "8px",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div
                  ref={contentRef}
                  style={{
                    width: "100%",
                    transformOrigin: "top",
                    transition: "transform 0.05s linear",
                  }}
                >
                  <img
                    src={sections[activeSection].imageUrl}
                    alt="Dashboard Interface"
                    className={`w-full transition-opacity duration-500 ease-in-out ${
                      fadeIn ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      display: "block",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Extra content after the last section */}
      {/* Device Mockups Section */}
      <div className="min-h-screen bg-[#1a1e24] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mockups Container */}
            <div className="relative">
              {/* Desktop Mockup */}
              <div className="relative mx-auto border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px] -translate-x-20">
                <div className="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
                  <img src="/all-teams.png" className="h-[140px] md:h-[262px] w-full rounded-xl object-cover" alt="Desktop version" />
                </div>
              </div>
              <div className="relative mx-auto bg-gray-900 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px] -translate-x-20"></div>
              <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px] -translate-x-20"></div>

              {/* Tablet Mockup - Positioned absolutely */}
              <div className="absolute -right-8 top-1/2 transform translate-x-1/8 translate-y-3">
                <div className="relative border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[300px] w-[405px] md:h-[300px] md:w-[405px]">
                  <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                  <div className="rounded-[2rem] overflow-hidden h-[272px] w-[377px] bg-white">
                    <img src="/specific-team.png" className="h-full w-full object-cover" alt="Tablet version" />
                  </div>
                </div>
              </div>

              {/* Phone Mockup - Positioned absolutely */}
              <div className="absolute -left-8 bottom-0 transform -translate-x-1/3 translate-y-1/4">
                <div className="relative border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[400px] w-[200px]">
                  <div className="w-[98px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                  <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                  <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                  <div className="rounded-[2rem] overflow-hidden w-[172px] h-[372px] bg-white">
                    <img src="/comparison.png" className="w-full h-full object-cover" alt="Mobile version" />
                  </div>
                </div>
              </div>

            </div>

            {/* Text Content */}
            <div className="space-y-8 lg:pl-12">
              <h2 className="text-5xl font-bold" style={{fontFamily: 'Gilroy-ExtraBold'}}>
                Available on all your devices
              </h2>
              <p className="text-xl text-gray-300">
                Access Mashkif seamlessly across all your devices. Whether you're at your desk, on your tablet, or on the go with your phone, stay connected and productive with our fully responsive platform.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#e74c3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Real-time sync across all devices
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#e74c3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Optimized interface for each screen size
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#e74c3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Offline capability for uninterrupted work
                </li>
              </ul>
              <div className="flex items-center gap-6 pt-4">
                <button className="bg-[#e74c3c] text-white px-8 py-4 rounded-md font-medium hover:bg-[#c0392b] transition-colors">
                  Get Started Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen bg-[#2a2f34] text-white flex items-center justify-center text-4xl">
        Additional Section 2
      </div>
      <div className="h-screen bg-[#3b4248] text-white flex items-center justify-center text-4xl">
        Additional Section 3
      </div>
    </div>
  );
};

export default Home;
