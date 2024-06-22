import React from "react";
import DragWindowRegion from "@/components/DragWindowRegion";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/Footer";

export default function BaseLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative overflow-hidden">
            <header className="fixed inset-x-0 top-0 z-[60] flex flex-col">
                <DragWindowRegion />
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>Arquivo</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>Abrir</MenubarItem>
                            <MenubarItem>Salvar</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
                <Separator orientation="horizontal" />
            </header>
            <main className="h-screen w-full mt-[69px] p-1">{children}</main>
            <Footer />
        </div>
    );
}
