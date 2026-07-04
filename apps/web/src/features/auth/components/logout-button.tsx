"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import React from "react";

export function LogoutButton() {
  const router = useRouter();

  function handleLogout() {
    window.localStorage.removeItem("ml_access_token");
    window.localStorage.removeItem("ml_user");

    router.push("/login");
  }

  return (
    <Button variant="outline" size="sm" type="button" onClick={handleLogout}>
      <LogOut className="h-4 w-4 sm:mr-2" />
      <span className="hidden sm:inline">Logout</span>
      <span className="sr-only sm:hidden">Logout</span>
    </Button>
  );
}