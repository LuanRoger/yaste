import React, { useContext } from "react";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { FilesContext } from "@/contexts/files-context";
import { OpenFile } from "@/lib/models/open-file";
import { openFile as openFileHelper } from "@/helpers/file-helpers";

export default function TopMenuBar() {
    const filesContext = useContext(FilesContext);

    async function openFile() {
        const openedFile: OpenFile | null = await openFileHelper();
        if (!openedFile) return;

        filesContext.openFile(openedFile);
    }

    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>Arquivo</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem onSelect={openFile}>Abrir</MenubarItem>
                    <MenubarItem>Salvar</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
}
