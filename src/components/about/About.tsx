import { Briefcase, Code, Monitor, User } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import ButtonCustom from "../ui/button-custom";

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-5 w-5 text-primary" />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code that follows best practices and standards.",
    },
    {
      icon: <Monitor className="h-5 w-5 text-primary" />,
      title: "Responsive Design",
      description:
        "Creating interfaces that work flawlessly across all devices and screen sizes.",
    },
    {
      icon: <Briefcase className="h-5 w-5 text-primary" />,
      title: "8+ Years Experience",
      description:
        "Working with modern frontend frameworks and design systems.",
    },
    {
      icon: <User className="h-5 w-5 text-primary" />,
      title: "User-Centered",
      description: "Focusing on accessibility and inclusive design principles.",
    },
  ];

  return (
    <section id="about" className="section-padding dark:bg-background">
      <div className="container px-4 mx-auto">
        <SectionHeading title="About Me" subtitle="My Story" centered={true} />

        <div className="mx-auto">
          <div className="space-y-6">
            <p className="text-muted-foreground dark:text-muted-foreground/90">
              Hello! I'm Rahul, a software engineer who enjoys building
              impactful web experiences. Currently,I work at{" "}
              <a style={{ color: "#64ffda" }} href="https://www.atlassian.com/">
                Atlassian
              </a>
              , where I focus on enhancing developer productivity by improving
              web infrastructure. Prior to this, I've worked with e-commerce
              giants like{" "}
              <a style={{ color: "#64ffda" }} href="https://www.walmart.com">
                Walmart
              </a>{" "}
              and{" "}
              <a style={{ color: "#64ffda" }} href="https://www.lowes.com">
                Lowe's
              </a>
              , where I built engaging e-commerce experiences that improved
              customer interactions. I have extensive experience with
              JavaScript, React, and TypeScript, and I take pride in building
              web applications that are fast, accessible, and enjoyable to use.
              Outside of work, I enjoy playing tennis, exploring new
              destinations, and reading about technology trends.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 dark:bg-secondary/20 border border-border dark:border-border/20"
                >
                  <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground/80 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* <a
              href="../../../public/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ButtonCustom className="mt-4">Download Resume</ButtonCustom>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
