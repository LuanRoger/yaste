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
import { openFile as openFileHelper, saveFile as saveFileHelper } from "@/helpers/file-helpers";
import { ISaveFile } from "@/lib/types/save-file";
import { ContentContext } from "@/contexts/content-context";

export default function TopMenuBar() {
    const filesContext = useContext(FilesContext);
    const contentContext = useContext(ContentContext);

    async function openFile() {
        const openedFile: OpenFile | null = await openFileHelper();
        if (!openedFile) return;

        filesContext.openFile(openedFile);
    }

    async function saveFile() {
        const currentFile = filesContext.getCurrentOpenFile();
        const fileSaveData: ISaveFile = {
            content: currentFile?.content || contentContext.getJsonContent(),
            path: currentFile?.path,
        };
        await saveFileHelper(fileSaveData);
    }

    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>Arquivo</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem onSelect={openFile}>Abrir</MenubarItem>
                    <MenubarItem onSelect={saveFile}>Salvar</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
}
