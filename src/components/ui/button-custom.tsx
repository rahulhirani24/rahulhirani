
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonCustomProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg";
  children: React.ReactNode;
  className?: string;
}

const ButtonCustom = forwardRef<HTMLButtonElement, ButtonCustomProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "relative inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          // Variants
          variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90 active:translate-y-0.5",
          variant === "outline" && "border border-input bg-background hover:bg-accent hover:text-accent-foreground active:translate-y-0.5",
          variant === "ghost" && "hover:bg-accent hover:text-accent-foreground active:translate-y-0.5",
          variant === "link" && "text-primary underline-offset-4 hover:underline",
          // Sizes
          size === "default" && "h-10 px-4 py-2",
          size === "sm" && "h-9 rounded-md px-3",
          size === "lg" && "h-11 rounded-md px-8",
          // Shadow and hover effects
          variant !== "link" && variant !== "ghost" && "shadow-sm hover:shadow",
          // Custom border
          variant === "default" && "after:absolute after:inset-0 after:rounded-md after:border after:border-primary/50 after:opacity-0 hover:after:opacity-100 after:transition-opacity",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ButtonCustom.displayName = "ButtonCustom";

export default ButtonCustom;
