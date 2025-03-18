import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
// import { ThemeToggle } from "@/components/theme/theme-toggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-background/80 dark:bg-background/80 backdrop-blur-md shadow-sm"
          : "py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <a href="/" className="text-xl font-bold">
            <span className="text-primary">Rahul</span> Hirani
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="#about"
              className="px-4 py-2 rounded-md hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="px-4 py-2 rounded-md hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="px-4 py-2 rounded-md hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="px-4 py-2 rounded-md hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-md hover:text-primary transition-colors"
            >
              Contact
            </a>
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-2">
            {/* <ThemeToggle /> */}
            <button onClick={toggleMenu} className="p-2">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-4 absolute top-full left-0 right-0 bg-background dark:bg-background shadow-md">
            <div className="flex flex-col space-y-2 px-4">
              <a
                href="#about"
                onClick={toggleMenu}
                className="px-4 py-2 rounded-md hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                onClick={toggleMenu}
                className="px-4 py-2 rounded-md hover:text-primary transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                onClick={toggleMenu}
                className="px-4 py-2 rounded-md hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                onClick={toggleMenu}
                className="px-4 py-2 rounded-md hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="px-4 py-2 rounded-md hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
