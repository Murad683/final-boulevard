import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { name: "Ana Səhifə", path: "/" },
  { name: "Menyu", path: "/menu" },
  { name: "Rezervasiya", path: "/rezervasiya" },
  { name: "Qalereya", path: "/qalereya" },
  { name: "Əlaqə", path: "/elaqe" },
];

const languages = ["AZ", "RU", "EN"];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("AZ");
  const location = useLocation();
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    if (!isMobileMenuOpen) {
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      body.style.paddingRight = "";
      body.style.overflow = "";
      html.style.overflow = "";
      return;
    }

    const scrollBarCompensation =
      window.innerWidth - document.documentElement.clientWidth;

    scrollPositionRef.current = window.scrollY;
    body.style.position = "fixed";
    body.style.top = `-${scrollPositionRef.current}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    if (scrollBarCompensation > 0) {
      body.style.paddingRight = `${scrollBarCompensation}px`;
    }

    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      body.style.paddingRight = "";
      body.style.overflow = "";
      html.style.overflow = "";
      window.scrollTo(0, scrollPositionRef.current);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-premium ${
        isScrolled
          ? "bg-secondary/95 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-premium flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative z-10 flex-shrink-0">
          <img
            src={logo}
            alt="Boulevard 1909"
            className="h-12 md:h-14 w-auto transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation - Right aligned */}
        <div className="hidden lg:flex items-center gap-8 ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${
                isScrolled ? "text-secondary-foreground" : "text-cream"
              } ${
                location.pathname === link.path ? "text-primary after:w-full" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Language Switcher */}
          <div className="flex items-center gap-3 ml-6 pl-6 border-l border-cream/20">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLang(lang)}
                className={`text-xs uppercase tracking-wider font-medium transition-colors duration-300 ${
                  activeLang === lang
                    ? "text-primary"
                    : isScrolled
                    ? "text-secondary-foreground/70 hover:text-primary"
                    : "text-cream/70 hover:text-primary"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className={`lg:hidden relative z-10 p-2 transition-colors duration-300 ${
            isScrolled || isMobileMenuOpen ? "text-cream" : "text-cream"
          }`}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-secondary transition-all duration-500 ease-premium lg:hidden ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-2xl font-display text-cream transition-all duration-300 hover:text-primary ${
                  location.pathname === link.path ? "text-primary" : ""
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen
                    ? "translateY(0)"
                    : "translateY(20px)",
                }}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Language Switcher */}
            <div
              className="flex items-center gap-4 mt-6"
              style={{
                transitionDelay: isMobileMenuOpen ? "300ms" : "0ms",
                opacity: isMobileMenuOpen ? 1 : 0,
              }}
            >
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveLang(lang)}
                  className={`text-sm uppercase tracking-wider font-medium transition-colors duration-300 ${
                    activeLang === lang
                      ? "text-primary"
                      : "text-cream/70 hover:text-primary"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
