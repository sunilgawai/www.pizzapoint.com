import { Toggle } from "@/components/ui/toggle";
import { SortDescIcon, FilterIcon } from "lucide-react"

const MainCategoriesList = () => {
    return (
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
                    Filter
                </Toggle>
            </div>
        </div>
    )
}

export default MainCategoriesList;