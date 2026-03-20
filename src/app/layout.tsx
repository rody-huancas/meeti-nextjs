import type { Metadata } from "next";
import { Outfit} from "next/font/google";
import { Toaster } from "react-hot-toast";
import { cn } from "@/shared/utils/cn.util";
import { generatePageTitle } from "@/shared/utils/metadata";
import "@/styles/globals.css";

const geistMono = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: generatePageTitle("App"),
  description: "Proyecto de Meeti Next.js con DrizzleORM",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body
        className={cn("antialiased", geistMono.variable)}
      >
        {children}

        <Toaster position="top-right"/>
      </body>
    </html>
  );
}
