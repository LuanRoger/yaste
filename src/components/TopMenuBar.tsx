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

export default function TopMenuBar() {
    const filesContext = useContext(FilesContext);
    const contentContext = useContext(ContentContext);

    function openFileHandler() {
        openFile(filesContext, contentContext)
    }

    function saveFileHandler() {
        saveFile(filesContext, contentContext);
    }

    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>Arquivo</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem onSelect={openFileHandler}>Abrir</MenubarItem>
                    <MenubarItem onSelect={saveFileHandler}>Salvar</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
}
