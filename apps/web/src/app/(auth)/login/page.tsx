import Link from "next/link";
import { Sparkles } from "lucide-react";

import { LoginForm } from "@/features/auth/components/login-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to MiniLedgerPlatform.",
};

export default function LoginPage() {
  return (
    <div className="w-full max-w-md">
      <div className="mb-6 flex flex-col items-center gap-2 text-center lg:hidden">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <Sparkles className="h-5 w-5" />
        </div>
        <p className="font-heading text-sm font-semibold tracking-tight">
          MiniLedgerPlatform
        </p>
      </div>

      <Card className="relative overflow-hidden shadow-lg ring-1 ring-border">
        <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-primary" />

        <CardHeader>
          <CardTitle className="font-heading text-2xl font-medium italic">
            Sign in
          </CardTitle>
          <CardDescription>
            Enter the demo account credentials to access the dashboard.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <LoginForm />

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Back to{" "}
            <Link href="/" className="font-medium text-primary underline">
              home page
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
