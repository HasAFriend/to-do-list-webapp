import { Button } from "@/presentation/components/ui/button/Button";
import {
  TypographyTitle,
  TypographySubtitle,
  TypographyText,
} from "@/presentation/components/ui/typography"

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
        <div className="flex items-center justify-center font-main flex-col w-[60vw] h-[40vh] gap-[16px]">
          <div className="flex flex-col items-center justify-center">
            <TypographyTitle> Welcome to page 2. </TypographyTitle>
          </div>
        </div>
    </div>
  );
}
