import { Briefcase, Building2, Calendar } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Senior Frontend Engineer",
      company: "Atlassian",
      duration: "August 2022 - Present",
      location: "Bangalore, India",
      description: [
        "Build and maintain monorepo tooling and infrastructure to support 2K+ frontend developers across the company, improving scalability and developer experience.",
        "Led the Yarn upgrade from v1 to Yarn Berry, optimizing package management and overall build performance, saving 81 build hours per week.",
        "Led the ESLint migration to Flat Config and Node upgrade to v20 for Jira,streamlining development workflows.",
        "Contributed to the implementation of Facts Map, a dependency-based CI optimization package that reduced build time by 40%, saving 5 engineering years.",
      ],
    },
    {
      title: "Frontend Engineering Lead",
      company: "Walmart Global Tech India",
      duration: "June 2020 - July 2022",
      location: "Bangalore, India",
      description: [
        "Led the Front-End team for Jasper (an IoT solution), saving Walmart $24 million annually.",
        "Migrated applications from Monolith to MicroFrontEnd architecture for improved scalability.",
        "Managed end-to-end UI development, including CI/CD and quality checks.",
      ],
    },
    {
      title: "Full Stack Engineer",
      company: "Tricog Health",
      duration: "Jan 2020 - May 2020",
      location: "Bangalore, India",
      description: [
        "Built a Single Page Application for diagnosing ECG, Treadmill, and Spirometry reports, improving early detection of cardiac issues and accelerating diagnosis time by 40%.",
        "Collaborated with the business team to refine requirements, improving product adoption and customer satisfaction.",
        "Contributed to the company's component library, creating reusable UI elements.",
      ],
    },
    {
      title: "Frontend Engineer",
      company: "Lowe's India",
      duration: "Oct 2017 - Jan 2020",
      location: "Bangalore, India",
      description: [
        "Developed and enhanced Cart and Checkout experiences for lowes.com, improving checkout conversion rates and reducing cart abandonment.",
        "Integrated multiple payment services in Checkout, ensuring secure transactions and enhancing user trust.",
        "Contributed to the Post-Checkout team, optimizing order tracking and invoice generation, improving customer satisfaction scores.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Wipro",
      duration: "Dec 2016 - Sept 2017",
      location: "Hyderabad, India",
      description: [
        "Improved Michelin's Tyre Processing System, maintaining a 95% satisfaction score.",
        "Collaborated closely with designers to ensure a seamless user experience.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="section-padding bg-secondary/30 dark:bg-secondary/10"
    >
      <div className="container px-4 mx-auto">
        <SectionHeading
          title="Work Experience"
          subtitle="My Journey"
          centered
        />

        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border dark:bg-border/30"></div>
          {/* Experience items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                }`}
              >
                {/* Timeline bullet point */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10"></div>

                {/* Content */}
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-12 text-right" : "pl-12"
                  }`}
                >
                  {/* add animate-reveal class in the below div*/}
                  <div className="bg-background dark:bg-secondary/20 shadow-sm border border-border dark:border-border/20 rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-2 text-primary">
                      <Briefcase className="h-4 w-4" />
                      <h3 className="font-bold">{exp.title}</h3>
                    </div>
                    <div
                      className={`flex items-center gap-2 mb-4 text-white ${
                        index % 2 === 0 ? "justify-end" : "justify-start"
                      }`}
                    >
                      <Building2 className="h-4 w-4" />
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                    <div
                      className={`flex items-center gap-2 mb-4 text-sm text-muted-foreground ${
                        index % 2 === 0 ? "justify-end" : "justify-start"
                      }`}
                    >
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <ul
                      className={`text-sm space-y-2 ${
                        index % 2 === 0 ? "text-justify" : "text-left"
                      }`}
                    >
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
