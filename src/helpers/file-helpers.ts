import { OpenFile } from "@/lib/models/open-file";
import { IFile } from "@/lib/types/file";
import { ISaveFile } from "@/lib/types/save-file";

export async function openFile(): Promise<OpenFile | null> {
    const response: IFile = await window.file.open();
    if (!response) {
        return null;
    }

    const fileOpen = new OpenFile(
        response.uuid,
        response.name,
        response.path,
        response.content,
        true
    );
    return fileOpen;
}

export async function saveFile(file: ISaveFile): Promise<void> {
    await window.file.save(file);
}
