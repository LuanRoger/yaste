import { IContentContext } from "@/contexts/content-context";
import { IFilesContext } from "@/contexts/files-context";
import { ISaveFile } from "../types/save-file";
import { saveFile as saveFileHelper, openFile as openFileHelper } from "@/helpers/file-helpers";
import { OpenFile } from "../models/open-file";

export async function saveFile(filesContext: IFilesContext, contentContext: IContentContext) {
    const currentFile = filesContext.getCurrentOpenFile();

    console.log("contentContext", contentContext.getValueContent());
    const fileSaveData: ISaveFile = {
        content: contentContext.getJsonContent(),
        path: currentFile?.path,
    };
    const result = await saveFileHelper(fileSaveData);
    if (!result || currentFile) {
        return;
    }

    filesContext.openFile(result);
}

export async function openFile(filesContext: IFilesContext, contentContext: IContentContext) {
    const openedFile: OpenFile | null = await openFileHelper();
    if (!openedFile) return;
    if (filesContext.isOpen(openedFile.id, true)) return;

    filesContext.openFile(openedFile);
}
