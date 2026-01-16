import { Button } from "@/app/components/ui/button/Button";
import { CircleButton } from "@/app/components/ui/button/CircleButton";
import { CloseIcon } from "@/app/TodoPage/TodoComponents/icons/CloseIcon";
import { InputBar } from "@/app/TodoPage/TodoComponents/input/InputBar"; 
import { TaskBar } from "@/app/TodoPage/TodoComponents/TaskBar";
import {
  TypographyTitle,
  TypographySubtitle,
  TypographyText,
} from "@/app/components/ui/typography"

export default function TodoPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
        <div className="flex items-center justify-center font-main flex-col w-[70vw] h-[90vh] gap-[16px]  gap-[16px]">
          <div className="flex flex-col items-center justify-center">
            <TypographyTitle> To-do list. </TypographyTitle>
          </div>
          <div className="flex flex-row items-center justify-center px-[15px] py-[20px] gap-[8px]">
            <InputBar placeholder="Enter task." />
            <Button> Add task </Button>
          </div>
          <div className="flex flex-col items-center justify-center gap-[16px]"> 
            <TaskBar> Task 1 </TaskBar>
            <TaskBar circleVariant="selected"> Task 2 </TaskBar>
            <TaskBar> Task 3 </TaskBar>
            <TaskBar> Task 4 </TaskBar>
            <TaskBar> Task 5 </TaskBar>
          </div>
        </div>
        
    </div>
  );
}

// Placeholder list. Replace with actual modifiable list later
