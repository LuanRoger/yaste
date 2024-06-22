import React from "react";
import DragWindowRegion from "@/components/DragWindowRegion";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/Footer";
import TopMenuBar from "@/components/TopMenuBar";
import { FilesProvider } from "@/contexts/files-context";

export default function BaseLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative overflow-hidden">
            <FilesProvider>
                <header className="fixed inset-x-0 top-0 z-[60] flex flex-col">
                    <DragWindowRegion />
                    <TopMenuBar />
                    <Separator orientation="horizontal" />
                </header>
                <main className="mt-[69px] h-screen w-full p-1">{children}</main>
                <Footer />
            </FilesProvider>
        </div>
    );
}
