import { ISaveFile } from "@/lib/types/save-file";
import { FILE_OPEN_CHANNEL, FILE_SAVE_CHANNEL } from "./file-channels";

export function exposeFileContext() {
    const { contextBridge, ipcRenderer } = window.require("electron");
    contextBridge.exposeInMainWorld("file", {
        open: () => ipcRenderer.invoke(FILE_OPEN_CHANNEL),
        save: (file: ISaveFile) => ipcRenderer.invoke(FILE_SAVE_CHANNEL, file),
    });
}
