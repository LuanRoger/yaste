import React, { useContext } from "react";
import FileButton from "./FileButton";
import { FilesContext } from "@/contexts/files-context";
import { RiAddFill } from "@remixicon/react";

export default function OpenFiles() {
    const filesContext = useContext(FilesContext);
    const isEmpty = filesContext.openFiles.length === 0;

    return (
        <aside className="shadow">
            <div className="max-h-96 rounded-md border p-2">
                <div className="flex flex-col items-center justify-around">
                    {isEmpty ? <RiAddFill /> : filesContext.openFiles.map((file) => <FileButton />)}
                </div>
            </div>
        </aside>
    );
}
