import { cn } from "@/presentation/lib/utils";
import * as React from "react";

export type H1Props = React.HTMLAttributes<HTMLHeadingElement>

export const TypographyTitle = React.forwardRef<HTMLHeadingElement, H1Props>(
    ({ className, ...props }, ref) => (
        <h1
            ref={ref}
            className={cn(
                "text-[57px] text-balance", 
                className // allows for class styles to be placed inside this component when called outside of this file
            )}
            {...props} // this is all the props placed inside a CALLED component outside of this file (not necessarily className)
        />
    )
)