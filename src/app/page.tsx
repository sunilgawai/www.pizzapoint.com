import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import MainCarousel from "@/components/main-carousel"

export default function IndexPage() {
  return (
    <section>
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
