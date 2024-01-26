// export type SiteConfig = typeof siteConfig

import { NavItem } from "@/types";

interface SiteConfig {
  name: string;
  description: string;
  mainNav: NavItem,
  links: any[],
  adminNavigation: NavItem[]
}
export const siteConfig = {
  name: "Pizza Point",
  description:
    "www.pizzapoint.com",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Menus",
      href: "/menus",
    },
    {
      title: "Cart",
      href: "/cart",
    },
    {
      title: "Wishlist",
      href: "/wishlist",
    },
    {
      title: "Account",
      href: "/account",
    }
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
  navItems: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "dashboard",
      label: "Dashboard",
    },
    {
      title: "User",
      href: "/dashboard/user",
      icon: "user",
      label: "user",
    },
    {
      title: "Employee",
      href: "/dashboard/employee",
      icon: "employee",
      label: "employee",
    },
    {
      title: "Profile",
      href: "/dashboard/profile",
      icon: "profile",
      label: "profile",
    },
    {
      title: "Kanban",
      href: "/dashboard/kanban",
      icon: "kanban",
      label: "kanban",
    },
    {
      title: "Login",
      href: "/",
      icon: "login",
      label: "login",
    },
  ],

  // Admin
  adminNavigation: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "dashboard",
      label: "Dashboard",
    },
    {
      title: "Users",
      href: "/users",
      icon: "user",
      label: "user",
    },
    {
      title: "Employees",
      href: "/employees",
      icon: "employee",
      label: "employee",
    },
    {
      title: "todos",
      href: "/todos",
      icon: "kanban",
      label: "kanban",
    },
    // {
    //   DASHBOARD: "",
    //   CATEGORIES: {
    //     INDEX: "categories",
    //     NEW: "categories/new"
    //   },
    //   DIMENTIONS: "",
    //   PRODUCTS: "",
    //   USER: "",
    //   ROLE: "",
    //   EMPLOYEES: "",
    //   PROFILE: "",
    //   KANBAN: "",
    // }
  ]
}
