"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle } from "lucide-react";
import { useForm, type ControllerRenderProps } from "react-hook-form";

import {
  loginSchema,
  type LoginFormValues,
} from "@/features/auth/schemas/login-schema";
import { mockLogin } from "@/features/auth/services/auth-service";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";

export function LoginForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "admin@miniledger.local",
      password: "password",
      rememberMe: true,
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  async function onSubmit(values: LoginFormValues) {
    setErrorMessage(null);

    try {
      const result = await mockLogin(values);

      window.localStorage.setItem("ml_access_token", result.accessToken);
      window.localStorage.setItem("ml_user", JSON.stringify(result.user));

      router.push("/dashboard");
    } catch {
      setErrorMessage("Unable to sign in. Please try again.");
    }
  }

  return (
    <div className="grid gap-6">
      {errorMessage ? (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Authentication failed</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      ) : null}

      <Form {...form}>
        <form className="grid gap-5" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }: { field: ControllerRenderProps<LoginFormValues, "email"> }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="admin@miniledger.local"
                    autoComplete="email"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Use the demo account to enter the dashboard.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }: { field: ControllerRenderProps<LoginFormValues, "password"> }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="password"
                    autoComplete="current-password"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Demo password is already filled for this phase.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="rememberMe"
            render={({ field }: { field: ControllerRenderProps<LoginFormValues, "rememberMe"> }) => (
              <FormItem className="flex flex-row items-start gap-3 space-y-0 rounded-lg border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>

                <div className="space-y-1 leading-none">
                  <FormLabel>Remember me</FormLabel>
                  <FormDescription>
                    Keep the demo session available in this browser.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </Form>
    </div>
  );
}