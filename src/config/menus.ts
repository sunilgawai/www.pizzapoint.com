import { Archive, ArchiveX, Inbox, Send, Trash2, File, LucideIcon } from 'lucide-react';

export const menus: {
    title: string
    label?: string
    icon: LucideIcon
    variant: "default" | "ghost"
}[] = [
        {
            title: "Bowls",
            label: "128",
            icon: Inbox,
            variant: "default",
        },
        {
            title: "Superbowls",
            label: "9",
            icon: File,
            variant: "ghost",
        },
        {
            title: "Noodles",
            label: "",
            icon: Send,
            variant: "ghost",
        },
        {
            title: "Thalis",
            label: "23",
            icon: ArchiveX,
            variant: "ghost",
        },
        {
            title: "Appetizers",
            label: "",
            icon: Trash2,
            variant: "ghost",
        },
        {
            title: "Wraps",
            label: "",
            icon: Archive,
            variant: "ghost",
        },
        {
            title: "Soups and Salads",
            label: "",
            icon: Archive,
            variant: "ghost",
        },
        {
            title: "Burgers and More",
            label: "",
            icon: Archive,
            variant: "ghost",
        },
        {
            title: "Sandwiches",
            label: "",
            icon: Archive,
            variant: "ghost",
        },
        {
            title: "Keto Specials",
            label: "",
            icon: Archive,
            variant: "ghost",
        },
        {
            title: "All day breakfast",
            label: "",
            icon: Archive,
            variant: "ghost",
        },
        {
            title: "Desserts & Beverages",
            label: "",
            icon: Archive,
            variant: "ghost",
        },
    ]