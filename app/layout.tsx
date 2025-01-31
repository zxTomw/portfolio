import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { ComponentNoneIcon } from "@radix-ui/react-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tom's Portfolio",
  description: "projects, experiences, and hobbies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="w-dvw h-dvh overflow-auto">
            {children}
            <footer className="px-16 container mx-auto py-20 flex text-muted-foreground justify-between items-center">
              <div className="">
                <h3 className=" font-semibold">Tom's portfolio</h3>
                <p className="text-sm">
                  Created with NextJS and Shadcn/ui, deployed on Vercel.
                </p>
                <div className="flex gap-2 pt-1 items-center ">
                  <Link href="https://github.com/zxTomw" target="_blank">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="h-4 hover:text-foreground"
                    />
                  </Link>
                  <Link href="https://linkedin.com/in/zxTomw" target="_blank">
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="h-5 hover:text-foreground"
                    />
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
