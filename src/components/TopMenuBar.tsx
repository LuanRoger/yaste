import React, { useContext } from "react";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { FilesContext } from "@/contexts/files-context";
import { ContentContext } from "@/contexts/content-context";
import { openFile, saveFile } from "@/lib/actions/file-actions";
import ToggleTheme from "./ToggleTheme";
import { cn } from "@/lib/utils";

interface TopMenuBarProps {
    className?: string | undefined
}

export default function TopMenuBar({ className }: TopMenuBarProps) {
    const filesContext = useContext(FilesContext);
    const contentContext = useContext(ContentContext);

    function openFileHandler() {
        openFile(filesContext);
    }

    function saveFileHandler() {
        saveFile(filesContext, contentContext);
    }

    return (
        <Menubar className={cn("flex justify-between items-center", className)}>
            <div>
            <MenubarMenu>
                <MenubarTrigger>Arquivo</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem onSelect={openFileHandler}>Abrir</MenubarItem>
                    <MenubarItem onSelect={saveFileHandler}>Salvar</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            </div>
            <div>
            <MenubarMenu>
                <MenubarTrigger asChild>
                    <ToggleTheme />
                </MenubarTrigger>
            </MenubarMenu>
            </div>
        </Menubar>
    );
}
