import { FILE_OPEN_CHANNEL } from "./file-channels";

export function exposeFileContext() {
    const { contextBridge, ipcRenderer } = window.require("electron");
    contextBridge.exposeInMainWorld("file", {
        open: () => ipcRenderer.invoke(FILE_OPEN_CHANNEL),
    })
}