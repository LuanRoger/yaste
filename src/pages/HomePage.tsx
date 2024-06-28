import React, { useCallback, useContext, useMemo } from "react";
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
        () => openFile(filesContext, contentContext),
        [contentContext, currentFile]
    );

    const changeCallback = useCallback((value: Value) => {
        console.log("value", value);
        contentContext.setCurrentContent(value);
        filesContext.currentFileStatusChange({ saved: false });
    }, [contentContext]);
    const editor = useMemo(() => {
        const currentContent = currentFile?.content;
        const contentValue = currentContent ? parseJsonToGeneric<Value>(currentContent) : undefined;
        contentContext.setCurrentContent(contentValue);

        return (
            <RichEditor
                key={currentFile?.id}
                initialValue={contentValue}
                onPlateChange={changeCallback}
            />
        );
    }, [filesContext]);

    return (
        <div className="flex h-full flex-row justify-stretch gap-1">
            <OpenFiles />
            <div className="flex-1">{editor}</div>
        </div>
    );
}
