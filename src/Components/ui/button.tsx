import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={`inline-flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/80 p-2 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors backdrop-blur-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 ${className}`.trim()}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

