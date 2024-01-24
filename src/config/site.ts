export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Pizza Pint",
  description:
    "www.pizzapoint.com",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Products",
      href: "/products",
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
