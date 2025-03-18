
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = false,
  className
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      "mb-10 max-w-2xl",
      centered ? "mx-auto text-center" : "",
      className
    )}>
      <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary-foreground rounded-md bg-primary mb-2 opacity-0 animate-fade-in">
        {subtitle || "Section"}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight opacity-0 animate-fade-in-delay-1 dark:text-foreground">
        {title}
      </h2>
      <div className="h-1 w-20 bg-accent rounded-full opacity-0 animate-fade-in-delay-2" 
        style={{ marginLeft: centered ? 'auto' : '0', marginRight: centered ? 'auto' : '0' }}/>
    </div>
  );
};

export default SectionHeading;
