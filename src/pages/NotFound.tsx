import { Link } from "react-router-dom";
import ButtonCustom from "../components/ui/button-custom";
import { ThemeProvider } from "@/components/theme/theme-provider";

export default function NotFound() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme-preference">
      <div className="flex flex-col min-h-screen items-center justify-center p-4 md:p-8 text-center">
        <div className="space-y-6 max-w-md">
          <h1 className="text-6xl md:text-8xl font-bold text-gradient">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold">Page Not Found</h2>
          <p className="text-muted-foreground">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <ButtonCustom className="mt-4">Back to Home</ButtonCustom>
          </Link>
        </div>
      </div>
    </ThemeProvider>
  );
}
