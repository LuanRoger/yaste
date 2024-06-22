import { ipcMain } from "electron";
import { FILE_OPEN_CHANNEL } from "./file-channels";
import { dialog } from "electron";
import { readFile } from "fs/promises";
import { randomUUID } from "node:crypto";
import { IFile } from "@/lib/types/file";

export function addFileListeners() {
    ipcMain.handle(FILE_OPEN_CHANNEL, handleFileOpen);
}

async function handleFileOpen(): Promise<IFile | null> {
    const openFileDialog = await dialog.showOpenDialog({
        properties: ["openFile"],
        filters: [{ name: "Text Files", extensions: ["txt"] }],
    });

    if (openFileDialog.canceled || openFileDialog.filePaths.length === 0) {
        return null;
    }
    const filePath = openFileDialog.filePaths[0];

    try {
        const content = await readFile(filePath, "utf-8");
        const file: IFile = {
            uuid: randomUUID(),
            content: content,
            path: filePath,
        };
        return file;
    } catch (_) {
        return null;
    }
}
