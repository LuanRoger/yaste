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
import { ContentContext } from "@/contexts/content-context";
import { saveFile } from "@/lib/actions/file-actions";

export default function TopMenuBar() {
    const filesContext = useContext(FilesContext);
    const contentContext = useContext(ContentContext);

    async function openFile() {
        const openedFile: OpenFile | null = await openFileHelper();
        if (!openedFile) return;
        if (filesContext.isOpen(openedFile.id, true)) return;

        filesContext.openFile(openedFile);
    }

    async function saveFileHandler() {
        saveFile(filesContext, contentContext);
    }

    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>Arquivo</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem onSelect={openFile}>Abrir</MenubarItem>
                    <MenubarItem onSelect={saveFileHandler}>Salvar</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
}
