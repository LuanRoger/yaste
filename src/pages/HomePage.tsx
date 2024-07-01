import React, { useContext, useMemo } from "react";
import RichEditor from "@/components/RichEditor";
import OpenFiles from "@/components/OpenFiles";
import { Value } from "@udecode/plate-common";
import { ContentContext } from "@/contexts/content-context";
import useCurrentOpenFile from "@/hooks/use-current-open-file";
import { parseJsonToGeneric } from "@/lib/utils/json";
import useOpenSaveFile from "@/hooks/use-open-save-file";
import { openFile, saveFile } from "@/lib/actions/file-actions";

export default function HomePage() {
    const { currentFile, filesContext } = useCurrentOpenFile();
    const contentContext = useContext(ContentContext);
    useOpenSaveFile(
        () => saveFile(filesContext, contentContext),
        () => openFile(filesContext),
        [contentContext, currentFile]
    );

    const initialValue = useMemo(() => {
        const currentContent = currentFile?.content;
        const contentValue = currentContent ? parseJsonToGeneric<Value>(currentContent) : undefined;
        contentContext.setCurrentContent(contentValue);

        return contentValue;
    }, [filesContext.currentOpenFileId]);

    function handleContentChange(value: Value) {
        filesContext.currentFileStatusChange({ saved: false });
        contentContext.setCurrentContent(value);
    }

    return (
        <div className="flex h-full flex-row justify-stretch gap-1">
            <OpenFiles />
            <div className="flex-1">
                <RichEditor
                    key={currentFile?.id} // Force re-render when switching files
                    initialValue={initialValue}
                    onPlateChange={handleContentChange}
                />
            </div>
        </div>
    );
}
