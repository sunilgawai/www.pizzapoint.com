// import Header from "@/components/layout/header";
// import Sidebar from "@/components/layout/sidebar";
import { SiteHeader } from "@/components/site-header";
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
            <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
                {/* <Sidebar /> */}
                sidebar
                <main className="w-full pt-16">{children}</main>
            </div>
        </>
    );
}