import { CodeXml, Github, Linkedin, Mail, Twitter } from "lucide-react";
import developerImg from "../../../public/developer.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="relative flex h-6 w-6 items-center justify-center overflow-hidden">
                <img src={developerImg} alt="developer icon" />
              </div>
              <span className="text-xl font-semibold tracking-tight">
                Rahul<span className="text-primary"> Hirani</span>
              </span>
            </a>
            <p className="text-muted-foreground max-w-md">
              A passionate frontend developer crafting beautiful, functional,
              and accessible user interfaces for the modern web.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                rahulhirani.dev@gmail.com
              </li>
              <li className="text-muted-foreground">Bengaluru, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Rahul Hirani(); // Built, tested &
            deployed
          </p>
          {/* <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Designed with precision. Built with passion.
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
