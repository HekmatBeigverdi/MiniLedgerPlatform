import type { LoginFormValues } from "@/features/auth/schemas/login-schema";

export type MockUser = {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Accountant" | "Viewer";
};

export type LoginResult = {
  user: MockUser;
  accessToken: string;
};

export async function mockLogin(values: LoginFormValues): Promise<LoginResult> {
  await new Promise((resolve) => setTimeout(resolve, 700));

  return {
    user: {
      id: "usr_001",
      name: "MiniLedger Admin",
      email: values.email,
      role: "Admin",
    },
    accessToken: "mock_access_token",
  };
}