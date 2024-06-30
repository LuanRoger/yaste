import React, { useCallback, useContext, useMemo } from "react";
import FileButton from "./FileButton";
import { FilesContext } from "@/contexts/files-context";
import OpenFileButton from "./OpenFileButton";
import { openFile as openFileHelpers } from "@/helpers/file-helpers";
import { ContentContext } from "@/contexts/content-context";
import { switchFile } from "@/lib/actions/file-actions";

export default function OpenFiles() {
    const filesContext = useContext(FilesContext);
    const contentContext = useContext(ContentContext);
    const isEmpty = useMemo(() => filesContext.openFiles.length === 0, [filesContext]);
    const switchFileCallback = useCallback(
        (fileId: string) => switchFile(fileId, filesContext, contentContext),
        [contentContext, filesContext]
    );

    function closeFile(fileId: string) {
        filesContext.closeFile(fileId);
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
                        hasChanges={!file.saved}
                        onClick={() => switchFileCallback(file.id)}
                        onFileClose={() => closeFile(file.id)}
                    />
                ))
            )}
        </aside>
    );
}
