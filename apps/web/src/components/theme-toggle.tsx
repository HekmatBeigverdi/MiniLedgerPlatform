"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import React from "react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(nextTheme)}
    >
      <Sun className="h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </Button>
  );
}