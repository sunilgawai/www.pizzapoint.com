export type SiteConfig = typeof siteConfig

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
  ]
}
