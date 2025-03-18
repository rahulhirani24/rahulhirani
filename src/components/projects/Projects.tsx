import SectionHeading from "../common/SectionHeading";
import ProjectCard, { ProjectData } from "./ProjectCard";

const Projects = () => {
  const projects: ProjectData[] = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A minimalist, responsive portfolio website for creatives with smooth animations and an interactive project showcase.",
      image: "/pw.png",
      tags: ["React", "TypeScript", "Tailwind"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 2,
      title: "Search Dependencies",
      description:
        "A VSCode extension with 350+ downloads, created for seaching the dependency usages in a monorepo.",
      image: "/sd.png",
      tags: ["JavaScript"],
      githubUrl: "https://github.com/arhirani/SearchDependencies",
      marketplaceUrl:
        "https://marketplace.visualstudio.com/items?itemName=RahulHirani.search-dependencies",
    },
    // {
    //   id: 3,
    //   title: "Social Media App",
    //   description:
    //     "A responsive social networking application with real-time messaging, notifications, and content sharing functionality.",
    //   image:
    //     "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000",
    //   tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    //   githubUrl: "#",
    //   liveUrl: "#",
    // },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container px-4 mx-auto">
        <SectionHeading title="Featured Projects" subtitle="My Work" centered />

        <div className="space-y-24 mt-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
