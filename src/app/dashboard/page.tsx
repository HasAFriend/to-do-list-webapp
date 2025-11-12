import { Button } from "@/presentation/components/ui/button/Button";
import { InputBar } from "@/presentation/components/ui/input/InputBar"; 
import {
  TypographyTitle,
  TypographySubtitle,
  TypographyText,
} from "@/presentation/components/ui/typography"

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
        <div className="flex items-center justify-center font-main flex-col w-[70vw] h-[90vh] gap-[16px] bg-red-200 gap-[16px]">
          <div className="flex flex-col items-center justify-center">
            <TypographyTitle> To-do list. </TypographyTitle>
          </div>
          <div className="flex flex-row items-center justify-center px-[15px] py-[20px] gap-[8px] bg-yellow-100">
            <InputBar placeholder="Enter task." />
            <Button> Add task </Button>
          </div>
          <div className="flex flex-col items-center justify-center gap-[16px]"> 
            <TypographyText> Task 1 </TypographyText>
            <TypographyText> Task 2 </TypographyText>
            <TypographyText> Task 3 </TypographyText>
            <TypographyText> Task 4 </TypographyText>
            <TypographyText> Task 5 </TypographyText>
            <TypographyText> Task 6 </TypographyText>
          </div>
        </div>
    </div>
  );
}

// Placeholder list. Replace with actual modifiable list later
