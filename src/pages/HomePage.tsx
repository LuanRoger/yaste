import React, { useCallback, useContext, useMemo } from "react";
import RichEditor from "@/components/RichEditor";
import OpenFiles from "@/components/OpenFiles";
import { Value } from "@udecode/plate-common";
import { ContentContext } from "@/contexts/content-context";
import useCurrentOpenFile from "@/hooks/use-current-open-file";
import { parseJsonToGeneric } from "@/lib/utils/json";

export default function HomePage() {
    const { currentFile, filesContext } = useCurrentOpenFile();
    const contentContext = useContext(ContentContext);

    const changeCallback = useCallback(
        (value: Value) => {
            contentContext.setContent(value);
            filesContext.currentFileStatusChange({ saved: false })
        },
        [currentFile]
    );
    const editor = useMemo(() => {
        console.log("currentFile", currentFile);
        const currentContent = currentFile?.content;
        contentContext.setContent(currentContent);
        const contentValue = currentContent ? parseJsonToGeneric<Value>(currentContent) : undefined;

        return (
            <RichEditor
                key={currentFile?.id}
                initialValue={contentValue}
                onPlateChange={changeCallback}
            />
        );
    }, [changeCallback]);

    return (
        <div className="flex h-full flex-row justify-stretch gap-1">
            <OpenFiles />
            <div className="flex-1">{editor}</div>
        </div>
    );
}
