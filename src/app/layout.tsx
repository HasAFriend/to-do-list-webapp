import type { Metadata } from "next";
import {inter, gowunDodum} from "@/presentation/lib/fonts" // Import adjusted based on tsconfig.json
import "../presentation/styles/globals.css"; // Since globals.css imports fonts.css, fonts.css is used here too.


export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Font variables inside html tag allows it to be called in every html related tag such as div and others. Note <body> uses font naming in font.css
    <html lang="en" className={`${inter.variable} ${gowunDodum.variable}`}> 
      <body
        className={`font-main antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
