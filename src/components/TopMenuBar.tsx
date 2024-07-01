import React, { useContext } from "react";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { FilesContext } from "@/contexts/files-context";
import { ContentContext } from "@/contexts/content-context";
import { openFile, saveFile } from "@/lib/actions/file-actions";
import ToggleTheme from "./ToggleTheme";
import { cn } from "@/lib/utils";
import LangToggle from "./LangToggle";

interface TopMenuBarProps {
    className?: string | undefined;
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
        <Menubar className={className}>
            <MenubarMenu>
                <MenubarTrigger>Arquivo</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem onSelect={openFileHandler}>Abrir</MenubarItem>
                    <MenubarItem onSelect={saveFileHandler}>Salvar</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Configurações</MenubarTrigger>
                <MenubarContent>
                    <MenubarSub>
                        <MenubarSubTrigger>Tema</MenubarSubTrigger>
                        <ToggleTheme/>
                    </MenubarSub>
                    <MenubarSub>
                        <MenubarSubTrigger>Idioma</MenubarSubTrigger>
                        <LangToggle />
                    </MenubarSub>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
}

{/* <LangToggle />
            <MenubarMenu>
                <MenubarTrigger asChild>
                    <ToggleTheme />
                </MenubarTrigger>
            </MenubarMenu> */}