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
      <LogOut className="mr-2 h-4 w-4" />
      Logout
    </Button>
  );
}