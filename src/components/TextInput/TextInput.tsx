import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes } from "react";

export interface TextInputRootProps {
  children: React.ReactNode;
}

function TextInputRoot({ children }: TextInputInputProps) {
  return (
    <div className="flex items-center gap-3 py-4 px-3 w-full h-12 font-sans rounded bg-gray-800 text-md transition-colors focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  );
}

export interface TextInputIcon {
  children: React.ReactNode;
}

function TextInputIcon(props: TextInputIcon) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 outline-none text-gray-400 text-xs placeholder:text-gray-400"
      {...props}
    />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
