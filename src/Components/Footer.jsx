import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:shekharmehla279@gmail.com";
  };

  return (
    <footer className="bg-gray-900 text-white py-10 px-6" data-aos="fade-up">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Info */}
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold">Shekhar</p>
          <p className="text-sm text-gray-400">📍 Sydney, Australia</p>
          <button
            onClick={handleEmailClick}
            className="text-sm text-sky-400 hover:text-sky-300 transition duration-200"
          >
            📫 shekharmehla279@gmail.com
          </button>
        </div>

        {/* Center: Social Icons */}
        <div className="flex gap-6 text-xl text-gray-400">
          <a
            href="https://github.com/Shekhar-Mehla"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shekhar--singh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-200"
          >
            <FaLinkedin />
          </a>
          <button
            onClick={handleEmailClick}
            className="hover:text-white transition duration-200"
          >
            <FaEnvelope />
          </button>
        </div>

        {/* Right: Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-sm bg-sky-600 hover:bg-sky-500 px-4 py-2 rounded transition duration-200"
        >
          <FaArrowUp /> Top
        </button>
      </div>

      {/* Bottom: Copyright */}
      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Shekhar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
