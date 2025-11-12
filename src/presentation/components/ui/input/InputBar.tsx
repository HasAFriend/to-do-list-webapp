import { cn } from "@/presentation/lib/utils";
import * as React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const InputBar = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, children, ...props }, ref) => (
        <input
            ref={ref}
            className={cn(
                "inline-flex items-center justify-center rounded-[40px] font-main placeholder:text-[var(--color-grey)] h-[79px] w-[714px] text-[32px] px-[35px] py-[10px] bg-[var(--color-grey-white)]", 
                className 
            )}
            {...props}
        >
        </input>
    )
)
InputBar.displayName = "Input Bar";