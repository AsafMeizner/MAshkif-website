"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer, faUsers } from "@fortawesome/free-solid-svg-icons";

const sections = [
  {
    title: "Centralize your team's strategy",
    description: "Easily view real-time analytics built on human-collected data.",
    buttonText: "Get MAshkif Dashboard",
    imageUrl: "/all-teams.png",
  },
  {
    title: "Real-time collaboration tools",
    description: "Work together seamlessly with your team, no matter where they are.",
    buttonText: "Try Collaboration Features",
    imageUrl: "/scouting-form.png",
  },
  {
    title: "Advanced Analytics",
    description: "Get insights that matter with our powerful analytics engine.",
    buttonText: "Explore Analytics",
    imageUrl: "/specific-team.png",
  },
  {
    title: "Highly customizable",
    description: "Create and share reports that tell your data's story.",
    buttonText: "Start Reporting",
    imageUrl: "/comparison.png",
  },
];

const Home = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mockupsRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [scrollPastSections, setScrollPastSections] = useState(false);
  const [mockupInView, setMockupInView] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    const handleScroll = () => {
      if (!container || !content) return;
      const scrollPosition = window.scrollY;
      content.style.transform = `translateY(${-scrollPosition / (sections.length - 1)}px)`;

      const sectionHeight = window.innerHeight;
      const currentSection = Math.floor((scrollPosition + sectionHeight / 2) / sectionHeight);

      if (scrollPosition > (sections.length - 1) * sectionHeight) {
        setScrollPastSections(true);
      } else {
        setScrollPastSections(false);
      }

      if (currentSection !== activeSection) {
        setFadeIn(false);
        setTimeout(() => {
          setActiveSection(Math.min(currentSection, sections.length - 1));
          setFadeIn(true);
        }, 300);
      }

      if (mockupsRef.current) {
        const mockupTop = mockupsRef.current.getBoundingClientRect().top;
        if (mockupTop < window.innerHeight - 100) {
          setMockupInView(true);
        }
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
                    <h1 style={{ fontFamily: "Gilroy-ExtraBold" }} className="text-6xl font-bold leading-tight">
                      {section.title}
                    </h1>
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

      <div className="h-screen bg-gradient-to-b from-[#111217] to-[#1a1e24] text-white flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-10">
          <h2 className="text-5xl font-bold" style={{ fontFamily: "Gilroy-ExtraBold" }}>
            Customization Simplified
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Empower your team with customizable tools that fit seamlessly into your workflow. Adapt forms, dashboards, and workflows with just a few clicks—no coding required.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-8 rounded-lg bg-[#1f242b] shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-semibold">Intuitive Forms</h3>
              <p className="text-gray-400 mt-4">
                Design forms tailored to your data collection needs with a simple drag-and-drop interface.
              </p>
            </div>
            <div className="p-8 rounded-lg bg-[#1f242b] shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-semibold">Modular Dashboards</h3>
              <p className="text-gray-400 mt-4">
                Customize dashboards to highlight your most important metrics and insights.
              </p>
            </div>
            <div className="p-8 rounded-lg bg-[#1f242b] shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-semibold">Real-Time Updates</h3>
              <p className="text-gray-400 mt-4">
                Adjust and view your customized setup in real-time without ever needing to code.
              </p>
            </div>
          </div>
          <button
            className="mt-8 bg-[#e74c3c] text-white px-10 py-4 rounded-md font-medium hover:bg-[#c0392b] transition-colors"
            onClick={() => window.location.href = '/download'}
          >
            Start Customizing
          </button>
        </div>
      </div>

      {/* Redesigned "Server Management" section */}
      <div className="h-screen bg-[#0e1015] text-white flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-5xl font-bold" style={{ fontFamily: "Gilroy-ExtraBold" }}>
            Secure Server Management
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Run your own server and manage data independently. Collaborate with other teams while maintaining full control of your data.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-10 bg-[#1a1e24] rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col items-center">
              <FontAwesomeIcon icon={faServer} className="w-12 h-12 text-[#e74c3c]" />
              <h3 className="mt-6 text-2xl font-semibold">Self-Hosted Servers</h3>
              <p className="text-gray-400 mt-4 text-center">
                Host your server to keep data secure and maintain complete control over your team's operations.
              </p>
            </div>
            <div className="p-10 bg-[#1a1e24] rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col items-center">
              <FontAwesomeIcon icon={faUsers} className="w-12 h-12 text-[#e74c3c]" />
              <h3 className="mt-6 text-2xl font-semibold">Seamless Collaboration</h3>
              <p className="text-gray-400 mt-4 text-center">
                Connect with other teams easily while ensuring data privacy and secure communications.
              </p>
            </div>
          </div>
          <button
            className="mt-8 bg-[#e74c3c] text-white px-10 py-4 rounded-md font-medium hover:bg-[#c0392b] transition-colors"
            onClick={() => window.location.href = '/download'}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
