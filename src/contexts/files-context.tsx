import { OpenFile } from "@/lib/models/open-file";
import React from "react";
import { createContext, useState } from "react";

export interface IFilesContext {
    currentOpenFileId: string | null;
    openFiles: OpenFile[];
    getCurrentOpenFile: () => OpenFile | null;
    openFile: (newFile: OpenFile) => void;
    closeFile: (fileId: string) => void;
    switchOpenFile: (fileId: string) => void;
    isOpen: (filePath: string, autoSwitch?: boolean) => boolean;
    currentFileStatusChange: (newStatus: any) => void;
}

export const FilesContext = createContext<IFilesContext>({
    currentOpenFileId: null,
    openFiles: [],
    getCurrentOpenFile: () => null,
    openFile: () => {},
    closeFile: () => {},
    switchOpenFile: () => {},
    isOpen: () => false,
    currentFileStatusChange: () => {},
});

export function FilesProvider({ children }: { children: React.ReactNode }) {
    const [currentOpenFileId, setCurrentOpenFileId] = useState<string | null>(null);
    const [openFiles, setOpenFiles] = useState<OpenFile[]>([]);

    function getCurrentOpenFile() {
        return openFiles.find((file) => file.id === currentOpenFileId) || null;
    }

    function openFile(newFile: OpenFile) {
        setOpenFiles((prevOpenFiles) => [...prevOpenFiles, newFile]);
        setCurrentOpenFileId(newFile.id);
    }

    function closeFile(fileId: string) {
        setOpenFiles((prevOpenFiles) => prevOpenFiles.filter((file) => file.id !== fileId));
        if (currentOpenFileId === fileId) {
            setCurrentOpenFileId(null);
        }
    }

    function switchOpenFile(fileId: string) {
        if (currentOpenFileId === fileId) return;
        setCurrentOpenFileId(fileId);
    }

    function isOpen(filePath: string, autoSwitch: boolean = false) {
        const isOpen = openFiles.find((file) => file.path === filePath);

        if (isOpen && autoSwitch) {
            switchOpenFile(isOpen.id);
        }

        return isOpen !== undefined;
    }

    function currentFileStatusChange(newStatus: any) {
        const currentOpenFile = getCurrentOpenFile();
        if(!currentOpenFile) {
            return;
        }

        const files = Array.from(openFiles);
        const index = files.findIndex((file) => file.id === currentOpenFile.id);
        const newFileInfo = {
            ...currentOpenFile,
            ...newStatus,
        }
        files[index] = newFileInfo;
        setOpenFiles(files);
    }

    return (
        <FilesContext.Provider
            value={{
                currentOpenFileId,
                openFiles,
                getCurrentOpenFile,
                openFile,
                closeFile,
                switchOpenFile,
                isOpen,
                currentFileStatusChange,
            }}
        >
            {children}
        </FilesContext.Provider>
    );
}
