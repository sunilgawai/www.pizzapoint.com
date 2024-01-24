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
    },
    // {
    //   title: "Account",
    //   href: "/account",
    // },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
