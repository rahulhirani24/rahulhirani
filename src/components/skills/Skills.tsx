import { useState, useContext } from "react";
import { cn } from "@/lib/utils";
import SectionHeading from "../common/SectionHeading";

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface Category {
  name: string;
  label: string;
}

const Skills = () => {
  const categories: Category[] = [
    { name: "all", label: "All Skills" },
    { name: "frontend", label: "Frontend" },
    { name: "backend", label: "Backend" },
    // { name: "design", label: "Design" },
    { name: "tools", label: "Tools" },
  ];

  const [activeCategory, setActiveCategory] = useState<string>("all");
  //const theme = useContext(ThemeProviderContext);

  const skills: Skill[] = [
    // Frontend
    { name: "HTML5 & CSS3", level: 95, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "TypeScript", level: 85, category: "frontend" },
    { name: "React", level: 90, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },
    { name: "SASS/SCSS", level: 85, category: "frontend" },

    // Backend
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Express", level: 75, category: "backend" },
    { name: "REST APIs", level: 85, category: "backend" },
    { name: "GraphQL", level: 70, category: "backend" },

    // // Design
    // { name: "Figma", level: 50, category: "design" },
    // { name: "UI/UX Design", level: 60, category: "design" },

    // Tools
    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "Webpack", level: 80, category: "tools" },
    { name: "Jest", level: 75, category: "tools" },
    { name: "CI/CD", level: 70, category: "tools" },
    { name: "Docker", level: 65, category: "tools" },
  ];

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="section-padding">
      <div className="container px-4 mx-auto">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="What I Do"
          centered
        />

        <div className="flex flex-wrap justify-center gap-2 mt-10 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === category.name
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-secondary rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
