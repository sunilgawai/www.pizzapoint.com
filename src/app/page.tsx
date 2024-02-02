import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import MainCarousel from "@/components/main-carousel"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="grid place-items-center gap-2">
        <MainCarousel />
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          rel="noreferrer"
          className={buttonVariants()}
        >
          Order Now
        </Link>
      </div>
    </section>
  )
}
