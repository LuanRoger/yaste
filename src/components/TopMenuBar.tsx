import React, { useContext, useState } from "react";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSub,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { FilesContext } from "@/contexts/files-context";
import { ContentContext } from "@/contexts/content-context";
import { openFile, saveFile } from "@/lib/actions/file-actions";
import ToggleTheme from "./ToggleTheme";
import LangToggle from "./LangToggle";
import { useTranslation } from "react-i18next";
import AboutDialog from "./AboutDialog";

interface TopMenuBarProps {
    className?: string | undefined;
}

export default function TopMenuBar({ className }: TopMenuBarProps) {
    const filesContext = useContext(FilesContext);
    const contentContext = useContext(ContentContext);
    const { t } = useTranslation();
    const [aboutDialogOpen, setAboutDialogOpen] = useState(false);

    function openFileHandler() {
        openFile(filesContext);
    }

    function saveFileHandler() {
        saveFile(filesContext, contentContext);
    }

    return (
        <>
            <Menubar className={className}>
                <MenubarMenu>
                    <MenubarTrigger>{t("topMenuBar:file")}</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem onSelect={openFileHandler}>{t("topMenuBar:open")}</MenubarItem>
                        <MenubarItem onSelect={saveFileHandler}>{t("topMenuBar:save")}</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>{t("topMenuBar:settings")}</MenubarTrigger>
                    <MenubarContent>
                        <MenubarSub>
                            <MenubarSubTrigger>{t("topMenuBar:theme")}</MenubarSubTrigger>
                            <ToggleTheme />
                        </MenubarSub>
                        <MenubarSub>
                            <MenubarSubTrigger>{t("topMenuBar:language")}</MenubarSubTrigger>
                            <LangToggle />
                        </MenubarSub>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger onClick={() => setAboutDialogOpen(true)}>{t("topMenuBar:about")}</MenubarTrigger>
                </MenubarMenu>
            </Menubar>
            <AboutDialog open={aboutDialogOpen} setOpen={setAboutDialogOpen} />
        </>
    );
}
