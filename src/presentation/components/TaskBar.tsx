import { cn } from "@/presentation/lib/utils";
import * as React from "react";
import { TypographyText } from "./ui/typography";
import { CircleButton, type CircleButtonProps } from "./ui/button/CircleButton";
import { CloseIcon } from "./ui/icons/CloseIcon";

export type TaskBarProps = React.HTMLAttributes<HTMLDivElement> & {
  circleVariant?: CircleButtonProps["variant"];
} // CircleButtonProps allows the use of its variants. this just renames variant to circleVariant to be called distinctly in TaskBar component. if you want it to stay as variant when called just do & CircleButtonProps

export const TaskBar = React.forwardRef<HTMLDivElement, TaskBarProps>(
  ({ circleVariant="default", className, children, ...props }, ref) => ( // variant: circleButtonVariant renames the former to the latter [this is deleted in this version]
    <div
        ref={ref}
        className={cn("flex flex-row items-center  w-[922px] h-[70px] gap-[25px] ",
            className)}
        {...props}
    >
        <div className="w-[45px] h-[45px] ">
            <CircleButton variant={circleVariant}/>
        </div>

        <div className=" w-full flex flex-row items-center  "> 
            <TypographyText> {children} </TypographyText>
        </div>

        <div>
            <CloseIcon className="w-[18.75px] h-[18.75px] "/>
        </div>
        
    </div>
  )
);

TaskBar.displayName = "TaskBar";