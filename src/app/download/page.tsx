"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay, faGithub, faWindows } from "@fortawesome/free-brands-svg-icons";
import { QRCodeSVG } from "qrcode.react";

const DownloadPage = () => {
  const [currentUrl, setCurrentUrl] = useState<string | null>(null);

  useEffect(() => {
    // Ensure this only runs on the client side
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#111217] text-white flex flex-col items-center justify-center py-20 px-6">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold" style={{ fontFamily: "Gilroy-ExtraBold" }}>
          Download Mashkif App
        </h1>
        <p className="text-xl text-gray-300 mt-4">
          Get the Mashkif app on your preferred platform. Stay connected and enhance your productivity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {/* App Store Button */}
        <a
          href="https://apps.apple.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1a1e24] px-8 py-4 rounded-md flex items-center justify-center hover:bg-[#2c3137] transition"
        >
          <FontAwesomeIcon icon={faApple} className="w-6 h-6 mr-2 text-[#e74c3c]" />
          <span className="font-medium">App Store</span>
        </a>

        {/* Play Store Button */}
        <a
          href="https://play.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1a1e24] px-8 py-4 rounded-md flex items-center justify-center hover:bg-[#2c3137] transition"
        >
          <FontAwesomeIcon icon={faGooglePlay} className="w-6 h-6 mr-2 text-[#e74c3c]" />
          <span className="font-medium">Play Store</span>
        </a>

        {/* GitHub Button */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1a1e24] px-8 py-4 rounded-md flex items-center justify-center hover:bg-[#2c3137] transition"
        >
          <FontAwesomeIcon icon={faGithub} className="w-6 h-6 mr-2 text-[#e74c3c]" />
          <span className="font-medium">GitHub</span>
        </a>

        {/* Microsoft Store Button */}
        <a
          href="https://www.microsoft.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1a1e24] px-8 py-4 rounded-md flex items-center justify-center hover:bg-[#2c3137] transition"
        >
          <FontAwesomeIcon icon={faWindows} className="w-6 h-6 mr-2 text-[#e74c3c]" />
          <span className="font-medium">Microsoft Store</span>
        </a>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-4">Scan to Download</h2>
        {currentUrl && (
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <QRCodeSVG value={currentUrl} size={160} />
          </div>
        )}
        <p className="text-gray-300 mt-4">Scan the QR code with your device to download the app directly.</p>
      </div>
    </div>
  );
};

export default DownloadPage;
