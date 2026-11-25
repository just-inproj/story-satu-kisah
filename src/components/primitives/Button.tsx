import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  block?: boolean;
};

export function Button({ variant = "primary", block, className, ...props }: Props) {
  return (
    <button
      className={cn("btn", variant === "primary" ? "btn-primary" : "btn-secondary", block && "btn-block", className)}
      {...props}
    />
  );
}
