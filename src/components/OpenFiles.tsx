import React, { useContext } from "react";
import FileButton from "./FileButton";
import { FilesContext } from "@/contexts/files-context";
import OpenFileButton from "./OpenFileButton";
import { openFile as openFileHelpers } from "@/helpers/file-helpers";

export default function OpenFiles() {
    const filesContext = useContext(FilesContext);
    const isEmpty = filesContext.openFiles.length === 0;

    function switchFile(fileId: string) {
        filesContext.switchOpenFile(fileId);
    }
    async function openFile() {
        const openedFile = await openFileHelpers();
        if (!openedFile) return;
        filesContext.openFile(openedFile);
    }

    return (
        <aside className="flex flex-col rounded-md border p-1 shadow">
            {isEmpty ? (
                <OpenFileButton onClick={openFile} />
            ) : (
                filesContext.openFiles.map((file) => (
                    <FileButton
                        fileName={file.name}
                        filePath={file.path}
                        onClick={() => switchFile(file.id)}
                    />
                ))
            )}
        </aside>
    );
}
