import {
  TypographyTitle,
  TypographySubtitle,
  TypographyText,
} from "@/presentation/components/ui/typography"

export default function Home() {
  return (
    <div>
      <div className="flex h-screen items-center justify-center font-main flex-col bg-[#FBFDFF]">
        <div className="flex flex-col items-center justify-center">
          <TypographyTitle> Welcome to my website. </TypographyTitle>
          <TypographySubtitle> Ready <span className="text-[#227BFF]">to-do</span> some magic? </TypographySubtitle>
        </div>
      </div>
    </div>
  );
}
