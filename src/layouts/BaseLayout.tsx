import React from "react";
import DragWindowRegion from "@/components/DragWindowRegion";
import { Separator } from "@/components/ui/separator";
import TopMenuBar from "@/components/TopMenuBar";
import { FilesProvider } from "@/contexts/files-context";
import { ContentProvider } from "@/contexts/content-context";

export default function BaseLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative overflow-hidden">
            <FilesProvider>
                <ContentProvider>
                    <header className="fixed inset-x-0 top-0 z-40 flex flex-col">
                        <DragWindowRegion title={"asdas"} />
                        <TopMenuBar className="mt-1" />
                        <Separator className="mt-1" orientation="horizontal" />
                    </header>
                    <main className="mt-[77px] w-full p-1">{children}</main>
                </ContentProvider>
            </FilesProvider>
        </div>
    );
}
