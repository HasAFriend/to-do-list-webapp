import { cn } from "@/presentation/lib/utils";
import * as React from "react";

export type H2Props = React.HTMLAttributes<HTMLHeadingElement>

export const TypographySubtitle = React.forwardRef<HTMLHeadingElement, H2Props>(
    ({ className, ...props }, ref) => (
        <h1
            ref={ref}
            className={cn(
                "text-[40px] text-balance", 
                className 
            )}
            {...props}
        />
    )
)