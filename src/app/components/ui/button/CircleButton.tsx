import { cn } from "@/app/lib/utils";
import * as React from "react";

type Variant = "default" | "selected"

// Allows the two variants (default and selected) to take in button props 
export type CircleButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { 
    variant?: Variant;
}

type VariantStyle = {
    className: string; // Allows styling via className
    svg?: React.ReactElement; // Allows for optional SVG usage
}

// Record<Variant, VariantStyle> means that VARIANT is limited to Variant strings (default and selected) as well as VariantStyles (className: string and svg : ReactElement)
const VARIANT: Record<Variant, VariantStyle> = { 
    // Grey unselected circle
    default: {
        className: "bg-[var(--color-white)] border-[5px] border-[var(--color-grey-light)] text-[var(--color-white)] hover:bg-[var(--color-grey-light-hovered)] hover:border-[var(--color-grey-dark-hovered)] focus-visible:bg-[var(--color-grey-light)]  focus-visible:border-[var(--color-grey)] focus-visible:outline-none ",
        // No svg here
    },
    // Blue check mark; accomplished task signifier d
    selected: {
        className: "bg-[var(--color-blue)] hover:bg-[var(--color-blue-hovered)] focus-visible:bg-[var(--color-blue-focused)] focus-visible:outline-none",
        svg:    <svg 
                    width="20" 
                    height="15" 
                    viewBox="0 0 20 15" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                <path 
                    d="M18.1667 1.5L6.70833 12.9583L1.5 7.75" 
                    stroke="#FDFDFE" 
                    strokeWidth="3" // Remember to use camelCase not kebab otherwise react wont work
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
                </svg>
    }
}

export const CircleButton = React.forwardRef<HTMLButtonElement, CircleButtonProps>(
    ({ className, variant = "default", children, ...props }, ref) => (
        <button
            ref={ref}
            className={cn(
                "inline-flex items-center justify-center gap-[10px] rounded-full font-main transition-colors disabled:opacity-70 disabled:cursor-not-allowed h-[45px] w-[45px]", // Hardcoded values. Please edit later
                VARIANT[variant].className, // Gets the .className styles in VARIANT
                className 
            )}
            {...props}
        >
            {VARIANT[variant].svg} 
            {children} 
        </button>
        // place '&& <span>{VARIANT[variant].svg}</span>' beside  {VARIANT[variant].svg}  if you want to edit the marigins of svg inside the button | If .svg has svg makes a span to contain the svg in; A && B -> if A is true return
        
    )
)
CircleButton.displayName = "Circle Button";
// Remove hard coded height, width, and padding values found inside button later