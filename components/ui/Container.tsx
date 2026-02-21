import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main" | "header" | "footer" | "nav";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const maxWidthClasses = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[1400px]",
  "2xl": "max-w-[1600px]",
  full: "max-w-full",
};

export function Container({
  children,
  className,
  as: Tag = "div",
  maxWidth = "lg",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        maxWidthClasses[maxWidth],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
