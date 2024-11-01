"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer, faUsers } from "@fortawesome/free-solid-svg-icons";

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

      {/* Customization Features Section */}
      <div className="h-screen bg-[#1a1e24] text-white py-20 flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-5xl font-bold" style={{ fontFamily: "Gilroy-ExtraBold" }}>
            Complete Customization Without a Single Line of Code
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take control with a fully customizable form and dashboard experience designed for teams of all kinds.
            Adapt the look and feel to fit your unique needs, all without needing to dive into code.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Customizable Forms",
                description: "Create your own forms with a simple drag-and-drop interface for every field your team needs.",
              },
              {
                title: "Dynamic Dashboards",
                description: "Tailor dashboards with widgets and charts, focusing on the stats that matter most.",
              },
              {
                title: "No Coding Required",
                description: "Configure and deploy easily, making real-time adjustments as needed without coding skills.",
              },
            ].map((feature, index) => (
              <div key={index} className="p-8 rounded-lg bg-[#22252c] shadow-md hover:shadow-lg hover:scale-105 transition-transform">
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className="text-gray-400 mt-4">{feature.description}</p>
              </div>
            ))}
          </div>
          <button className="bg-[#e74c3c] text-white px-8 py-4 rounded-md font-medium hover:bg-[#c0392b] transition-colors">
            Start Customizing
          </button>
        </div>
      </div>

      {/* Server Management Section */}
      <div className="h-screen bg-[#111217] text-white flex items-center justify-center py-20">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-5xl font-bold" style={{ fontFamily: "Gilroy-ExtraBold" }}>
            Run Your Own Server, Share with Other Teams
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Maintain complete control and data security by hosting your server, while collaborating and sharing insights with other teams.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: faServer,
                title: "Independent Server Management",
                description: "Host your server for data privacy and team independence, managing access and security.",
              },
              {
                icon: faUsers,
                title: "Collaborate Across Teams",
                description: "Share your server with others, enabling safe collaboration and joint project management.",
              },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-[#22252c] rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform">
                <FontAwesomeIcon icon={feature.icon} className="w-12 h-12 text-[#e74c3c] mb-4" />
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className="text-gray-400 text-center mt-4">{feature.description}</p>
              </div>
            ))}
          </div>
          <button className="bg-[#e74c3c] text-white px-8 py-4 rounded-md font-medium hover:bg-[#c0392b] transition-colors">
            Learn More About Server Management
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
