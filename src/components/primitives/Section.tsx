import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = HTMLAttributes<HTMLElement> & { muted?: boolean; narrow?: boolean };

export function Section({ muted, narrow, className, children, ...props }: Props) {
  return (
    <section className={cn("section", muted && "section-muted", className)} {...props}>
      <div className={narrow ? "narrow" : "container"}>{children}</div>
    </section>
  );
}
