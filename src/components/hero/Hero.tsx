import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import ButtonCustom from "../ui/button-custom";
import ProfileImg from "../../../public/profileImg.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 overflow-hidden dark:bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 -left-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 h-64 w-64 rounded-full bg-accent/5 blur-3xl"></div>
      </div>

      <div className="absolute top-10 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute h-[600px] w-[600px] rounded-full border border-primary/10 top-0 left-1/3"></div>
        <div className="absolute h-[300px] w-[300px] rounded-full border border-primary/10 bottom-1/3 right-1/4"></div>
      </div>

      <div className="container px-4 mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl mx-auto">
          <div className="space-y-8 max-w-xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-border bg-background/50 backdrop-blur-sm opacity-0 animate-fade-in dark:bg-secondary/10 dark:border-border/20">
              <span className="inline-block size-2 rounded-full bg-green-500"></span>
              <span className="text-sm font-medium">Available for work</span>
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-tight opacity-0 animate-fade-in-delay-1">
              Hi, I'm <span className="text-gradient">Rahul Hirani</span>
            </h1>

            <p className="text-muted-foreground dark:text-muted-foreground/90 text-lg md:text-xl opacity-0 animate-fade-in-delay-2 max-w-md">
              I build things for the web.
            </p>

            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-delay-3">
              <a href="#projects">
                <ButtonCustom>View Projects</ButtonCustom>
              </a>
              <a
                href="../../../public/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ButtonCustom variant="outline">Download Resume</ButtonCustom>
              </a>
            </div>

            <div className="flex items-center gap-4 opacity-0 animate-fade-in-delay-4">
              <a
                href="https://www.github.com/arhirani"
                className="p-2 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-all dark:border-border/20"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rahulhirani24"
                className="p-2 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-all dark:border-border/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              {/* <a
                href="#"
                className="p-2 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-all dark:border-border/20"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a> */}
              <a
                href="mailto:rahulhirani.dev@gmail.com"
                className="p-2 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-all dark:border-border/20"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative opacity-0 animate-fade-in-delay-2 max-w-md mx-auto lg:max-w-full">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="aspect-w-4 aspect-h-5">
                <div className="absolute inset-0 z-10 mix-blend-multiply"></div>
                <div className="absolute inset-0 z-5 opacity-20 bg-[radial-gradient(#444_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <img
                  src={ProfileImg}
                  alt="Rahul Hirani"
                  className="w-full h-full object-cover object-center opacity-60"
                  loading="lazy"
                />
                {/* <div className="absolute bottom-8 left-8 z-20 text-left">
                  <h3 className="text-xl font-medium text-white">
                    Rahul Hirani
                  </h3>
                  <p className="text-sm text-white/80">Frontend Developer</p>
                  <div className="h-px w-16 bg-primary/80 my-3"></div>
                  <p className="text-xs text-white/70 font-light">
                    React · TypeScript · Tailwind
                  </p>
                </div> */}
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 size-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-10 -left-10 size-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 border border-border rounded-full p-2 hover:text-primary transition-colors animate-bounce dark:border-border/20"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
};

export default Hero;
