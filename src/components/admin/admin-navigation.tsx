"use client"

import Link from "next/link"
import { LucideIcon, LayoutDashboardIcon, Settings, Notebook, User2, MenuIcon, ShoppingBag, UsersRoundIcon, ListOrdered, LockIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { LockClosedIcon } from "@radix-ui/react-icons"

interface NavProps {
    isCollapsed?: boolean
    links?: {
        title: string
        label?: string
        icon: LucideIcon
        variant: "default" | "ghost"
    }[]
}

interface ILinks {
    title: string
    label?: string
    icon: LucideIcon
    variant: "default" | "ghost"
}
const links: ILinks[] = [
    {
        title: "Dashboard",
        label: "128",
        icon: LayoutDashboardIcon,
        variant: "default",
    },
    {
        title: "Orders",
        label: "128",
        icon: ListOrdered,
        variant: "ghost",
    },
    {
        title: "Categories",
        label: "128",
        icon: MenuIcon,
        variant: "ghost",
    },
    {
        title: "Products",
        label: "128",
        icon: ShoppingBag,
        variant: "ghost",
    },
    {
        title: "Customers",
        label: "128",
        icon: UsersRoundIcon,
        variant: "ghost",
    },
    {
        title: "Users",
        label: "9",
        icon: User2,
        variant: "ghost",
    },
    {
        title: "Role",
        label: "9",
        icon: LockIcon,
        variant: "ghost",
    },
    {
        title: "Reports",
        label: "128",
        icon: Notebook,
        variant: "ghost",
    },
    {
        title: "Settings",
        label: "",
        icon: Settings,
        variant: "ghost",
    },
]

const AdminNavigation = ({ isCollapsed }: NavProps) => {
    return (
        <div className={cn(`relative hidden h-screen border-l pt-8 pr-2 lg:block w-72`)}>
            <div
                data-collapsed={isCollapsed}
                className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
            >
                <nav className="grid gap-1 gap-y-2 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
                    {links.map((link, index) =>
                        isCollapsed ? (
                            <Tooltip key={index} delayDuration={0}>
                                <TooltipTrigger asChild>
                                    <Link
                                        href="#"
                                        className={cn(
                                            buttonVariants({ variant: link.variant, size: "icon" }),
                                            "h-9 w-9",
                                            link.variant === "default" &&
                                            "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                                        )}
                                    >
                                        <link.icon className="h-4 w-4" />
                                        <span className="sr-only">{link.title}</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right" className="flex items-center gap-4">
                                    {link.title}
                                    {link.label && (
                                        <span className="ml-auto text-muted-foreground">
                                            {link.label}
                                        </span>
                                    )}
                                </TooltipContent>
                            </Tooltip>
                        ) : (
                            <Link
                                key={index}
                                href="#"
                                className={cn(
                                    buttonVariants({ variant: link.variant, size: "sm" }),
                                    link.variant === "default" &&
                                    "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                                    "justify-start"
                                )}
                            >
                                <link.icon className="mr-2 h-4 w-4" />
                                {link.title}
                                {link.label && (
                                    <span
                                        className={cn(
                                            "ml-auto",
                                            link.variant === "default" &&
                                            "text-background dark:text-white"
                                        )}
                                    >
                                        {link.label}
                                    </span>
                                )}
                            </Link>
                        )
                    )}
                </nav>
            </div>
        </div>
    )
}

export default AdminNavigation;