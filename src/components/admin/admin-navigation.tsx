"use client"
import Link from "next/link"
import { LucideIcon, LayoutDashboardIcon, Settings, Notebook, User2, MenuIcon, ToyBrickIcon, ShoppingBag, UsersRoundIcon, ListOrdered, LockIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";

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
    href: string
    label?: string
    icon: LucideIcon
    variant: "default" | "ghost"
}
const links: ILinks[] = [
    {
        title: "Dashboard",
        href: "/dashboard",
        label: "128",
        icon: LayoutDashboardIcon,
        variant: "default",
    },
    {
        title: "Orders",
        href: "/orders",
        label: "128",
        icon: ListOrdered,
        variant: "ghost",
    },
    {
        title: "Categories",
        href: "/categories",
        label: "128",
        icon: MenuIcon,
        variant: "ghost",
    },
    {
        title: "Menu Background",
        href: "/background",
        label: "4",
        icon: ToyBrickIcon,
        variant: "ghost",
    },
    {
        title: "Products",
        href: "/products",
        label: "128",
        icon: ShoppingBag,
        variant: "ghost",
    },
    {
        title: "Customers",
        href: "/customers",
        label: "128",
        icon: UsersRoundIcon,
        variant: "ghost",
    },
    {
        title: "Users",
        href: "/users",
        label: "9",
        icon: User2,
        variant: "ghost",
    },
    {
        title: "Role",
        href: "/roles",
        label: "9",
        icon: LockIcon,
        variant: "ghost",
    },
    {
        title: "Reports",
        href: "/reports",
        label: "128",
        icon: Notebook,
        variant: "ghost",
    },
    {
        title: "Settings",
        href: "/settings",
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
                                        href={link.href}
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
                                href={link.href}
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