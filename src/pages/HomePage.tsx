import React, { useCallback, useContext, useEffect, useMemo } from "react";
import RichEditor from "@/components/RichEditor";
import OpenFiles from "@/components/OpenFiles";
import { Value } from "@udecode/plate-common";
import { ContentContext } from "@/contexts/content-context";
import useCurrentOpenFile from "@/hooks/use-current-open-file";
import { parseJsonToGeneric } from "@/lib/utils/json";
import useKeyboardShortcut from "@/hooks/use-keyboard-shortcut";
import { saveFile } from "@/lib/actions/file-actions";

export default function HomePage() {
    const { currentFile, filesContext } = useCurrentOpenFile();
    const contentContext = useContext(ContentContext);

    useKeyboardShortcut(
        () => saveFile(filesContext, contentContext),
        { ctrlKey: true, code: "KeyS" },
        [contentContext, filesContext]
    );

    const changeCallback = useCallback(
        (value: Value) => {
            console.log("value", value);
            contentContext.setContent(value);
            filesContext.currentFileStatusChange({ saved: false });
        },
        [currentFile]
    );
    const editor = useMemo(() => {
        const currentContent = currentFile?.content;
        const contentValue = currentContent ? parseJsonToGeneric<Value>(currentContent) : undefined;
        contentContext.setContent(contentValue);

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
