import {
  BarChart3,
  BookOpen,
  Building2,
  FileText,
  LayoutDashboard,
  Settings,
  Users,
  Database,
} from "lucide-react";

export type NavigationItem = {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
};

export const mainNavigation: NavigationItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    description: "Overview and key accounting metrics",
  },
  {
    title: "Accounts",
    href: "/accounts",
    icon: BookOpen,
    description: "Chart of accounts and account structure",
  },
  {
    title: "Parties",
    href: "/parties",
    icon: Users,
    description: "Customers, vendors, and related entities",
  },
  {
    title: "Vouchers",
    href: "/vouchers",
    icon: FileText,
    description: "Journal entries and accounting documents",
  },
  {
    title: "Reports",
    href: "/reports",
    icon: BarChart3,
    description: "Ledgers, balances, and financial reports",
  },
  {
    title: "Organization",
    href: "/organization",
    icon: Building2,
    description: "Company and workspace information",
  },
  {
    title: "Desktop DB",
    href: "/desktop-database",
    icon: Database,
    description: "Local SQLite database diagnostics",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
    description: "Application preferences and configuration",
  },
];