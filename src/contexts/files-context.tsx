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
}

export const FilesContext = createContext<IFilesContext>({
    currentOpenFileId: null,
    openFiles: [],
    getCurrentOpenFile: () => null,
    openFile: () => {},
    closeFile: () => {},
    switchOpenFile: () => {},
    isOpen: () => false,
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
        console.log("Switching to file", fileId);
    }

    function isOpen(filePath: string, autoSwitch: boolean = false) {
        const isOpen = openFiles.find((file) => file.path === filePath);

        if (isOpen && autoSwitch) {
            switchOpenFile(isOpen.id);
        }

        return isOpen !== undefined;
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
            }}
        >
            {children}
        </FilesContext.Provider>
    );
}
