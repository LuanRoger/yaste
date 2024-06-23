import React, { useCallback, useContext, useMemo } from "react";
import RichEditor from "@/components/RichEditor";
import OpenFiles from "@/components/OpenFiles";
import { FilesContext } from "@/contexts/files-context";
import { Value } from "@udecode/plate-common";
import { ContentContext } from "@/contexts/content-context";
import useCurrentOpenFile from "@/hooks/use-current-open-file";

export default function HomePage() {
    const currentFile = useCurrentOpenFile();
    const contentContext = useContext(ContentContext);

    const content = useMemo(() => {
        if (!currentFile) return undefined;

        contentContext.setContent(currentFile.content);
        return contentContext.getValueContent<Value>();
    }, [currentFile]);
    const saveCallback = useCallback(
        (value: Value) => contentContext.setContent(value),
        [currentFile]
    );
    const editor = useMemo(
        () => (
            <RichEditor key={currentFile?.id} initialValue={content} onPlateChange={saveCallback} />
        ),
        [content, saveCallback]
    );

    return (
        <div className="flex h-full flex-row justify-stretch gap-1">
            <OpenFiles />
            <div className="flex-1">{editor}</div>
        </div>
    );
}
