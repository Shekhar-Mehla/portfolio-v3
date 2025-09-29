import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          for (const item of navItems) {
            const section = document.querySelector(item.href);
            if (section) {
              const offsetTop = section.offsetTop - 120;
              const offsetBottom = offsetTop + section.offsetHeight;
              if (scrollY >= offsetTop && scrollY < offsetBottom) {
                setActiveSection(item.href);
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900 shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Left: Brand */}
        <Link to="/" className="flex items-center gap-2">
          <IoIosArrowBack className="text-sky-500 text-xl" />
          <span className="text-white font-bold text-2xl tracking-wide">
            Shekhar<span className="text-sky-500">Code</span>
          </span>
          <IoIosArrowForward className="text-sky-500 text-xl" />
        </Link>

        {/* Center: Social Icons */}
        <div className="hidden md:flex gap-4">
          <a
            href="https://github.com/Shekhar-Mehla"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition text-xl"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition text-xl"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Right: Nav + Toggle */}
        <div className="flex items-center gap-4">
          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl focus:outline-none transition-transform duration-300 transform"
            aria-label="Toggle navigation"
          >
            {isOpen ? "✕" : "☰"}
          </button>

          {/* Nav Links */}
          <nav
            className={`absolute top-full left-0 w-full bg-gray-900 md:static md:w-auto md:bg-transparent transition-all duration-300 ease-in-out overflow-hidden md:flex md:items-center md:gap-x-6 ${
              isOpen ? "max-h-screen opacity-100 p-4" : "max-h-0 opacity-0"
            } md:max-h-full md:opacity-100`}
          >
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block text-white transition hover:text-sky-400 py-2 md:py-0 ${
                  activeSection === href ? "text-sky-400 font-semibold" : ""
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
