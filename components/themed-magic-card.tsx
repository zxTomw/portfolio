"use client";
import { useTheme } from "next-themes";
import { MagicCard } from "./ui/magic-card";
import { useEffect, useState } from "react";

export function ThemedMagicCard({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted)
    return (
      <MagicCard className="shadow-2xl w-full md:w-72 lg:w-96 xl:w-80 overflow-hidden min-h-full">
        {children}
      </MagicCard>
    );
  return (
    <MagicCard
      className="shadow-2xl w-full md:w-72 lg:w-96 xl:w-80 overflow-hidden min-h-full"
      gradientColor={isDark ? "#262626" : "#D9D9D955"}
    >
      {children}
    </MagicCard>
  );
}
