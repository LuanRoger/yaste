import { IContentContext } from "@/contexts/content-context";
import { IFilesContext } from "@/contexts/files-context";
import { ISaveFile } from "../types/save-file";
import { saveFile as saveFileHelper } from "@/helpers/file-helpers";

export async function saveFile(filesContext: IFilesContext, contentContext: IContentContext) {
    const currentFile = filesContext.getCurrentOpenFile();

    console.log("contentContext", contentContext.getValueContent())
    const fileSaveData: ISaveFile = {
        content: contentContext.getJsonContent(),
        path: currentFile?.path,
    };
    const result = await saveFileHelper(fileSaveData);
    if(!result || currentFile) {
        return;
    }

    filesContext.openFile(result);
}
