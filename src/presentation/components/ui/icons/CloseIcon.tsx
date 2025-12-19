import { cn } from "@/presentation/lib/utils";
import * as React from "react";

export type SVGProps = React.SVGProps<SVGSVGElement>

export const CloseIcon = React.forwardRef<SVGSVGElement, SVGProps>(
    ({ className, ...props }, ref) => (
        <svg 
            width="18.75" 
            height="18.75" 
            viewBox="0 0 21 21" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            ref={ref} // Added - Allows scripts to be used in this SVG
            className={cn(className, "text-[var(--color-grey)]")}  // Added - Allows color change; {cn(className, "text-[var(--color-grey)]") sets the text to be default grey unless overwritten by other className styles. RECALL: cn merges classes, so if the parent passes a className, it doesn’t override the default unless explicitly set.
            {...props} // Added - Allows for other props to enter this SVG component
            // Make sure ref, className, and ...props fit the SVG tag; it's inside <>
        >
        <path 
            d="M19.75 1L1 19.75M1 1L19.75 19.75" 
            stroke="currentColor" // Allows to take in any color; anything in <path> is hardcoded!
            strokeWidth="2" // Remember to make strokeWidth follow camelCase to fit JSX standards; kebab-case is html while camelCase is JSX
            strokeLinecap="round" 
            strokeLinejoin="round"
        />
        </svg>    
    )
)
CloseIcon.displayName = "Close Icon";