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
      title: "Offers",
      href: "/offers",
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
  ],


  categories_list: [
    {
      id: "1",
      image: "empty_cart.webp",
      name: "Bowls",
      isActive: true
    },
    {
      id: "1",
      image: "empty_cart.webp",
      name: "Superbowls",
      isActive: true
    },
    {
      id: "1",
      image: "empty_cart.webp",
      name: "Noodles",
      isActive: true
    },
    {
      id: "1",
      image: "empty_cart.webp",
      name: "Thalis",
      isActive: true
    },
    {
      id: "1",
      image: "empty_cart.webp",
      name: "Appetizers",
      isActive: true
    },
    {
      id: "1",
      image: "empty_cart.webp",
      name: "Appetizers",
      isActive: true
    },
    {
      id: "1",
      image: "empty_cart.webp",
      name: "Wraps",
      isActive: true
    },
    {
      id: "1",
      image: "empty_cart.webp",
      name: "Appetizers",
      isActive: true
    },
    {
      id: "1",
      image: "empty_cart.webp",
      name: "Sandwiches",
      isActive: true
    },
    {
      id: "1",
      image: "empty_cart.webp",
      name: "Burgers and More",
      isActive: true
    },
    {
      id: "1",
      image: "empty_cart.webp",
      name: "All day breakfast",
      isActive: true
    },
    {
      id: "1",
      image: "empty_cart.webp",
      name: "Keto Specials",
      isActive: true
    },
    {
      id: "1",
      image: "empty_cart.webp",
      name: "Soups and Salads",
      isActive: true
    },
    {
      id: "1",
      image: "empty_cart.webp",
      name: "Desserts & Beverages",
      isActive: true
    },
  ]
}
