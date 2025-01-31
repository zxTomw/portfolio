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
          <nav
            className="flex justify-between items-center top-0
           py-4 absolute z-50 px-10 backdrop-blur-md w-full"
          >
            <div className="flex gap-10 items-center">
              <Link href="/">
                <ComponentNoneIcon className="h-5 w-5" />
              </Link>
              <a href="#proj">Projects</a>
            </div>
            <div className="flex gap-5 items-center text-muted-foreground">
              <Link href="https://github.com/zxTomw" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="h-5 hover:text-foreground"
                />
              </Link>
              <Link href="https://linkedin.com/in/zxTomw" target="_blank">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="h-6 hover:text-foreground"
                />
              </Link>
              <ModeToggle />
            </div>
          </nav>
          <main className="flex w-dvw h-dvh overflow-auto">{children}</main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
