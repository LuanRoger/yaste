import React, { useContext } from "react";
import FileButton from "./FileButton";
import { FilesContext } from "@/contexts/files-context";
import OpenFileButton from "./OpenFileButton";
import { openFile as openFileHelpers } from "@/helpers/file-helpers";

export default function OpenFiles() {
    const filesContext = useContext(FilesContext);
    const isEmpty = filesContext.openFiles.length === 0;

    function switchFile(fileId: string) {
        if (filesContext.currentOpenFileId === fileId) return;
        filesContext.switchOpenFile(fileId);
    }
    async function openFile() {
        const openedFile = await openFileHelpers();
        if (!openedFile) return;
        filesContext.openFile(openedFile);
    }

    return (
        <aside className="shadow">
            <div className="max-h-96 rounded-md border p-2">
                <div className="flex flex-col items-center justify-around">
                    {isEmpty ? (
                        <OpenFileButton onClick={openFile} />
                    ) : (
                        filesContext.openFiles.map((file) => (
                            <FileButton onClick={() => switchFile(file.id)} />
                        ))
                    )}
                </div>
            </div>
        </aside>
    );
}
