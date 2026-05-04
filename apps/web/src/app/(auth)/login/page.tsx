import Link from "next/link";

import { LoginForm } from "@/features/auth/components/login-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export default function LoginPage() {
  return (
    <Card className="w-full max-w-md shadow-sm">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>
          Enter the demo account credentials to access the dashboard.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <LoginForm />

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Back to{" "}
          <Link href="/" className="font-medium text-foreground underline">
            home page
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}