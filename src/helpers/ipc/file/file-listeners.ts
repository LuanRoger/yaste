import { ipcMain } from "electron";
import { FILE_OPEN_CHANNEL, FILE_SAVE_CHANNEL } from "./file-channels";
import { dialog } from "electron";
import { readFile, writeFile } from "fs/promises";
import { randomUUID } from "node:crypto";
import { IFile } from "@/lib/types/file";
import { ISaveFile } from "@/lib/types/save-file";
import { fileFilters } from "./file-conts";
import { basename } from "path";

export function addFileListeners() {
    ipcMain.handle(FILE_OPEN_CHANNEL, handleFileOpen);
    ipcMain.handle(FILE_SAVE_CHANNEL, (_, fileData) => handleFileSave(fileData));
}

async function handleFileOpen(): Promise<IFile | null> {
    const openFileDialog = await dialog.showOpenDialog({
        properties: ["openFile"],
        filters: fileFilters,
    });

    if (openFileDialog.canceled || openFileDialog.filePaths.length === 0) {
        return null;
    }
    const filePath = openFileDialog.filePaths[0];

    try {
        const content = await readFile(filePath, "utf-8");
        const name = basename(filePath);
        const file: IFile = {
            uuid: randomUUID(),
            name: name,
            content: content,
            path: filePath,
        };
        return file;
    } catch (_) {
        return null;
    }
}

async function handleFileSave(file: ISaveFile): Promise<IFile | null> {
    const { path, content } = file;
    let filePath = path;
    if (!filePath) {
        const openFileDialog = await dialog.showSaveDialog({
            filters: fileFilters,
        });
        if (openFileDialog.canceled) {
            return null;
        }
        filePath = openFileDialog.filePath;
    }

    try {
        await writeFile(filePath, content, { encoding: "utf-8", flag: "w" });
        const name = basename(filePath);
        const file: IFile = {
            uuid: randomUUID(),
            name: name,
            content: content,
            path: filePath,
        };
        return file;
    } catch (_) {
        return null;
    }
}
