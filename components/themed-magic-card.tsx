"use client";
import { useTheme } from "next-themes";
import { MagicCard } from "./ui/magic-card";

export function ThemedMagicCard({ children }: { children: React.ReactNode }) {
  const { theme, systemTheme } = useTheme();
  const isDark =
    theme === "dark" || (theme === "system" && systemTheme === "dark");
  return (
    <MagicCard
      className="shadow-2xl w-full md:w-72 lg:w-96 xl:w-80 overflow-hidden min-h-full"
      gradientColor={isDark ? "#262626" : "#D9D9D955"}
    >
      {children}
    </MagicCard>
  );
}
