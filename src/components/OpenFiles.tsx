import React from "react";
import FileButton from "./FileButton";

export default function OpenFiles() {
    return (
        <aside className="shadow">
            <div className="rounded-md border max-h-96 p-2">
                <div className="flex flex-col items-center justify-around">
                    <FileButton />
                </div>
            </div>
        </aside>
    );
}
