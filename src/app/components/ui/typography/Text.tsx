import { cn } from "@/app/lib/utils";
import * as React from "react";

export type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>

export const TypographyText = React.forwardRef<HTMLHeadingElement, ParagraphProps>(
    ({ className, ...props }, ref) => (
        <h1
            ref={ref}
            className={cn(
                "text-[32px] text-balance", 
                className 
            )}
            {...props} 
        />
    )
)