import { OpenFile } from "@/lib/models/open-file";
import { IFile } from "@/lib/types/file";

export async function openFile(): Promise<OpenFile | null> {
    const response: IFile = await window.file.open();
    if (!response) {
        return null;
    }

    const fileOpen = new OpenFile(response.uuid, response.path, response.content, true);
    return fileOpen;
}
