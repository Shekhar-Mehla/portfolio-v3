import {
  Navbar,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  NavbarLink,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RxSlash } from "react-icons/rx";
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
    const handleScroll = () => {
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
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900 shadow-md">
      <Navbar fluid rounded className="w-full px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <NavbarBrand as={Link} to="/" className="flex items-center gap-2">
          <IoIosArrowBack className="text-sky-500 text-2xl" />
          <span
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: "1.8rem",
            }}
            className="text-white"
          >
            Shekhar Code
          </span>
          <span className="flex text-sky-500 text-xl">
            <RxSlash />
            <IoIosArrowForward />
          </span>
        </NavbarBrand>

        {/* Social Icons + Toggle */}
        <div className="flex items-center gap-4">
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

          {/* Custom Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-2xl focus:outline-none"
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>

        {/* Nav Links */}
        <NavbarCollapse
          className={`flex flex-col lg:flex-row  lg:items-center lg:gap-x-8 ${
            isOpen ? "block" : "hidden"
          } lg:flex`}
        >
          {navItems.map(({ label, href }) => (
            <NavbarLink
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`relative lg:mx-3 text-white transition hover:text-sky-400 ${
                activeSection === href ? "text-sky-400 font-semibold" : ""
              }`}
            >
              <span className="hover-underline">{label}</span>
            </NavbarLink>
          ))}
        </NavbarCollapse>
      </Navbar>
    </header>
  );
};

export default Header;
