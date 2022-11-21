import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      className={clsx(
        "py-3 px-4 text-black font-semibold font-sans rounded bg-cyan-500 text-sm w-full transition-colors hover:bg-cyan-300"
      )}
    >
      {children}
    </Component>
  );
}
