import SiteNavbar from "@/components/site-navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "dashboard for admin",
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* <div className="flex h-screen overflow-hidden"> */}
            {/* <div className="flex min-h-full flex-col pt-16 "> */}
            {/* <div className="container grid items-center gap-6 pb-4 md:py-10"> */}
            <div className="container flex h-screen overflow-hidden">
                {/* side navigation  */}
                {/* <SiteNavbar /> */}
                {/* <ScrollArea> */}
                <main className="w-full h-screen">{children}</main>
                {/* </ScrollArea> */}
            </div>
        </>
    );
}