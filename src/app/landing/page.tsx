"use client";

import { Button } from "@/app/components/ui/button/Button";
import {
  TypographyTitle,
  TypographySubtitle,
  TypographyText,
} from "@/app/components/ui/typography"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter ();
  return (
    <div className="flex items-center justify-center min-h-screen">
        <div className="flex items-center justify-center font-main flex-col w-[60vw] h-[40vh] gap-[16px]">
          <div className="flex flex-col items-center justify-center">
            <TypographyTitle> Welcome to my website. </TypographyTitle>
            <TypographySubtitle> Ready <span className="text-[var(--color-blue)]">to-do</span> some magic? </TypographySubtitle>
          </div>
          <Button onClick={() => router.push("/todo-page")}> Click here. </Button>
        </div>
    </div>
  );
}
