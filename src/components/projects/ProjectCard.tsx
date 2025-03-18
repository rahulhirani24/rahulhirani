import { Code, Github, Link as LinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import ButtonCustom from "../ui/button-custom";

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  marketplaceUrl?: string;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  className?: string;
}

const ProjectCard = ({ project, index, className }: ProjectCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row items-center gap-8 lg:gap-12",
        isEven ? "lg:flex-row" : "lg:flex-row-reverse",
        className
      )}
    >
      {/* Image side */}
      <div className="relative w-full lg:w-1/2 aspect-video overflow-hidden rounded-xl border border-border">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 z-20">
          {/* <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary-foreground">
            <Code className="mr-1 h-3 w-3" />
            Project {project.id}
          </span> */}
        </div>
      </div>

      {/* Content side */}
      <div className="w-full lg:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="text-muted-foreground">{project.description}</p>

        <div className="flex flex-wrap gap-2 py-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-4">
          {/* {project.githubUrl && (
            <ButtonCustom variant="outline" className="gap-2">
              <Github className="h-4 w-4" />
              Code
            </ButtonCustom>
          )}
          {project.liveUrl && (
            <ButtonCustom className="gap-2">
              <LinkIcon className="h-4 w-4" />
              Live Demo
            </ButtonCustom>
          )} */}
          {project.marketplaceUrl && (
            <a
              href={project.marketplaceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ButtonCustom className="gap-2">
                <LinkIcon className="h-4 w-4" />
                Download from VSCode Marketplace
              </ButtonCustom>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
