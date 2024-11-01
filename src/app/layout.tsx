import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import "./globals.css";

const gilroyLight = localFont({
  src: "./fonts/Gilroy-Light.woff",
  variable: "--font-gilroy-light",
  weight: "100",
});
const gilroyExtraBold = localFont({
  src: "./fonts/Gilroy-ExtraBold.woff",
  variable: "--font-gilroy-extra-bold",
  weight: "900",
});

export const metadata: Metadata = {
  title: "MAshkif — Best Way To Scout",
  description: "Scouting app and strategy tool made by Makers Assemble #5951",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gilroyLight.variable} ${gilroyExtraBold.variable} antialiased`}
      >
        <nav className="fixed top-0 left-0 right-0 bg-[#111217] z-50 flex items-center justify-between py-4 px-8">
          <Link href="/" passHref>
            <Image
              src="/icon.png"
              alt="Logo"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </Link>

          <Link href="/" passHref>
            <button
              className="text-[#e74c3c] text-3xl"
              style={{ fontFamily: "var(--font-gilroy-extra-bold)" }}
              aria-label="Go to homepage"
            >
              MAshkif
            </button>
          </Link>

          <div className="flex items-center gap-8">
            <a href="#learn" className="text-white hover:text-[#e74c3c] transition-colors">
              Learn
            </a>
            <a href="#about" className="text-white hover:text-[#e74c3c] transition-colors">
              About
            </a>
            <a href="#contact" className="text-white hover:text-[#e74c3c] transition-colors">
              Contact
            </a>
            <button className="bg-[#e74c3c] text-white px-4 py-2 rounded-md font-medium hover:bg-[#c0392b] transition-colors">
              Get MAshkif
            </button>
          </div>
        </nav>

        <div>
          {children}
        </div>

        <footer className="bg-[#1a1e24] text-gray-400 py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4">
              <Image
                src="/icon.png"
                alt="Footer Logo"
                width={30}
                height={30}
                className="cursor-pointer"
              />
              <span className="text-white font-medium" style={{ fontFamily: "var(--font-gilroy-extra-bold)" }}>
                MAshkif
              </span>
            </div>
            <div className="mt-4 md:mt-0 flex flex-wrap justify-center gap-6">
              <Link href="#privacy" className="hover:text-[#e74c3c] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#terms" className="hover:text-[#e74c3c] transition-colors">
                Terms of Service
              </Link>
              <Link href="#support" className="hover:text-[#e74c3c] transition-colors">
                Support
              </Link>
            </div>
            <p className="mt-4 md:mt-0 text-sm text-center md:text-right">
              © {new Date().getFullYear()} Makers Assemble #5951. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
