import React, { useContext, useMemo } from "react";
import DragWindowRegion from "@/components/DragWindowRegion";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/Footer";
import TopMenuBar from "@/components/TopMenuBar";
import { FilesContext, FilesProvider } from "@/contexts/files-context";
import { ContentProvider } from "@/contexts/content-context";

export default function BaseLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative overflow-hidden">
            <FilesProvider>
                <ContentProvider>
                    <header className="fixed inset-x-0 top-0 z-40 flex flex-col">
                        <DragWindowRegion title={"asdas"} />
                        <TopMenuBar />
                        <Separator orientation="horizontal" />
                    </header>
                    <main className="mt-[69px] w-full p-1">{children}</main>
                    <Footer />
                </ContentProvider>
            </FilesProvider>
        </div>
    );
}
