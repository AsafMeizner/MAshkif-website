"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay, faGithub, faWindows } from "@fortawesome/free-brands-svg-icons";
import { QRCodeSVG } from "qrcode.react";

const DownloadPage = () => {
  const [currentUrl, setCurrentUrl] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Download MAshkif App - Get Started";

    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const DOWNLOAD_LINKS = [
    { href: "https://apps.apple.com", icon: faApple, text: "App Store" },
    { href: "https://play.google.com", icon: faGooglePlay, text: "Play Store" },
    { href: "https://github.com", icon: faGithub, text: "GitHub" },
    { href: "https://www.microsoft.com/store", icon: faWindows, text: "Microsoft Store" },
  ];

  return (
    <div className="min-h-screen bg-[#111217] text-white flex flex-col items-center justify-center py-20 px-6">
        <head>
            <meta name="description" content="Download MAshkif App for iOS, Android, Windows, or directly from GitHub. Enhance your productivity with our cross-platform solution." />
        </head>
        <div className="text-center mb-12">
            <h1 className="text-5xl font-bold" style={{ fontFamily: "Gilroy-ExtraBold" }}>
                Download Mashkif App
            </h1>
            <p className="text-xl text-gray-300 mt-4">
                Get the Mashkif app on your preferred platform. Stay connected and enhance your productivity.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {DOWNLOAD_LINKS.map(({ href, icon, text }) => (
                <a
                    key={text}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1a1e24] px-8 py-4 rounded-md flex items-center justify-center hover:bg-[#2c3137] transition"
                >
                    <FontAwesomeIcon icon={icon} className="w-6 h-6 mr-2 text-[#e74c3c]" />
                    <span className="font-medium">{text}</span>
                </a>
            ))}
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
