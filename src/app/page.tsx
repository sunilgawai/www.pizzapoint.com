"use client";
import MainCarousel from "@/components/main-carousel"
import { menus } from "@/config/menus"
import FilterMenu from "@/components/filter-menu"
import { Toggle } from "@/components/ui/toggle";
import { SortDescIcon, FilterIcon } from "lucide-react"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="grid place-items-center gap-2">
        <MainCarousel />
      </div>
      <div className="flex flex-col gap-4 p-1 border border-x-0 border-y-0 border-t-2">
        <div className="flex-1 items-center justify-between p-1">
          <h1 className="text-2xl font-serif mb-2">Categories</h1>
          <div className="flex justify-center items-center gap-4 text-lg">
            <Toggle aria-label="Toggle italic" className="w-full border border-pink-400">Veg</Toggle>
            <Toggle aria-label="Toggle italic" className="w-full border border-pink-400">Non Veg</Toggle>
            <Toggle aria-label="Toggle italic" className="w-full border border-pink-400">Breakfast</Toggle>
            <Toggle aria-label="Toggle italic" className="w-full border border-pink-400">Lunch</Toggle>
            <Toggle aria-label="Toggle italic" className="w-full border border-pink-400">Dinner</Toggle>
            <Toggle aria-label="Toggle italic" className="w-full border border-pink-400">
              <SortDescIcon fill="black" className="h-4 w-4 mr-2" />
              Price
            </Toggle>
            <Toggle aria-label="Toggle italic" className="w-full border border-pink-400">
              <FilterIcon fill="black" className="h-4 w-4 mr-2" />
              Menu
            </Toggle>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <FilterMenu isCollapsed={false} links={menus} />
          Menus
        </div>
      </div>
    </section>
  )
}
