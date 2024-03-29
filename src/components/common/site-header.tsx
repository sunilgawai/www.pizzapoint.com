import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/common/theme-toggle"

export function SiteHeader() {
  return (
    <header className="bg-white sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo className="h-6 w-6" />
          <span className="inline-block font-bold">{siteConfig.name}</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <MainNav items={siteConfig.mainNav} />
          <nav className="flex items-center space-x-1">
            <Link
              href={'/wishlist'}
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "outline",
                })}
              >
                <Icons.wishlist className="h-5 w-5" />
              </div>
            </Link>
            <Link
              href={'/cart'}
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.cart className="h-5 w-5" />
              </div>
            </Link>
            <Link
              href={'/account'}
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.user className="h-5 w-5" />
              </div>
            </Link>
            {/* <ThemeToggle /> */}
          </nav>
        </div>
      </div>
    </header>
  )
}
