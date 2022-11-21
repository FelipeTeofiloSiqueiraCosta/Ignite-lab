import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface ButtonProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      className={clsx(
        "py-4 px-3 text-black font-semibold font-sans rounded bg-cyan-500 text-sm w-full transition-colors hover:bg-cyan-300"
      )}
    >
      {children}
    </Component>
  );
}
