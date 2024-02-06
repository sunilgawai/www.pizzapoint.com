"use client";
import MainCarousel from "@/components/main-carousel"
import { menus } from "@/config/menus"
import FilterMenu from "@/components/filter-menu"
import { Toggle } from "@/components/ui/toggle";
import { SortDescIcon, FilterIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator";
import Product from "@/components/common/product";
import MainCategoriesList from "@/components/main-categories-list";

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <MainCarousel />
      <Separator color="pink" className="border border-pink-400" />
      <div className="flex flex-col gap-4 p-1">
        <MainCategoriesList />
        <Separator />
        <div className="grid lg:grid-cols-6 gap-2">
          <FilterMenu isCollapsed={false} links={menus} />
          <div className="grid grid-cols-4 gap-4 gap-y-8 col-span-5">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </section>
  )
}
