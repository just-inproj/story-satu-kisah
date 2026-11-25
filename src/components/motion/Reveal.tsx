import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ className, ...props }: HTMLAttributes<HTMLDivElement> & { delay?: 1 | 2 | 3 }) {
  const { delay, ...rest } = props as any;
  return <div className={cn("reveal", delay && `delay-${delay}`, className)} {...rest} />;
}
