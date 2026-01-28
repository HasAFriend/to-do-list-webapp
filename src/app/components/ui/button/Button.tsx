import { cn } from "@/app/lib/utils";
import * as React from "react";

type Variant = "default" | "alternative"
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
}

// Record<Variant, string> means that it assigns styles to certain Variants (namely default and alternative)
const VARIANT: Record<Variant, string> = { 
    default: "bg-[var(--color-blue)] text-[var(--color-white)] hover:bg-[var(--color-blue-hovered)] focus-visible:bg-[var(--color-blue-focused)] focus-visible:outline-none ",
    alternative: "bg-red-500"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", children, ...props }, ref) => (
        <button
            ref={ref}
            className={cn(
                "inline-flex items-center justify-center gap-[10px] rounded-[50px] font-main transition-colors disabled:opacity-70 disabled:cursor-not-allowed h-[79px] w-[208px] text-[32px] px-[20px] py-[15px]", // Hardcoded values. Please edit later
                VARIANT[variant], // Variant allows for the use of variant style classes (default and alternative in this case)
                className 
            )}
            {...props} // Gathers other props that isn't solely in the component (props are attributes like className, variant, id, name, onClick(), etc.)
        >
            {children} 
        </button>
        // {children} allows for the button to display text; children takes it anything inside the component tag i.e. <Button> children </Button>
    )
)
Button.displayName = "Button";
// Remove hard coded height, width, and padding values found inside button later