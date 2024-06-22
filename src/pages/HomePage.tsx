import React, { useContext, useMemo } from "react";
import RichEditor from "@/components/RichEditor";
import OpenFiles from "@/components/OpenFiles";
import { FilesContext } from "@/contexts/files-context";
import { Value } from "@udecode/plate-common";

export default function HomePage() {
    const filesContext = useContext(FilesContext);
    const currentFile = useMemo(() => filesContext.getCurrentOpenFile(), [filesContext]);
    const content = useMemo(() => {
        if (!currentFile) return undefined;
        try {
            const jsonValue = JSON.parse(currentFile.content) as Value;
            return jsonValue;
        } catch (_) {
            return undefined;
        }
    }, [currentFile]);

    return (
        <div className="flex h-full flex-row gap-1">
            <OpenFiles />
            <div className="flex-1">
                <RichEditor initialValue={content} />
            </div>
        </div>
    );
}
